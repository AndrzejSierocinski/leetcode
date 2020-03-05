const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log(nums.length);
        for (let j = i + 1; j < nums.length; j++) {
            console.log(j);
            if (nums[i] + nums[j] === target) {
                console.log(nums[i]);
                console.log(nums[j]);
                return [i, j]
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 22));


/*const twoSum = function (nums, target) {
    const length = nums.length;
    const cacheNumbToIndex = {};
    let index;
    for (index = 0; index < length; index++) {
        const gotNum = nums[index];
        const wantedNum = target - gotNum;
        if (cacheNumbToIndex[wantedNum] !== undefined) {
            return [index, cacheNumbToIndex[wantedNum]].sort();
        }
        cacheNumbToIndex[gotNum] = index;
    }
};

console.log(twoSum([2, 7, 11, 15], 22));*/


/*const twoSum = function (nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            console.log(comp[nums[i]]);
            return [comp[nums[i]], i]
        }
        console.log(nums[i]);
        comp[target - nums[i]] = i;
        console.log(comp[target - nums[i]]);
    }
};

console.log(twoSum([2, 7, 11, 15], 22));*/

/*const twoSum = function (nums, target) {
    let map = new Map;
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
};
console.log(twoSum([2, 7, 11, 15], 22));*/


for (let k = 0; k < 10; k++) {
    console.log('k=' + k);
    for (let l = 0; l < 10; l++) {
        console.log('l=' + l);
    }
}
