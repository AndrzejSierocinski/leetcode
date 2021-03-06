/*
const maxDepth = function (root) {
    if (root === undefined || root === null) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth([3,9,20,null,null,15,7]));
*/


const maxDepth = (root) => !root ? 0 : 1 + Math.max(maxDepth(root.left),
    maxDepth(root.right));
console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
