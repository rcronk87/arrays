var arr = [13, 18, 13, 14, 13, 16, 14, 21, 13]
var startValue = 0
// var length = arr.length
for (i =0; i <arr.length; i++) {
  startValue += arr[i]
}

function sum(arr) {
  var total = 0

  for (i =0; i <arr.length; i++) {
    total += arr[i]
  }
  return total;
  // var mean = total / arr.length
  // console.log(mean)
}
 var mean = sum(arr) / arr.length;
 console.log(mean);
