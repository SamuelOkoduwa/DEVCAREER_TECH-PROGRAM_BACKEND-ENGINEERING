const os = require("os")

// Get the current user's details
const user = os.userInfo()
console.log(user)

// Get the current hostname
const hostname = os.hostname()
console.log(hostname)

// Get the current platform
const platform = os.platform()
console.log(platform)

// Get end of line character
const eol = os.EOL
console.log(eol)

// Get the current memory usage
const memory = os.freemem()
console.log(memory)

// Get the total memory
const totalMemory = os.totalmem()
console.log(totalMemory)


// Get the current archictecture
const arch = os.arch()
console.log(arch)

// Get info about CPUs
const cpus = os.cpus()
console.log(cpus)
