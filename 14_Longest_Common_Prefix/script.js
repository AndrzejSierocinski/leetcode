const longestCommonPrefix = function (strs) {
    return strs.length < 2 ? (strs[0] || '') : strs.reduce((common, string) => {
        for (let i = 0; i < common.length; i++) {
            if (string.charAt(i) !== common.charAt(i)) {
                common = string.slice(0, i);
                break;
            }
        }
        return common;
    });
};
console.log(longestCommonPrefix(["flower","flow","flight"]));


/*const longestCommonPrefix = function (arr) {
    if (arr.length === 0)
        return '';
    else if (arr.length === 1)
        return arr[0];
    else {
        let res = '';
        const lenArr = [];
        for (let s in arr) {
            lenArr.push(arr[s].length)
        }
        const minLen = Math.min(...lenArr);
        for (let j = 0; j < minLen; j++) {
            const indexVal = [];
            for (let k = 0; k < arr.length; k++) {
                indexVal.push(arr[k][j])
            }
            const minVal = indexVal.reduce((acc, cum) => {
                return acc.charAt() < cum.charAt() ? acc : cum
            });
            const maxVal = indexVal.reduce((acc, cum) => {
                return acc.charAt() > cum.charAt() ? acc : cum
            });
            if (maxVal === minVal)
                res = res + minVal;
            else
                return res
        }
        return res
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]));*/


/*
const longestCommonPrefix = function (strs) {
    // Handle edge cases
    if (strs.length < 2) {
        if (!strs[0]) {
            return ''
        }
        return strs[0]
    }
    // Sort it
    const sorted = strs.sort();
    // Get first and last
    const first = sorted[0];

    const last = sorted[sorted.length - 1];

    // Find common characters
    let output = '';
    let i = 0;
    // While first and last exists, first is equal to last, and i is less than the longest string
    while (first[i] && last[i] && first[i] === last[i] && (i < first.length || i < last.length)) {
        if (first.length >= last.length) {
            output += first[i]
        }
        if (first.length < last.length) {
            output += last[i]
        }
        i++
    }

    return output
};
console.log(longestCommonPrefix(["flower","flow","flight"]));*/
