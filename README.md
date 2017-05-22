based off https://github.com/mattbierner/parse-pn

# Wat?

this is an attempt to see what Kephri with Bennu feels like
to write parsers in JS

# How

Compile

	node_modules/.bin/khepri --package_manager node lib/polish.kep -o dist/polish.js

Test

```js
const { evaluate, prog } = require('./dist/polish.js')

const x = evaluate(`

foo : bar
foo = 1

`)

console.error(JSON.stringify(x, null, 2))
```
