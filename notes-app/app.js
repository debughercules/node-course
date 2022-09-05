// 3.1 2
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'this is file created by Node.js')
// fs.appendFileSync('notes.txt', '\ntesting append')

//3.3
// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

const getNotes = require('./notes')
const msg = getNotes()
console.log(msg)

//3.11
