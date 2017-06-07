var arr = [2, 5, 14, -8]
var startValue = 0

for (i =0; i <arr.length; i++) {
  startValue += arr[i]
}

function sum(arr) {
  var total = 0

  for (i =0; i <arr.length; i++) {
    total += arr[i]
  }
  return total
}
// var arr = [2, 5, 14, -8]
//   arr.forEach(function(index1, index2) {
//     console.log(index1 + [1])
//   })

// var arr = [1,2,3,4];
// var total=0;
// for(var i in arr) { total += arr[i]; }
