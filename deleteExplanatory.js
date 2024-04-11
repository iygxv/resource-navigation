/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');


// 递归遍历文件夹
function walkDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath); // 递归遍历子目录
    } else {
         let fileContent = fs.readFileSync(filePath, 'utf8');
         if(/\/\*[^/]*\*\/\n?/g.test(fileContent)) {
            fileContent = fileContent.replace(/\/\*[^/]*\*\/\n/g, '');
            // 如果第一行是空格,则去掉
            fileContent = fileContent.replace(/^\s*\n/g, '');
            fs.writeFileSync(filePath, fileContent);
            console.log(`移除完成： ${filePath}`);
         }else {
          console.log(filePath);
          fileContent = fileContent.replace(/<!--[^/]*-->/g, '');
          fs.writeFileSync(filePath, fileContent);
          console.log(`移除完成： ${filePath}`);
         }
    }
  });
}

// 指定要遍历的文件夹路径
const folderPath = './';

// 执行文件遍历
walkDir(folderPath);