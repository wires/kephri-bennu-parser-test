/*
 * THIS FILE IS AUTO GENERATED from 'lib/polish.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "parse/parse", "parse/text", "parse/lang", "nu/stream"], (function(require, exports, __o,
    __o0, __o1, __o2) {
    "use strict";
    var prog, evaluate;
    var __o = __o,
        always = __o["always"],
        bind = __o["bind"],
        binds = __o["binds"],
        choice = __o["choice"],
        either = __o["either"],
        eof = __o["eof"],
        enumeration = __o["enumeration"],
        expected = __o["expected"],
        many = __o["many"],
        many1 = __o["many1"],
        next = __o["next"],
        rec = __o["rec"],
        run = __o["run"],
        __o0 = __o0,
        character = __o0["character"],
        digit = __o0["digit"],
        space = __o0["space"],
        __o1 = __o1,
        between = __o1["between"],
        then = __o1["then"],
        __o2 = __o2,
        foldl = __o2["foldl"];
    var join = foldl.bind(null, (function(x, y) {
        return (x + y);
    }), "");
    var beginSpace = many(space);
    var token = (function(p) {
        return then(p, many(space));
    });
    var add = next(character("+"), always((function(x, y) {
        return (x + y);
    }))),
        sub = next(character("-"), always((function(x, y) {
            return (x - y);
        }))),
        mul = next(character("*"), always((function(x, y) {
            return (x * y);
        }))),
        div = next(character("/"), always((function(x, y) {
            return (x / y);
        })));
    var operator = choice(add, sub, mul, div);
    var number = bind(many1(digit), (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(parseInt, join)));
    var expr = rec((function(expr) {
        return either(binds(enumeration(expected.bind(null, "operator")(token(operator)), expected.bind(
            null, "expression")(expr), expected.bind(null, "expression")(expr)), (function(op,
            a, b) {
            return always(op(a, b));
        })), expected.bind(null, "number")(token(number)));
    }));
    (prog = between(beginSpace, eof, expr));
    (evaluate = run.bind(null, prog));
    (exports.prog = prog);
    (exports.evaluate = evaluate);
}))