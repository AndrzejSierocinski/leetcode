/*const isPalindrome = function (x) {
    if (x < 0 || x % 10 === 0 && x !== 0) return false;
    let reverse = 0;
    let num = x;
    while (num > reverse) {
        reverse = num % 10 + reverse * 10;
        num = parseInt(num / 10);
    }
    return (num === reverse || num === parseInt(reverse / 10));
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));*/


/*const isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reverse_x = 0;
    while (x > reverse_x) {
        reverse_x = reverse_x * 10 + x % 10;
        if (reverse_x === x) {
            return true;
        }
        x = Math.floor(x / 10);
    }
    return reverse_x === x;
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));*/


/*// Converting to string
const isPalindrome = function(x) {
    return x === Number(x.toString().split("").reverse().join(""));
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));*/

const isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    console.log(typeof (x.toFixed(0).split('').reverse().join('')));
    console.log(typeof (x.toFixed(0).split('').reverse().join('') - 0));
    return x === x.toFixed(0).split('').reverse().join('') - 0;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
