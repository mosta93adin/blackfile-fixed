# resources/ — native app icon & splash source

Drop this whole `resources/` folder into the ROOT of your project (next to `android/`,
`package.json`, etc. — i.e. same level as `capacitor.config.json`). Then run:

```bash
npm install -D @capacitor/assets
npx capacitor-assets generate --android
npx cap sync android
```

This regenerates every density in `android/app/src/main/res/mipmap-*` (launcher icon +
adaptive icon foreground/background) and `android/app/src/main/res/drawable*` (splash screen)
from these source files, replacing the default Capacitor placeholder icon/splash that got
re-introduced when `android/` was recreated.

## Files
- `icon.png` (1024×1024) — legacy fallback launcher icon (used pre-Android 8 / where adaptive
  icons aren't supported)
- `icon-foreground.png` (1024×1024, transparent) — the magnifying-glass glyph only, sized
  within Android's adaptive-icon safe zone
- `icon-background.png` (1024×1024, solid) — the app's dark background color (#0E1015),
  used as the adaptive icon's background layer
- `splash.png` / `splash-dark.png` (2732×2732) — splash screen, dark theme with the icon
  centered (same for light/dark since the app is dark-themed)

## IMPORTANT — do this on every future `cap add android`
Because this project deletes and recreates `android/` to apply Capacitor config changes,
add the `npx capacitor-assets generate --android` step **right after** `npx cap add android`
in your build workflow (e.g. the GitHub Action), so the custom icon/splash is always
re-applied automatically and this doesn't regress again:

```yaml
- run: npx cap add android
- run: npx capacitor-assets generate --android
- run: npx cap sync android
```
