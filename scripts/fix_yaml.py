import os

# Use the project root (where this script lives) so the path works on any machine.
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
WORKFLOWS_DIR = os.path.join(PROJECT_ROOT, '.github', 'workflows')
os.makedirs(WORKFLOWS_DIR, exist_ok=True)
base_dir = WORKFLOWS_DIR

dollar = "$"
open_brace = "{{"
close_brace = "}}"

cache_npm_key = f"{dollar}{open_brace} runner.os {close_brace}-npm-{dollar}{open_brace} hashFiles('**/package-lock.json') {close_brace}"
cache_npm_restore = f"{dollar}{open_brace} runner.os {close_brace}-npm-"
cache_gradle_key = f"{dollar}{open_brace} runner.os {close_brace}-gradle-{dollar}{open_brace} hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') {close_brace}"
cache_gradle_restore = f"{dollar}{open_brace} runner.os {close_brace}-gradle-"
google_secret = f"{dollar}{open_brace} secrets.GOOGLE_SERVICES_JSON_BASE64 {close_brace}"
release_ks = f"{dollar}{open_brace} secrets.RELEASE_KEYSTORE_BASE64 {close_brace}"
release_pw = f"{dollar}{open_brace} secrets.RELEASE_KEYSTORE_PASSWORD {close_brace}"
release_alias = f"{dollar}{open_brace} secrets.RELEASE_KEY_ALIAS {close_brace}"
release_key_pw = f"{dollar}{open_brace} secrets.RELEASE_KEY_PASSWORD {close_brace}"
debug_ks = f"{dollar}{open_brace} secrets.DEBUG_KEYSTORE_BASE64 {close_brace}"

def write_step(f, name, uses=None, run=None, env=None, with_params=None):
    f.write(f"      - name: {name}\n")
    if uses:
        f.write(f"        uses: {uses}\n")
    if env:
        f.write("        env:\n")
        for k, v in env.items():
            f.write(f"          {k}: {v}\n")
    if with_params:
        f.write("        with:\n")
        for k, v in with_params.items():
            if isinstance(v, list):
                f.write(f"          {k}: |\n")
                for item in v:
                    f.write(f"            {item}\n")
            else:
                f.write(f"          {k}: {v}\n")
    if run:
        f.write("        run: |\n")
        for line in run:
            f.write(f"          {line}\n")

# Build release
with open(os.path.join(base_dir, "build-release.yml"), "w", encoding="utf-8", newline="\n") as f:
    f.write("name: Build Release APK\n\n")
    f.write("on:\n  push:\n    branches: [ \"main\" ]\n    tags: [ \"v*\" ]\n  workflow_dispatch:\n\n")
    f.write("jobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n")
    write_step(f, "Checkout Code", uses="actions/checkout@v4")
    write_step(f, "Setup Java JDK", uses="actions/setup-java@v4", with_params={"java-version": "'17'", "distribution": "'temurin'"})
    write_step(f, "Setup Node.js", uses="actions/setup-node@v4", with_params={"node-version": "'20'"})
    write_step(f, "Cache npm dependencies", uses="actions/cache@v4", with_params={"path": "~/.npm", "key": cache_npm_key, "restore-keys": [cache_npm_restore]})
    write_step(f, "Install Dependencies", run=["npm install", "npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/filesystem @capacitor/share"])
    write_step(f, "Add & Sync Capacitor Android", run=["chmod +x ./node_modules/.bin/* || true", 'if [ ! -d "android" ]; then', "  npx @capacitor/cli add android", "fi", "npx @capacitor/cli sync android"])
    write_step(f, "Restore google-services.json (if missing, decode from secret)", run=['if [ ! -f "android/app/google-services.json" ]; then', f'  echo "{google_secret}" | base64 --decode > android/app/google-services.json', "fi", '# Verify the file is not empty (fails gracefully with clear error)', 'if [ ! -s "android/app/google-services.json" ] || [ $(wc -c < "android/app/google-services.json") -lt 100 ]; then', '  echo "ERROR: GOOGLE_SERVICES_JSON_BASE64 secret مفقود أو فارغ \u2014 ملف google-services.json غير صالح"', '  exit 1', "fi"])
    write_step(f, "Add required permissions to AndroidManifest", run=['for PERM in "RECORD_AUDIO" "MODIFY_AUDIO_SETTINGS" "ACCESS_NETWORK_STATE" "POST_NOTIFICATIONS"; do', '  if ! grep -q "android.permission.$PERM" android/app/src/main/AndroidManifest.xml; then', '    sed -i "/<application/i\\\\    <uses-permission android:name=\\"android.permission.$PERM\\" />" android/app/src/main/AndroidManifest.xml', '  fi', "done"])
    write_step(f, "Decode Release Keystore", run=[f'echo "{release_ks}" | base64 --decode > android/app/release.keystore'])
    write_step(f, "Cache Gradle dependencies", uses="actions/cache@v4", with_params={"path": ["~/.gradle/caches", "~/.gradle/wrapper"], "key": cache_gradle_key, "restore-keys": [cache_gradle_restore]})
    write_step(f, "Verify Icon Exists", run=['if [ ! -f "resources/icon.png" ]; then', '  echo "ERROR: resources/icon.png missing"', "  exit 1", "fi"])
    write_step(f, "Generate Android App Icons", run=["npx capacitor-assets generate --android --iconBackgroundColor '#0e1015' --iconBackgroundColorSplash '#0e1015'"])
    write_step(f, "Build Release APK with Gradle", env={"RELEASE_KEYSTORE_PATH": "android/app/release.keystore", "RELEASE_KEYSTORE_PASSWORD": release_pw, "RELEASE_KEY_ALIAS": release_alias, "RELEASE_KEY_PASSWORD": release_key_pw}, run=["cd android", "chmod +x gradlew", "./gradlew assembleRelease"])
    write_step(f, "Verify APK Signature (CN=Othmane ettoumi)", run=["CERT_INFO=$(keytool -printcert -jarfile android/app/build/outputs/apk/release/app-release.apk 2>&1)", 'echo "$CERT_INFO"', 'if ! echo "$CERT_INFO" | grep -q "CN=Othmane ettoumi"; then', '  echo "ERROR: APK signature Owner is not CN=Othmane ettoumi. Release build rejected."', "  exit 1", "fi", 'echo "APK signature verified: CN=Othmane ettoumi"'])
    write_step(f, "Upload Release APK Artifact", uses="actions/upload-artifact@v4", with_params={"name": "app-release-apk", "path": "android/app/build/outputs/apk/release/app-release.apk"})

