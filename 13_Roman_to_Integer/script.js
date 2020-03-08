function translateRomanNumeral(romanNumeral) {
    const DIGIT_VALUES = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let result = 0;
    const input = romanNumeral.split('');
    for (let i = 0; i < input.length; i++) {
        const currentLetter = DIGIT_VALUES[input[i]];
        const nextLetter = DIGIT_VALUES[input[i + 1]];
        if (currentLetter === undefined) {
            return 'null';
        } else {
            if (currentLetter < nextLetter) {
                result += nextLetter - currentLetter;
                i++;
            } else {
                result += currentLetter;
            }
        }
    }
    return result;
}

console.log(translateRomanNumeral('LI'));


const values = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50]]);

function romanToInt(string) {
    let result = 0, current, previous = 0;
    for (const char of string.split("").reverse()) {
        current = values.get(char);
        if (current >= previous) {
            result += current;
        } else {
            result -= current;
        }
        previous = current;
    }
    return result;
}

console.log(romanToInt('L'));




