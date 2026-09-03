const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SALT = 'blackfile-detective-2026-CHANGE-THIS';
const filePath = path.join(__dirname, '..', 'www', 'translations.js'); // Portable path from scripts/ to www/

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // استبدال كل culprit بـ culpritHash وتشفير الاسم تلقائياً
    content = content.replace(/("culprit"|culprit)\s*:\s*"([^"]+)"/g, (match, p1, name) => {
        const hash = crypto.createHash('sha256').update(SALT + name.trim().toLowerCase()).digest('hex');
        return `"culpritHash": "${hash}"`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ تم تشفير جميع أسماء الجناة واستبدالها بنجاح!');
} catch (err) {
    console.error('❌ حدث خطأ أثناء القراءة أو الكتابة:', err.message);
}