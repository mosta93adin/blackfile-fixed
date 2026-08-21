import { auth as firebaseAuth, db, checkRedirectResult, initializeAuthPersistence, loginWithGoogle as loginWithGoogleRedirect, loginOrSignupWithEmail, resetPassword, onAuthStateChanged } from './firebase.js';
import { doc, setDoc, collection, query, orderBy, limit, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// The Black File — app logic (UI, game state, achievements, multiplayer, accessibility, etc.)
// Depends on translations.js being loaded first (uses the global TRANSLATIONS).

// -- بيانات اللعبة والترجمات الشاملة (20 قضية كاملة بـ 8 لغات: الإنجليزية، العربية، الدارجة المغربية، الفرنسية، الإسبانية، الإيطالية، الألمانية، البرتغالية) ---
    

        let currentLang = 'en';
    let currentCaseIndex = 0;
    let selectedSuspect = null;
    let askedQuestions = {};
    let activeFilter = 'all';

    const VOICE_LOCALES = { 
        en: 'en-US', 
        ar: 'ar-SA', 
        ary: 'ar-MA', 
        fr: 'fr-FR', 
        es: 'es-ES', 
        it: 'it-IT', 
        de: 'de-DE', 
        pt: 'pt-PT' 
    };
    // ملاحظة: منطق تسجيل الدخول الفعلي (إظهار/إخفاء شاشة المصباح مقابل شاشة
    // اللعبة، والاستماع لتغييرات حالة المصادقة، وربط النموذج بزر Google) موجود
    // في كتلة واحدة موحدة بالأسفل (showLoginUI / showGameUI / syncAuthUI) التي
    // تستخدم العناصر الصحيحة الموجودة فعلاً في index.html: #lamp-wrapper و.app.
    // كانت هناك سابقاً كتلة مكررة هنا تبحث عن عناصر غير موجودة (#login-screen,
    // .login-container, #main-game, .game-container, #app بصيغة id) مما كان
    // يمنع اختفاء شاشة تسجيل الدخول بعد نجاح الدخول، وكان يسجّل كل مستمع حدث
    // مرتين. تم حذفها لصالح الكتلة الصحيحة الوحيدة بالأسفل.

    function readUserProfile() {
        try {
            return JSON.parse(localStorage.getItem('tf_userProfile'));
        } catch (e) {
            return null;
        }
    }
    let saveWarningShown = false;
    function showSaveWarningToast() {
        if (saveWarningShown) return;
        saveWarningShown = true;
        const container = document.getElementById('achievement-toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'achievement-toast warn';
        const msg = (typeof txx === 'function' && txx('saveWarningMsg'))
            ? txx('saveWarningMsg')
            : "⚠️ Your progress can't be saved on this device/browser right now (private mode or storage blocked). Play on, but it may not persist.";
        toast.innerHTML = `<span class="ach-toast-icon">⚠️</span><span>${escapeHtml(msg)}</span>`;
        container.appendChild(toast);
        setTimeout(() => { toast.classList.add('out'); setTimeout(() => toast.remove(), 500); }, 6000);
    }
    function saveUserProfile() {
        try {
            localStorage.setItem('tf_userProfile', JSON.stringify(userProfile));
            return true;
        } catch (e) {
            showSaveWarningToast();
            return false;
        }
    }

    let userProfile = readUserProfile() || {
        name: "Detective",
        rank: "Detective Trainee",
        solved: 0,
        attempts: 0,
        correctAttempts: 0,
        solvedCases: [],
        lastCaseIndex: null,
        hintsUsedByCase: {},
        streakCurrent: 0,
        streakBest: 0,
        noHintSolve: false
    };
    if (typeof userProfile.attempts !== 'number') { userProfile.attempts = 0; }
    if (typeof userProfile.correctAttempts !== 'number') { userProfile.correctAttempts = userProfile.solved || 0; }
    if (!Array.isArray(userProfile.solvedCases)) { userProfile.solvedCases = []; }
    if (!userProfile.hintsUsedByCase || typeof userProfile.hintsUsedByCase !== 'object') { userProfile.hintsUsedByCase = {}; }
    if (typeof userProfile.lastCaseIndex !== 'number') { userProfile.lastCaseIndex = null; }
    if (typeof userProfile.streakCurrent !== 'number') { userProfile.streakCurrent = 0; }
    if (typeof userProfile.streakBest !== 'number') { userProfile.streakBest = 0; }
    if (typeof userProfile.noHintSolve !== 'boolean') { userProfile.noHintSolve = false; }
    if (!Array.isArray(userProfile.history)) { userProfile.history = []; }
    if (typeof userProfile.energyUsedCount !== 'number') { userProfile.energyUsedCount = 0; }
    if (typeof userProfile.energyDate !== 'string') { userProfile.energyDate = ''; }
    if (typeof userProfile.lastPlayedDate !== 'string') { userProfile.lastPlayedDate = ''; }

    const RANK_LEVELS = {
        en: ["Detective Trainee", "Junior Detective", "Private Investigator", "Senior Inspector", "Chief Detective"],
        ar: ["متدرب محقق", "محقق مبتدئ", "محقق خاص", "مفتش أول", "كبير المحققين"],
        ary: ["متدرب", "محقق صغير", "محقق خاص", "مفتش كبير", "شيف المحققين"],
        fr: ["Détective Stagiaire", "Détective Junior", "Enquêteur Privé", "Inspecteur Principal", "Détective en Chef"],
        es: ["Detective en Prácticas", "Detective Junior", "Investigador Privado", "Inspector Superior", "Detective Jefe"],
        it: ["Detective Tirocinante", "Detective Junior", "Investigatore Privato", "Ispettore Capo", "Detective Capo"],
        de: ["Detektiv-Praktikant", "Junior-Detektiv", "Privatermittler", "Oberinspektor", "Chefdetektiv"],
        pt: ["Detetive Estagiário", "Detetive Júnior", "Investigador Particular", "Inspetor Sénior", "Detetive Chefe"]
    };

    function getSolvedCount() { return userProfile.solvedCases.length; }

    function computeRank() {
        const levels = RANK_LEVELS[currentLang] || RANK_LEVELS.en;
        const n = getSolvedCount();
        if (n >= 20) return levels[4];
        if (n >= 12) return levels[3];
        if (n >= 6) return levels[2];
        if (n >= 2) return levels[1];
        return levels[0];
    }

    function computeAccuracy() {
        if (!userProfile.attempts) return 100;
        return Math.round((userProfile.correctAttempts / userProfile.attempts) * 100);
    }

    const ACHIEVEMENTS = [
        {
            id: 'first_case', icon: '🔰',
            check: () => getSolvedCount() >= 1,
            name: { en: "First Case", ar: "أول قضية", ary: "أول قضية", fr: "Première Affaire", es: "Primer Caso", it: "Primo Caso", de: "Erster Fall", pt: "Primeiro Caso" },
            desc: { en: "Solve your first case", ar: "حلّ أول قضية لك", ary: "حل أول قضية ديالك", fr: "Résoudre votre première affaire", es: "Resuelve tu primer caso", it: "Risolvi il tuo primo caso", de: "Löse deinen ersten Fall", pt: "Resolva o seu primeiro caso" }
        },
        {
            id: 'sharp_eye', icon: '🔎',
            check: () => userProfile.noHintSolve === true,
            name: { en: "Sharp Eye", ar: "عين ثاقبة", ary: "عين حادة", fr: "Œil Perçant", es: "Ojo Certero", it: "Occhio Acuto", de: "Scharfes Auge", pt: "Olho Afiado" },
            desc: { en: "Solve a case without using any hint", ar: "حلّ قضية دون استخدام أي تلميح", ary: "حل قضية بلا ما تستعمل تلميح", fr: "Résoudre une affaire sans indice", es: "Resuelve un caso sin pistas", it: "Risolvi un caso senza indizi", de: "Löse einen Fall ohne Hinweis", pt: "Resolva um caso sem dicas" }
        },
        {
            id: 'hot_streak', icon: '🔥',
            check: () => userProfile.streakBest >= 3,
            name: { en: "Hot Streak", ar: "سلسلة نجاحات", ary: "سلسلة ديال الفوز", fr: "Série Gagnante", es: "Racha Ganadora", it: "Serie Vincente", de: "Erfolgsserie", pt: "Sequência Vencedora" },
            desc: { en: "Solve 3 cases in a row correctly", ar: "حلّ 3 قضايا متتالية بشكل صحيح", ary: "حل 3 قضايا وراء بعضياتهم بلا خطأ", fr: "Résoudre 3 affaires d'affilée", es: "Resuelve 3 casos seguidos", it: "Risolvi 3 casi di fila", de: "Löse 3 Fälle in Folge", pt: "Resolva 3 casos seguidos" }
        },
        {
            id: 'halfway', icon: '🥈',
            check: () => getSolvedCount() >= 10,
            name: { en: "Halfway There", ar: "في منتصف الطريق", ary: "نصف الطريق", fr: "À Mi-Chemin", es: "A Mitad de Camino", it: "A Metà Strada", de: "Auf Halbem Weg", pt: "A Meio Caminho" },
            desc: { en: "Solve 10 out of 20 cases", ar: "حلّ 10 من أصل 20 قضية", ary: "حل 10 من 20 قضية", fr: "Résoudre 10 affaires sur 20", es: "Resuelve 10 de 20 casos", it: "Risolvi 10 casi su 20", de: "Löse 10 von 20 Fällen", pt: "Resolva 10 de 20 casos" }
        },
        {
            id: 'master_detective', icon: '🏆',
            check: () => getSolvedCount() >= 20,
            name: { en: "Master Detective", ar: "محقق أسطوري", ary: "محقق كبير", fr: "Détective Légendaire", es: "Detective Legendario", it: "Detective Leggendario", de: "Meisterdetektiv", pt: "Detetive Lendário" },
            desc: { en: "Solve all 20 cases in The Black File", ar: "حلّ جميع القضايا العشرين في الملف الأسود", ary: "حل ال20 قضية ديال الملف الأسود", fr: "Résoudre les 20 affaires du Dossier Noir", es: "Resuelve los 20 casos del Expediente Negro", it: "Risolvi tutti i 20 casi del Fascicolo Nero", de: "Löse alle 20 Fälle der Schwarzen Akte", pt: "Resolva os 20 casos do Ficheiro Negro" }
        }
    ];

    function getUnlockedAchievementIds() {
        return ACHIEVEMENTS.filter(a => a.check()).map(a => a.id);
    }

    function showAchievementToast(id) {
        const a = ACHIEVEMENTS.find(x => x.id === id);
        if (!a) return;
        const name = (a.name[currentLang] || a.name.en);
        const container = document.getElementById('achievement-toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'achievement-toast';
        toast.innerHTML = `<span class="ach-toast-icon">${a.icon}</span><span>${escapeHtml(name)}</span>`;
        container.appendChild(toast);
        playSuccessSound();
        setTimeout(() => { toast.classList.add('out'); setTimeout(() => toast.remove(), 500); }, 3200);
    }

    function renderAchievements() {
        const el = document.getElementById('pro-achievements');
        if (!el) return;
        el.innerHTML = '';
        ACHIEVEMENTS.forEach(a => {
            const unlocked = a.check();
            const name = escapeHtml(a.name[currentLang] || a.name.en);
            const desc = escapeHtml(a.desc[currentLang] || a.desc.en);
            const div = document.createElement('div');
            div.className = 'ach-badge' + (unlocked ? ' unlocked' : '');
            div.title = desc;
            div.innerHTML = `<span class="ach-badge-icon">${unlocked ? a.icon : '🔒'}</span><span class="ach-badge-name">${name}</span>`;
            el.appendChild(div);
        });
    }

    function loadUserData() {
        document.getElementById('pro-username').value = userProfile.name;
        const rankEl = document.getElementById('pro-rank');
        if (rankEl) rankEl.textContent = computeRank();
        document.getElementById('pro-solved').textContent = getSolvedCount();
        document.getElementById('pro-acc').textContent = computeAccuracy() + '%';
        renderDashboardStats();
        renderResumeBanner();
        renderAchievements();
    }

    function renderDashboardStats() {
        const el = document.getElementById('dashboard-stats');
        if (!el) return;
        el.innerHTML = `<span>🏅 ${escapeHtml(computeRank())}</span><span>✅ ${getSolvedCount()}/20</span><span>🎯 ${computeAccuracy()}%</span>`;
    }

    function updateUITexts() {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        document.getElementById('txt-app-title').textContent = t.appTitle;
        document.getElementById('txt-app-sub').textContent = t.appSub;
        document.getElementById('txt-profile-btn').textContent = t.profileBtn;
        document.getElementById('txt-chat-btn').textContent = t.chatBtn;
        document.getElementById('txt-mp-btn').textContent = t.mpBtn;
        document.getElementById('status-tag').textContent = t.statusReady;
        document.getElementById('txt-archive-title').textContent = t.archiveTitle;
        document.getElementById('txt-archive-desc').textContent = t.archiveDesc;
        document.getElementById('txt-footer').textContent = t.footerText;
        document.getElementById('f-all').textContent = t.filterAll;
        document.getElementById('f-easy').textContent = t.filterEasy;
        document.getElementById('f-med').textContent = t.filterMedium;
        document.getElementById('f-hard').textContent = t.filterHard;
        document.getElementById('f-ext').textContent = t.filterExtreme;
        document.getElementById('txt-back-archive').textContent = t.backArchive;
        document.getElementById('txt-crime-scene').textContent = t.crimeSceneBanner;
        document.getElementById('txt-start-inv').textContent = t.startInv;
        document.getElementById('txt-back-brief').textContent = t.backBrief;
        document.getElementById('txt-notes-btn').textContent = t.notesBtn;
        document.getElementById('txt-hint-btn').textContent = t.hintBtn;
        document.getElementById('txt-evidence-header').textContent = t.evidenceHeader;
        document.getElementById('txt-suspects-header').textContent = t.suspectsHeader;
        document.getElementById('txt-accuse-btn').textContent = t.accuseBtn;
        document.getElementById('txt-back-menu').textContent = t.returnMenu;
        document.getElementById('txt-retry-case').textContent = t.retryCase;
        document.getElementById('txt-close-1').textContent = t.close;
        document.getElementById('txt-close-2').textContent = t.close;
        document.getElementById('txt-interrogate-q').textContent = t.interrogateQ;
        document.getElementById('txt-accuse-modal-title').textContent = t.accuseModalTitle;
        document.getElementById('txt-accuse-modal-desc').textContent = t.accuseModalDesc;
        document.getElementById('txt-cancel').textContent = t.cancel;
        document.getElementById('txt-confirm-accuse').textContent = t.confirmAccuse;
        document.getElementById('txt-notes-title').textContent = t.notesTitle;
        document.getElementById('txt-notes-desc').textContent = t.notesDesc;
        document.getElementById('txt-notes-close').textContent = t.notesClose;
        document.getElementById('txt-notes-save').textContent = t.notesSave;
        document.getElementById('txt-hint-title').textContent = t.hintTitle;
        document.getElementById('txt-hint-close').textContent = t.hintClose;
        document.getElementById('txt-profile-title').textContent = t.profileTitle;
        document.getElementById('txt-pro-name-label').textContent = t.proNameLabel;
        document.getElementById('txt-pro-rank-label').textContent = t.proRankLabel;
        const achLabelEl = document.getElementById('txt-pro-ach-label');
        if (achLabelEl) achLabelEl.textContent = t.achLabel;
        const obTitle = document.getElementById('txt-onboard-title');
        const obBody = document.getElementById('txt-onboard-body');
        const obBtn = document.getElementById('txt-onboard-btn');
        if (obTitle) obTitle.textContent = t.onboardTitle;
        if (obBody) obBody.textContent = t.onboardBody;
        if (obBtn) obBtn.textContent = t.onboardBtn;
        document.getElementById('txt-pro-close').textContent = t.proClose;
        document.getElementById('txt-pro-save').textContent = t.proSave;
        document.getElementById('txt-mp-title').textContent = t.mpTitle;
        document.getElementById('txt-mp-desc').textContent = t.mpDesc;
        document.getElementById('txt-mp-close').textContent = t.mpClose;
        document.getElementById('txt-mp-join').textContent = t.mpJoin;
        document.getElementById('txt-mp-create').textContent = t.mpCreate;
        document.getElementById('txt-mp-leave').textContent = t.mpLeave;
        document.getElementById('txt-chat-heading').textContent = t.chatHeading;
        document.getElementById('txt-chat-disclaimer').textContent = t.chatDisclaimer;
        document.getElementById('txt-chat-send').textContent = t.chatSend;
        const callBtnEl = document.getElementById('call-btn');
        if (callBtnEl) callBtnEl.title = t.callBtnTitle || 'Voice Call';
        const micBtnEl = document.getElementById('mic-btn');
        if (micBtnEl && !micBtnEl.classList.contains('mic-active')) micBtnEl.title = t.micTitle || 'Voice Input (tap to talk, tap again to stop)';
        const chatInputEl = document.getElementById('chat-input');
        if (chatInputEl) chatInputEl.placeholder = t.chatInputPlaceholder;
        const notesTextEl = document.getElementById('notes-text');
        if (notesTextEl) notesTextEl.placeholder = t.notesPlaceholder;
        const roomCodeEl = document.getElementById('mp-roomcode');
        if (roomCodeEl) roomCodeEl.placeholder = t.roomCodePlaceholder;
        const chatBodyEl = document.getElementById('chat-body');
        if (chatBodyEl && chatBodyEl.dataset.populated !== 'true') {
            chatBodyEl.innerHTML = '';
            const welcomeDiv = document.createElement('div');
            welcomeDiv.className = 'chat-msg';
            const wb = document.createElement('b');
            wb.textContent = t.botName + ': ';
            welcomeDiv.appendChild(wb);
            welcomeDiv.appendChild(document.createTextNode(t.chatWelcomeMsg));
            chatBodyEl.appendChild(welcomeDiv);
        }
    }

        // تحديث اتجاه الصفحة ودعم اللغات الـ 8 (بما فيها الدارجة المغربية ary كاتجاه من اليمين لليسار rtl)
    function showLoader() {
        const el = document.getElementById('loading-overlay');
        if (el) el.classList.add('active');
    }
    function hideLoader() {
        const el = document.getElementById('loading-overlay');
        if (el) el.classList.remove('active');
    }

    function changeLang(lang) {
        showLoader();
        setTimeout(() => {
            currentLang = TRANSLATIONS[lang] ? lang : 'en';
            const body = document.getElementById('body-tag');
            if (currentLang === 'ar' || currentLang === 'ary') {
                body.setAttribute('dir', 'rtl');
            } else {
                body.setAttribute('dir', 'ltr');
            }
            updateUITexts();
            updateExtraUITexts();
            renderMenu(activeFilter);
            loadUserData();
            playClickSound();
            hideLoader();
        }, 120);
    }

    // دالة أساسية ناقصة كانت سبب توقف كل نظام التنقل بين الشاشات (case click ما كان خدام والو)
    function show(screenId, fromHistoryNav) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const target = document.getElementById(screenId);
        if (target) target.classList.add('active');
        if (screenId === 'scr-investigation') {
            startAmbient();
        } else {
            stopAmbient();
            stopCaseTimer();
        }
        // اجعل زر الرجوع (فيزيائي على أندرويد أو سحبة الرجوع على iOS) يرجع لشاشة القائمة
        // بدل إغلاق التطبيق مباشرة، بدون ما يأثر على أي منطق موجود مسبقًا
        if (!fromHistoryNav) {
            try {
                if (screenId === 'scr-menu') {
                    history.replaceState({ screenId }, '');
                } else {
                    history.pushState({ screenId }, '');
                }
            } catch (e) { /* ignore */ }
        }
    }

    // دعم زر الرجوع: يرجع لآخر شاشة بدل إغلاق التطبيق، وإذا كنا في القائمة الرئيسية
    // نطلب تأكيد الخروج (سلوك معتاد في تطبيقات أندرويد)
    window.addEventListener('popstate', (e) => {
        const anyModalOpen = document.querySelector('.modal-bg.active');
        if (anyModalOpen) {
            anyModalOpen.classList.remove('active');
            history.pushState({ screenId: document.querySelector('.screen.active')?.id || 'scr-menu' }, '');
            return;
        }
        const targetId = (e.state && e.state.screenId) || 'scr-menu';
        show(targetId, true);
    });

    // دعم زر الرجوع الفيزيائي عند التغليف بـ Capacitor أو Cordova
    document.addEventListener('backbutton', (e) => {
        e.preventDefault();
        const activeScreen = document.querySelector('.screen.active');
        if (activeScreen && activeScreen.id === 'scr-menu' && !document.querySelector('.modal-bg.active')) {
            if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
                window.Capacitor.Plugins.App.exitApp();
            } else if (navigator.app && navigator.app.exitApp) {
                navigator.app.exitApp();
            }
        } else {
            history.back();
        }
    }, false);

    let caseTimerInterval = null;
    let caseTimerRemaining = 0;

    function startCaseTimer(seconds) {
        stopCaseTimer();
        caseTimerRemaining = seconds;
        updateTimerDisplay();
        caseTimerInterval = setInterval(() => {
            caseTimerRemaining--;
            updateTimerDisplay();
            if (caseTimerRemaining <= 0) {
                stopCaseTimer();
                const el = document.getElementById('inv-timer');
                if (el) el.textContent = '⏰ 00:00';
                handleCaseTimeout();
            }
        }, 1000);
    }

    // Called when a Timed Challenge run's clock reaches zero: forces the
    // attempt to end as a failed case (instead of silently doing nothing).
    function handleCaseTimeout() {
        if (raceActive) return; // race mode has its own win/lose flow
        const scrInv = document.getElementById('scr-investigation');
        if (!scrInv || !scrInv.classList.contains('active')) return; // already left this case

        document.querySelectorAll('.modal-bg.active').forEach(m => m.classList.remove('active'));

        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const c = data.cases[currentCaseIndex];
        const elapsedMs = Date.now() - (caseStartTime || Date.now());

        userProfile.attempts += 1;
        userProfile.streakCurrent = 0;
        if (!Array.isArray(userProfile.history)) userProfile.history = [];
        userProfile.history.push({ t: Date.now(), caseIdx: currentCaseIndex, correct: false, hints: getHintsUsed(currentCaseIndex), ms: elapsedMs, timedOut: true });
        if (userProfile.history.length > 500) userProfile.history = userProfile.history.slice(-500);
        userProfile.lastPlayedDate = todayStr();
        saveUserProfile();
        loadUserData();

        const resIcon = document.getElementById('res-icon');
        const resTitle = document.getElementById('res-title');
        const resDesc = document.getElementById('res-desc');
        resIcon.textContent = "⏰";
        resTitle.textContent = txx('timeUpTitle') || data.resultWrongTitle;
        resTitle.style.color = "var(--blood)";
        resDesc.innerHTML = `${escapeHtml(txx('timeUpDesc') || data.resultWrongDesc)}<br><br><b>${escapeHtml(data.caseExplanationLabel)}</b><br>${escapeHtml(c.explain)}`;
        show('scr-result');
        playFailSound();
    }

    function stopCaseTimer() {
        if (caseTimerInterval) { clearInterval(caseTimerInterval); caseTimerInterval = null; }
    }

    function updateTimerDisplay() {
        const el = document.getElementById('inv-timer');
        if (!el) return;
        const remaining = Math.max(0, caseTimerRemaining);
        const m = Math.floor(remaining / 60).toString().padStart(2, '0');
        const s = (remaining % 60).toString().padStart(2, '0');
        el.textContent = '⏱ ' + m + ':' + s;
    }

    const HINTS_BY_DIFFICULTY = { easy: 4, medium: 3, hard: 2, extreme: 1 };
    const TIMER_SECONDS_BY_DIFFICULTY = { easy: 900, medium: 600, hard: 420, extreme: 240 };

    function getMaxHintsForCase(idx) {
        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const c = data.cases[idx];
        return HINTS_BY_DIFFICULTY[c.difficulty] ?? 3;
    }

    function getHintsUsed(idx) { return userProfile.hintsUsedByCase[idx] || 0; }

    function updateHintCounterDisplay() {
        const el = document.getElementById('hint-counter');
        const btn = document.getElementById('txt-hint-btn');
        if (!el) return;
        const used = getHintsUsed(currentCaseIndex);
        const maxHints = getMaxHintsForCase(currentCaseIndex);
        const left = Math.max(0, maxHints - used);
        el.textContent = '(' + left + '/' + maxHints + ')';
        if (btn) btn.disabled = left <= 0;
        if (btn) btn.style.opacity = left <= 0 ? '0.5' : '1';
    }

    let ambientNodes = null;

    function startAmbient() {
        if (soundMuted || ambientNodes) return;
        try {
            const ctx = getAudioCtx();
            if (!ctx) return;
            const masterGain = ctx.createGain();
            masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
            masterGain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 2);
            masterGain.connect(ctx.destination);
            const osc1 = ctx.createOscillator();
            osc1.type = 'sine';
            osc1.frequency.value = 55;
            const osc2 = ctx.createOscillator();
            osc2.type = 'sine';
            osc2.frequency.value = 82.5;
            osc1.connect(masterGain);
            osc2.connect(masterGain);
            osc1.start();
            osc2.start();

            // Subtle filtered noise + slow-drifting filter for a tense "detective" texture
            let noiseSource = null, noiseFilter = null, noiseGain = null, lfo = null, lfoGain = null;
            try {
                const bufferSize = ctx.sampleRate * 2;
                const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const output = noiseBuffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) { output[i] = (Math.random() * 2 - 1) * 0.6; }
                noiseSource = ctx.createBufferSource();
                noiseSource.buffer = noiseBuffer;
                noiseSource.loop = true;
                noiseFilter = ctx.createBiquadFilter();
                noiseFilter.type = 'lowpass';
                noiseFilter.frequency.value = 400;
                noiseFilter.Q.value = 0.7;
                noiseGain = ctx.createGain();
                noiseGain.gain.value = 0.025;
                lfo = ctx.createOscillator();
                lfo.type = 'sine';
                lfo.frequency.value = 0.05;
                lfoGain = ctx.createGain();
                lfoGain.gain.value = 150;
                lfo.connect(lfoGain);
                lfoGain.connect(noiseFilter.frequency);
                noiseSource.connect(noiseFilter);
                noiseFilter.connect(noiseGain);
                noiseGain.connect(masterGain);
                noiseSource.start();
                lfo.start();
            } catch (e) { /* noise layer is optional polish - ignore if unsupported */ }

            ambientNodes = { ctx, masterGain, osc1, osc2, noiseSource, lfo };
        } catch (e) { /* silent - non-critical ambience */ }
    }

    function stopAmbient() {
        if (!ambientNodes) return;
        try {
            const { ctx, masterGain, osc1, osc2, noiseSource, lfo } = ambientNodes;
            const now = ctx.currentTime;
            masterGain.gain.cancelScheduledValues(now);
            masterGain.gain.setValueAtTime(masterGain.gain.value, now);
            masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.5);
            setTimeout(() => {
                try { osc1.stop(); osc2.stop(); } catch (e) {}
                try { if (noiseSource) noiseSource.stop(); } catch (e) {}
                try { if (lfo) lfo.stop(); } catch (e) {}
            }, 600);
        } catch (e) { /* silent */ }
        ambientNodes = null;
    }

    function resumeLastCase() {
        if (typeof userProfile.lastCaseIndex === 'number' && userProfile.lastCaseIndex !== null) {
            openBrief(userProfile.lastCaseIndex);
        }
    }

    function renderResumeBanner() {
        const banner = document.getElementById('resume-banner');
        const text = document.getElementById('resume-banner-text');
        if (!banner || !text) return;
        const idx = userProfile.lastCaseIndex;
        if (typeof idx !== 'number' || idx === null) { banner.style.display = 'none'; return; }
        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const c = data.cases[idx];
        if (!c) { banner.style.display = 'none'; return; }
        text.textContent = '↩ ' + c.title;
        banner.style.display = 'block';
    }

    function exportProgress() {
        try {
            const blob = new Blob([JSON.stringify(userProfile, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'black-file-progress.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            playClickSound();
        } catch (e) { /* silent */ }
    }

    function importProgress(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const imported = JSON.parse(reader.result);
                userProfile = Object.assign({
                    name: "Detective", solved: 0, attempts: 0, correctAttempts: 0,
                    solvedCases: [], lastCaseIndex: null, hintsUsedByCase: {},
                    streakCurrent: 0, streakBest: 0, noHintSolve: false
                }, imported);
                if (!Array.isArray(userProfile.solvedCases)) userProfile.solvedCases = [];
                if (!userProfile.hintsUsedByCase || typeof userProfile.hintsUsedByCase !== 'object') userProfile.hintsUsedByCase = {};
                if (typeof userProfile.streakCurrent !== 'number') userProfile.streakCurrent = 0;
                if (typeof userProfile.streakBest !== 'number') userProfile.streakBest = 0;
                if (typeof userProfile.noHintSolve !== 'boolean') userProfile.noHintSolve = false;
                saveUserProfile();
                loadUserData();
                renderMenu(activeFilter);
                renderResumeBanner();
                playClickSound();
            } catch (e) {
                alert('Invalid progress file.');
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    // دالة أساسية ناقصة كانت كتسبب ReferenceError فكل ضغطة زر (bypass صامت بلا صوت)
    let _audioCtx = null;
    let soundMuted = false;
    try {
        soundMuted = localStorage.getItem('tf_soundMuted') === 'true';
    } catch (e) { soundMuted = false; }

    function toggleMute() {
        soundMuted = !soundMuted;
        try { localStorage.setItem('tf_soundMuted', soundMuted ? 'true' : 'false'); } catch (e) { /* ignore */ }
        const btn = document.getElementById('mute-btn');
        if (btn) btn.textContent = soundMuted ? '🔇' : '🔊';
        if (!soundMuted) playClickSound();
    }

    function playClickSound() {
        if (soundMuted) return;
        try {
            if (!_audioCtx) {
                const AC = window.AudioContext || window.webkitAudioContext;
                if (!AC) return;
                _audioCtx = new AC();
            }
            const osc = _audioCtx.createOscillator();
            const gain = _audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = 440;
            gain.gain.setValueAtTime(0.05, _audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, _audioCtx.currentTime + 0.1);
            osc.connect(gain);
            gain.connect(_audioCtx.destination);
            osc.start();
            osc.stop(_audioCtx.currentTime + 0.1);
        } catch (e) { /* silent - non-critical UX sound */ }
    }

    function getAudioCtx() {
        try {
            if (!_audioCtx) {
                const AC = window.AudioContext || window.webkitAudioContext;
                if (!AC) return null;
                _audioCtx = new AC();
            }
            return _audioCtx;
        } catch (e) { return null; }
    }

    function playTone(freq, startTime, duration, type, ctx, peakGain) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type || 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(peakGain || 0.08, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration + 0.02);
    }

    // نغمة نجاح صاعدة (لما يحل المحقق القضية بنجاح)
    function playSuccessSound() {
        if (soundMuted) return;
        try {
            const ctx = getAudioCtx();
            if (!ctx) return;
            const now = ctx.currentTime;
            [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
                playTone(f, now + i * 0.09, 0.25, 'triangle', ctx, 0.09);
            });
        } catch (e) { /* silent */ }
    }

    // نغمة فشل هابطة (لما يخطئ المحقق فالاتهام)
    function playFailSound() {
        if (soundMuted) return;
        try {
            const ctx = getAudioCtx();
            if (!ctx) return;
            const now = ctx.currentTime;
            [349.23, 261.63, 174.61].forEach((f, i) => {
                playTone(f, now + i * 0.12, 0.3, 'sawtooth', ctx, 0.07);
            });
        } catch (e) { /* silent */ }
    }

    // نغمة قصيرة خفيفة عند فتح دليل أو استجواب مشتبه به
    // خريطة كلمات مفتاحية (بعدة لغات) لاختيار رمز تعبيري مناسب لكل نوع دليل أو دور مشتبه به
    // ملاحظة: هذا نظام أيقونات تعبيرية بديل، وليس صورًا حقيقية مرسومة (راجع الشرح فالرد)
    const EVIDENCE_ICON_MAP = [
        [/knife|dagger|blade|couteau|poignard|cuchillo|coltello|messer|faca|سكين|خنجر/i, "🔪"],
        [/gun|pistol|firearm|revolver|pistolet|arma|pistola|waffe|مسدس|سلاح ناري/i, "🔫"],
        [/poison|cyanide|toxin|toxic|poison|veneno|veleno|gift|سم|تسميم/i, "☠️"],
        [/blood|sang|sangre|sangue|blut|دم/i, "🩸"],
        [/phone|téléphone|teléfono|telefono|telefon|هاتف|جوال/i, "📱"],
        [/camera|caméra|cámara|kamera|câmera|كاميرا/i, "📷"],
        [/letter|note|lettre|carta|brief|رسالة|خطاب|ملاحظة/i, "✉️"],
        [/diary|journal|diario|tagebuch|مذكرات|يوميات/i, "📔"],
        [/key\b|clé|llave|chiave|schlüssel|مفتاح/i, "🔑"],
        [/glass|verre|vaso|bicchiere|glas|زجاج|كأس/i, "🥃"],
        [/footprint|empreinte|huella|impronta|fußabdruck|أثر قدم|بصمة قدم/i, "👣"],
        [/fingerprint|empreinte digitale|huella dactilar|impronta digitale|fingerabdruck|بصمة/i, "🖐️"],
        [/rope|cord|thread|fibre|fiber|corde|cuerda|corda|seil|خيط|حبل/i, "🧵"],
        [/ticket|billet|boleto|biglietto|fahrkarte|تذكرة/i, "🎫"],
        [/painting|tableau|pintura|dipinto|gemälde|لوحة/i, "🖼️"],
        [/money|cash|argent|dinero|denaro|geld|مال|نقود/i, "💵"],
        [/fire|burn|feu|fuego|fuoco|feuer|حريق|نار/i, "🔥"],
        [/car|vehicle|voiture|coche|auto|سيارة/i, "🚗"],
        [/document|contract|will|contrat|documento|dokument|وثيقة|عقد/i, "📄"],
        [/pill|drug|medic|médicament|medicamento|medikament|دواء|حبوب/i, "💊"]
    ];
    const SUSPECT_ICON_MAP = [
        [/doctor|physician|médecin|médico|medico|arzt|طبيب|دكتور/i, "🩺"],
        [/police|officer|policier|policía|polizist|شرطي|ضابط/i, "👮"],
        [/guard|garde|guardia|wächter|حارس/i, "💂"],
        [/lawyer|attorney|avocat|abogado|avvocato|anwalt|محامي/i, "⚖️"],
        [/maid|servant|housekeeper|femme de ménage|criada|governante|haushälterin|خادمة|عاملة منزلية/i, "🧹"],
        [/chef|cook|cuisinier|cocinero|cuoco|koch|طباخ|طاهي/i, "👨‍🍳"],
        [/artist|painter|peintre|pintor|artista|künstler|فنان|رسام/i, "🎨"],
        [/writer|author|écrivain|escritor|scrittore|schriftsteller|كاتب|روائي/i, "✍️"],
        [/student|étudiant|estudiante|studente|student|طالب|طالبة/i, "🎓"],
        [/nurse|infirmière|enfermera|infermiera|krankenschwester|ممرض/i, "👩‍⚕️"],
        [/professor|teacher|professeur|profesor|professore|lehrer|أستاذ|بروفيسور/i, "🧑‍🏫"],
        [/technician|mechanic|technicien|técnico|tecnico|techniker|فني|تقني/i, "🔧"],
        [/business|partner|associé|socio|geschäft|شريك|رجل أعمال/i, "💼"],
        [/neighbor|voisin|vecino|vicino|nachbar|جار/i, "🏠"],
        [/family|brother|sister|daughter|son|wife|husband|frère|sœur|fille|fils|femme|mari|hermano|hija|hijo|esposa|esposo|fratello|sorella|figlia|figlio|moglie|marito|bruder|schwester|tochter|sohn|frau|mann|أخ|أخت|ابنة|ابن|زوجة|زوج/i, "👪"]
    ];
    function getEvidenceIcon(name) {
        for (const [re, icon] of EVIDENCE_ICON_MAP) { if (re.test(name)) return icon; }
        return "🔍";
    }
    function getSuspectIcon(role) {
        for (const [re, icon] of SUSPECT_ICON_MAP) { if (re.test(role)) return icon; }
        return "👤";
    }

    function playEvidenceSound() {
        if (soundMuted) return;
        try {
            const ctx = getAudioCtx();
            if (!ctx) return;
            playTone(880, ctx.currentTime, 0.12, 'sine', ctx, 0.05);
        } catch (e) { /* silent */ }
    }

    // دالة أساسية ناقصة كانت سبب اختفاء بطاقات القضايا بالكامل (ReferenceError)
    function escapeHtml(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // تحديث ترجمات مستويات الصعوبة لتشمل جميع اللغات الجديدة
    function getCaseTier(idx) { return Math.floor(idx / 5); }
    const UNLOCK_THRESHOLD = 2;

    function isCaseUnlocked(idx) {
        const tier = getCaseTier(idx);
        if (tier === 0) return true;
        const start = (tier - 1) * 5;
        let solvedInPrevTier = 0;
        for (let i = start; i < start + 5; i++) {
            if (userProfile.solvedCases.includes(i)) solvedInPrevTier++;
        }
        return solvedInPrevTier >= UNLOCK_THRESHOLD;
    }

    function renderMenu(filter) {
        activeFilter = filter;
        const list = document.getElementById('case-list');
        list.innerHTML = '';
                const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        let cases = data.cases;
        // فوضع "بدون إنترنت" (Guest/Offline)، نوريو غير أول 10 قضايا
        if (isOfflineMode()) {
            cases = cases.slice(0, 10);
        }

        cases.forEach((c, idx) => {
            const diffClass = 'diff-' + c.difficulty;
            const diffTextMap = {
                en: {easy:'Easy',medium:'Medium',hard:'Hard',extreme:'Extreme'},
                ar: {easy:'سهل',medium:'متوسط',hard:'صعب',extreme:'خبير'},
                ary: {easy:'ساهل',medium:'متوسط',hard:'صعيب',extreme:'محترف'},
                fr: {easy:'Facile',medium:'Moyen',hard:'Difficile',extreme:'Extrême'},
                es: {easy:'Fácil',medium:'Medio',hard:'Difícil',extreme:'Extremo'},
                it: {easy:'Facile',medium:'Medio',hard:'Difficile',extreme:'Estremo'},
                de: {easy:'Leicht',medium:'Mittel',hard:'Schwer',extreme:'Extrem'},
                pt: {easy:'Fácil',medium:'Médio',hard:'Difícil',extreme:'Extremo'}
            };
            const diffText = (diffTextMap[currentLang] || diffTextMap.en)[c.difficulty];

            if (filter !== 'all' && c.difficulty !== filter) return;

            const unlocked = isCaseUnlocked(idx);
            const solved = userProfile.solvedCases.includes(idx);

            const card = document.createElement('div');
            card.className = 'card card-in';
            card.style.animationDelay = (list.children.length * 0.05) + 's';
            if (!unlocked) { card.classList.add('locked'); }
            card.innerHTML = `
                <span class="tag">${escapeHtml(c.tag)}</span>
                <span class="diff-tag ${diffClass}" data-diff="${c.difficulty}">${escapeHtml(diffText)}</span>
                ${solved ? '<span style="float:right; font-size:14px;">✅</span>' : ''}
                <h4 style="margin:8px 0 6px 0; color:var(--gold);">${idx + 1}. ${escapeHtml(c.title)} ${unlocked ? '' : '🔒'}</h4>
                <p style="font-size:12.5px; color:var(--paper-dim); margin:0; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${unlocked ? escapeHtml(c.brief) : '🔒'}</p>
            `;
            if (unlocked) { card.onclick = () => openBrief(idx); }
            list.appendChild(card);
        });
    }

    function filterCases(filter, btn) {
        const bar = document.getElementById('difficulty-filter-bar');
        if (bar) bar.querySelectorAll('.btn-sm').forEach(b => b.classList.remove('active'));
        if(btn) btn.classList.add('active');
        renderMenu(filter);
    }

    const CASE_ICON_MAP = [
        [/murder|meurtre|homicídio|homicidio|omicidio|mordfall|asesinato|قتل/i, "🔪", "banner-murder"],
        [/theft|vol\b|furto|robo|diebstahl|سرقة/i, "💰", "banner-theft"],
        [/poison|empoisonnement|avvelenamento|envenenamento|envenenamiento|vergiftung|تسميم/i, "☠️", "banner-poison"],
        [/disappear|disparition|scomparsa|desaparecimento|desaparición|verschwinden|اختفاء/i, "🕵️", "banner-disappear"]
    ];
    function getCaseIcon(tag) {
        for (const [re, icon] of CASE_ICON_MAP) { if (re.test(tag)) return icon; }
        return "🔍";
    }
    function getCaseBannerClass(tag) {
        for (const [re, , cls] of CASE_ICON_MAP) { if (re.test(tag)) return cls; }
        return "";
    }

    function openBrief(idx) {
        if (!isCaseUnlocked(idx)) return;
        currentCaseIndex = idx;
        userProfile.lastCaseIndex = idx;
        saveUserProfile();
        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const c = data.cases[idx];
        document.getElementById('brief-tag').textContent = c.tag;
        document.getElementById('brief-title').textContent = c.title;
        document.getElementById('brief-desc').textContent = c.brief;
        document.getElementById('brief-victim').textContent = c.victim;
        document.getElementById('brief-banner-icon').textContent = getCaseIcon(c.tag);
        const bannerEl = document.getElementById('brief-visual-banner');
        if (bannerEl) bannerEl.className = 'visual-banner ' + getCaseBannerClass(c.tag);
        const timedToggle = document.getElementById('brief-timed-toggle');
        if (timedToggle) timedToggle.checked = false;
        const ttsBtn = document.getElementById('brief-tts-btn');
        if (ttsBtn) ttsBtn.style.display = accessSettings.ttsEnabled ? 'inline-flex' : 'none';
        show('scr-brief');
    }

    function startInvestigation() {
        if (!raceActive && !checkEnergyAllowed()) {
            alert(txx('energyExhausted'));
            return;
        }
        showLoader();
        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const c = data.cases[currentCaseIndex];
        document.getElementById('inv-case-title').textContent = c.title;
        caseStartTime = Date.now();
        if (!raceActive) consumeEnergyUsage();
        ensureShuffledCulprit(currentCaseIndex, c);

        const timedToggle = document.getElementById('brief-timed-toggle');
        const timerEl = document.getElementById('inv-timer');
        stopCaseTimer();
        if (timedToggle && timedToggle.checked) {
            if (timerEl) timerEl.style.display = 'inline';
            const seconds = TIMER_SECONDS_BY_DIFFICULTY[c.difficulty] ?? 600;
            startCaseTimer(seconds);
        } else {
            if (timerEl) timerEl.style.display = 'none';
        }
        updateHintCounterDisplay();

        // Render Evidence
        const evList = document.getElementById('evidence-list');
        evList.innerHTML = '';
        c.evidence.forEach((ev, i) => {
            const div = document.createElement('div');
            div.className = 'pick';
            div.innerHTML = `<b>${getEvidenceIcon(ev.name)} ${escapeHtml(ev.name)}</b>`;
            div.onclick = () => openEvidenceModal(ev.name, ev.desc);
            evList.appendChild(div);
        });

        // Render Suspects
        const susList = document.getElementById('suspects-list');
        susList.innerHTML = '';
        c.suspects.forEach((sus, i) => {
            const div = document.createElement('div');
            div.className = 'pick';
            div.innerHTML = `<b>${getSuspectIcon(sus.role)} ${escapeHtml(sus.name)}</b> <span style="font-size:11px; color:var(--paper-dim);">(${escapeHtml(sus.role)})</span>`;
            div.onclick = () => openSuspectModal(i);
            susList.appendChild(div);
        });

        show('scr-investigation');
        hideLoader();
    }

    function openEvidenceModal(name, desc) {
        document.getElementById('modal-ev-name').textContent = name;
        document.getElementById('modal-ev-desc').textContent = desc;
        document.getElementById('modal-evidence').classList.add('active');
        playEvidenceSound();
    }

    function openSuspectModal(susIndex) {
        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const c = data.cases[currentCaseIndex];
        const sus = c.suspects[susIndex];
        document.getElementById('modal-sus-name').textContent = sus.name;
        document.getElementById('modal-sus-role').textContent = sus.role;
        document.getElementById('modal-sus-alibi').textContent = sus.alibi;

        const qDiv = document.getElementById('modal-sus-questions');
        qDiv.innerHTML = '';
        sus.qs.forEach((qa, qIdx) => {
            const btn = document.createElement('button');
            btn.className = 'q-btn';
            btn.textContent = qa.q;
            const qKey = `${currentCaseIndex}_${susIndex}_${qIdx}`;
            if (askedQuestions[qKey]) {
                btn.classList.add('asked');
                const ansDiv = document.createElement('div');
                ansDiv.className = 'ans';
                ansDiv.style.marginTop = '6px';
                ansDiv.innerHTML = `<b>${escapeHtml(data.answerLabel)}</b> ${escapeHtml(qa.a)}`;
                btn.appendChild(ansDiv);
            }
            btn.onclick = () => {
                askedQuestions[qKey] = true;
                btn.classList.add('asked');
                if (!btn.querySelector('.ans')) {
                    const ansDiv = document.createElement('div');
                    ansDiv.className = 'ans';
                    ansDiv.style.marginTop = '6px';
                    ansDiv.innerHTML = `<b>${escapeHtml(data.answerLabel)}</b> ${escapeHtml(qa.a)}`;
                    btn.appendChild(ansDiv);
                }
                playClickSound();
            };
            qDiv.appendChild(btn);
        });

        document.getElementById('modal-suspect').classList.add('active');
        playClickSound();
    }

    function closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        playClickSound();
    }

    function openAccusationModal() {
        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const c = data.cases[currentCaseIndex];
        const list = document.getElementById('accuse-suspects-list');
        list.innerHTML = '';
        selectedSuspect = null;

        c.suspects.forEach((sus, idx) => {
            const div = document.createElement('div');
            div.className = 'pick';
            div.innerHTML = `<b>${getSuspectIcon(sus.role)} ${escapeHtml(sus.name)}</b> <span style="font-size:11px; color:var(--paper-dim);">(${escapeHtml(sus.role)})</span>`;
            div.onclick = () => {
                document.querySelectorAll('#accuse-suspects-list .pick').forEach(p => p.classList.remove('selected'));
                div.classList.add('selected');
                selectedSuspect = sus.name;
                playClickSound();
            };
            list.appendChild(div);
        });

        document.getElementById('modal-accuse').classList.add('active');
        playClickSound();
    }

    function submitAccusation() {
        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        if (!selectedSuspect) {
            alert(data.selectSuspectAlert);
            return;
        }
        closeModal('modal-accuse');
        const c = data.cases[currentCaseIndex];
        const effectiveCulprit = shuffledCulprit[currentCaseIndex] || c.culprit;
        const isCorrect = selectedSuspect === effectiveCulprit;
        stopCaseTimer();
        const elapsedMs = Date.now() - (caseStartTime || Date.now());

        const resIcon = document.getElementById('res-icon');
        const resTitle = document.getElementById('res-title');
        const resDesc = document.getElementById('res-desc');

        userProfile.attempts += 1;

        let explainText = c.explain;
        if (shuffledCulprit[currentCaseIndex]) {
            const susObj = c.suspects.find(s => s.name === effectiveCulprit);
            explainText = txx('shuffledExplain').replace('{name}', effectiveCulprit).replace('{role}', susObj ? susObj.role : '');
        }

        if (isCorrect) {
            resIcon.textContent = "🏆";
            resTitle.textContent = data.resultSolvedTitle;
            resTitle.style.color = "var(--teal)";
            resDesc.innerHTML = `${escapeHtml(data.resultSolvedDesc)}<br><br><b>${escapeHtml(data.caseExplanationLabel)}</b><br>${escapeHtml(explainText)}`;
            const alreadySolved = userProfile.solvedCases.includes(currentCaseIndex);
            if (!alreadySolved) {
                userProfile.solvedCases.push(currentCaseIndex);
            }
            userProfile.solved = userProfile.solvedCases.length;
            userProfile.correctAttempts += 1;
            userProfile.streakCurrent += 1;
            if (userProfile.streakCurrent > userProfile.streakBest) userProfile.streakBest = userProfile.streakCurrent;
            if (!getHintsUsed(currentCaseIndex)) userProfile.noHintSolve = true;
            playSuccessSound();
        } else {
            resIcon.textContent = "❌";
            resTitle.textContent = data.resultWrongTitle;
            resTitle.style.color = "var(--blood)";
            resDesc.innerHTML = `${escapeHtml(data.resultWrongDesc)}<br><br><b>${escapeHtml(data.caseExplanationLabel)}</b><br>${escapeHtml(explainText)}`;
            userProfile.streakCurrent = 0;
            playFailSound();
        }

        if (!Array.isArray(userProfile.history)) userProfile.history = [];
        userProfile.history.push({ t: Date.now(), caseIdx: currentCaseIndex, correct: isCorrect, hints: getHintsUsed(currentCaseIndex), ms: elapsedMs });
        if (userProfile.history.length > 500) userProfile.history = userProfile.history.slice(-500);

        const previouslyUnlocked = getUnlockedAchievementIds();
        if (userProfile.lastCaseIndex === currentCaseIndex) { userProfile.lastCaseIndex = null; }
        userProfile.lastPlayedDate = todayStr();
        saveUserProfile();
        loadUserData();
        show('scr-result');
        if (isCorrect) {
            const newlyUnlocked = getUnlockedAchievementIds().filter(id => !previouslyUnlocked.includes(id));
            newlyUnlocked.forEach((id, i) => setTimeout(() => showAchievementToast(id), 400 + i * 900));
        }

        if (isCorrect) {
            void syncLeaderboardEntry();
        }

        if (raceActive) {
            handleRaceSubmission(isCorrect, elapsedMs);
        }
    }

    function highlightRaceSection() {
        setTimeout(() => {
            const el = document.querySelector('#modal-mp h4#txt-race-title');
            if (el) {
                el.style.transition = 'color .3s';
                el.style.color = 'var(--gold)';
                setTimeout(() => el.style.color = '', 1500);
            }
        }, 300);
    }

    async function syncLeaderboardEntry() {
        const uid = firebaseAuth.currentUser?.uid;
        if (!uid) return;
        const solved = userProfile.solvedCases.length;
        const hintsArr = Object.values(userProfile.hintsUsedByCase || {});
        const avgHints = hintsArr.length ? (hintsArr.reduce((a, b) => a + b, 0) / hintsArr.length) : 0;
        const fastest = (userProfile.history || [])
            .filter(h => h.correct).map(h => h.ms)
            .reduce((min, ms) => Math.min(min, ms), Infinity);

        try {
            await setDoc(doc(db, 'leaderboard', uid), {
                displayName: userProfile.name || 'Detective',
                casesSolved: solved,
                avgHints: Math.round(avgHints * 10) / 10,
                fastestMs: fastest === Infinity ? null : fastest,
                updatedAt: serverTimestamp()
            });
        } catch (e) {
            console.error('Leaderboard sync failed:', e);
        }
    }

    async function openLeaderboardModal() {
        document.getElementById('modal-leaderboard').classList.add('active');
        const listEl = document.getElementById('lb-list');
        const loadingEl = document.getElementById('lb-loading');
        listEl.innerHTML = '';
        loadingEl.style.display = 'block';
        try {
            const q = query(collection(db, 'leaderboard'), orderBy('casesSolved', 'desc'), limit(20));
            const snap = await getDocs(q);
            loadingEl.style.display = 'none';
            let rank = 1;
            snap.forEach(d => {
                const data = d.data();
                const row = document.createElement('div');
                row.style.cssText = 'display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--line); font-size:13px;';
                row.innerHTML = `<span>#${rank} ${escapeHtml(data.displayName)}</span><span style="color:var(--gold);">${data.casesSolved} قضية</span>`;
                listEl.appendChild(row);
                rank++;
            });
        } catch (e) {
            loadingEl.textContent = 'تعذر تحميل القائمة، تحقق من الاتصال.';
        }
    }

    function openNotesModal() {
        document.getElementById('modal-notes').classList.add('active');
        playClickSound();
    }

    function saveNotes() {
        closeModal('modal-notes');
        playClickSound();
    }

    function openHintsModal() {
        const used = getHintsUsed(currentCaseIndex);
        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        if (used >= getMaxHintsForCase(currentCaseIndex)) {
            document.getElementById('hint-content').textContent = txx('noMoreHints') || "No more hints left for this case.";
            document.getElementById('modal-hint').classList.add('active');
            playClickSound();
            return;
        }
        const c = data.cases[currentCaseIndex];
        const randomHint = c.hints[Math.min(used, c.hints.length - 1)];
        document.getElementById('hint-content').textContent = randomHint;
        document.getElementById('modal-hint').classList.add('active');
        userProfile.hintsUsedByCase[currentCaseIndex] = used + 1;
        saveUserProfile();
        updateHintCounterDisplay();
        playClickSound();
    }

    function restartCase() {
        startInvestigation();
    }

    function openProfileModal() {
        document.getElementById('modal-profile').classList.add('active');
        playClickSound();
    }

    function closeProfileModal() {
        document.getElementById('modal-profile').classList.remove('active');
        playClickSound();
    }

    function saveProfile() {
        userProfile.name = document.getElementById('pro-username').value || userProfile.name;
        // Note: rank is auto-computed from progress (see computeRank()) — #pro-rank is a
        // read-only display <div>, not an editable field, so it's never written back here.
        saveUserProfile();
        closeProfileModal();
        playClickSound();
    }

    function openMultiplayerModal() {
        document.getElementById('modal-mp').classList.add('active');
        playClickSound();
    }

    function closeMultiplayerModal() {
        document.getElementById('modal-mp').classList.remove('active');
        playClickSound();
    }

    // --- Voice notes (replaces the old speech-to-text mic) ---
    // Why: Web Speech API (webkitSpeechRecognition) has no Android WebView support, so
    // the old mic button never worked in the built app — only in a desktop browser preview.
    // MediaRecorder + getUserMedia, used below, IS supported in Android WebView (it's the
    // same permission the live voice-call feature already relies on), so this actually
    // works on a real device: tap the mic to record, tap again to stop and send it as a
    // playable voice message in the chat.
    let voiceRecorder = null;
    let voiceChunks = [];
    let voiceRecordStream = null;
    let voiceRecordStartedAt = 0;
    let voiceRecordTimeout = null;
    const VOICE_NOTE_MAX_MS = 60000; // 60s safety cap so a forgotten recording can't run forever

    function toggleVoiceInput() {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const micBtn = document.getElementById('mic-btn');

        // Already recording -> stop. onstop below packages and sends the note.
        if (voiceRecorder && voiceRecorder.state === 'recording') {
            voiceRecorder.stop();
            return;
        }

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === 'undefined') {
            alert(t.micNotSupported);
            return;
        }

        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            voiceRecordStream = stream;
            voiceChunks = [];
            let recorder;
            try {
                recorder = new MediaRecorder(stream);
            } catch (e) {
                stream.getTracks().forEach((tr) => tr.stop());
                alert(t.micNotSupported);
                return;
            }
            voiceRecorder = recorder;
            recorder.ondataavailable = (e) => { if (e.data && e.data.size > 0) voiceChunks.push(e.data); };
            recorder.onstop = () => {
                if (voiceRecordTimeout) { clearTimeout(voiceRecordTimeout); voiceRecordTimeout = null; }
                if (micBtn) { micBtn.classList.remove('mic-active'); micBtn.title = t.micTitle; }
                if (voiceRecordStream) { voiceRecordStream.getTracks().forEach((tr) => tr.stop()); voiceRecordStream = null; }
                const durationSec = Math.max(1, Math.round((Date.now() - voiceRecordStartedAt) / 1000));
                const chunks = voiceChunks;
                voiceChunks = [];
                voiceRecorder = null;
                if (!chunks.length) return;
                const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
                const reader = new FileReader();
                reader.onload = () => sendVoiceNote(reader.result, durationSec);
                reader.readAsDataURL(blob);
            };
            voiceRecordStartedAt = Date.now();
            recorder.start();
            if (micBtn) { micBtn.classList.add('mic-active'); micBtn.title = t.micListening; }
            playClickSound();
            voiceRecordTimeout = setTimeout(() => { if (recorder.state === 'recording') recorder.stop(); }, VOICE_NOTE_MAX_MS);
        }).catch((err) => {
            if (err && err.name === 'NotAllowedError') alert(t.micPermissionDenied);
            else alert(t.micNotSupported);
        });
    }

    function sendVoiceNote(dataUrl, durationSec) {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const body = document.getElementById('chat-body');
        if (body) {
            body.dataset.populated = 'true';
            appendVoiceNoteBubble(userProfile.name, dataUrl, durationSec, true);
            body.scrollTop = body.scrollHeight;
        }
        if (mpConnection && mpConnection.open) {
            try { mpConnection.send({ type: 'voice_note', name: userProfile.name, audio: dataUrl, durationSec: durationSec }); } catch (e) {}
        } else {
            mpAppendChatSystemMessage(t.micNoFriend);
        }
    }

    function appendVoiceNoteBubble(name, dataUrl, durationSec, isMe) {
        const body = document.getElementById('chat-body');
        if (!body) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = isMe ? 'chat-msg me' : 'chat-msg';
        const b = document.createElement('b');
        b.textContent = name + ': ';
        msgDiv.appendChild(b);
        msgDiv.appendChild(document.createElement('br'));
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = dataUrl;
        msgDiv.appendChild(audio);
        body.appendChild(msgDiv);
    }

    function toggleChatWidget() {
        const widget = document.getElementById('chat-widget');
        if (widget) {
            const opening = widget.style.display !== 'block';
            widget.style.display = opening ? 'block' : 'none';
            if (opening && widget.style.left) { clampWidgetPosition(widget); widget.style.left = widgetLeft + 'px'; widget.style.top = widgetTop + 'px'; }
            playClickSound();
        }
    }

    function sendChatMessage() {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const input = document.getElementById('chat-input');
        const body = document.getElementById('chat-body');
        if (!input || !input.value.trim()) return;
        body.dataset.populated = 'true';
        const msgText = input.value.trim();
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg me';
        const b = document.createElement('b');
        b.textContent = userProfile.name + ': ';
        msgDiv.appendChild(b);
        msgDiv.appendChild(document.createTextNode(msgText));
        body.appendChild(msgDiv);
        input.value = '';
        body.scrollTop = body.scrollHeight;
        playClickSound();
        if (mpConnection && mpConnection.open) {
            // Real friend is connected: send the message live over WebRTC.
            try {
                mpConnection.send({ name: userProfile.name, text: msgText });
            } catch (e) {}
            return;
        }
        // No real friend connected: fall back to the offline demo bot.
        setTimeout(() => {
            const replies = t.botReplies;
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            const replyDiv = document.createElement('div');
            replyDiv.className = 'chat-msg';
            const rb = document.createElement('b');
            rb.textContent = t.botName + ': ';
            replyDiv.appendChild(rb);
            replyDiv.appendChild(document.createTextNode(randomReply));
            body.appendChild(replyDiv);
            body.scrollTop = body.scrollHeight;
        }, 1000);
    }

    // --- Real multiplayer (WebRTC via PeerJS) ---
    // Two real devices connect directly to each other once both have internet
    // access (WiFi, *3, or *6 data plan). PeerJS only handles the initial
    // handshake (signaling); the actual chat data flows peer-to-peer.
    let mpPeer = null;
    let mpConnection = null;
    const MP_ROOM_PREFIX = 'blackfile-detective-room-';

    // --- Live voice call between the two connected friends (WebRTC audio via PeerJS) ---
    let mpLocalStream = null;
    let mpCall = null;
    let mpCallActive = false;

    function mpRoomIdFromCode(code) {
        return MP_ROOM_PREFIX + code.trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
    }

    function mpAttachCallHandler(peer) {
        // Whoever calls us, we only auto-answer if we're already in a room with
        // that friend — this only fires after a private room code was shared,
        // so it's expected, not a random stranger cold-calling.
        peer.on('call', (incomingCall) => {
            if (mpCall) { try { incomingCall.close(); } catch (e) {} return; }
            mpGetLocalStream().then((stream) => {
                mpCall = incomingCall;
                incomingCall.answer(stream);
                mpBindCallEvents(incomingCall);
            }).catch(() => {
                // Mic permission denied/unavailable — let it ring out.
            });
        });
    }

    function mpGetLocalStream() {
        if (mpLocalStream) return Promise.resolve(mpLocalStream);
        return navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then((stream) => { mpLocalStream = stream; return stream; });
    }

    function mpBindCallEvents(call) {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const statusBar = document.getElementById('call-status-bar');
        const callBtn = document.getElementById('call-btn');
        call.on('stream', (remoteStream) => {
            const audioEl = document.getElementById('mp-remote-audio');
            if (audioEl) { audioEl.srcObject = remoteStream; audioEl.play().catch(() => {}); }
            mpCallActive = true;
            if (callBtn) { callBtn.classList.add('mic-active'); callBtn.textContent = '📵'; }
            if (statusBar) { statusBar.style.display = 'block'; statusBar.textContent = t.callActive || '🔊 Voice call connected'; }
        });
        call.on('close', () => mpEndVoiceCall(false));
        call.on('error', () => mpEndVoiceCall(false));
    }

    function toggleVoiceCall() {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        playClickSound();
        if (mpCallActive || mpCall) {
            mpEndVoiceCall(true);
            return;
        }
        if (!mpConnection || !mpConnection.open) return;
        const statusBar = document.getElementById('call-status-bar');
        if (statusBar) { statusBar.style.display = 'block'; statusBar.textContent = t.callConnecting || '📞 Calling your friend…'; }
        mpGetLocalStream().then((stream) => {
            mpCall = mpPeer.call(mpConnection.peer, stream);
            mpBindCallEvents(mpCall);
        }).catch(() => {
            if (statusBar) statusBar.textContent = t.micPermissionDenied || 'Microphone permission was denied.';
        });
    }

    function mpEndVoiceCall(userInitiated) {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        if (mpCall) { try { mpCall.close(); } catch (e) {} mpCall = null; }
        mpCallActive = false;
        const callBtn = document.getElementById('call-btn');
        const statusBar = document.getElementById('call-status-bar');
        if (callBtn) { callBtn.classList.remove('mic-active'); callBtn.textContent = '📞'; }
        if (statusBar) {
            if (userInitiated) { statusBar.style.display = 'none'; statusBar.textContent = ''; }
            else { statusBar.textContent = t.callEnded || 'Call ended.'; }
        }
    }

    function mpStopLocalStream() {
        if (mpLocalStream) {
            try { mpLocalStream.getTracks().forEach(track => track.stop()); } catch (e) {}
            mpLocalStream = null;
        }
    }

    function mpTeardownPeer() {
        if (mpJoinRetryTimer) { clearTimeout(mpJoinRetryTimer); mpJoinRetryTimer = null; }
        mpEndVoiceCall(true);
        mpStopLocalStream();
        if (mpConnection) { try { mpConnection.close(); } catch(e) {} mpConnection = null; }
        if (mpPeer) { try { mpPeer.destroy(); } catch(e) {} mpPeer = null; }
        const callBtn = document.getElementById('call-btn');
        if (callBtn) callBtn.style.display = 'none';
    }

    function mpSetupConnectionHandlers(conn, statusBox, t) {
        mpConnection = conn;
        conn.on('open', () => {
            statusBox.textContent = t.roomFriendJoined;
            mpUpdateChatDisclaimer(true);
            const widget = document.getElementById('chat-widget');
            if (widget) widget.style.display = 'block';
            const callBtn = document.getElementById('call-btn');
            if (callBtn) callBtn.style.display = 'inline-flex';
            mpAppendChatSystemMessage(t.friendJoinedMsg);
            playClickSound();
        });
        conn.on('data', (data) => {
            if (data && data.type === 'voice_note') {
                const body = document.getElementById('chat-body');
                if (body) {
                    body.dataset.populated = 'true';
                    appendVoiceNoteBubble(data.name || 'Friend', data.audio, data.durationSec, false);
                    body.scrollTop = body.scrollHeight;
                }
                return;
            }
            if (data && data.type) {
                handleRaceMessage(data);
                return;
            }
            mpAppendChatMessage(data && data.name ? data.name : 'Friend', data && data.text ? data.text : '', false);
        });
        conn.on('close', () => {
            statusBox.textContent = t.roomDisconnected;
            mpUpdateChatDisclaimer(false);
            mpConnection = null;
            mpEndVoiceCall(true);
            mpStopLocalStream();
            const callBtn = document.getElementById('call-btn');
            if (callBtn) callBtn.style.display = 'none';
        });
        conn.on('error', () => {
            statusBox.textContent = t.roomConnectFailed;
            mpUpdateChatDisclaimer(false);
        });
    }

    function mpUpdateChatDisclaimer(connected) {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const el = document.getElementById('txt-chat-disclaimer');
        if (!el) return;
        el.textContent = connected ? t.chatConnectedDisclaimer : t.chatDisclaimer;
    }

    function mpAppendChatSystemMessage(text) {
        const body = document.getElementById('chat-body');
        if (!body || !text) return;
        body.dataset.populated = 'true';
        const div = document.createElement('div');
        div.className = 'chat-msg';
        div.style.opacity = '0.75';
        div.style.fontStyle = 'italic';
        div.textContent = text;
        body.appendChild(div);
        body.scrollTop = body.scrollHeight;
    }

    function mpAppendChatMessage(name, text, isMe) {
        const body = document.getElementById('chat-body');
        if (!body || !text) return;
        body.dataset.populated = 'true';
        const msgDiv = document.createElement('div');
        msgDiv.className = isMe ? 'chat-msg me' : 'chat-msg';
        const b = document.createElement('b');
        b.textContent = name + ': ';
        msgDiv.appendChild(b);
        msgDiv.appendChild(document.createTextNode(text));
        body.appendChild(msgDiv);
        body.scrollTop = body.scrollHeight;
    }

    function createMultiplayerRoom() {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const statusBox = document.getElementById('mp-status-box');
        const codeInput = document.getElementById('mp-roomcode');
        if (typeof Peer === 'undefined') {
            statusBox.textContent = t.roomConnectFailed;
            return;
        }
        mpTeardownPeer();
        playClickSound();
        statusBox.textContent = t.roomCreating;
        const code = 'CASE-' + Math.floor(1000 + Math.random() * 9000);
        mpPeer = new Peer(mpRoomIdFromCode(code));
        mpAttachCallHandler(mpPeer);
        mpPeer.on('open', () => {
            codeInput.value = code;
            statusBox.textContent = t.roomWaiting.replace('{code}', code);
        });
        mpPeer.on('connection', (conn) => {
            mpSetupConnectionHandlers(conn, statusBox, t);
        });
        mpPeer.on('error', () => {
            statusBox.textContent = t.roomConnectFailed;
        });
    }

    function leaveMultiplayerRoom() {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const statusBox = document.getElementById('mp-status-box');
        const codeInput = document.getElementById('mp-roomcode');
        const wasConnected = !!(mpConnection && mpConnection.open);
        mpTeardownPeer();
        if (codeInput) codeInput.value = '';
        if (statusBox) statusBox.textContent = t.roomLeft;
        mpUpdateChatDisclaimer(false);
        if (wasConnected) mpAppendChatSystemMessage(t.roomLeft);
        playClickSound();
    }

    let mpJoinRetryTimer = null;

    function joinMultiplayerRoom() {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const roomCode = document.getElementById('mp-roomcode').value.trim();
        const statusBox = document.getElementById('mp-status-box');
        if (!roomCode) {
            statusBox.textContent = t.roomEnterCode;
            return;
        }
        if (typeof Peer === 'undefined') {
            statusBox.textContent = t.roomConnectFailed;
            return;
        }
        mpTeardownPeer();
        playClickSound();
        mpAttemptJoin(roomCode, statusBox, t, 3);
    }

    function mpAttemptJoin(roomCode, statusBox, t, retriesLeft) {
        statusBox.textContent = t.roomConnecting.replace('{code}', roomCode);
        mpPeer = new Peer();
        mpAttachCallHandler(mpPeer);
        mpPeer.on('open', () => {
            const conn = mpPeer.connect(mpRoomIdFromCode(roomCode), { reliable: true });
            mpSetupConnectionHandlers(conn, statusBox, t);
        });
        mpPeer.on('error', (err) => {
            // "peer-unavailable" usually just means the host hasn't finished
            // registering their room yet — worth a couple of quick retries
            // instead of failing immediately.
            const canRetry = err && err.type === 'peer-unavailable' && retriesLeft > 0;
            if (canRetry) {
                statusBox.textContent = t.roomRetrying.replace('{n}', retriesLeft);
                if (mpPeer) { try { mpPeer.destroy(); } catch(e) {} mpPeer = null; }
                mpJoinRetryTimer = setTimeout(() => mpAttemptJoin(roomCode, statusBox, t, retriesLeft - 1), 1800);
            } else {
                statusBox.textContent = t.roomConnectFailed;
            }
        });
    }

    function showOnboardingIfNeeded() {
        try {
            if (localStorage.getItem('tf_onboarded') === 'true') return;
        } catch (e) { /* if storage blocked, show once per session anyway */ }
        const modal = document.getElementById('modal-onboard');
        if (modal) modal.classList.add('active');
    }

    function closeOnboarding() {
        const modal = document.getElementById('modal-onboard');
        if (modal) modal.classList.remove('active');
        try { localStorage.setItem('tf_onboarded', 'true'); } catch (e) { /* ignore */ }
        playClickSound();
    }

    let isDragging = false, widgetStartX = 0, widgetStartY = 0, widgetLeft = 0, widgetTop = 0;
        window.addEventListener('DOMContentLoaded', () => {
        // إصلاح: كان body-tag بلا dir attribute عند أول تحميل، فكانت
        // selectors ديال CSS (body[dir="ltr"]/[dir="rtl"]) ما كتخدمش
        // حتى تبدل اللغة — هادشي كان سبب تداخل settings/profile.
        document.getElementById('body-tag').setAttribute('dir', (currentLang === 'ar' || currentLang === 'ary') ? 'rtl' : 'ltr');
        loadUserData();
        updateUITexts();
        renderMenu('all');
        showOnboardingIfNeeded();
        applyAccessSettings();
        updateExtraUITexts();
        setupDailyReminderCheck();
        const muteBtn = document.getElementById('mute-btn');
        if (muteBtn) muteBtn.textContent = soundMuted ? '🔇' : '🔊';
        const header = document.getElementById('chat-header');
        const widget = document.getElementById('chat-widget');
        if (header && widget) {
            header.addEventListener('mousedown', dragStart);
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', dragEnd);
            header.addEventListener('touchstart', dragStart, {passive: true});
            document.addEventListener('touchmove', drag, {passive: true});
            document.addEventListener('touchend', dragEnd);
            window.addEventListener('resize', () => {
                if (widget.style.left) { clampWidgetPosition(widget); widget.style.left = widgetLeft + 'px'; widget.style.top = widgetTop + 'px'; }
            });
        }
    });

    function dragStart(e) {
        isDragging = true;
        const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        const widget = document.getElementById('chat-widget');
        const rect = widget.getBoundingClientRect();
        widgetStartX = clientX - rect.left;
        widgetStartY = clientY - rect.top;
    }

    function drag(e) {
        if (!isDragging) return;
        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        const widget = document.getElementById('chat-widget');
        if (widget) {
            widget.style.right = 'auto';
            widget.style.bottom = 'auto';
            widgetLeft = clientX - widgetStartX;
            widgetTop = clientY - widgetStartY;
            clampWidgetPosition(widget);
            widget.style.left = widgetLeft + 'px';
            widget.style.top = widgetTop + 'px';
        }
    }

    // Keeps the chat widget's top-left corner within the visible viewport so
    // it can never be dragged fully off-screen (e.g. after a window resize
    // or a phone rotation) and become unreachable.
    function clampWidgetPosition(widget) {
        const margin = 4;
        const maxLeft = Math.max(margin, window.innerWidth - widget.offsetWidth - margin);
        const maxTop = Math.max(margin, window.innerHeight - widget.offsetHeight - margin);
        widgetLeft = Math.min(Math.max(widgetLeft, margin), maxLeft);
        widgetTop = Math.min(Math.max(widgetTop, margin), maxTop);
    }

    function dragEnd() {
        isDragging = false;
    }

    /* =========================================================================
       NEW FEATURES MODULE
       - Accessibility (font size, high contrast, color-blind, TTS)
       - Detailed stats + accuracy chart + weekly report card
       - Connected story ("Secret File")
       - Replay shuffle for solved cases
       - Optional daily energy/attempts limit
       - Daily reminder (in-tab notification)
       - Quick Challenge Race mode over the existing *6/WebRTC connection
       ========================================================================= */

    // ---- small text dictionary for the new UI (falls back to English) ----
    const EXTRA_TRANGS = {
        en: {
            listen: "Listen", energyExhausted: "You've used all your investigations for today. Come back tomorrow, detective!",
            shuffledExplain: "This is a replay — the evidence was reshuffled. Based on this run's clues, the trail leads to {name} ({role}).",
            statsTitle: "📊 Detailed Detective Statistics", statCasesSolved: "Cases Solved", statAvgHints: "Avg. Hints Used", statFastest: "Fastest Solve", statAccuracy: "Overall Accuracy",
            noAttempts: "No attempts yet", chartEmpty: "Solve a few cases to see your accuracy trend here.",
            reportPeriod: "Last 7 Days", reportSolved: "Solved", reportAttempts: "Attempts", reportAccuracy: "Accuracy", reportRank: "Rank",
            storyLocked: "🔒 Keep investigating to unlock this part of the file.",
            energyRemaining: "{n} investigations left today",
            raceWaitingFriend: "Connect with a friend above first, then start the race.",
            raceInvited: "Race sent! Waiting for your friend to accept...",
            raceReceived: "Your friend challenged you to a race! Opening the case now...",
            raceYouFinished: "You solved it! Waiting to see if your friend finishes...",
            raceYouWon: "🏆 You won the race! You solved it first.",
            raceYouLost: "😞 Your friend solved it first this time.",
            raceOpponentWrong: "Your friend made a wrong guess — keep going!",
            raceOpponentFinishedWait: "Your friend finished! Solve it to compare times...",
            reminderEnabled: "Daily reminder enabled (while this tab stays open).",
            reminderDenied: "Notification permission was denied.",
            reminderMsg: "🕵️ A new case is waiting for you, detective!",
            statsBtnLabel: "📊 Stats", storyBtnLabel: "📖 Secret File", accessBtnLabel: "⚙️ Accessibility", settingsTitle: "⚙️ Settings",
            statsBackLabel: "← Back to Archives", statsChartTitle: "Accuracy Trend (recent attempts)",
            reportTitle: "🗞️ Weekly Detective Report Card", reportDesc: "A shareable summary of your last 7 days of investigation.",
            reportDownload: "⬇ Download Image", reportShare: "📤 Share",
            storyBackLabel: "← Back to Archives", storyTitle: "📖 The Secret File",
            storyDesc: "A hidden thread runs beneath these 20 cases. Solve more cases to uncover it.",
            accessTitle: "⚙️ Accessibility & Comfort", accessFontSize: "Text Size", accessContrast: "High Contrast Mode",
            accessCB: "Color-blind Friendly Mode (adds icons/shapes to difficulty tags)",
            accessTTS: "Enable Read-Aloud (Text-to-Speech) buttons",
            accessEnergy: "Limited Daily Attempts Mode (optional challenge)", accessEnergyLimit: "Daily case limit:",
            accessReminderLabel: "Daily Reminder",
            accessReminderDesc: "Get a browser notification once a day (while this tab is open) reminding you to keep investigating.",
            accessReminderEnable: "Enable daily reminder", accessClose: "Done",
            raceTitle: "🏁 Quick Challenge (Race)",
            raceDesc: "Once connected, race your friend to solve the same case first — over the same connection above.",
            raceStart: "🏁 Start Quick Challenge",
            saveWarningMsg: "⚠️ Your progress can't be saved right now (private browsing or storage blocked). Keep playing, but it may not be kept.",
            timeUpTitle: "⏰ Time's Up!", timeUpDesc: "You ran out of time for this Timed Challenge — the case is marked as unsolved.",
            noMoreHints: "You've used all your hints for this case — time to trust your instincts, detective!",
            reportFooter: "The Black File — Detective Report Card"
        },
        ar: {
            listen: "استمع", energyExhausted: "استعملتي كل محاولاتك ديال اليوم. ارجع غدا يا محقق!",
            shuffledExplain: "هادي إعادة لعب — الأدلة تبدلات. حسب معطيات هاد الجولة، الخيط كيوصل ل{name} ({role}).",
            statsTitle: "📊 إحصائيات المحقق المفصّلة", statCasesSolved: "القضايا المحلولة", statAvgHints: "متوسط التلميحات", statFastest: "أسرع حل", statAccuracy: "الدقة الإجمالية",
            noAttempts: "مازال ما كاينة محاولات", chartEmpty: "حل شي قضايا باش يبان ليك تطور الدقة هنا.",
            reportPeriod: "آخر 7 أيام", reportSolved: "محلولة", reportAttempts: "محاولات", reportAccuracy: "الدقة", reportRank: "الرتبة",
            storyLocked: "🔒 كمّل التحقيق باش تفتح هاد الجزء من الملف.",
            energyRemaining: "باقي ليك {n} تحقيقات اليوم",
            raceWaitingFriend: "قوّد الاتصال بصاحبك أولا، من بعد بدا السباق.",
            raceInvited: "تصيفط السباق! كنتسناو صاحبك يقبل...",
            raceReceived: "صاحبك تحداك فسباق! كنحلو القضية دابا...",
            raceYouFinished: "حليتيها! كنتسناو نشوفو واش صاحبك غادي يكمل...",
            raceYouWon: "🏆 ربحتي السباق! حليتيها قبل صاحبك.",
            raceYouLost: "😞 صاحبك حلها قبلك هاد المرة.",
            raceOpponentWrong: "صاحبك غلط فالتخمين — كمّل!",
            raceOpponentFinishedWait: "صاحبك سالا! حل القضية باش نقارنو الوقت...",
            reminderEnabled: "التذكير اليومي متفعل (ماداما التبويب مفتوح).",
            reminderDenied: "تم رفض إذن الإشعارات.",
            reminderMsg: "🕵️ قضية جديدة كتستناك أيها المحقق!",
            statsBtnLabel: "📊 إحصائيات", storyBtnLabel: "📖 الملف السري", accessBtnLabel: "⚙️ الوصولية", settingsTitle: "⚙️ الإعدادات",
            statsBackLabel: "← رجوع للأرشيف", statsChartTitle: "تطور الدقة (آخر المحاولات)",
            reportTitle: "🗞️ بطاقة تقرير المحقق الأسبوعية", reportDesc: "ملخص قابل للمشاركة لآخر 7 أيام من التحقيق ديالك.",
            reportDownload: "⬇ تحميل الصورة", reportShare: "📤 مشاركة",
            storyBackLabel: "← رجوع للأرشيف", storyTitle: "📖 الملف السري",
            storyDesc: "كاين خيط سردي خفي تحت هاد الـ20 قضية. حل قضايا أكثر باش تكتشفو.",
            accessTitle: "⚙️ الوصولية والراحة", accessFontSize: "حجم النص", accessContrast: "وضع التباين العالي",
            accessCB: "وضع صديق لعمى الألوان (كيزيد رموز/أشكال فوق تاغات الصعوبة)",
            accessTTS: "تفعيل أزرار القراءة الصوتية (Text-to-Speech)",
            accessEnergy: "وضع المحاولات اليومية المحدودة (تحدي اختياري)", accessEnergyLimit: "الحد اليومي للقضايا:",
            accessReminderLabel: "التذكير اليومي",
            accessReminderDesc: "خد إشعار من المتصفح مرة فالنهار (ماداما التبويب مفتوح) يذكرك تكمل التحقيق.",
            accessReminderEnable: "فعّل التذكير اليومي", accessClose: "تم",
            raceTitle: "🏁 التحدي السريع (سباق)",
            raceDesc: "من بعد ما تتصل بصاحبك، سابقو باش تحلو نفس القضية الأول — عبر نفس الاتصال لفوق.",
            raceStart: "🏁 بدا التحدي السريع",
            saveWarningMsg: "⚠️ ما قدرناش نحفظو تقدمك دابا (التصفح الخاص أو التخزين ممنوع). كمّل اللعب، لكن ممكن ما يتحفظش.",
            timeUpTitle: "⏰ خلص الوقت!", timeUpDesc: "خلص الوقت المحدد لهاد التحدي — القضية اتسجلت كغير محلولة.",
            noMoreHints: "استعملتي كل التلميحات ديال هاد القضية — دابا الوقت باش تعتمد على حدسك يا محقق!",
            reportFooter: "الملف الأسود — بطاقة تقرير المحقق"
        },
        ary: {
            listen: "استمع", energyExhausted: "استعملتي كل محاولاتك ديال اليوم. ارجع غدا يا محقق!",
            shuffledExplain: "هادي إعادة لعب — الأدلة تبدلات. حسب معطيات هاد الجولة، الخيط كيوصل ل{name} ({role}).",
            statsTitle: "📊 إحصائيات المحقق المفصّلة", statCasesSolved: "القضايا المحلولة", statAvgHints: "متوسط التلميحات", statFastest: "أسرع حل", statAccuracy: "الدقة الإجمالية",
            noAttempts: "مازال ما كاينة محاولات", chartEmpty: "حل شي قضايا باش يبان ليك تطور الدقة هنا.",
            reportPeriod: "آخر 7 أيام", reportSolved: "محلولة", reportAttempts: "محاولات", reportAccuracy: "الدقة", reportRank: "الرتبة",
            storyLocked: "🔒 كمّل التحقيق باش تفتح هاد الجزء من الملف.",
            energyRemaining: "باقي ليك {n} تحقيقات اليوم",
            raceWaitingFriend: "قوّد الاتصال بصاحبك أولا، من بعد بدا السباق.",
            raceInvited: "تصيفط السباق! كنتسناو صاحبك يقبل...",
            raceReceived: "صاحبك تحداك فسباق! كنحلو القضية دابا...",
            raceYouFinished: "حليتيها! كنتسناو نشوفو واش صاحبك غادي يكمل...",
            raceYouWon: "🏆 ربحتي السباق! حليتيها قبل صاحبك.",
            raceYouLost: "😞 صاحبك حلها قبلك هاد المرة.",
            raceOpponentWrong: "صاحبك غلط فالتخمين — كمّل!",
            raceOpponentFinishedWait: "صاحبك سالا! حل القضية باش نقارنو الوقت...",
            reminderEnabled: "التذكير اليومي متفعل (ماداما التبويب مفتوح).",
            reminderDenied: "تم رفض إذن الإشعارات.",
            reminderMsg: "🕵️ قضية جديدة كتستناك أيها المحقق!",
            statsBtnLabel: "📊 إحصائيات", storyBtnLabel: "📖 الملف السري", accessBtnLabel: "⚙️ الوصولية", settingsTitle: "⚙️ الإعدادات",
            statsBackLabel: "← رجوع للأرشيف", statsChartTitle: "تطور الدقة (آخر المحاولات)",
            reportTitle: "🗞️ بطاقة تقرير المحقق الأسبوعية", reportDesc: "ملخص قابل للمشاركة لآخر 7 أيام من التحقيق ديالك.",
            reportDownload: "⬇ تحميل الصورة", reportShare: "📤 مشاركة",
            storyBackLabel: "← رجوع للأرشيف", storyTitle: "📖 الملف السري",
            storyDesc: "كاين خيط سردي خفي تحت هاد الـ20 قضية. حل قضايا أكثر باش تكتشفو.",
            accessTitle: "⚙️ الوصولية والراحة", accessFontSize: "حجم النص", accessContrast: "وضع التباين العالي",
            accessCB: "وضع صديق لعمى الألوان (كيزيد رموز/أشكال فوق تاغات الصعوبة)",
            accessTTS: "تفعيل أزرار القراءة الصوتية (Text-to-Speech)",
            accessEnergy: "وضع المحاولات اليومية المحدودة (تحدي اختياري)", accessEnergyLimit: "الحد اليومي للقضايا:",
            accessReminderLabel: "التذكير اليومي",
            accessReminderDesc: "خد إشعار من المتصفح مرة فالنهار (ماداما التبويب مفتوح) يذكرك تكمل التحقيق.",
            accessReminderEnable: "فعّل التذكير اليومي", accessClose: "تم",
            raceTitle: "🏁 التحدي السريع (سباق)",
            raceDesc: "من بعد ما تتصل بصاحبك، سابقو باش تحلو نفس القضية الأول — عبر نفس الاتصال لفوق.",
            raceStart: "🏁 بدا التحدي السريع",
            saveWarningMsg: "⚠️ ما قدرناش نحفظو تقدمك دابا (التصفح الخاص أو التخزين ممنوع). كمّل اللعب، لكن ممكن ما يتحفظش.",
            timeUpTitle: "⏰ خلص الوقت!", timeUpDesc: "خلص الوقت المحدد لهاد التحدي — القضية اتسجلت كغير محلولة.",
            noMoreHints: "استعملتي كل التلميحات ديال هاد القضية — دابا الوقت باش تعتمد على حدسك يا محقق!",
            reportFooter: "الملف الأسود — بطاقة تقرير المحقق"
        },
        fr: {
            listen: "Écouter", energyExhausted: "Vous avez utilisé toutes vos enquêtes du jour. Revenez demain, détective !",
            shuffledExplain: "Ceci est une rejouabilité — les preuves ont été redistribuées. D'après les indices de cette partie, la piste mène à {name} ({role}).",
            statsTitle: "📊 Statistiques Détaillées du Détective", statCasesSolved: "Affaires Résolues", statAvgHints: "Indices Utilisés (moy.)", statFastest: "Résolution la Plus Rapide", statAccuracy: "Précision Globale",
            noAttempts: "Pas encore de tentatives", chartEmpty: "Résolvez quelques affaires pour voir votre courbe de précision ici.",
            reportPeriod: "7 Derniers Jours", reportSolved: "Résolues", reportAttempts: "Tentatives", reportAccuracy: "Précision", reportRank: "Grade",
            storyLocked: "🔒 Continuez l'enquête pour débloquer cette partie du dossier.",
            energyRemaining: "{n} enquêtes restantes aujourd'hui",
            raceWaitingFriend: "Connectez-vous d'abord avec un ami ci-dessus, puis lancez la course.",
            raceInvited: "Course envoyée ! En attente de l'acceptation de votre ami...",
            raceReceived: "Votre ami vous a défié en course ! Ouverture de l'affaire...",
            raceYouFinished: "Vous l'avez résolue ! En attente de votre ami...",
            raceYouWon: "🏆 Vous avez gagné la course ! Vous avez résolu l'affaire en premier.",
            raceYouLost: "😞 Votre ami a résolu l'affaire en premier cette fois.",
            raceOpponentWrong: "Votre ami s'est trompé — continuez !",
            raceOpponentFinishedWait: "Votre ami a fini ! Résolvez-le pour comparer les temps...",
            reminderEnabled: "Rappel quotidien activé (tant que cet onglet reste ouvert).",
            reminderDenied: "L'autorisation de notification a été refusée.",
            reminderMsg: "🕵️ Une nouvelle affaire vous attend, détective !",
            statsBtnLabel: "📊 Statistiques", storyBtnLabel: "📖 Dossier Secret", accessBtnLabel: "⚙️ Accessibilité", settingsTitle: "⚙️ Paramètres",
            statsBackLabel: "← Retour aux Archives", statsChartTitle: "Évolution de la précision (tentatives récentes)",
            reportTitle: "🗞️ Bulletin Hebdomadaire du Détective", reportDesc: "Un résumé partageable de vos 7 derniers jours d'enquête.",
            reportDownload: "⬇ Télécharger l'Image", reportShare: "📤 Partager",
            storyBackLabel: "← Retour aux Archives", storyTitle: "📖 Le Dossier Secret",
            storyDesc: "Un fil narratif caché relie ces 20 affaires. Résolvez-en davantage pour le découvrir.",
            accessTitle: "⚙️ Accessibilité & Confort", accessFontSize: "Taille du Texte", accessContrast: "Mode Contraste Élevé",
            accessCB: "Mode adapté au daltonisme (ajoute icônes/formes aux étiquettes de difficulté)",
            accessTTS: "Activer les boutons de lecture à voix haute (synthèse vocale)",
            accessEnergy: "Mode tentatives quotidiennes limitées (défi optionnel)", accessEnergyLimit: "Limite quotidienne d'affaires :",
            accessReminderLabel: "Rappel Quotidien",
            accessReminderDesc: "Recevez une notification du navigateur une fois par jour (tant que cet onglet est ouvert) pour continuer l'enquête.",
            accessReminderEnable: "Activer le rappel quotidien", accessClose: "Terminé",
            raceTitle: "🏁 Défi Rapide (Course)",
            raceDesc: "Une fois connecté, affrontez votre ami pour résoudre la même affaire en premier — via la connexion ci-dessus.",
            raceStart: "🏁 Lancer le Défi Rapide",
            saveWarningMsg: "⚠️ Votre progression ne peut pas être sauvegardée actuellement (navigation privée ou stockage bloqué). Continuez à jouer, mais elle risque de ne pas être conservée.",
            timeUpTitle: "⏰ Temps écoulé !", timeUpDesc: "Le temps imparti pour ce Défi Chronométré est écoulé — l'affaire est marquée comme non résolue.",
            noMoreHints: "Vous avez utilisé tous vos indices pour cette affaire — faites confiance à votre instinct, détective !",
            reportFooter: "Le Dossier Noir — Fiche de Rapport du Détective"
        },
        es: {
            listen: "Escuchar", energyExhausted: "Has usado todas tus investigaciones de hoy. ¡Vuelve mañana, detective!",
            shuffledExplain: "Esto es una repetición — las pruebas se reorganizaron. Según las pistas de esta partida, el rastro lleva a {name} ({role}).",
            statsTitle: "📊 Estadísticas Detalladas del Detective", statCasesSolved: "Casos Resueltos", statAvgHints: "Pistas Usadas (prom.)", statFastest: "Resolución Más Rápida", statAccuracy: "Precisión General",
            noAttempts: "Aún sin intentos", chartEmpty: "Resuelve algunos casos para ver aquí tu tendencia de precisión.",
            reportPeriod: "Últimos 7 Días", reportSolved: "Resueltos", reportAttempts: "Intentos", reportAccuracy: "Precisión", reportRank: "Rango",
            storyLocked: "🔒 Sigue investigando para desbloquear esta parte del expediente.",
            energyRemaining: "{n} investigaciones restantes hoy",
            raceWaitingFriend: "Conéctate con un amigo arriba primero, luego inicia la carrera.",
            raceInvited: "¡Carrera enviada! Esperando a que tu amigo acepte...",
            raceReceived: "¡Tu amigo te retó a una carrera! Abriendo el caso ahora...",
            raceYouFinished: "¡Lo resolviste! Esperando a ver si tu amigo termina...",
            raceYouWon: "🏆 ¡Ganaste la carrera! Lo resolviste primero.",
            raceYouLost: "😞 Tu amigo lo resolvió primero esta vez.",
            raceOpponentWrong: "Tu amigo se equivocó — ¡sigue así!",
            raceOpponentFinishedWait: "¡Tu amigo terminó! Resuélvelo para comparar los tiempos...",
            reminderEnabled: "Recordatorio diario activado (mientras esta pestaña esté abierta).",
            reminderDenied: "Se denegó el permiso de notificaciones.",
            reminderMsg: "🕵️ ¡Un nuevo caso te espera, detective!",
            statsBtnLabel: "📊 Estadísticas", storyBtnLabel: "📖 Expediente Secreto", accessBtnLabel: "⚙️ Accesibilidad", settingsTitle: "⚙️ Ajustes",
            statsBackLabel: "← Volver a los Archivos", statsChartTitle: "Tendencia de precisión (intentos recientes)",
            reportTitle: "🗞️ Informe Semanal del Detective", reportDesc: "Un resumen compartible de tus últimos 7 días de investigación.",
            reportDownload: "⬇ Descargar Imagen", reportShare: "📤 Compartir",
            storyBackLabel: "← Volver a los Archivos", storyTitle: "📖 El Expediente Secreto",
            storyDesc: "Un hilo narrativo oculto conecta estos 20 casos. Resuelve más casos para descubrirlo.",
            accessTitle: "⚙️ Accesibilidad y Comodidad", accessFontSize: "Tamaño del Texto", accessContrast: "Modo de Alto Contraste",
            accessCB: "Modo apto para daltonismo (añade iconos/formas a las etiquetas de dificultad)",
            accessTTS: "Activar botones de lectura en voz alta (texto a voz)",
            accessEnergy: "Modo de intentos diarios limitados (desafío opcional)", accessEnergyLimit: "Límite diario de casos:",
            accessReminderLabel: "Recordatorio Diario",
            accessReminderDesc: "Recibe una notificación del navegador una vez al día (mientras esta pestaña esté abierta) para seguir investigando.",
            accessReminderEnable: "Activar recordatorio diario", accessClose: "Listo",
            raceTitle: "🏁 Desafío Rápido (Carrera)",
            raceDesc: "Una vez conectado, compite con tu amigo para resolver el mismo caso primero — mediante la conexión de arriba.",
            raceStart: "🏁 Iniciar Desafío Rápido",
            saveWarningMsg: "⚠️ Tu progreso no se puede guardar ahora mismo (navegación privada o almacenamiento bloqueado). Sigue jugando, pero podría no conservarse.",
            timeUpTitle: "⏰ ¡Se acabó el tiempo!", timeUpDesc: "Se te acabó el tiempo en este Desafío Cronometrado — el caso queda marcado como no resuelto.",
            noMoreHints: "Has usado todas tus pistas para este caso — ¡confía en tu instinto, detective!",
            reportFooter: "El Archivo Negro — Ficha de Informe del Detective"
        },
        it: {
            listen: "Ascolta", energyExhausted: "Hai usato tutte le tue indagini di oggi. Torna domani, detective!",
            shuffledExplain: "Questa è una ripetizione — le prove sono state rimescolate. In base agli indizi di questa partita, la pista porta a {name} ({role}).",
            statsTitle: "📊 Statistiche Dettagliate del Detective", statCasesSolved: "Casi Risolti", statAvgHints: "Indizi Usati (media)", statFastest: "Risoluzione Più Veloce", statAccuracy: "Precisione Complessiva",
            noAttempts: "Ancora nessun tentativo", chartEmpty: "Risolvi alcuni casi per vedere qui il tuo andamento di precisione.",
            reportPeriod: "Ultimi 7 Giorni", reportSolved: "Risolti", reportAttempts: "Tentativi", reportAccuracy: "Precisione", reportRank: "Grado",
            storyLocked: "🔒 Continua a indagare per sbloccare questa parte del fascicolo.",
            energyRemaining: "{n} indagini rimaste oggi",
            raceWaitingFriend: "Connettiti prima con un amico qui sopra, poi avvia la gara.",
            raceInvited: "Gara inviata! In attesa che il tuo amico accetti...",
            raceReceived: "Il tuo amico ti ha sfidato in una gara! Apertura del caso in corso...",
            raceYouFinished: "L'hai risolto! In attesa di vedere se il tuo amico finisce...",
            raceYouWon: "🏆 Hai vinto la gara! L'hai risolto per primo.",
            raceYouLost: "😞 Il tuo amico l'ha risolto per primo questa volta.",
            raceOpponentWrong: "Il tuo amico ha sbagliato — continua così!",
            raceOpponentFinishedWait: "Il tuo amico ha finito! Risolvilo per confrontare i tempi...",
            reminderEnabled: "Promemoria giornaliero attivato (finché questa scheda resta aperta).",
            reminderDenied: "Il permesso per le notifiche è stato negato.",
            reminderMsg: "🕵️ Un nuovo caso ti aspetta, detective!",
            statsBtnLabel: "📊 Statistiche", storyBtnLabel: "📖 Fascicolo Segreto", accessBtnLabel: "⚙️ Accessibilità", settingsTitle: "⚙️ Impostazioni",
            statsBackLabel: "← Torna agli Archivi", statsChartTitle: "Andamento della precisione (tentativi recenti)",
            reportTitle: "🗞️ Bollettino Settimanale del Detective", reportDesc: "Un riepilogo condivisibile dei tuoi ultimi 7 giorni di indagine.",
            reportDownload: "⬇ Scarica Immagine", reportShare: "📤 Condividi",
            storyBackLabel: "← Torna agli Archivi", storyTitle: "📖 Il Fascicolo Segreto",
            storyDesc: "Un filo narrativo nascosto collega questi 20 casi. Risolvi altri casi per scoprirlo.",
            accessTitle: "⚙️ Accessibilità e Comfort", accessFontSize: "Dimensione del Testo", accessContrast: "Modalità Alto Contrasto",
            accessCB: "Modalità amica del daltonismo (aggiunge icone/forme alle etichette di difficoltà)",
            accessTTS: "Attiva i pulsanti di lettura ad alta voce (sintesi vocale)",
            accessEnergy: "Modalità tentativi giornalieri limitati (sfida opzionale)", accessEnergyLimit: "Limite giornaliero di casi:",
            accessReminderLabel: "Promemoria Giornaliero",
            accessReminderDesc: "Ricevi una notifica del browser una volta al giorno (finché questa scheda è aperta) per continuare a indagare.",
            accessReminderEnable: "Attiva promemoria giornaliero", accessClose: "Fatto",
            raceTitle: "🏁 Sfida Rapida (Gara)",
            raceDesc: "Una volta connesso, sfida il tuo amico a risolvere lo stesso caso per primo — tramite la connessione qui sopra.",
            raceStart: "🏁 Avvia Sfida Rapida",
            saveWarningMsg: "⚠️ I tuoi progressi non possono essere salvati ora (navigazione privata o archiviazione bloccata). Continua a giocare, ma potrebbero non essere conservati.",
            timeUpTitle: "⏰ Tempo scaduto!", timeUpDesc: "Il tempo per questa Sfida a Tempo è scaduto — il caso è segnato come irrisolto.",
            noMoreHints: "Hai usato tutti gli indizi per questo caso — è ora di fidarti del tuo istinto, detective!",
            reportFooter: "Il File Nero — Scheda Rapporto del Detective"
        },
        de: {
            listen: "Anhören", energyExhausted: "Du hast alle heutigen Ermittlungen aufgebraucht. Komm morgen wieder, Detektiv!",
            shuffledExplain: "Dies ist eine Wiederholung — die Beweise wurden neu gemischt. Basierend auf den Hinweisen dieser Runde führt die Spur zu {name} ({role}).",
            statsTitle: "📊 Detaillierte Detektiv-Statistiken", statCasesSolved: "Gelöste Fälle", statAvgHints: "Ø Genutzte Hinweise", statFastest: "Schnellste Lösung", statAccuracy: "Gesamtgenauigkeit",
            noAttempts: "Noch keine Versuche", chartEmpty: "Löse ein paar Fälle, um hier deinen Genauigkeitstrend zu sehen.",
            reportPeriod: "Letzte 7 Tage", reportSolved: "Gelöst", reportAttempts: "Versuche", reportAccuracy: "Genauigkeit", reportRank: "Rang",
            storyLocked: "🔒 Ermittle weiter, um diesen Teil der Akte freizuschalten.",
            energyRemaining: "Noch {n} Ermittlungen heute übrig",
            raceWaitingFriend: "Verbinde dich oben zuerst mit einem Freund, dann starte das Rennen.",
            raceInvited: "Rennen gesendet! Warte auf die Annahme deines Freundes...",
            raceReceived: "Dein Freund hat dich zu einem Rennen herausgefordert! Fall wird geöffnet...",
            raceYouFinished: "Du hast es gelöst! Warte ab, ob dein Freund fertig wird...",
            raceYouWon: "🏆 Du hast das Rennen gewonnen! Du hast es zuerst gelöst.",
            raceYouLost: "😞 Dein Freund hat es diesmal zuerst gelöst.",
            raceOpponentWrong: "Dein Freund hat falsch geraten — mach weiter!",
            raceOpponentFinishedWait: "Dein Freund ist fertig! Löse es, um die Zeiten zu vergleichen...",
            reminderEnabled: "Tägliche Erinnerung aktiviert (solange dieser Tab geöffnet bleibt).",
            reminderDenied: "Die Benachrichtigungserlaubnis wurde verweigert.",
            reminderMsg: "🕵️ Ein neuer Fall wartet auf dich, Detektiv!",
            statsBtnLabel: "📊 Statistik", storyBtnLabel: "📖 Geheimakte", accessBtnLabel: "⚙️ Barrierefreiheit", settingsTitle: "⚙️ Einstellungen",
            statsBackLabel: "← Zurück zum Archiv", statsChartTitle: "Genauigkeitsverlauf (letzte Versuche)",
            reportTitle: "🗞️ Wöchentliche Detektiv-Bilanz", reportDesc: "Eine teilbare Zusammenfassung deiner letzten 7 Ermittlungstage.",
            reportDownload: "⬇ Bild herunterladen", reportShare: "📤 Teilen",
            storyBackLabel: "← Zurück zum Archiv", storyTitle: "📖 Die Geheimakte",
            storyDesc: "Ein verborgener roter Faden verbindet diese 20 Fälle. Löse mehr Fälle, um ihn aufzudecken.",
            accessTitle: "⚙️ Barrierefreiheit & Komfort", accessFontSize: "Textgröße", accessContrast: "Hoher-Kontrast-Modus",
            accessCB: "Farbenblind-freundlicher Modus (fügt Symbole/Formen zu Schwierigkeits-Tags hinzu)",
            accessTTS: "Vorlese-Buttons (Text-zu-Sprache) aktivieren",
            accessEnergy: "Begrenzte tägliche Versuche (optionale Herausforderung)", accessEnergyLimit: "Tägliches Fall-Limit:",
            accessReminderLabel: "Tägliche Erinnerung",
            accessReminderDesc: "Erhalte einmal täglich eine Browser-Benachrichtigung (solange dieser Tab geöffnet ist), die dich ans Weiterermitteln erinnert.",
            accessReminderEnable: "Tägliche Erinnerung aktivieren", accessClose: "Fertig",
            raceTitle: "🏁 Schnelles Duell (Rennen)",
            raceDesc: "Sobald verbunden, tritt gegen deinen Freund an, um denselben Fall zuerst zu lösen — über die obige Verbindung.",
            raceStart: "🏁 Schnelles Duell starten",
            saveWarningMsg: "⚠️ Dein Fortschritt kann gerade nicht gespeichert werden (privater Modus oder Speicher blockiert). Spiel weiter, aber er bleibt eventuell nicht erhalten.",
            timeUpTitle: "⏰ Zeit abgelaufen!", timeUpDesc: "Die Zeit für diese zeitlich begrenzte Herausforderung ist abgelaufen — der Fall gilt als ungelöst.",
            noMoreHints: "Du hast alle Hinweise für diesen Fall verbraucht — jetzt heißt es, deinem Instinkt zu vertrauen, Detektiv!",
            reportFooter: "Die Schwarze Akte — Detektiv-Berichtskarte"
        },
        pt: {
            listen: "Ouvir", energyExhausted: "Já usaste todas as tuas investigações de hoje. Volta amanhã, detetive!",
            shuffledExplain: "Isto é uma repetição — as provas foram reorganizadas. Com base nas pistas desta ronda, o rasto leva a {name} ({role}).",
            statsTitle: "📊 Estatísticas Detalhadas do Detetive", statCasesSolved: "Casos Resolvidos", statAvgHints: "Dicas Usadas (média)", statFastest: "Resolução Mais Rápida", statAccuracy: "Precisão Geral",
            noAttempts: "Ainda sem tentativas", chartEmpty: "Resolve alguns casos para veres aqui a tua tendência de precisão.",
            reportPeriod: "Últimos 7 Dias", reportSolved: "Resolvidos", reportAttempts: "Tentativas", reportAccuracy: "Precisão", reportRank: "Patente",
            storyLocked: "🔒 Continua a investigar para desbloquear esta parte do ficheiro.",
            energyRemaining: "{n} investigações restantes hoje",
            raceWaitingFriend: "Liga-te primeiro a um amigo acima, depois inicia a corrida.",
            raceInvited: "Corrida enviada! A aguardar que o teu amigo aceite...",
            raceReceived: "O teu amigo desafiou-te para uma corrida! A abrir o caso agora...",
            raceYouFinished: "Resolveste-o! A aguardar para ver se o teu amigo termina...",
            raceYouWon: "🏆 Ganhaste a corrida! Resolveste-o primeiro.",
            raceYouLost: "😞 O teu amigo resolveu-o primeiro desta vez.",
            raceOpponentWrong: "O teu amigo errou o palpite — continua!",
            raceOpponentFinishedWait: "O teu amigo terminou! Resolve-o para comparar os tempos...",
            reminderEnabled: "Lembrete diário ativado (enquanto este separador estiver aberto).",
            reminderDenied: "A permissão de notificação foi negada.",
            reminderMsg: "🕵️ Um novo caso espera por ti, detetive!",
            statsBtnLabel: "📊 Estatísticas", storyBtnLabel: "📖 Ficheiro Secreto", accessBtnLabel: "⚙️ Acessibilidade", settingsTitle: "⚙️ Definições",
            statsBackLabel: "← Voltar aos Arquivos", statsChartTitle: "Tendência de precisão (tentativas recentes)",
            reportTitle: "🗞️ Boletim Semanal do Detetive", reportDesc: "Um resumo partilhável dos teus últimos 7 dias de investigação.",
            reportDownload: "⬇ Descarregar Imagem", reportShare: "📤 Partilhar",
            storyBackLabel: "← Voltar aos Arquivos", storyTitle: "📖 O Ficheiro Secreto",
            storyDesc: "Um fio narrativo oculto liga estes 20 casos. Resolve mais casos para o descobrir.",
            accessTitle: "⚙️ Acessibilidade e Conforto", accessFontSize: "Tamanho do Texto", accessContrast: "Modo de Alto Contraste",
            accessCB: "Modo amigo de daltonismo (adiciona ícones/formas às etiquetas de dificuldade)",
            accessTTS: "Ativar botões de leitura em voz alta (texto para fala)",
            accessEnergy: "Modo de tentativas diárias limitadas (desafio opcional)", accessEnergyLimit: "Limite diário de casos:",
            accessReminderLabel: "Lembrete Diário",
            accessReminderDesc: "Recebe uma notificação do navegador uma vez por dia (enquanto este separador estiver aberto) para continuares a investigar.",
            accessReminderEnable: "Ativar lembrete diário", accessClose: "Concluído",
            raceTitle: "🏁 Desafio Rápido (Corrida)",
            raceDesc: "Depois de ligado, compete com o teu amigo para resolver o mesmo caso primeiro — através da ligação acima.",
            raceStart: "🏁 Iniciar Desafio Rápido",
            saveWarningMsg: "⚠️ O seu progresso não pode ser guardado agora (navegação privada ou armazenamento bloqueado). Continue a jogar, mas pode não ser mantido.",
            timeUpTitle: "⏰ Tempo Esgotado!", timeUpDesc: "O tempo deste Desafio Cronometrado esgotou-se — o caso fica marcado como não resolvido.",
            noMoreHints: "Já usou todas as dicas para este caso — hora de confiar no seu instinto, detetive!",
            reportFooter: "O Arquivo Negro — Cartão de Relatório do Detetive"
        }
    };
    EXTRA_TRANGS.ary = EXTRA_TRANGS.ar;
    function txx(key) {
        const dict = EXTRA_TRANGS[currentLang] || EXTRA_TRANGS.en;
        return (dict[key] !== undefined ? dict[key] : EXTRA_TRANGS.en[key]) || '';
    }

    function todayStr() {
        const d = new Date();
        return d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
    }

    // ---- accessibility & comfort settings ----
    let accessSettings = (function() {
        try {
            const saved = JSON.parse(localStorage.getItem('tf_accessSettings'));
            if (saved) return Object.assign({ fontSize:'normal', highContrast:false, colorBlind:false, ttsEnabled:false, energyMode:false, energyLimit:5, reminderEnabled:false }, saved);
        } catch (e) {}
        return { fontSize:'normal', highContrast:false, colorBlind:false, ttsEnabled:false, energyMode:false, energyLimit:5, reminderEnabled:false };
    })();
    function saveAccessSettings() {
        try { localStorage.setItem('tf_accessSettings', JSON.stringify(accessSettings)); } catch (e) { showSaveWarningToast(); }
    }

    function applyAccessSettings() {
        const html = document.documentElement;
        html.classList.remove('fs-large', 'fs-xlarge');
        if (accessSettings.fontSize === 'large') html.classList.add('fs-large');
        if (accessSettings.fontSize === 'xlarge') html.classList.add('fs-xlarge');
        html.classList.toggle('hi-contrast', !!accessSettings.highContrast);
        html.classList.toggle('cb-mode', !!accessSettings.colorBlind);

        const cSet = document.getElementById('access-contrast-toggle'); if (cSet) cSet.checked = !!accessSettings.highContrast;
        const cbSet = document.getElementById('access-cb-toggle'); if (cbSet) cbSet.checked = !!accessSettings.colorBlind;
        const ttsSet = document.getElementById('access-tts-toggle'); if (ttsSet) ttsSet.checked = !!accessSettings.ttsEnabled;
        const enSet = document.getElementById('access-energy-toggle'); if (enSet) enSet.checked = !!accessSettings.energyMode;
        const remSet = document.getElementById('access-reminder-toggle'); if (remSet) remSet.checked = !!accessSettings.reminderEnabled;
        const limitSel = document.getElementById('energy-limit-select'); if (limitSel) limitSel.value = String(accessSettings.energyLimit || 5);
        const limitRow = document.getElementById('energy-limit-row'); if (limitRow) limitRow.style.display = accessSettings.energyMode ? 'flex' : 'none';
        document.querySelectorAll('#modal-access [data-fs]').forEach(b => b.classList.toggle('active', b.getAttribute('data-fs') === accessSettings.fontSize));
        renderEnergyRemaining();
    }

    function openAccessModal() { applyAccessSettings(); document.getElementById('modal-access').classList.add('active'); playClickSound(); }
    function closeAccessModal() { document.getElementById('modal-access').classList.remove('active'); playClickSound(); }
    function openSettingsModal() { document.getElementById('modal-settings').classList.add('active'); playClickSound(); }
    function closeSettingsModal() { document.getElementById('modal-settings').classList.remove('active'); playClickSound(); }
    function setFontSize(size) { accessSettings.fontSize = size; saveAccessSettings(); applyAccessSettings(); playClickSound(); }
    function toggleHighContrast(v) {
        const enabled = typeof v === 'boolean' ? v : (document.getElementById('access-contrast-toggle')?.checked ?? false);
        accessSettings.highContrast = enabled;
        saveAccessSettings();
        applyAccessSettings();
        playClickSound();
    }
    function toggleColorBlind(v) {
        const enabled = typeof v === 'boolean' ? v : (document.getElementById('access-cb-toggle')?.checked ?? false);
        accessSettings.colorBlind = enabled;
        saveAccessSettings();
        applyAccessSettings();
        playClickSound();
    }
    function toggleTTS(v) {
        const enabled = typeof v === 'boolean' ? v : (document.getElementById('access-tts-toggle')?.checked ?? false);
        accessSettings.ttsEnabled = enabled; saveAccessSettings();
        const b1 = document.getElementById('brief-tts-btn'); if (b1) b1.style.display = enabled ? 'inline-flex' : 'none';
        const b2 = document.getElementById('sus-tts-btn'); if (b2) b2.style.display = enabled ? 'inline-flex' : 'none';
        playClickSound();
    }
    function toggleEnergyMode(v) {
        const enabled = typeof v === 'boolean' ? v : (document.getElementById('access-energy-toggle')?.checked ?? false);
        accessSettings.energyMode = enabled;
        saveAccessSettings();
        applyAccessSettings();
        playClickSound();
    }
    function setEnergyLimit(v) { accessSettings.energyLimit = parseInt(v, 10) || 5; saveAccessSettings(); renderEnergyRemaining(); }

    // ---- optional daily "energy" / attempt limit ----
    function checkEnergyAllowed() {
        if (!accessSettings.energyMode) return true;
        resetEnergyIfNewDay();
        return (userProfile.energyUsedCount || 0) < (accessSettings.energyLimit || 5);
    }
    function resetEnergyIfNewDay() {
        if (userProfile.energyDate !== todayStr()) {
            userProfile.energyDate = todayStr();
            userProfile.energyUsedCount = 0;
            saveUserProfile();
        }
    }
    function consumeEnergyUsage() {
        if (!accessSettings.energyMode) return;
        resetEnergyIfNewDay();
        userProfile.energyUsedCount = (userProfile.energyUsedCount || 0) + 1;
        saveUserProfile();
        renderEnergyRemaining();
    }
    function renderEnergyRemaining() {
        const el = document.getElementById('energy-remaining-display');
        if (!el) return;
        if (!accessSettings.energyMode) { el.textContent = ''; return; }
        resetEnergyIfNewDay();
        const left = Math.max(0, (accessSettings.energyLimit || 5) - (userProfile.energyUsedCount || 0));
        el.textContent = txx('energyRemaining').replace('{n}', left);
    }

    // ---- Text-to-Speech ----
    function speakText(text) {
        if (!('speechSynthesis' in window) || !text) return;
        try {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = VOICE_LOCALES[currentLang] || 'en-US';
            window.speechSynthesis.speak(u);
        } catch (e) {}
    }
    function speakBrief() {
        const data = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        const c = data.cases[currentCaseIndex];
        if (c) speakText(c.title + '. ' + c.brief + '. ' + c.victim);
    }
    function speakSuspect() {
        const nameEl = document.getElementById('modal-sus-name');
        const roleEl = document.getElementById('modal-sus-role');
        const alibiEl = document.getElementById('modal-sus-alibi');
        speakText([nameEl && nameEl.textContent, roleEl && roleEl.textContent, alibiEl && alibiEl.textContent].filter(Boolean).join('. '));
    }

    // ---- replay: cases always keep their originally-authored culprit ----
    // (previously this randomly reassigned the culprit on replay, which broke
    // the case because the evidence/alibis/dialogue only make sense for the
    // one culprit the case was written around)
    let caseStartTime = Date.now();
    let shuffledCulprit = {};
    function ensureShuffledCulprit(idx, c) {
        delete shuffledCulprit[idx];
    }

    // ---- detailed stats & chart ----
    function openStatsScreen() {
        renderStatsScreen();
        show('scr-stats');
        playClickSound();
    }
    function renderStatsScreen() {
        const history = userProfile.history || [];
        const cardsEl = document.getElementById('stats-cards');
        const hintsList = Object.values(userProfile.hintsUsedByCase || {});
        const avgHints = hintsList.length ? (hintsList.reduce((a,b)=>a+b,0) / hintsList.length).toFixed(1) : '0';
        const solvedTimes = history.filter(h => h.correct).map(h => h.ms);
        const fastest = solvedTimes.length ? Math.min(...solvedTimes) : null;
        const fastestStr = fastest !== null ? Math.round(fastest/1000) + 's' : '—';

        if (cardsEl) {
            cardsEl.innerHTML = `
                <div class="stat-card"><div class="num">${getSolvedCount()}/20</div><div class="lbl">${escapeHtml(txx('statCasesSolved'))}</div></div>
                <div class="stat-card"><div class="num">${computeAccuracy()}%</div><div class="lbl">${escapeHtml(txx('statAccuracy'))}</div></div>
                <div class="stat-card"><div class="num">${avgHints}</div><div class="lbl">${escapeHtml(txx('statAvgHints'))}</div></div>
                <div class="stat-card"><div class="num">${fastestStr}</div><div class="lbl">${escapeHtml(txx('statFastest'))}</div></div>
            `;
        }

        const chartEl = document.getElementById('stats-chart');
        if (chartEl) {
            if (!history.length) {
                chartEl.innerHTML = `<p style="font-size:12.5px; color:var(--paper-dim);">${escapeHtml(txx('chartEmpty'))}</p>`;
            } else {
                const recent = history.slice(-20);
                let runningCorrect = 0;
                const points = recent.map((h, i) => {
                    runningCorrect += h.correct ? 1 : 0;
                    return Math.round((runningCorrect / (i + 1)) * 100);
                });
                const w = Math.max(260, points.length * 26), h = 140, pad = 18;
                const stepX = (w - pad*2) / Math.max(1, points.length - 1);
                const coords = points.map((p, i) => {
                    const x = pad + i * stepX;
                    const y = pad + (100 - p) / 100 * (h - pad*2);
                    return x.toFixed(1) + ',' + y.toFixed(1);
                }).join(' ');
                chartEl.innerHTML = `<svg width="${w}" height="${h}" style="display:block;">
                    <polyline points="${coords}" fill="none" stroke="#c9a24b" stroke-width="2.5"/>
                    ${points.map((p,i) => { const x = pad + i*stepX; const y = pad + (100-p)/100*(h-pad*2); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="#3f8f8a"/>`; }).join('')}
                    <line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}" stroke="#2c3140"/>
                </svg>`;
            }
        }
        drawReportCard();
    }

    function weeklyStats() {
        const cutoff = Date.now() - 7*24*60*60*1000;
        const recent = (userProfile.history || []).filter(h => h.t >= cutoff);
        const solved = recent.filter(h => h.correct).length;
        const attempts = recent.length;
        const acc = attempts ? Math.round((solved/attempts)*100) : 0;
        return { solved, attempts, acc };
    }

    function drawReportCard() {
        const canvas = document.getElementById('report-card-canvas');
        if (!canvas || !canvas.getContext) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width, h = canvas.height;
        const stats = weeklyStats();
        const isRTL = (currentLang === 'ar' || currentLang === 'ary');
        ctx.fillStyle = '#171a22'; ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = '#c9a24b'; ctx.lineWidth = 3; ctx.strokeRect(6, 6, w-12, h-12);
        ctx.fillStyle = '#c9a24b'; ctx.font = 'bold 24px system-ui, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('🕵️ ' + (userProfile.name || 'Detective'), w/2, 46);
        ctx.font = '14px system-ui, sans-serif'; ctx.fillStyle = '#a7a297';
        ctx.fillText(txx('reportPeriod'), w/2, 72);
        ctx.font = 'bold 15px system-ui, sans-serif';
        const rows = [
            [txx('reportRank'), computeRank()],
            [txx('reportSolved'), String(stats.solved)],
            [txx('reportAttempts'), String(stats.attempts)],
            [txx('reportAccuracy'), stats.acc + '%']
        ];
        // In RTL languages the label reads on the right and the value on the
        // left, matching how the rest of the app mirrors for Arabic/Darija.
        const labelX = isRTL ? w - 60 : 60;
        const valueX = isRTL ? 60 : w - 60;
        const labelAlign = isRTL ? 'right' : 'left';
        const valueAlign = isRTL ? 'left' : 'right';
        let y = 120;
        rows.forEach(r => {
            ctx.fillStyle = '#e9e3d3'; ctx.textAlign = labelAlign; ctx.fillText(r[0], labelX, y);
            ctx.fillStyle = '#3f8f8a'; ctx.textAlign = valueAlign; ctx.fillText(r[1], valueX, y);
            y += 42;
        });
        ctx.strokeStyle = '#2c3140'; ctx.beginPath(); ctx.moveTo(40, y+6); ctx.lineTo(w-40, y+6); ctx.stroke();
        ctx.fillStyle = '#8a7137'; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(txx('reportFooter') || 'The Black File — Detective Report Card', w/2, h-20);
    }

    function downloadReportCard() {
        const canvas = document.getElementById('report-card-canvas');
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = 'detective-report-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        playClickSound();
    }

    function shareReportCard() {
        const canvas = document.getElementById('report-card-canvas');
        const stats = weeklyStats();
        const text = `${userProfile.name} — ${computeRank()} | ${txx('reportSolved')}: ${stats.solved} | ${txx('reportAccuracy')}: ${stats.acc}%`;
        if (canvas && navigator.canShare && navigator.share) {
            canvas.toBlob((blob) => {
                const file = new File([blob], 'detective-report-card.png', { type: 'image/png' });
                if (navigator.canShare({ files: [file] })) {
                    navigator.share({ files: [file], text }).catch(() => {});
                    return;
                }
                fallbackShareText(text);
            });
        } else {
            fallbackShareText(text);
        }
    }
    function fallbackShareText(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => alert(text)).catch(() => alert(text));
        } else {
            alert(text);
        }
    }

    // ---- connected story ("Secret File") ----
    const STORY_FRAGMENTS = [
        { en: "A faint symbol keeps appearing at your crime scenes — a circle crossed by a single line.", ar: "علامة غامضة كتبان فبعض مسارح الجرائم — دائرة قاطعها خط واحد.", ary: "علامة غامضة كتبان مرارة فمسارح الجرائم ديالك — دائرة قاطعها خط واحد.", fr: "Un symbole discret continue d'apparaître sur vos scènes de crime — un cercle traversé par une seule ligne.", es: "Un símbolo tenue sigue apareciendo en sus escenas del crimen — un círculo atravesado por una sola línea.", it: "Un simbolo tenue continua ad apparire sulle vostre scene del crimine — un cerchio attraversato da una sola linea.", de: "Ein schwaches Symbol taucht immer wieder an Ihren Tatorten auf — ein Kreis, durchzogen von einer einzigen Linie.", pt: "Um símbolo tênue continua a aparecer nas suas cenas de crime — um círculo cruzado por uma única linha." },
        { en: "A witness mentions a man with a tattoo of that same symbol, seen leaving the area.", ar: "شاهد ذكر راجل عندو وشم بنفس العلامة، شافوه خارج من المكان.", ary: "شاهد ذكر راجل عندو وشم بنفس هاد العلامة، شافوه خارج من البلاصة.", fr: "Un témoin mentionne un homme portant un tatouage du même symbole, vu quittant les lieux.", es: "Un testigo menciona a un hombre con un tatuaje de ese mismo símbolo, visto abandonando la zona.", it: "Un testimone parla di un uomo con un tatuaggio dello stesso simbolo, visto lasciare la zona.", de: "Ein Zeuge erwähnt einen Mann mit einem Tattoo desselben Symbols, gesehen beim Verlassen des Gebiets.", pt: "Uma testemunha menciona um homem com uma tatuagem do mesmo símbolo, visto a deixar o local." },
        { en: "Financial records hint that several victims owed money to the same shadow lender.", ar: "وثائق مالية كتبين أن بزاف من الضحايا كانوا مديونين لنفس المقرض الغامض.", ary: "وثائق مالية كتبين بلي بزاف من الضحايا كانوا مديونين لنفس المقرض السري.", fr: "Des documents financiers suggèrent que plusieurs victimes devaient de l'argent au même prêteur de l'ombre.", es: "Los registros financieros sugieren que varias víctimas debían dinero al mismo prestamista en la sombra.", it: "I documenti finanziari suggeriscono che diverse vittime dovevano denaro allo stesso strozzino nell'ombra.", de: "Finanzunterlagen deuten darauf hin, dass mehrere Opfer demselben Kredithai im Verborgenen Geld schuldeten.", pt: "Registos financeiros sugerem que várias vítimas deviam dinheiro ao mesmo agiota nas sombras." },
        { en: "A burner phone recovered from a scene contains one repeated, unanswered number.", ar: "تيليفون مؤقت لقاوه فمسرح الجريمة فيه رقم واحد مكرر ما جاوبوش عليه.", ary: "تيليفون مؤقت لقاوه فمسرح الجريمة فيه رقم واحد مكرر، حتى واحد ما جاوب عليه.", fr: "Un téléphone jetable récupéré sur une scène contient un seul numéro répété, resté sans réponse.", es: "Un teléfono desechable recuperado de una escena contiene un solo número repetido, sin respuesta.", it: "Un telefono usa e getta recuperato da una scena contiene un unico numero ripetuto, mai risposto.", de: "Ein an einem Tatort gefundenes Wegwerfhandy enthält eine einzige, wiederholt gewählte, unbeantwortete Nummer.", pt: "Um telemóvel descartável recuperado numa cena contém um único número repetido, nunca atendido." },
        { en: "You're starting to believe this isn't a string of coincidences — someone is orchestrating from the shadows.", ar: "بديتي تفهم أن هاد الشي ماشي صدفة — كاين شي واحد كيدبر من الظل.", ary: "بديتي تحس بلي هاد الشي ماشي صدفة — كاين شي واحد كيدبر الأمور من الظل.", fr: "Vous commencez à croire que ce n'est pas une série de coïncidences — quelqu'un orchestre tout depuis l'ombre.", es: "Empieza a creer que esto no es una serie de coincidencias — alguien lo está orquestando todo desde las sombras.", it: "Iniziate a credere che non sia una serie di coincidenze — qualcuno sta orchestrando tutto dall'ombra.", de: "Sie beginnen zu glauben, dass dies keine Kette von Zufällen ist — jemand zieht die Fäden aus dem Schatten.", pt: "Você começa a acreditar que isto não é uma série de coincidências — alguém está a orquestrar tudo nas sombras." },
        { en: "The man with the tattoo is named in a torn note: only a single letter, 'K'.", ar: "الرجل ذو الوشم مذكور فوريقة ممزقة: غير حرف واحد، 'ك'.", ary: "الراجل ذو الوشم مذكور فوريقة ممزقة: غير حرف واحد، 'ك'.", fr: "L'homme au tatouage est nommé dans un mot déchiré : une seule lettre, « K ».", es: "El hombre del tatuaje aparece nombrado en una nota rota: solo una letra, «K».", it: "L'uomo con il tatuaggio è nominato in un biglietto strappato: una sola lettera, \"K\".", de: "Der Mann mit dem Tattoo wird in einem zerrissenen Zettel genannt: nur ein einziger Buchstabe, „K\".", pt: "O homem com a tatuagem é nomeado num bilhete rasgado: apenas uma letra, \"K\"." },
        { en: "A retired officer warns you off the case, saying 'some files should stay closed.'", ar: "ضابط متقاعد حذرك من هاد القضية وقالك 'شي ملفات خاصها تبقى مسدودة'.", ary: "ضابط متقاعد حذرك من هاد القضية وقالك 'شي ملفات خاصها تبقى مسدودة'.", fr: "Un officier à la retraite vous met en garde contre cette affaire, disant que « certains dossiers doivent rester fermés ».", es: "Un oficial retirado le advierte que abandone el caso, diciendo que «algunos archivos deben permanecer cerrados».", it: "Un agente in pensione vi mette in guardia dal caso, dicendo che \"alcuni fascicoli devono restare chiusi\".", de: "Ein pensionierter Beamter warnt Sie vor dem Fall und sagt, „manche Akten sollten geschlossen bleiben\".", pt: "Um agente reformado avisa-o para largar o caso, dizendo que \"alguns processos devem permanecer fechados\"." },
        { en: "You find a ledger listing dates that match exactly with your solved cases.", ar: "لقيتي دفتر فيه تواريخ كتطابق بالضبط مع القضايا لي حليتي.", ary: "لقيتي دفتر فيه تواريخ كتطابق بالضبط مع القضايا لي حليتي.", fr: "Vous trouvez un registre listant des dates qui correspondent exactement à vos affaires résolues.", es: "Encuentra un libro de registro con fechas que coinciden exactamente con sus casos resueltos.", it: "Trovate un registro con date che corrispondono esattamente ai vostri casi risolti.", de: "Sie finden ein Kontobuch mit Daten, die genau mit Ihren gelösten Fällen übereinstimmen.", pt: "Você encontra um livro de registos com datas que coincidem exatamente com os seus casos resolvidos." },
        { en: "'K' appears again — this time as an initial on an old company deed.", ar: "'ك' كتبان مرة أخرى — هاد المرة كحرف على عقد شركة قديم.", ary: "'ك' رجع بان مرة أخرى — هاد المرة كحرف على عقد قديم ديال شركة.", fr: "« K » réapparaît — cette fois comme initiale sur un vieil acte de société.", es: "«K» aparece de nuevo — esta vez como inicial en una vieja escritura de una empresa.", it: "\"K\" riappare — questa volta come iniziale su un vecchio atto societario.", de: "„K\" taucht erneut auf — diesmal als Initiale auf einer alten Firmenurkunde.", pt: "\"K\" aparece novamente — desta vez como uma inicial numa velha escritura de empresa." },
        { en: "Halfway through the file, you realize every case has quietly funded the same account.", ar: "فنص الملف، فهمتي أن كل قضية كانت كتمول بشوية نفس الحساب.", ary: "فنص الملف، فهمتي بلي كل قضية كانت كتمول بشوية نفس الحساب.", fr: "À mi-chemin dans le dossier, vous réalisez que chaque affaire a discrètement financé le même compte.", es: "A mitad del expediente, se da cuenta de que cada caso ha financiado en secreto la misma cuenta.", it: "A metà del fascicolo, capite che ogni caso ha silenziosamente finanziato lo stesso conto.", de: "Auf halbem Weg durch die Akte erkennen Sie, dass jeder Fall heimlich dasselbe Konto finanziert hat.", pt: "A meio do processo, percebe que cada caso financiou discretamente a mesma conta." },
        { en: "A courier confirms deliveries to a warehouse registered under a shell company.", ar: "موصل أكد ليك توصيلات لمخزن مسجل تحت شركة وهمية.", ary: "موصل أكد التوصيلات لمخزن مسجل تحت شركة وهمية.", fr: "Un livreur confirme des livraisons vers un entrepôt enregistré sous une société-écran.", es: "Un mensajero confirma entregas a un almacén registrado bajo una empresa fantasma.", it: "Un corriere conferma consegne verso un magazzino registrato a nome di una società di comodo.", de: "Ein Kurier bestätigt Lieferungen an ein Lagerhaus, das auf eine Briefkastenfirma registriert ist.", pt: "Um estafeta confirma entregas a um armazém registado sob uma empresa de fachada." },
        { en: "The warehouse is empty — except for a wall covered in your case files, already collected.", ar: "المخزن فارغ — غير حيط مغطى بملفات القضايا ديالك، جمعوها من قبل.", ary: "المخزن خاوي — غير حيط مغطى بملفات القضايا ديالك، جامعينها من قبل.", fr: "L'entrepôt est vide — à part un mur couvert de vos dossiers d'affaires, déjà rassemblés.", es: "El almacén está vacío — salvo por una pared cubierta con sus expedientes, ya recopilados.", it: "Il magazzino è vuoto — a parte una parete coperta dai vostri fascicoli, già raccolti.", de: "Das Lagerhaus ist leer — bis auf eine Wand voller Ihrer bereits gesammelten Fallakten.", pt: "O armazém está vazio — exceto por uma parede coberta com os seus processos, já reunidos." },
        { en: "Someone has been watching your investigation from the very beginning.", ar: "شي واحد كان كيتبعك من البداية.", ary: "شي واحد كان كيتبع التحقيق ديالك من البداية.", fr: "Quelqu'un observe votre enquête depuis le tout début.", es: "Alguien ha estado observando su investigación desde el principio.", it: "Qualcuno ha osservato la vostra indagine fin dall'inizio.", de: "Jemand hat Ihre Ermittlung von Anfang an beobachtet.", pt: "Alguém tem estado a observar a sua investigação desde o início." },
        { en: "A new voice message: 'You're getting close, detective. Keep going.'", ar: "رسالة صوتية جديدة: 'قربتي بزاف يا محقق. كمّل.'", ary: "رسالة صوتية جديدة: 'قربتي بزاف يا محقق. كمّل.'", fr: "Un nouveau message vocal : « Vous vous rapprochez, détective. Continuez. »", es: "Un nuevo mensaje de voz: «Se está acercando, detective. Siga así.»", it: "Un nuovo messaggio vocale: \"Vi state avvicinando, detective. Continuate così.\"", de: "Eine neue Sprachnachricht: „Sie kommen näher, Detektiv. Machen Sie weiter.\"", pt: "Uma nova mensagem de voz: \"Está a aproximar-se, detetive. Continue.\"" },
        { en: "You find K's real name buried in an old case you almost skipped.", ar: "لقيتي سميت 'ك' الحقيقية مدفونة فقضية قديمة غير قليل ما فاتتك.", ary: "لقيتي سميت 'ك' الحقيقية مدفونة فقضية قديمة غير قليل ما فاتتك.", fr: "Vous découvrez le vrai nom de K, enfoui dans une vieille affaire que vous avez failli ignorer.", es: "Encuentra el verdadero nombre de K enterrado en un caso antiguo que casi pasó por alto.", it: "Trovate il vero nome di K, sepolto in un vecchio caso che avevate quasi ignorato.", de: "Sie finden K's wahren Namen, verborgen in einem alten Fall, den Sie beinahe übersprungen hätten.", pt: "Você encontra o verdadeiro nome de K, enterrado num caso antigo que quase ignorou." },
        { en: "K was once a detective too — one who vanished from the records years ago.", ar: "'ك' كان محقق هو الآخر من قبل — اختفى من السجلات من سنين.", ary: "'ك' هو الآخر كان محقق من قبل — واحد اختفى من السجلات من سنين.", fr: "K était autrefois détective aussi — quelqu'un qui a disparu des registres il y a des années.", es: "K también fue detective en su momento — alguien que desapareció de los registros hace años.", it: "Anche K era un detective, un tempo — qualcuno scomparso dai registri anni fa.", de: "K war einst selbst Detektiv — jemand, der vor Jahren spurlos aus den Akten verschwand.", pt: "K também já foi detetive — alguém que desapareceu dos registos há anos." },
        { en: "The organization isn't one person — it's a network built from your own precinct.", ar: "المنظمة ماشي شخص وحيد — هي شبكة مبنية من داخل نفس المركز ديالك.", ary: "المنظمة ماشي شخص وحيد — هي شبكة مبنية من داخل نفس المركز ديالك.", fr: "L'organisation n'est pas une seule personne — c'est un réseau construit depuis votre propre commissariat.", es: "La organización no es una sola persona — es una red construida desde su propia comisaría.", it: "L'organizzazione non è una sola persona — è una rete costruita dall'interno della vostra stessa centrale.", de: "Die Organisation ist nicht eine einzelne Person — sie ist ein Netzwerk, aufgebaut aus Ihrem eigenen Revier.", pt: "A organização não é uma só pessoa — é uma rede construída a partir da sua própria esquadra." },
        { en: "You're handed a final envelope: 'Open only after the last case.'", ar: "عطاوك ظرف أخير: 'حلو غير من بعد آخر قضية.'", ary: "عطاوك ظرف أخير: 'حلو غير من بعد آخر قضية.'", fr: "On vous remet une dernière enveloppe : « À n'ouvrir qu'après la dernière affaire. »", es: "Le entregan un sobre final: «Ábrelo solo después del último caso.»", it: "Vi consegnano una busta finale: \"Da aprire solo dopo l'ultimo caso.\"", de: "Man überreicht Ihnen einen letzten Umschlag: „Erst nach dem letzten Fall öffnen.\"", pt: "Entregam-lhe um envelope final: \"Abrir apenas depois do último caso.\"" },
        { en: "Every thread you pulled was meant to lead here, to this moment.", ar: "كل خيط جبدتيه كان معمول باش يوصلك لهنا، لهاد اللحظة.", ary: "كل خيط جبدتيه كان معمول باش يوصلك لهنا، لهاد اللحظة.", fr: "Chaque fil que vous avez tiré était destiné à vous mener ici, à cet instant.", es: "Cada hilo que tiró estaba destinado a llevarlo aquí, a este momento.", it: "Ogni filo che avete tirato era destinato a portarvi qui, in questo momento.", de: "Jeder Faden, an dem Sie gezogen haben, sollte Sie genau hierher führen, zu diesem Moment.", pt: "Cada fio que puxou destinava-se a trazê-lo até aqui, até este momento." },
        { en: "You open the envelope. Inside is a single photo — of you, years ago, on your very first day.", ar: "حليتي الظرف. فالداخل تصويرة وحدة — ديالك، من سنين، فأول نهار ديالك.", ary: "حليتي الظرف. فالداخل تصويرة وحدة — ديالك، من سنين، فأول نهار ديالك.", fr: "Vous ouvrez l'enveloppe. À l'intérieur, une seule photo — de vous, des années plus tôt, le tout premier jour.", es: "Abre el sobre. Dentro hay una sola foto — suya, de hace años, en su primer día.", it: "Aprite la busta. Dentro c'è un'unica foto — la vostra, di anni fa, il primissimo giorno.", de: "Sie öffnen den Umschlag. Darin: ein einziges Foto — von Ihnen, Jahre zuvor, an Ihrem allerersten Tag.", pt: "Você abre o envelope. Lá dentro está uma única fotografia — sua, de anos atrás, no seu primeiríssimo dia." }
    ];
    function openStoryScreen() { renderStoryScreen(); show('scr-story'); playClickSound(); }
    function renderStoryScreen() {
        const el = document.getElementById('story-timeline');
        if (!el) return;
        el.innerHTML = '';
        STORY_FRAGMENTS.forEach((frag, i) => {
            const unlocked = userProfile.solvedCases.includes(i);
            const div = document.createElement('div');
            div.className = 'story-frag' + (unlocked ? '' : ' locked');
            const text = unlocked ? (frag[currentLang] || frag.en) : txx('storyLocked');
            div.innerHTML = `<b>#${i+1}</b> — ${escapeHtml(text)}`;
            el.appendChild(div);
        });
    }

    // ---- Quick Challenge Race mode (built on the existing *6 / WebRTC connection) ----
    let raceActive = false;
    let raceStartedAt = null;
    let raceTimerHandle = null;
    let raceIAmFinished = false;
    let raceOpponentFinished = false;
    let myRaceMs = null;
    let opponentRaceMs = null;
    let raceResultDeclared = false;

    function startQuickRace() {
        const statusBox = document.getElementById('race-status-box');
        if (!mpConnection || !mpConnection.open) {
            if (statusBox) statusBox.textContent = txx('raceWaitingFriend');
            return;
        }
        const unsolved = [];
        for (let i = 0; i < 20; i++) { if (!userProfile.solvedCases.includes(i)) unsolved.push(i); }
        const pool = unsolved.length ? unsolved : Array.from({length:20}, (_,i)=>i);
        const chosenIdx = pool[Math.floor(Math.random() * pool.length)];
        mpConnection.send({ type: 'race_invite', caseIndex: chosenIdx, ts: Date.now() });
        if (statusBox) statusBox.textContent = txx('raceInvited');
        beginRace(chosenIdx);
        playClickSound();
    }

    function beginRace(caseIndex) {
        raceActive = true;
        raceIAmFinished = false;
        raceOpponentFinished = false;
        myRaceMs = null;
        opponentRaceMs = null;
        raceResultDeclared = false;
        raceStartedAt = Date.now();
        currentCaseIndex = caseIndex;
        userProfile.lastCaseIndex = caseIndex;
        closeMultiplayerModal();
        startInvestigation();
        const bar = document.getElementById('race-bar');
        if (bar) bar.classList.add('active');
        const barText = document.getElementById('race-bar-text');
        if (barText) barText.textContent = '🏁 ' + txx('raceInvited');
        if (raceTimerHandle) clearInterval(raceTimerHandle);
        raceTimerHandle = setInterval(updateRaceTimerDisplay, 1000);
        updateRaceTimerDisplay();
    }

    function updateRaceTimerDisplay() {
        const el = document.getElementById('race-bar-timer');
        if (!el || !raceStartedAt) return;
        const s = Math.floor((Date.now() - raceStartedAt) / 1000);
        const mm = String(Math.floor(s/60)).padStart(2,'0');
        const ss = String(s%60).padStart(2,'0');
        el.textContent = mm + ':' + ss;
    }

    function endRaceUI() {
        raceActive = false;
        if (raceTimerHandle) { clearInterval(raceTimerHandle); raceTimerHandle = null; }
        const bar = document.getElementById('race-bar');
        if (bar) bar.classList.remove('active');
    }

    function handleRaceMessage(data) {
        const statusBox = document.getElementById('race-status-box');
        if (data.type === 'race_invite') {
            if (statusBox) statusBox.textContent = txx('raceReceived');
            beginRace(data.caseIndex);
        } else if (data.type === 'race_finish') {
            raceOpponentFinished = true;
            opponentRaceMs = (typeof data.ms === 'number') ? data.ms : Infinity;
            declareRaceResultIfReady();
        } else if (data.type === 'race_wrong') {
            if (statusBox) statusBox.textContent = txx('raceOpponentWrong');
        }
    }

    function handleRaceSubmission(isCorrect, elapsedMs) {
        if (isCorrect) {
            raceIAmFinished = true;
            myRaceMs = elapsedMs;
            endRaceUI();
            if (mpConnection && mpConnection.open) {
                try { mpConnection.send({ type: 'race_finish', ms: elapsedMs, name: userProfile.name }); } catch (e) {}
            }
            declareRaceResultIfReady();
        } else {
            if (mpConnection && mpConnection.open) {
                try { mpConnection.send({ type: 'race_wrong' }); } catch (e) {}
            }
        }
    }

    // Declares the race winner strictly by comparing each side's solve time
    // (elapsed ms since the case started), never by which network message
    // happened to arrive first — arrival order depends on network latency,
    // not on who actually solved it first.
    function declareRaceResultIfReady() {
        if (raceResultDeclared) return;
        const barText = document.getElementById('race-bar-text');
        const statusBox = document.getElementById('race-status-box');

        if (raceIAmFinished && raceOpponentFinished) {
            raceResultDeclared = true;
            const iWon = myRaceMs <= opponentRaceMs; // tie goes to whoever answered (rare, symmetric edge case)
            const msg = iWon ? txx('raceYouWon') : txx('raceYouLost');
            if (barText) barText.textContent = msg;
            alert(msg);
        } else if (raceIAmFinished && !raceOpponentFinished) {
            // I've answered correctly but don't yet know the opponent's time — wait for it.
            if (barText) barText.textContent = txx('raceYouFinished');
            if (statusBox) statusBox.textContent = txx('raceYouFinished');
        } else if (!raceIAmFinished && raceOpponentFinished) {
            // Opponent finished first — wait for me to also finish so we can compare actual solve times.
            if (barText) barText.textContent = txx('raceOpponentFinishedWait');
            if (statusBox) statusBox.textContent = txx('raceOpponentFinishedWait');
        }
    }

    // ---- daily reminder (native local notification via Capacitor, schedules once/day) ----
    const DAILY_REMINDER_ID = 1;
    function getLocalNotificationsPlugin() {
        return (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications) || null;
    }
    async function scheduleDailyReminder() {
        const LocalNotifications = getLocalNotificationsPlugin();
        if (!LocalNotifications) return false;
        try {
            const perm = await LocalNotifications.requestPermissions();
            if (perm.display !== 'granted') return false;
            await LocalNotifications.cancel({ notifications: [{ id: DAILY_REMINDER_ID }] });
            await LocalNotifications.schedule({
                notifications: [{
                    title: txx('appTitle') || 'The Black File',
                    body: txx('reminderMsg'),
                    id: DAILY_REMINDER_ID,
                    schedule: { on: { hour: 20, minute: 0 }, repeats: true }
                }]
            });
            return true;
        } catch (e) {
            console.log('Notification schedule error:', e);
            return false;
        }
    }
    async function cancelDailyReminder() {
        const LocalNotifications = getLocalNotificationsPlugin();
        if (!LocalNotifications) return;
        try { await LocalNotifications.cancel({ notifications: [{ id: DAILY_REMINDER_ID }] }); }
        catch (e) { console.log('Notification cancel error:', e); }
    }
    async function toggleDailyReminder(v) {
        const enabled = typeof v === 'boolean' ? v : (document.getElementById('access-reminder-toggle')?.checked ?? false);
        playClickSound();
        if (enabled) {
            const ok = await scheduleDailyReminder();
            accessSettings.reminderEnabled = ok;
            saveAccessSettings();
            if (ok) {
                alert(txx('reminderEnabled'));
            } else {
                const toggle = document.getElementById('access-reminder-toggle'); if (toggle) toggle.checked = false;
                alert(txx('reminderDenied'));
            }
        } else {
            await cancelDailyReminder();
            accessSettings.reminderEnabled = false;
            saveAccessSettings();
        }
    }
    // Re-arms the schedule on every app launch (covers cases like the OS clearing
    // alarms after a reboot on some devices) if the user previously enabled it.
    async function setupDailyReminderCheck() {
        if (typeof accessSettings === 'undefined' || !accessSettings.reminderEnabled) return;
        const ok = await scheduleDailyReminder();
        if (!ok) { accessSettings.reminderEnabled = false; saveAccessSettings(); }
    }

    // ---- extra UI text sync (elements that aren't part of the original TRANSLATIONS map) ----
    function updateExtraUITexts() {
        const setText = (id, key) => { const el = document.getElementById(id); if (el) el.textContent = txx(key); };
        const setPlainText = (id, key) => { const el = document.getElementById(id); if (el) el.textContent = txx(key).replace(/^[^\w\s]+\s*/u, ''); };
        setPlainText('txt-stats-btn', 'statsBtnLabel');
        setPlainText('txt-story-btn', 'storyBtnLabel');
        setPlainText('txt-access-btn', 'accessBtnLabel');
        { const el = document.getElementById('txt-settings-title'); if (el) el.textContent = txx('settingsTitle').replace(/^[^\w\s]+\s*/u, ''); }
        setText('txt-settings-close', 'accessClose');
        setText('txt-stats-back', 'statsBackLabel');
        setText('txt-stats-title', 'statsTitle');
        setText('txt-stats-chart-title', 'statsChartTitle');
        setText('txt-report-title', 'reportTitle');
        setText('txt-report-desc', 'reportDesc');
        setText('txt-report-download', 'reportDownload');
        setText('txt-report-share', 'reportShare');
        setText('txt-story-back', 'storyBackLabel');
        setText('txt-story-title', 'storyTitle');
        setText('txt-story-desc', 'storyDesc');
        setText('txt-access-title', 'accessTitle');
        setText('txt-access-fontsize', 'accessFontSize');
        setText('txt-access-contrast', 'accessContrast');
        setText('txt-access-cb', 'accessCB');
        setText('txt-access-tts', 'accessTTS');
        setText('txt-access-energy', 'accessEnergy');
        setText('txt-access-energy-limit', 'accessEnergyLimit');
        setText('txt-access-reminder-label', 'accessReminderLabel');
        setText('txt-access-reminder-desc', 'accessReminderDesc');
        setText('txt-access-reminder-enable', 'accessReminderEnable');
        setText('txt-access-close', 'accessClose');
        setText('txt-race-title', 'raceTitle');
        setText('txt-race-desc', 'raceDesc');
        setText('txt-race-start', 'raceStart');
        setText('txt-tts-listen', 'listen');
        setText('txt-tts-listen-2', 'listen');
        renderEnergyRemaining();
        if (document.getElementById('scr-stats').classList.contains('active')) renderStatsScreen();
        if (document.getElementById('scr-story').classList.contains('active')) renderStoryScreen();
    }

