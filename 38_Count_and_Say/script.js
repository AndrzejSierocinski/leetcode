const countAndSay = (n, current = 0, say = '1') => {
    if (current === n - 1) {
        return say;
    } else {
        let counts = [];
        say.split('').forEach((digit, i) => {
            digit === say[i - 1] ? counts[counts.length - 1][0] += 1 : counts.push([1, digit]);
        });
        return countAndSay(n, current + 1, counts.reduce((a, b) => a.concat(b)).join(''));
    }
};

console.log(countAndSay(1)); //
console.log(countAndSay(4)); //
