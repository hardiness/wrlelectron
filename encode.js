const buf = Buffer.from('wrl','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

buf1= Buffer.alloc(10);
console.log(buf1.toString('hex'));
buf2= Buffer.alloc(10,1);
console.log(buf2.toString('hex'));
buf3=Buffer.allocUnsafe(10);

console.log(buf3.toString('hex'));

buf4= Buffer.alloc(256);
len=buf4.write("www.wrl.com");
console.log("写入字节数：" + len);

const buf5 = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf5);
console.log(json);
//console.log(buf5.toJSON());

const copy = JSON.parse(json,(key,value)=>{
    return value && value.type === "Buffer" ?
    Buffer.from(value.data):value ;
});
console.log(copy);



