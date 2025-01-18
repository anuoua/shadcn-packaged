import * as fs from 'fs';
import * as path from 'path';

function getFiles(dir, files_ = []) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, files_);
        } else if (filePath.endsWith('d.ts')) {
            files_.push(filePath);
        }
    }

    return files_;
}

function generateDir(dir) {
    const allFiles = getFiles(dir);
    const exportStatements = allFiles.map(file => `/// <reference path="./${path.relative(dir, file).replace(/\\/g, '/')}" />;`).join('\n');
    
    fs.writeFileSync('./index.d.ts', exportStatements);
}

generateDir('./dist/');