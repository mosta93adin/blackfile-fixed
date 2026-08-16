import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  setPersistence, 
  browserLocalPersistence, 
  signInWithRedirect, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  getRedirectResult, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBZ1-L_wKy94bMaOBaONBhQZfRaH3AejM",
  authDomain: "lamp-1edaa.firebaseapp.com",
  projectId: "lamp-1edaa",
  appId: "1:14062810654:web:c49791d27cef189f1c600f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

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

export async function signupWithEmail(email, password) {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error?.code === 'auth/email-already-in-use') {
      return signInWithEmailAndPassword(auth, email, password);
    }
    throw error;
  }
}

export async function loginWithGoogle() {
  try {
    await initializeAuthPersistence();
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error('Google sign-in failed:', error);
    alert('حدث خطأ أثناء تسجيل الدخول: ' + error.message);
  }
}

export async function checkRedirectResult() {
  try {
    const result = await getRedirectResult(auth);
    return result || null;
  } catch (error) {
    console.error('Google redirect sign-in failed:', error);
    if (typeof window !== 'undefined' && error?.message) {
      alert('خطأ أثناء العودة من جوجل: ' + error.message);
    }
    return null;
  }
}

export { 
  setPersistence, 
  browserLocalPersistence, 
  onAuthStateChanged, 
  signInWithRedirect, 
  getRedirectResult, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
};

if (typeof window !== 'undefined') {
  window.signupWithEmail = signupWithEmail;
  window.loginWithGoogle = loginWithGoogle;
  window.checkRedirectResult = checkRedirectResult;
}