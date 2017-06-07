// Create an array with your siblings names, and an array with your parents names.
//


var arr1 = ["Andy", "Emily", "Shannon"]
var arr2 = ["Tom", "Shanaynay"]

// Sort your siblings names in alphabetical order.
//

arr1.sort()

// Sort your parents names in reverse alphabetical order.
//
arr2.sort()
arr2.reverse(arr2)

// Sort all the names in alphabetical order.

var newArr = arr1.concat(arr2);
newArr.sort()
//
// Hint: Combine the arrays into a single array.
// Sort all the names in reverse alphabetical order.
//
newArr.reverse(newArr)

// Create a function that determines if a given name is amongst the names.
function findName(name) {
return newArr.lastIndexOf(name)
}
