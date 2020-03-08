const minDepth = function (root) {
    if (!root) return 0;
    let result;

    function minHeight(root, depth) {
        if (!root.left && !root.right) {
            result = Math.min(result || depth, depth)
        }
        if (root.left) minHeight(root.left, depth + 1);
        if (root.right) minHeight(root.right, depth + 1);
    }

    minHeight(root, 1);
    return result;
};

console.log(minDepth([3,9,20,null,null,15,7]));
