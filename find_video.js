import fs from 'fs';

const content = fs.readFileSync('C:\\Users\\hp\\.gemini\\antigravity\\brain\\7ec1e4e1-24dc-4ed9-b883-fcceae726798\\.system_generated\\steps\\8\\content.md', 'utf8');

const mp4Regex = /https:\/\/[^"'\s]+\.mp4[^"'\s]*/g;
const matches = content.match(mp4Regex);
console.log('Found video matches:', matches ? matches.length : 0);
if (matches) {
  matches.slice(0, 3).forEach((url, i) => console.log(`${i}: ${url.replace(/&amp;/g, '&')}`));
}
