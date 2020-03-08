const addBinary = function (a, b) {
    console.log(parseInt(a, 2));
    const sumInBase10 = parseInt(a, 2) + parseInt(b, 2);
    console.log(sumInBase10);
    return sumInBase10.toString(2)
};

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));


/*
const addBinary = function (a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};


console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));*/