// ---- Service worker registration ----
// تسجيل الـ Service Worker ليعمل التطبيق دون اتصال بعد أول فتح
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch(() => { /* ignore in file:// preview */ });
        });
    }

// --- تفاعل المصباح وسحب الخيط ---
const wrapper = document.getElementById('lamp-wrapper');
const handle = document.getElementById('pull-handle');
const stringLine = document.getElementById('string-line');
let isOn = false;
let dragging = false;
let moved = false;
let startX = 0, startY = 0;
let offsetX = 0, offsetY = 0;
const constraints = { top: 0, bottom: 60, left: -50, right: 50 };

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function toggleLampState() {
  isOn = !isOn;
  wrapper?.classList.toggle('on', isOn);
}

function updateHandlePosition(dx, dy) {
  if (!handle || !stringLine) return;
  handle.style.transform = `translate(${dx}px, ${dy}px)`;
  stringLine.setAttribute('x2', 225 + dx);
  stringLine.setAttribute('y2', 80 + dy);
}

function resetHandlePosition() {
  if (!handle) return;
  offsetX = 0;
  offsetY = 0;
  handle.style.transition = 'transform 0.25s ease-out';
  updateHandlePosition(0, 0);
  setTimeout(() => {
    handle.style.transition = '';
  }, 250);
}

