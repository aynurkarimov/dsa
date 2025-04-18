class TreeNode {
  constructor(value, left = null, right = null) {
    this.data = value;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode("r");
const aNode = new TreeNode("a");
const bNode = new TreeNode("b");
const cNode = new TreeNode("c");
const dNode = new TreeNode("d");

root.left = aNode;
root.right = bNode;
aNode.left = cNode;
aNode.right = dNode;

function preOrder(node) {
  if (!node) {
    return;
  }

  console.log(node.data);
  preOrder(node.left);
  preOrder(node.right);
}

console.log("pre-order:");
preOrder(root);
// -----------------------------

const tree = {
  value: 20,
  left: {
    value: 10,
    left: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
    right: {
      value: 15,
      left: null,
      right: null,
    },
  },
  right: {
    value: 50,
    left: {
      value: 30,
      left: {
        value: 29,
        left: null,
        right: null,
      },
      right: {
        value: 45,
        left: null,
        right: null,
      },
    },
    right: {
      value: 100,
      left: null,
      right: null,
    },
  },
};

function treeHeight(treeNode) {
  if (!treeNode) {
    return -1;
  }

  const l = treeHeight(treeNode.left);
  const r = treeHeight(treeNode.right);

  return Math.max(l, r) + 1;
}

function treeDepth(treeNode, target, depth = 0) {
  if (!treeNode) {
    return -1;
  }

  if (treeNode.value === target) {
    return depth;
  }

  const l = treeDepth(treeNode.left, target, depth + 1);
  const r = treeDepth(treeNode.right, target, depth + 1);

  return Math.max(l, r);
}

function treeSize(treeNode) {
  if (!treeNode) {
    return 0;
  }

  const l = treeSize(treeNode.left);
  const r = treeSize(treeNode.right);

  return l + r + 1;
}

console.log("height is", treeHeight(tree));
console.log("depth of value 30 is", treeDepth(tree, 30));
console.log("tree size is", treeSize(tree));
// -----------------------------
