const fs = require('fs');
const markdownIt = require('markdown-it');
const md = new markdownIt();

const markdown = fs.readFileSync('README.md', 'utf-8');
const result = md.render(markdown);


fs.writeFileSync('index.html', result); 

console.log('File converted successfully');