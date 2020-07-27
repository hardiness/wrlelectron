var events = require('events');
var eventEmitter= new events.EventEmitter();

//监听器1
var listener1 = function listener1(){
    console.log('监听器 listener1执行');

};
var listener2 = function listener2(){
    console.log('监听器listener2执行');
};

//绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);
var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个监听器");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listener1不再监听');

eventEmitter.emit('connection');

eventListeners= eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器监听连接事件');

eventEmitter.emit('error');
console.log("程序执行完毕");