if (handle && wrapper) {
  function onPointerDown(e) {
    dragging = true;
    moved = false;
    handle.style.cursor = 'grabbing';
    const point = e.touches ? e.touches[0] : e;
    startX = point.clientX;
    startY = point.clientY;
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!dragging) return;
    const point = e.touches ? e.touches[0] : e;
    let dx = clamp(point.clientX - startX, constraints.left, constraints.right);
    let dy = clamp(point.clientY - startY, constraints.top, constraints.bottom);
    offsetX = dx;
    offsetY = dy;
    moved = moved || Math.abs(dx) > 1 || Math.abs(dy) > 1;
    updateHandlePosition(dx, dy);
  }

  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    handle.style.cursor = 'grab';
    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    if (distance > 3 || !moved) {
      toggleLampState();
    }
    resetHandlePosition();
  }

  handle.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  handle.addEventListener('touchstart', onPointerDown, { passive: false });
  window.addEventListener('touchmove', onPointerMove, { passive: false });
  window.addEventListener('touchend', onPointerUp);
}

// --- إظهار وإخفاء كلمات المرور ---
function setupEyeToggle(buttonId, inputId) {
  const btn = document.getElementById(buttonId);
  const input = document.getElementById(inputId);
  if (!btn || !input) return;
  const slash = btn.querySelector('.slash');
  let show = false;
  btn.addEventListener('click', () => {
    show = !show;
    input.type = show ? 'text' : 'password';
    if (slash) slash.style.display = show ? 'none' : 'block';
  });
}

