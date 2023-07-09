const path=require('path')
 
console.log(path.sep);

const filePath= path.join('/Content','subfolder','test.txt')

console.log(filePath);

//basename

const base= path.basename(filePath);

console.log(base);

const absolutePath=path.resolve( __dirname,'Content','subfolder','test.txt')

console.log(absolutePath);