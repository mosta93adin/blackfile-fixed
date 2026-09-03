const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const outputFile = path.join(rootDir, 'full_project_code.txt');

// المجلدات والملفات التي تحتوي على كود اللعبة
const targets = ['www', 'capacitor.config.json', 'package.json'];

function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });
    return fileList;
}

let combinedCode = '';

targets.forEach(target => {
    const fullPath = path.join(rootDir, target);
    if (fs.existsSync(fullPath)) {
        if (fs.statSync(fullPath).isDirectory()) {
            const files = getFiles(fullPath);
            files.forEach(filePath => {
                const relativePath = path.relative(rootDir, filePath);
                combinedCode += `\n// ====================================\n// FILE: ${relativePath}\n// ====================================\n\n`;
                combinedCode += fs.readFileSync(filePath, 'utf8') + '\n\n';
            });
        } else {
            combinedCode += `\n// ====================================\n// FILE: ${target}\n// ====================================\n\n`;
            combinedCode += fs.readFileSync(fullPath, 'utf8') + '\n\n';
        }
    }
});

fs.writeFileSync(outputFile, combinedCode, 'utf8');
console.log('✅ تم تحديث full_project_code.txt بنجاح بكل التعديلات الجديدة!');