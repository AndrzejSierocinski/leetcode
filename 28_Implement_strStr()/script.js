const strStr = function (haystack, needle) {
    const nl = needle.length, hl = haystack.length;
    if (nl === 0) return 0;
    for (let i = 0; i < hl; i++) {
        //console.log(h);
        console.log(haystack.substr(i, nl));
        console.log(haystack.substring(i, i + nl));
        if (haystack.substring(i, nl + i) === needle)
            return i
    }
    return -1
};

console.log(strStr("hello", 'll'));
console.log(strStr("ghgaf",'a'));


/*
const strStr = function(haystack, needle) {
    for (let i = 0; ; i++) {
        for (let j = 0; ; j++) {
            if (j === needle.length) return i;
            if (i + j === haystack.length) return -1;
            if (needle.charAt(j) !== haystack.charAt(i + j)) break;
        }
    }
};

console.log(strStr("hello",'ll'));
console.log(strStr("aaaaa",'bba'));*/
