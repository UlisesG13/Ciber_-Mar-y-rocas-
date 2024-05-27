import Node from "./Node.js";

class BST {
    constructor() {
        this.root = null;
    }

    insert(value, contact) {
        const newNode = new Node(value, contact);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return node.contact;
        }
    }

    findMin() {
        return this.findMinNode(this.root);
    }

    findMinNode(node) {
        if (node.left === null) {
            return node.value;
        } else {
            return this.findMinNode(node.left);
        }
    }

    findMax() {
        return this.findMaxNode(this.root);
    }

    findMaxNode(node) {
        if (node.right === null) {
            return node.value;
        } else {
            return this.findMaxNode(node.right);
        }
    }

    inorderTraversal() {
        const result = [];
        this.inorder(this.root, result);
        return result;
    }

    inorder(node, result) {
        if (node !== null) {
            this.inorder(node.left, result);
            result.push(node.contact);
            this.inorder(node.right, result);
        }
    }
}

export default BST;
