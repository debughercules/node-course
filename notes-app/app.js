// 3.1 2
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'this is file created by Node.js')
// fs.appendFileSync('notes.txt', '\ntesting append')

//3.3
// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

const getNotes = require('./notes')
// const msg = getNotes()
// console.log(msg)

//3.11
// const validator = require('validator')
// console.log(validator.isEmail('and.com'))
// console.log(validator.isURL('https//chattorijeebein.com'))

//3.12
const chalk = require('chalk')
// console.log(chalk.red.bold.inverse(msg))

//3.13
// console.log(process.argv[2])

const command = process.argv[2]

if (command === 'add') {
  console.log('adding note !')
} else if (command === 'remove') {
  console.log('removing note !')
}
