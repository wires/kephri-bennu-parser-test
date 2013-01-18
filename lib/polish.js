define(['parse/parse',
        'ecma/lex/number_lexer', 'ecma/lex/whitespace_lexer'],
    function(parse, number, whitespace){
    
    var add = parse.next(parse.character('+'), parse.always(function(a, b){ return a + b; })),
        sub = parse.next(parse.character('-'), parse.always(function(a, b){ return a - b; })),
        mul = parse.next(parse.character('*'), parse.always(function(a, b){ return a * b; })),
        div = parse.next(parse.character('/'), parse.always(function(a, b){ return a / b; }));
    
    var operator = parse.choice(add, sub, mul, div);
    
    var number = number.numericLiteral;
    
    var expr = parse.RecParser(function(self) {
        return parse.choice(
                parse.next(parse.many1(whitespace.whitespace),
                    self),
                parse.attempt(parse.binda(
                    parse.sequence(
                        operator,
                        self,
                        self),
                    function(op, a, b) {
                        return parse.always(op(a, b));
                    })),
                number);
    });
    
    var eval = parse.run.bind(undefined,
        parse.bind(expr, function(result) {
            return parse.next(parse.eof(), parse.always(result));
        }));
    
    return {
        'eval': eval
    };
});