print("Release file written")

# Build debug
with open(os.path.join(base_dir, "build-debug.yml"), "w", encoding="utf-8", newline="\n") as f:
    f.write("name: Build Debug APK\n\n")
    f.write("on:\n  push:\n    branches:\n      - '**'\n      - '!main'\n  workflow_dispatch:\n\n")
    f.write("jobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n")
    write_step(f, "Checkout Code", uses="actions/checkout@v4")
    write_step(f, "Setup Java JDK", uses="actions/setup-java@v4", with_params={"java-version": "'17'", "distribution": "'temurin'"})
    write_step(f, "Setup Node.js", uses="actions/setup-node@v4", with_params={"node-version": "'20'"})
    write_step(f, "Cache npm dependencies", uses="actions/cache@v4", with_params={"path": "~/.npm", "key": cache_npm_key, "restore-keys": [cache_npm_restore]})
    write_step(f, "Install Dependencies", run=["npm install", "npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/filesystem @capacitor/share"])
    write_step(f, "Add & Sync Capacitor Android", run=["chmod +x ./node_modules/.bin/* || true", 'if [ ! -d "android" ]; then', "  npx @capacitor/cli add android", "fi", "npx @capacitor/cli sync android"])
    write_step(f, "Restore google-services.json (if missing, decode from secret)", run=['if [ ! -f "android/app/google-services.json" ]; then', f'  echo "{google_secret}" | base64 --decode > android/app/google-services.json', "fi", '# Verify the file is not empty (fails gracefully with clear error)', 'if [ ! -s "android/app/google-services.json" ] || [ $(wc -c < "android/app/google-services.json") -lt 100 ]; then', '  echo "ERROR: GOOGLE_SERVICES_JSON_BASE64 secret مفقود أو فارغ \u2014 ملف google-services.json غير صالح"', '  exit 1', "fi"])
    write_step(f, "Add required permissions to AndroidManifest", run=['for PERM in "RECORD_AUDIO" "MODIFY_AUDIO_SETTINGS" "ACCESS_NETWORK_STATE" "POST_NOTIFICATIONS"; do', '  if ! grep -q "android.permission.$PERM" android/app/src/main/AndroidManifest.xml; then', '    sed -i "/<application/i\\\\    <uses-permission android:name=\\"android.permission.$PERM\\" />" android/app/src/main/AndroidManifest.xml', '  fi', "done"])
    write_step(f, "Restore Debug Keystore", run=["mkdir -p ~/.android", f'echo "{debug_ks}" | base64 --decode > ~/.android/debug.keystore'])
    write_step(f, "Cache Gradle dependencies", uses="actions/cache@v4", with_params={"path": ["~/.gradle/caches", "~/.gradle/wrapper"], "key": cache_gradle_key, "restore-keys": [cache_gradle_restore]})
    write_step(f, "Verify Icon Exists", run=['if [ ! -f "resources/icon.png" ]; then', '  echo "ERROR: resources/icon.png missing"', "  exit 1", "fi"])
    write_step(f, "Generate Android App Icons", run=["npx capacitor-assets generate --android --iconBackgroundColor '#0e1015' --iconBackgroundColorSplash '#0e1015'"])
    write_step(f, "Build Debug APK with Gradle", run=["cd android", "chmod +x gradlew", "./gradlew assembleDebug"])
    write_step(f, "Upload Debug APK Artifact", uses="actions/upload-artifact@v4", with_params={"name": "app-debug-apk", "path": "android/app/build/outputs/apk/debug/app-debug.apk"})

print("Debug file written")

