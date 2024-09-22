const math= require('./math');
const myEmitter =require('./emitter.js');

const result =math.square(5);
console.log('Square of 5 is:25}');
myEmitter.emit('customEvent');