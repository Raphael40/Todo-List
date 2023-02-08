// save a prompt to variable which is evaluated in while loop
let input = prompt("what would you like to do?");
// array containing our list 
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

// opening of while loop, conditions activate if promp is not quit
while(input !== 'quit' && input !== 'q') {
    // if prompt is list then a loop will list each item of array
    if(input === 'list') {
        console.log('*********')
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        // if prompt is new then a new prompt will be pushed to the list
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if(input === 'delete') {
        // if prompt is delete then the user can enter an index (integer) to delete from the array
        const index = parseInt(prompt('Ok, enter an index to delete'));
        if(!Number.isNaN(index)){
        const deleted = todos.splice(index, 1)
        console.log(`Ok, deleted ${deleted[0]}`)
        } else {
            console.log('Unknown index')
        }
    }
    //if the user enters anything but quit the loop will restart
    input = prompt("what would you like to do?")
}
console.log("OK QUIT THE APP!")