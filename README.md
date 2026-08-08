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
