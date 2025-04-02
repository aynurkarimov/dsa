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

console.log(root);

function preOrder(node) {
  if (!node) {
    return;
  }

  console.log(node.data);
  preOrder(node.left);
  preOrder(node.right);
}

preOrder(root);
