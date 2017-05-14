const test = require('ava')
// const jsc = require('jsverify')
// const check = require('ava-jsverify').check

const { evaluate, prog } = require('../dist/polish.js')

function e (s) {
	const x = evaluate(s)
	console.error(JSON.stringify(x, null, 2))
	return x
}

test('parse header', t => {
	e('foo:a')
	t.pass()
})

test('parse whitespace', t => {
	e('foo : a')
	t.pass()
})

test('parse body', t => {
	e(`
		bit : type
		bit = 2
	`)
	t.pass()
})

test('failed parse', async t => {
	const err = await t.throws(() => evaluate('$'));
	t.is(typeof err, typeof {})
})