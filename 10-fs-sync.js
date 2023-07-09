// FS module

const {readFileSync,writeFileSync}=require('fs')


const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')


console.log(first);
console.log(second);

// Write file
// to append use the flag:a in writefilesync

writeFileSync('./content/result-sync.txt',`This is the result: ${first}, ${second}`,{flag:'a'})





