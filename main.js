function fibo(num) {
    if (num === 1) return 1;
    if (num === 2) return 2;
    return fibo(num - 1) + fibo(num - 2)
}

console.log(fibo(5));