const EventEmitter=require('events');

const customEmitter=new EventEmitter();

customEmitter.on('response',(name,age)=>{
    console.log(`Data recieved with name as ${name} and age ${age}`);
});

customEmitter.on('response',()=>{
    console.log(`another response`);
});

customEmitter.emit('response','srinu','24');