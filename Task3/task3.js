const fs = require('fs');

function countWordsInFile(fileName) {
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    const words = data.split(/\s+/).filter((word) => word !== ''); // Split text by whitespace and remove empty elements
    const wordCount = words.length;
    return wordCount;
  } catch (err) {
    console.error('Error reading the file:', err.message);
    return 0;
  }
}

const fileName = 'data.txt';
const wordCount = countWordsInFile(fileName);
console.log(`Total word count in "${fileName}": ${wordCount}`);
