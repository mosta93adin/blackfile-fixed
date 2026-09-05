# The Black File — Capacitor Project (phone-friendly build)

This repo is ready to be built into a real, installable APK entirely in
the cloud, using GitHub Actions — you don't need a computer, Android
Studio, or Node.js on your device.

## How to build the APK from your phone

1. Create a free GitHub account (github.com) if you don't have one.
2. Create a **new empty repository** (e.g. "the-black-file").
3. Upload every file/folder from this project into that repo
   (use the GitHub website or the GitHub mobile app's "Add file → Upload files").
   Keep the folder structure exactly as-is, including the hidden
   `.github/workflows/build-apk.yml` file.
4. Once uploaded, go to the **Actions** tab of your repo on GitHub.
5. You should see a workflow called "Build APK" — tap **Run workflow**
   (or it will run automatically after your upload since it's on the
   `main` branch).
6. Wait 3-5 minutes. When it finishes (green checkmark), open that
   run, scroll down to **Artifacts**, and download
   `the-black-file-debug-apk` — that's your installable APK (zipped,
   unzip it to get the .apk file).
7. Transfer/download that .apk to your phone and install it
   (you may need to allow "install unknown apps" for your browser/files app).

## Editing the game later

All your editable game files are in the `www/` folder:
- `www/index.html`
- `www/app.js`
- `www/translations.js`
- `www/styles.css`
- `www/sw.js`
- `www/manifest.json`

Edit them directly on GitHub (tap a file → pencil/edit icon → save),
then re-run the "Build APK" workflow to get an updated APK.

## Building a Release APK with Keystore (Manual)

The current GitHub Actions workflow (`build-apk.yml`) builds a **debug APK** only.
To build a **release APK** that can be installed on any device and uploaded to the Play Store,
you need to sign it with a keystore.

### Steps to build a release APK manually:

1. **Generate a keystore** (if you don't have one):
   ```bash
   keytool -genkey -v -keystore blackfile-release.keystore -alias blackfile -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Install dependencies and build:**
   ```bash
   npm install
   npx cap sync android
   cd android
   ./gradlew assembleRelease
   ```

3. **Sign the APK with your keystore:**
   ```bash
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore blackfile-release.keystore app/build/outputs/apk/release/app-release-unsigned.apk blackfile
   ```

4. **Align the APK (optimize for Android):**
   ```bash
   zipalign -v 4 app/build/outputs/apk/release/app-release-unsigned.apk blackfile-release.apk
   ```

5. **Your signed release APK** is now at `android/app/build/outputs/apk/release/blackfile-release.apk`

> **Note:** Keep your keystore file safe! You need it to sign all future updates.
> If you lose it, you won't be able to update your app on the Play Store.

## Desktop builds — Windows (.exe) and macOS (.dmg)

The app now ships as a native desktop app through **Electron** (the web assets in
`www/` are loaded by the Electron main process from `electron/app/`).

### Prerequisites
- **Node.js 20+** and npm installed.
- On **Windows**: any edition works. On **macOS**: a Mac (Intel or Apple Silicon).
- `.dmg` installers can only be built **on a Mac**.

### 1. Install and sync
```bash
npm install
npm run sync:www        # copies www/ -> electron/app and android assets
```

### 2. Windows installer (.exe, NSIS)
```powershell
cd electron
npm install
npm run electron:build:win
# Output: electron/dist/The-Black-File-Setup-1.0.0.exe
```

### 3. macOS installer (.dmg)
```bash
cd electron
npm install
npm run electron:build:mac
# Output: electron/dist/The-Black-File-1.0.0.dmg   (x64 + arm64)
```

### Run in development (no packaging)
```powershell
cd electron
npm run electron:start          # opens the app window from electron/app/
npm run electron:start-live     # same, plus auto-reload on ../www changes
```

### Firebase configuration for desktop
The web config is **not committed** (gitignored). Before packaging or running,
make sure the config file exists where the app looks for it:

- `/electron/app/firebase-config.js`   (used by the packaged desktop app)

> When you run `npm run sync:www`, the `www/` copy is **not** copied into
> `electron/app/` on purpose (Electron manages its own copy). So after cloning,
> copy the file once:
> ```powershell
> Copy-Item www/firebase-config.example.js electron/app/firebase-config.js
> ```
> …then fill in your real Firebase project values (same values that are in your
> Firebase Console → Project settings → Web app SDK config).

For Google sign-in on desktop the app uses the Firebase JS SDK popup; make sure
`localhost` (dev) or `capacitor-electron://-` (packaged) is in your Firebase
Console **Authorized domains** under Authentication → Settings.