setupEyeToggle('toggle-password', 'password');
setupEyeToggle('toggle-confirm-password', 'confirm-password');

// --- إدارة وضع "اللعب بدون إنترنت" (Offline / Guest Mode) ---
const OFFLINE_MODE_KEY = 'tf_offlineMode';

function isOfflineMode() {
  try {
    return localStorage.getItem(OFFLINE_MODE_KEY) === 'true';
  } catch (e) {
    return false;
  }
}

function setOfflineMode(value) {
  try {
    if (value) {
      localStorage.setItem(OFFLINE_MODE_KEY, 'true');
    } else {
      localStorage.removeItem(OFFLINE_MODE_KEY);
    }
  } catch (e) { /* ignore: storage may be blocked */ }
}

function showLoginUI() {
  const wrapper = document.getElementById('lamp-wrapper');
  const appRoot = document.querySelector('.app');
  if (wrapper) {
    wrapper.style.display = 'flex';
    wrapper.setAttribute('aria-hidden', 'false');
  }
  if (appRoot) {
    appRoot.style.display = 'none';
  }
}

function showGameUI() {
  const wrapper = document.getElementById('lamp-wrapper');
  const appRoot = document.querySelector('.app');
  if (wrapper) {
    wrapper.style.display = 'none';
    wrapper.setAttribute('aria-hidden', 'true');
  }
  if (appRoot) {
    appRoot.style.display = 'block';
  }
  if (typeof show === 'function') {
    try {
      show('scr-menu');
    } catch (error) {
      console.error('Unable to show the game menu:', error);
    }
  }
}

