/*const climbStairs = function (n) {
    let table = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2]
    }

    return table[n]
};

console.log(climbStairs(2));
console.log(climbStairs(3));*/

const climbStairs = n => {
    const phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(phi, n + 1) / Math.sqrt(5))
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
