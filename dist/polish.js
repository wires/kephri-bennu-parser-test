/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/polish.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("bennu")["parse"],
    __o0 = require("bennu")["text"],
    __o1 = require("bennu")["lang"],
    __o2 = require("nu-stream")["stream"],
    prog, evaluate, always = __o["always"],
    bind = __o["bind"],
    binds = __o["binds"],
    choice = __o["choice"],
    attempt = __o["attempt"],
    either = __o["either"],
    eof = __o["eof"],
    enumeration = __o["enumeration"],
    expected = __o["expected"],
    many = __o["many"],
    many1 = __o["many1"],
    next = __o["next"],
    rec = __o["rec"],
    run = __o["run"],
    character = __o0["character"],
    digit = __o0["digit"],
    letter = __o0["letter"],
    space = __o0["space"],
    between = __o1["between"],
    then = __o1["then"],
    foldl = __o2["foldl"],
    x, x0, x1, p, p0, p1, __add = (function(x, y) {
        return (x + y);
    }),
    join = foldl.bind(null, __add, ""),
    beginSpace = many(space),
    token = (function(p) {
        return then(p, many(space));
    }),
    plus = character("+"),
    times = character("*"),
    op = (function(x) {
        return always(({
            "operator": x
        }));
    }),
    add = next(plus, always(({
        "operator": "coproduct"
    }))),
    mul = next(times, always(({
        "operator": "product"
    }))),
    operator = choice(add, mul),
    number = bind(many1(digit), ((x = join), (x0 = parseInt), (function(z) {
        var z0 = x(z);
        return always(x0(z0));
    }))),
    label = bind(many1(letter), ((x1 = join), (function(z) {
        var z0 = x1(z);
        return always(z0);
    }))),
    expr = rec((function(expr0) {
        return either(binds(enumeration(expected("operator", token(operator)), expected("expression", expr0),
            expected("expression", expr0)), (function(op0, a, b) {
            return always(({
                "operator": op0,
                "x": a,
                "y": b
            }));
        })), expected("number", token(number)));
    })),
    tag = ((p = label), then(p, many(space))),
    colon = ((p0 = character(":")), then(p0, many(space))),
    equals = ((p1 = character("=")), then(p1, many(space))),
    header = enumeration(tag, colon, tag),
    body = enumeration(tag, equals, expr),
    s = many1(choice(attempt(header), attempt(body)));
(prog = between(beginSpace, eof, s));
(evaluate = run.bind(null, prog));
(exports["prog"] = prog);
(exports["evaluate"] = evaluate);