// نقطة الدخول الوحيدة الموثوقة لحالة الواجهة (تسجيل دخول أو لعب داخل التطبيق).
// عمداً لا تُعاد شاشة تسجيل الدخول إذا كان المستخدم في وضع "بدون إنترنت"،
// لتفادي مشكلة إعادته لشاشة الدخول بعد نجاح التسجيل (سباق مع onAuthStateChanged).
function syncAuthUI(user) {
  if (user) {
    setOfflineMode(false); // مستخدم حقيقي مسجّل الدخول يلغي وضع الضيف تلقائياً
    showGameUI();
  } else if (isOfflineMode()) {
    showGameUI();
  } else {
    showLoginUI();
  }
}

// يتيح للمستخدم تجاوز تسجيل الدخول بالكامل والدخول مباشرة للأرشيف/القائمة،
// سواء لعدم وجود إنترنت أو لعدم رغبته بإنشاء حساب.
function playOffline() {
  setOfflineMode(true);
  showGameUI();
  playClickSound();
}

async function bootstrapAuthFlow() {
  try {
    await initializeAuthPersistence();
  } catch (error) {
    console.error('Firebase persistence setup failed:', error);
  }

  try {
    const result = await checkRedirectResult();
    if (result && result.user) {
      // نتيجة إعادة توجيه Google ناجحة: أدخل المستخدم للعبة فوراً.
      syncAuthUI(result.user);
    } else if (firebaseAuth.currentUser) {
      // onAuthStateChanged قد يكون أظهر واجهة اللعبة بالفعل قبل وصولنا هنا
      // (خصوصاً بعد إعادة تحميل الصفحة إثر Redirect من Google).
      // لا نستدعي syncAuthUI(null) هنا أبداً في هذه الحالة، تفادياً لإعادة
      // المستخدم لشاشة تسجيل الدخول رغم نجاح الدخول (هذا كان سبب الخلل).
      syncAuthUI(firebaseAuth.currentUser);
    }
    // إن لم توجد نتيجة Redirect ولا مستخدم حالي، نترك onAuthStateChanged
    // (المسجَّل بالفعل) هو من يقرر الحالة الصحيحة للواجهة.
  } catch (error) {
    console.error('Redirect auth handling failed:', error);
    // فقط في حال عدم وجود مستخدم حالي بالفعل ولسنا في وضع "بدون إنترنت"،
    // نعرض شاشة تسجيل الدخول كحالة افتراضية آمنة.
    if (!firebaseAuth.currentUser && !isOfflineMode()) {
      syncAuthUI(null);
    }
  }
}

