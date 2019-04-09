const BinarySearchTree = require('./bst');

function main(){
  const bstnum = new BinarySearchTree();
  const bstalpha = new BinarySearchTree();
  const nums = [3,1,4,6,9,2,5,7];
  const alpha = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
  nums.forEach(el => bstnum.insert(el, el));
  alpha.forEach(el => bstalpha.insert(el, el));
  //   bst.remove(6)
  console.log('height', height(bstnum));

  /* TEST findBinary */
  // bstnum.left = new BinarySearchTree(5,5,bstnum);
  // console.log(bstnum);
  console.log('is binary tree?', findBinary(bstnum));
  console.log('third largest node:', thirdLargest(bstnum));
  console.log('is balanced?', isBalanced(bstnum));

  // const arr1 = [3, 5, 4, 6, 1, 0, 2];
  // const arr2 = [3, 1, 5, 2, 4, 6, 0];
  const arr1 = [3, 2, 1];
  const arr2 = [3, 1, 2];
  console.log('arrays will make same bst?', checkIdentical(arr1, arr2));
}

main();

//What does this program do?
//Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?
//accumulates all the values
function tree(t) {
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?
function height(tree) {
  if(tree === null)
    return 0;
  
  let leftDepth = height(tree.left);
  let rightDepth = height(tree.right);
  
  if(leftDepth > rightDepth){
    return leftDepth + 1;
  } else {
    return rightDepth + 1;
  }
}

// Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.
function findBinary(arbitraryTree) {
  if(arbitraryTree === null)
    return true;
  if(arbitraryTree.right) {
    if(arbitraryTree.key > arbitraryTree.right.key)
      return false;
  }
  if(arbitraryTree.left) {
    if(arbitraryTree.key < arbitraryTree.left.key)
      return false;
  }

  return findBinary(arbitraryTree.left) && findBinary(arbitraryTree.right);
}

function thirdLargest(tree) {
  // this works for more than 3 nodes
  if(! tree.right) {
    return tree.parent;
  }
  if(! tree.right.right && ! tree.parent) {
    return tree.left;
  }

  return thirdLargest(tree.right);
}

function isBalanced(tree){
  if(tree === null)
    return 1;

  let leftDepth = 1 + height(tree.left);
  let rightDepth = 1 + height(tree.right);

  if(leftDepth - rightDepth > 1) {
    return false;
  }
  if(rightDepth - leftDepth > 1) {
    return false;
  }

  return true;
}

function checkIdentical(arr1, arr2) {
  let median = arr1.reduce((acc, val) => acc + val) / arr1.length;
  let splitArr1 = [];
  let splitArr2 = [];

  if(arr1.length !== arr2.length) {
    return false;
  }

  if(arr1[0] !== arr2[0]) {
    return false;
  }

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] > median) splitArr1.push(arr1[i]);
    if(arr2[i] > median) splitArr2.push(arr2[i]);
  }

  for(let i = 0; i < splitArr1.length; i++) {
    if(splitArr1[i] !== splitArr2[i]) {
      return false;
    }
  }

  return true;
}