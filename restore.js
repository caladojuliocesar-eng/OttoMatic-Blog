const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('site_content_backup.txt', 'utf8');
// The backup script used \n--- [path] ---\n
const files = content.split('\n--- ');

files.forEach(fileBlock => {
    if (!fileBlock.trim()) return;
    const endOfPath = fileBlock.indexOf(' ---\n');
    if (endOfPath === -1) return;

    let filePath = fileBlock.substring(0, endOfPath).trim();
    const fileContent = fileBlock.substring(endOfPath + 5);

    // Relativize path based on \src\ or /src/
    const srcIndex = Math.max(filePath.indexOf('\\src\\'), filePath.indexOf('/src/'));
    if (srcIndex !== -1) {
        const relPath = filePath.substring(srcIndex + 1); // e.g., src\components\Hero.jsx

        // Skip main.jsx and index.css as Next.js doesn't need them
        if (relPath.endsWith('main.jsx') || relPath.endsWith('index.css')) return;

        // Create directories
        const dir = path.dirname(relPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        fs.writeFileSync(relPath, fileContent.trim() + '\n');
        console.log('Restored: ' + relPath);
    }
});
