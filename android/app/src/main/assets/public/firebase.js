import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  signInWithCredential,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase configuration — loaded from window.FIREBASE_CONFIG (set by firebase-config.js loaded before this file).
// For development: copy firebase-config.example.js to firebase-config.js and fill in your values.
// firebase-config.js is gitignored to prevent secrets leaking.
const firebaseConfig = (typeof window !== 'undefined') ? window.FIREBASE_CONFIG : undefined;

if (!firebaseConfig || !firebaseConfig.apiKey) {
  console.error('Firebase config missing. Copy www/firebase-config.example.js to www/firebase-config.js and fill in your values.');
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export async function initializeAuthPersistence() {
  try {
    await setPersistence(auth, browserLocalPersistence);
    return true;
  } catch (error) {
    console.error('Firebase persistence setup failed:', error);
    return false;
  }
}

// Tries to sign an existing user in first (matches the "SIGN IN" button label).
// Only falls back to creating a brand-new account when Firebase reports that
// no account exists yet for this email, so returning users are never forced
// through the "create account" path just to log back in.
export async function loginOrSignupWithEmail(txx, email, password, confirmPassword) {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const noAccountYet = error?.code === 'auth/user-not-found';
    if (noAccountYet) {
      // إصلاح: كان الحساب كيتنشأ مباشرة هنا بلا ما نتأكدو من تطابق
      // "Password" مع "Confirm Password" — الفحص القديم فـ app.js كان
      // ميت (dead code) لأن هاد الدالة ماكانتش كترمي أي خطأ فهاد الحالة.
      // دابا كنفحصو التطابق هنا، قبل إنشاء الحساب فعلياً.
      if (typeof confirmPassword === 'string' && password !== confirmPassword) {
        const msg = (typeof txx === 'function' && txx('loginPasswordMismatchAlert')) || 'Passwords do not match!';
        const mismatchError = new Error(msg);
        mismatchError.code = 'auth/password-mismatch';
        throw mismatchError;
      }
      return createUserWithEmailAndPassword(auth, email, password);
    }
    throw error;
  }
}

export async function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

// تسجيل الدخول بـ Google الأصلي (native) عبر @capacitor-firebase/authentication.
// هاد الطريقة كتبدل signInWithRedirect اللي ماخدامش داخل WebView ديال Capacitor
// (كانت كتحاول ترجع لـ localhost فالهاتف وما لقاتش سيرفر → ERR_CONNECTION_REFUSED).
// txx: optional translator function (key) => string. When provided, error alerts
// are shown in the user's current language. Falls back to English when not passed.
export async function loginWithGoogle(txx) {
  const translate = (typeof txx === 'function') ? txx : null;
  try {
    await initializeAuthPersistence();

    const capacitor = window?.Capacitor;
    const isNativeAndroid = !!(capacitor && capacitor.isNativePlatform && capacitor.isNativePlatform());
    const FirebaseAuthentication = capacitor?.Plugins?.FirebaseAuthentication;

    if (isNativeAndroid && FirebaseAuthentication) {
      // Native Android app path: use the Capacitor Firebase Authentication plugin.
      // This is the only path that works reliably inside Android WebView / native app shells.
      const result = await FirebaseAuthentication.signInWithGoogle();
      const idToken = result?.credential?.idToken;
      if (!idToken) {
        throw new Error('No idToken received from Google.');
      }

      const credential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, credential);
      return;
    }

    // Desktop (Electron) / PWA fallback: use JS popup flow when no native app plugin is available.
    const provider = new GoogleAuthProvider();
    await setPersistence(auth, browserLocalPersistence);
    await signInWithPopup(auth, provider);
  } catch (error) {
    const code = error?.code || 'UNKNOWN';
    const message = error?.message || 'Unknown Google sign-in error';
    console.error('Google sign-in failed:', { code, message, error });

    const msg = (translate && translate('loginGoogleFailedFallback')) || 'Google sign-in failed.';
    // TEMP-DEBUG
    alert(msg + ' [' + code + '] ' + message);
  }
}

export {
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
};

if (typeof window !== 'undefined') {
  window.loginOrSignupWithEmail = loginOrSignupWithEmail;
  window.resetPassword = resetPassword;
  window.loginWithGoogle = loginWithGoogle;
}