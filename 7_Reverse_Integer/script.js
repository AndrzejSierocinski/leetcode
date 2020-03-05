/*const reverse = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

console.log(reverse(-123));
console.log(reverse(120));*/


const reverse = function (x) {
    const sign = (x > 0) - (x < 0);
    // console.log(sign);
    const val = sign * parseInt(x.toString().split('').reverse().join(''));
    return val < Math.pow(2, 31) && val >= -Math.pow(2, 31) ? val : 0
};

console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(123));
