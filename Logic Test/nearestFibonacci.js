function fib(n) {
    if (n < 3) return 1;
    let prev = 1;
    let current = 1;
    for (let i = 2; i < n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    return current

}

console.log(fib(5));