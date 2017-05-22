const { evaluate, prog } = require('./dist/polish.js')

const x = evaluate(`

foo : bar
foo = 1

`)
console.error(JSON.stringify(x, null, 2))
	