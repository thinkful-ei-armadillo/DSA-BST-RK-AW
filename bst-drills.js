const bst = require('./bst');

function main(){

}

main();

//What does this program do?
//Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?
//accumulates all the values
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}