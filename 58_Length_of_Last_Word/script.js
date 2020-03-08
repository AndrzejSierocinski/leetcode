/*const lengthOfLastWord = function (str) {
    return str.trim().split(' ').pop().length;
};

console.log(lengthOfLastWord("Hello World"));*/


const lengthOfLastWord = function (words) {
    const n = words.split(" ");
    console.log(n);
    return n[n.length - 1].length;

};

console.log(lengthOfLastWord("Hello World"));
