/* var array = [22, 11, 500, 92];

var poppedValue = array.pop();

console.log(poppedValue);
console.log(array);

array.unshift(poppedValue);
console.log(array); */

function rotate(arr, steps) {
  var poppedValue;

  while (steps > 0) {
    poppedValue = arr.pop();
    arr.unshift(poppedValue);

    steps--;
  }
  return arr;
}

rotate([22, 11, 500, 92], 2);
