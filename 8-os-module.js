// OS Module

const os = require('os')

// info about current user

const curr_user=os.userInfo()

console.log(curr_user);

// getting system uptime in seconds

const uptime=os.uptime()

console.log(`The system uptime is ${uptime}.`);

const currentOs={
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem()
}

console.log(currentOs);