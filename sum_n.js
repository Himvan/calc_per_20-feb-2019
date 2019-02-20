function Sum(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}
console.log(Sum(5)(2)(4));
console.log(Sum(2)(4)(8)(1)(1)(5));
