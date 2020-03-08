const deleteDuplicates = function (head) {
    let node = head;

    if (node) {
        while (node.next) {
            if (node.next.val === node.val) {
                node.next = node.next.next;
            } else {
                node = node.next;
            }
        }
    }
    return head;
};

console.log(deleteDuplicates());



/*const deleteDuplicates = function(head) {
    const traverse = (curr, prev) => {
        if (curr === null) {
            return;
        }

        if (prev && prev.val === curr.val) {
            // remove current node by linking previous node to the next node
            prev.next = curr.next;
            traverse(curr.next, prev);
        } else {
            traverse(curr.next, curr);
        }
    };

    traverse(head, null);
    return head;
};

console.log(deleteDuplicates());*/
