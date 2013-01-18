define(['parse/parse',
        'ecma/lex/number_lexer', 'ecma/lex/whitespace_lexer'],
    function(parse, number, whitespace){
    
    var add = function(a, b) { return a + b; };
    var sub = function(a, b) { return a - b; };
    var mul = function(a, b) { return a * b; };
    var div = function(a, b) { return a / b; };
    
    
    var eval = function(x) { return x; };
    
    return {
        'eval': eval
    };
});