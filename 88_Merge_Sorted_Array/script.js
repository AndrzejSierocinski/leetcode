/*const merge = function (nums1, m, nums2, n) {
    let i2 = 0;
    let index = 0;
    while (index - i2 < m && i2 < n) {
        if (nums2[i2] < nums1[index]) {
            nums1.splice(index, 0, nums2[i2]);
            nums1.pop();
            i2++
        }
        index++
    }
    if (i2 < n)
        nums1.splice(index, nums2.slice(i2).length, ...nums2.slice(i2))

};

console.log(merge([1, 2, 3, 0, 0, 0], 3,[2, 5, 6],3));
console.log(merge([2, 5, 6], 3));*/


/*const merge = function (nums1, m, nums2, n) {
    if (n > 0) {
        let arr = nums1.slice(0, m);
        nums2 = nums2.slice(0, n);
        arr = [...arr, ...nums2];
        arr.sort((a, b) => a - b);
        nums1.splice(0, m + n, ...arr);
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));*/


/*
const merge = (nums1, m, nums2, n) => {
    let end = m;
    for (let i = 0; i < nums1.length; i++) {
        if (i >= end) {
            nums1.splice(i, 1, nums2.shift());
            continue;
        }

        if (nums2[0] <= nums1[i]) {
            nums1.splice(i, 0, nums2.shift());
            nums1.pop();
            end++;
        }
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
*/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {

    let index1 = m - 1;
    let index2 = n - 1;
    let k = 1;

    while (index1 >= 0 && index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            nums1[m + n - k] = nums1[index1--];
        } else {
            nums1[m + n - k] = nums2[index2--];
        }
        k++;
    }
    while (index2 >= 0) {
        nums1[m + n - k] = nums2[index2--];
        k++;
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
