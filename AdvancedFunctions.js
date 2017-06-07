// Create a function that returns an array with only the even elements from the array.
//
// evenElements([1,2,3,4]) should return [2,4]
// Hint: use the % operator
// What happens if there are no even numbers?
var arr = [1, 2, 3, 4]
var evenArr = []
function modEven() {

  arr.forEach(function(element) {
   if (element % 2 ===0){
     console.log(element);
     evenArr.push(element);
   }
  })
  console.log(evenArr);
}
