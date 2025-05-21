function myFunction(ttile) {

// Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode(ttile);

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("myList").appendChild(node);
// document.getElementById("myList").innerHTML = ttile;
}

document.getElementById("parent").innerHTML = 'by Swapnil';
myFunction('Water')
myFunction('Earth')
myFunction('Fire')
myFunction('Air')
myFunction('Sky')