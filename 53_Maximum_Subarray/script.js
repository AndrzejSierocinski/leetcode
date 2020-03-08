/*const maxSubArray = function (nums) {
    let max = -Infinity;
    let currentMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        max = Math.max(currentMax, max);
    }

    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));*/

/*
const maxSubArray = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }

    let score = nums[0];
    let maxScore = score;
    for (let i = 1; i < nums.length; i++) {

        score += nums[i];

        if (nums[i] > score) {
            score = nums[i];
        }

        if (maxScore < score) {
            maxScore = score;
        }
    }

    return maxScore;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));*/



const maxSubArray = function(nums) {
    let best = nums[0];
    let current = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const lastNum = nums[i];
        const combined = current + lastNum;
        current = Math.max(lastNum, combined);
        best = Math.max(best, current);
    }
    return best;
};

// Example:

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

