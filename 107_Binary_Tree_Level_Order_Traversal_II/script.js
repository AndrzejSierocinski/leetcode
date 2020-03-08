/*
const levelOrderBottom = function (root) {
    let level = [];
    let roll = (node, deep) => {
        if (!node) {
            return
        }
        if (!level[deep]) {
            level[deep] = []
        }
        level[deep].push(node.val);
        roll(node.left, deep + 1);
        roll(node.right, deep + 1)
    };
    roll(root, 0);
    return level.reverse()
};

console.log(levelOrderBottom([3,9,20,null,null,15,7]));
*/

