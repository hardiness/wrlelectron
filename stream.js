// var fs = require("fs");
// var data = '';
// var readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('utf16le');

// readerStream.on('data',function(chunk){
//     data +=chunk;
//     console.log("data");
// });

// readerStream.on('end',function(){
//     console.log(data);
//     console.log('end');
// });
// readerStream.on('error',function(err){
//     console.log(err.stack);

// });

// data='菜鸟教程官网地址：www.ruboob.com';
// var sw = fs.createWriteStream('output.txt');
// sw.write(data,'utf8');

// sw.end();
// sw.on('finish',function(){
//     console.log('写入完成');
// });
// sw.on('error',function(){
//     console.log(err.stack);
// });


// console.log("程序执行完毕");

/* var fs = require('fs');
var readerStream = fs. createReadStream('input.txt');
//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);

console.log("程序执行完毕");
 */

var fs = require("fs");
var zlib = require('zlib');

// fs.createReadStream('input.txt').pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));
// console.log("文件压缩完成");
// var hello = require('./hello');
// hello.world();

fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));
console.log("文件解压完成。");