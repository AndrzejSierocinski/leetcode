/*function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < arr.length; i++) { // cycles through the array
        if (arr[i] >= num) { // if array value is bigger than num
            return i; // return index pos of num bigger than value
        }
        if (i === arr.length - 1) { // if not found
            arr.push(num); // push to array
            return arr.indexOf(num); // return index pos of new num <-- should return 3 in this case
        }
    }
}

console.log(getIndexToIns([1, 3, 5, 6], 5));
console.log(getIndexToIns([1, 3, 5, 6], 2));
console.log(getIndexToIns([1, 3, 5, 6], 7));
console.log(getIndexToIns([1, 3, 5, 6], 0));*/


const getIndexToIns = function (nums, target) {
    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target); // If there is a return index
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (target < nums[i]) {
                // Compare the size of the target and num[i], if the target is smaller than an element in the array, the index that returns this element is i, i is the position where the target should be inserted;
                return i;
            }
        }
        return nums.length; // If the target is larger than all elements, the target should be inserted in the last one, and the index can be nums.length
    }
};

console.log(getIndexToIns([1, 3, 5, 6], 5));
console.log(getIndexToIns([1, 3, 5, 6], 2));
console.log(getIndexToIns([1, 3, 5, 6], 7));
console.log(getIndexToIns([1, 3, 5, 6], 0));
