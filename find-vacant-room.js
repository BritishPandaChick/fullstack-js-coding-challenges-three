function findVacantRooms(arr) {
  var vacantRooms = [];
  for (var index = 0; index < arr.length; index++) {
    if(arr[index] === "vacant") {
      vacantRooms.push(index);
    }
  }
  return vacantRooms;
}

// Test Cases

console.log(findVacantRooms(["occupied", "vacant", "occupied", "vacant"]));
// logs ==> [1,3];
