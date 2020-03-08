const removeElement = function (nums, val) {
    while (nums.includes(val)) {
        console.log(nums.includes(val));
        nums.splice(nums.indexOf(val), 1);
    }
    return nums.length;
};

console.log(removeElement([0,1,2,2,3,0,4,2],2));

/*const removeElement = function(nums, val) {
    let i = 0, j = 0;
    while(j < nums.length) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};*/

