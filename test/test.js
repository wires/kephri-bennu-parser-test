const test = require('ava')
// const jsc = require('jsverify')
// const check = require('ava-jsverify').check

const { evaluate, prog } = require('../dist/polish.js')

test('parse header', t => {
	evaluate('foo:a')
	t.pass()
})

test('parse whitespace', t => {
	evaluate('foo : a')
	t.pass()
})

test('failed parse', async t => {
	const err = await t.throws(() => evaluate('$'));
	t.is(err.found, '$')
})