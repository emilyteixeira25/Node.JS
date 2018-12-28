var fs = require('fs');

//remove directory
//fs.rmdirSync('stuff');

//make directory
// fs.mkdir('stuff', function(){
//     fs.readFile('readme.txt', 'utf8', function(error, data){
//         fs.writeFile('./stuff/writeme.txt', data)
//     })
// });
fs.unlink('./stuff/writeme.txt', function(){
    fs.rmdir('stuff');
});
