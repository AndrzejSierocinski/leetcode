/*const plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    return [1, ...digits];
};
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));*/


const plusOne = function(digits) {
    let num = digits.join('');
    console.log(num);
    num++;
    console.log(num);
    return num.toString().split('').map(Number);
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));