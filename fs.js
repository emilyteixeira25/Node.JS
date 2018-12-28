var fs = require('fs');

//read a file
var readme = fs.readFileSync('readme.txt', 'utf8');
console.log(readme);

//write a file
var readme = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync('writeme.txt', readme);
