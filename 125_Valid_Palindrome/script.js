const isPalindrome = function (s) {
    const cleaned = s.replace(/\W/g, "");
    const reversedAndCleaned = cleaned.split("").reverse().join("");

    return cleaned.toLowerCase() === reversedAndCleaned.toLowerCase();
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
