// firebase-sdk.js — resilient loader for the Firebase JS SDK.
//
// Why this file exists: app.js / firebase.js / invite.js used to import the SDK with
// *static* `import ... from "https://www.gstatic.com/..."`. A static import that fails
// (no internet, airplane mode, blocked CDN) aborts the whole module graph, so the game
// never started — not even the "Play Offline" button or the case archive worked.
//
// Here the SDK is loaded with dynamic import() + a timeout. If it cannot be reached,
// every export becomes a harmless stub, `sdkAvailable` is false, and the game starts in
// offline mode (all 20 cases are still playable; only sign-in / cloud features are off).

const SDK_VERSION = '10.8.0';
const BASE = `https://www.gstatic.com/firebasejs/${SDK_VERSION}/`;
const LOAD_TIMEOUT_MS = 6000;

function withTimeout(promise, ms) {
  let timer;
  const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Firebase SDK load timeout')), ms); });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

let appMod = null, authMod = null, fsMod = null;
try {
  [appMod, authMod, fsMod] = await withTimeout(Promise.all([
    import(/* @vite-ignore */ BASE + 'firebase-app.js'),
    import(/* @vite-ignore */ BASE + 'firebase-auth.js'),
    import(/* @vite-ignore */ BASE + 'firebase-firestore.js')
  ]), LOAD_TIMEOUT_MS);
} catch (err) {
  appMod = authMod = fsMod = null;
  console.warn('[Black File] Firebase SDK unavailable — starting in offline mode.', err && err.message);
}

export const sdkAvailable = !!(appMod && authMod && fsMod);

function unavailable(name) {
  return function () {
    const e = new Error('Firebase is unavailable (offline): ' + name);
    e.code = 'app/sdk-unavailable';
    throw e;
  };
}
const from = (mod, name) => (mod && mod[name]) || unavailable(name);

// ---- firebase-app ----
export const initializeApp = from(appMod, 'initializeApp');

// ---- firebase-auth ----
export const getAuth = from(authMod, 'getAuth');
export const setPersistence = from(authMod, 'setPersistence');
export const browserLocalPersistence = authMod ? authMod.browserLocalPersistence : {};
export const signInWithCredential = from(authMod, 'signInWithCredential');
export const signInWithPopup = from(authMod, 'signInWithPopup');
export const signInWithEmailAndPassword = from(authMod, 'signInWithEmailAndPassword');
export const createUserWithEmailAndPassword = from(authMod, 'createUserWithEmailAndPassword');
export const sendPasswordResetEmail = from(authMod, 'sendPasswordResetEmail');
export const GoogleAuthProvider = authMod ? authMod.GoogleAuthProvider : class GoogleAuthProviderStub {
  setCustomParameters() {}
  static credential() { unavailable('GoogleAuthProvider.credential')(); }
};
// Offline: report "signed out" once so the login screen (with "Play Offline") appears.
export const onAuthStateChanged = authMod
  ? authMod.onAuthStateChanged
  : function (_auth, callback) {
      setTimeout(() => { try { callback(null); } catch (e) { console.error(e); } }, 0);
      return function unsubscribe() {};
    };

// ---- firebase-firestore ----
export const getFirestore = from(fsMod, 'getFirestore');
export const doc = from(fsMod, 'doc');
export const setDoc = from(fsMod, 'setDoc');
export const deleteDoc = from(fsMod, 'deleteDoc');
export const collection = from(fsMod, 'collection');
export const query = from(fsMod, 'query');
export const where = from(fsMod, 'where');
export const orderBy = from(fsMod, 'orderBy');
export const limit = from(fsMod, 'limit');
export const getDocs = from(fsMod, 'getDocs');
export const getDoc = from(fsMod, 'getDoc');
export const serverTimestamp = from(fsMod, 'serverTimestamp');
export const arrayUnion = from(fsMod, 'arrayUnion');
export const runTransaction = from(fsMod, 'runTransaction');
