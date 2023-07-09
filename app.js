// NPM

// local installation npm  i <packagename>

// global depepncy

// npm istall -g <packagename>

// sudo npm istall -g <packagename> (mac)

// package.json - manifest file (stores info about the project)

// manual approach (create pakacge.json in root, creare properties etc)

// npm init (press enter to skip)
// npm init -y (every thing by default)

var _ = require('lodash');
const items=[1,[2,[3,4]]]

const newItems=_.flattenDeep(items)

console.log(newItems);


