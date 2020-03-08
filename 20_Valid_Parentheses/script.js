/*const isValid = function (s) {
    if (s === null || s.length <= 0) return true;
    const cArr = s.split('');
    const stack = [];
    for (const c of cArr) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    return stack.length === 0;

};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));*/


const closing = ['}', ']', ')'], opening = ['{', '[', '('], mapping = ['()', '{}', '[]'];

const isValid = function (s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        const currentVal = s[i];
        if (opening.indexOf(currentVal) > -1) {
            result.push(currentVal);
        } else if (closing.indexOf(currentVal) > -1) {
            if (!immediateClosingMatch(result[result.length - 1], currentVal))
                return false;
            else
                result.pop();
        }
    }
    return result.length === 0;
};

function immediateClosingMatch (open, close){
    return mapping.indexOf(open + '' + close) > -1
}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));


/*const isValid = function (s) {
    let closeMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    let charStack = [];

    // validate input
    if (s === null || s === undefined)
        return false;
    for (let i = 0; i < s.length; i++) {
        let curChar = s.charAt(i);
        let topElement;
        if (closeMap[curChar] !== undefined) {
            topElement = (charStack.length === 0) ? '#' : charStack.pop();
            if (topElement !== closeMap[curChar])
                return false;
        } else {
            charStack.push(curChar);
        }
    }
    return charStack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));*/
