const removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


/*const removeDuplicates = function (nums) {
    let last;
    for (let x = 1; x < nums.length; x++) {
        last = nums[x - 1];
        if (nums[x] === last) {
            nums.splice(x, 1);
            x--
        }
    }
    return nums.length
};
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));*/
