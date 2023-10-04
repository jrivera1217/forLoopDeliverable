function Calculate(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}
console.log(Calculate(5))
console.log(Calculate(10))