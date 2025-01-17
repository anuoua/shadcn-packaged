import { join, resolve } from "path";
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { cwd } from 'process'

const targetDir = resolve(cwd(), "~shadcn-packaged");

function replaceInFile(filePath) {
  let fileContent = readFileSync(filePath, "utf-8");
  const oldString = "~shadcn-packaged";
  const newString = "..";
  fileContent = fileContent.split(oldString).join(newString);
  writeFileSync(filePath, fileContent, "utf-8");
}

function processDirectory(dir) {
  const files = readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const filePath = join(dir, file.name);
    if (file.isDirectory()) {
      processDirectory(filePath);
    } else if (file.isFile()) {
      replaceInFile(filePath);
    }
  }
}

processDirectory(targetDir);