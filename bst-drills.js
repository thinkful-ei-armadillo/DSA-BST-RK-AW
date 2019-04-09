const BinarySearchTree = require('./bst');

function main(){
    const bstnum = new BinarySearchTree();
    const bstalpha = new BinarySearchTree();
    const nums = [3,1,4,6,9,2,5,7];
    const alpha = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N']
    nums.forEach(el => bstnum.insert(el, el));
    alpha.forEach(el => bstalpha.insert(el, el));
  //   bst.remove(6)
   console.log('height', height(bstnum));
}
// Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. Compare your result with the result from the 1st exercise.
// Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. Compare your result with the result from the 1st exercise.
// with the alphabet it compares the left and right with a < b so in alphabetical order
main();

//What does this program do?
//Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?
//accumulates all the values
function tree(t){
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?
//
function height(tree){
//   let height = 1;
  if(tree === null)
    return 0
  let leftDepth = height(tree.left);
  let rightDepth = height(tree.right);
//   if(tree.left === null || tree.right === null){
//     return 1
//   }
console.log('left', leftDepth);
console.log('right', rightDepth)
  if(leftDepth > rightDepth){
      return leftDepth + 1;
    }
    
  else{
      return rightDepth + 1;
    }
}

// Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

findBinary(arbitraryTree) {
    if(arbitraryTree === null)
      return true;
    if(arbitraryTree.left.key > arbutraryTree.right.key)
      return false
    /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
    else if (arbitraryTree. < this.key && this.left) {
      return this.left.find(key);
    }
    /* If the item you are looking for is greater than the root 
           then follow the right child.
           If there is an existing right child, 
           then recursively check its left and/or right child
           until you find the item */
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }