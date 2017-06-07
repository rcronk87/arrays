// Create a function that finds the highest number.
//
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign it a reasonable start value; then use forEach: if an element is higher than max, change max.

// var arr = [17, 28, 43, 2, 34]
// var highNum= arr.sort(function(element1, element2) {
//         element2-element1;
//         return highNum 
// });

var arr = [17, 28, 43, -2, -34]
   arr.sort(function(element1, element2) {
        return element1-element2;

})
var max = arr[0]
console.log(max)
alert(max)


// 3, -2, 17, -16,
// -2 3 -18 17 -18
//  -16, -2, 3, 17