// الحالة الابتدائية قبل تهيئة Firebase: أعطِ الأولوية لوضع "بدون إنترنت"
// المحفوظ مسبقاً حتى لا يظهر وميض شاشة تسجيل الدخول لمن اختاره سابقاً.
if (isOfflineMode()) {
  showGameUI();
} else {
  showLoginUI();
}

onAuthStateChanged(firebaseAuth, (user) => {
  syncAuthUI(user);
});

void bootstrapAuthFlow();

// --- ربط النموذج بـ Firebase (الذي أنشأناه مسبقاً) ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const submitBtn = document.getElementById('submit-btn');

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // نحاول تسجيل الدخول أولاً (يطابق تسمية الزر "SIGN IN"). حقل "Confirm
    // Password" لا يُفرض إلا عند إنشاء حساب جديد فعلياً (أي عندما لا يوجد
    // حساب بهذا البريد أصلاً)، بدل إجبار المستخدم العائد على تكراره في كل مرة.
    // إصلاح: التحقق من تطابق كلمتي السر دابا كيتم داخل firebase.js نفسها
    // (قبل استدعاء createUserWithEmailAndPassword)، ماشي هنا بعد فوات الأوان.
    if (submitBtn) submitBtn.disabled = true;
    try {
      if (typeof loginOrSignupWithEmail === 'function') {
        await loginOrSignupWithEmail(email, password, confirmPassword);
      } else {
        alert("جاري تسجيل الدخول...");
      }
    } catch (err) {
      if (err?.code === 'auth/password-mismatch') {
        alert("كلمتا السر غير متطابقتين!");
      } else {
        alert(err?.message || "Authentication failed. Please try again.");
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// --- استعادة كلمة المرور ---
const forgotLink = document.getElementById('forgot-link');
if (forgotLink) {
  forgotLink.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput ? emailInput.value.trim() : '';
    if (!email) {
      alert('Please enter your email address first, then tap "Forgot Password?" again.');
      if (emailInput) emailInput.focus();
      return;
    }
    try {
      if (typeof resetPassword === 'function') {
        await resetPassword(email);
        alert('A password reset link has been sent to ' + email + '.');
      }
    } catch (err) {
      alert(err?.message || 'Could not send the reset email. Please try again.');
    }
  });
}

