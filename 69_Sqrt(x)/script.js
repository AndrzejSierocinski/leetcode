/*const mySqrt = function (x) {
    let y = Math.sqrt(x);
    return (y % 1 === 0 ? y : Math.floor(y));
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(9));*/


const mySqrt = function (x) {
    let ans = 1;
    while (ans * ans <= x) ans++;
    return ans - 1;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(9));
