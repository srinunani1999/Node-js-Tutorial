//streams are used for constinous data
// a good use case for usig streams are when we are dealing with files
// streams also extend event emitter module 
// streams has four types, readable, writable, duplex, transform

// when reading a file we usually put the content in a variable but for a big files varuable won't work beacause of size of the file.
/// so, We use readstream

const { createReadStream } = require('fs');

//default 64kb chunks
//can increase the size of chunk by using highwatermark option

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf-8' });

stream.on('data', (chunks) => {
    console.log(chunks);
});

stream.on('error', (err) => {
    console.log(err);
})
stream.on('close', () => {
    console.log(`file closed`);
});