const googleBtn = document.getElementById('google-btn');
if (googleBtn) {
  googleBtn.addEventListener('click', async () => {
    try {
      showLoginUI();
      if (typeof loginWithGoogleRedirect === 'function') {
        await loginWithGoogleRedirect();
      } else if (typeof window.loginWithGoogle === 'function') {
        await window.loginWithGoogle();
      } else {
        alert("جاري الاتصال بـ Google...");
      }
    } catch (err) {
      showLoginUI();
      alert(err?.message || "Google sign-in failed.");
    }
  });
}

const offlineBtn = document.getElementById('offline-btn');
if (offlineBtn) {
  offlineBtn.addEventListener('click', () => {
    playOffline();
  });
}

const GLOBAL_UI_HANDLERS = {
  changeLang,
  show,
  resumeLastCase,
  exportProgress,
  importProgress,
  toggleMute,
  filterCases,
  startInvestigation,
  closeModal,
  submitAccusation,
  openNotesModal,
  saveNotes,
  openHintsModal,
  restartCase,
  openProfileModal,
  closeProfileModal,
  saveProfile,
  openMultiplayerModal,
  closeMultiplayerModal,
  openLeaderboardModal,
  highlightRaceSection,
  toggleVoiceInput,
  toggleChatWidget,
  sendChatMessage,
  toggleVoiceCall,
  createMultiplayerRoom,
  leaveMultiplayerRoom,
  joinMultiplayerRoom,
  closeOnboarding,
  openAccessModal,
  closeAccessModal,
  openSettingsModal,
  closeSettingsModal,
  setFontSize,
  toggleHighContrast,
  toggleColorBlind,
  toggleTTS,
  toggleEnergyMode,
  setEnergyLimit,
  toggleDailyReminder,
  openStatsScreen,
  openStoryScreen,
  startQuickRace,
  speakBrief,
  speakSuspect,
  downloadReportCard,
  shareReportCard,
  openAccusationModal
};

Object.assign(window, GLOBAL_UI_HANDLERS);