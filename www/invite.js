// invite.js — نظام روابط دعوة مرة واحدة (single-use invite link)

import { db, auth as firebaseAuth } from './firebase.js';
import {
  doc,
  setDoc,
  runTransaction,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 🌍 Localised messages: app.js exposes its translator as window.__txx (all 8 languages).
function tr(key, vars) {
  let text = (typeof window.__txx === 'function') ? window.__txx(key) : key;
  if (vars) Object.keys(vars).forEach(k => { text = text.split('{' + k + '}').join(vars[k]); });
  return text;
}

// 🧬 إعدادات
const INVITE_BASE_URL = window.location.origin + '/invite/';
const CODE_LENGTH = 8;

// ✅ زر توليد رابط الدعوة
async function generateInviteLink() {
  const user = firebaseAuth.currentUser;
  if (!user) {
    showToast(tr('inviteLoginRequired'));
    return;
  }

  let token;
  let attempts = 0;

  // 🎯 توليد رمز فريد — إعادة المحاولة إذا كان موجوداً مسبقاً
  do {
    token = generateRandomToken(CODE_LENGTH);
    const docRef = doc(db, 'inviteLinks', token);
    const snap = await getDoc(docRef);
    if (!snap.exists()) break; // الرمز غير مكرر
    attempts++;
    if (attempts > 10) {
      showToast(tr('inviteUniqueFailed'));
      return;
    }
  } while (true);

  // ✅ إنشاء الوثيقة
  await setDoc(doc(db, 'inviteLinks', token), {
    used: false,
    createdBy: user.uid,
    createdAt: serverTimestamp(),
    usedBy: null,
    usedAt: null
  });

  const fullLink = INVITE_BASE_URL + token;

  // ✅ نسخ إلى الحافظة
  try {
    await navigator.clipboard.writeText(fullLink);
    showToast(tr('inviteCopied', { link: fullLink }));
  } catch (e) {
    showToast(tr('inviteCopyManual', { link: fullLink }));
    prompt(tr('inviteCopyPrompt'), fullLink);
  }
}

function generateRandomToken(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// ✅ دالة استدعاء الرسائل (toast)
function showToast(message) {
  const container = document.getElementById('achievement-toast-container');
  if (container) {
    const toast = document.createElement('div');
    toast.className = 'achievement-toast success';
    toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
  } else {
    alert(message);
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, tag => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[tag]));
}

// ✅ دالة التحقق من صلاحية رابط الدعوة عند الفتح
async function verifyInviteToken(token) {
  try {
    await runTransaction(db, async (transaction) => {
      const docRef = doc(db, 'inviteLinks', token);
      const docSnap = await transaction.get(docRef);

      if (!docSnap.exists()) {
        throw new Error(tr('inviteInvalid'));
      }

      const data = docSnap.data();

      if (data.used) {
        throw new Error(tr('inviteUsed'));
      }

      transaction.update(docRef, {
        used: true,
        usedBy: firebaseAuth.currentUser?.uid || null,
        usedAt: serverTimestamp()
      });
    });

    showToast(tr('inviteWelcome'));
    return true;
  } catch (error) {
    showToast(error.message);
    return false;
  }
}

// ✅ تصدير الدوال
export { generateInviteLink, verifyInviteToken };