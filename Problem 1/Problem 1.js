var sum_to_n_a = function(n) {
    // Closed-Form solution
    return ((n * (n + 1)) / 2);
};

var sum_to_n_b = function(n) {
    // Iterative
    let result = 0;
    for (var i = 1; i <= n; i++) {
        result += i;
    }

    return result;
};

var sum_to_n_c = function(n) {
    // Recursive
    if (n === 1) {
        return 1;
    } else {
        return n + sum_to_n_c(n - 1);
    }
};