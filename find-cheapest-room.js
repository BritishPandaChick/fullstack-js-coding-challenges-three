function findCheapestVacantRoom(arr) {
  var cheapest;
  var cheapestRoom = [];
  for(var index = 0; index < arr.length; index++) {
    if(arr[index] !== "occupied") {
      //console.log(arr[index]);
      if(cheapest === undefined || arr[index] < cheapest) {
        cheapest = arr[index];
        //cheapestRoom.push(index, cheapest);
      }
    }
  }

  if (cheapest) {
    cheapestRoom.push(arr.indexOf(cheapest), cheapest);
    return cheapestRoom;
  } else {
    return cheapestRoom;
  }
  //console.log(cheapest);
  //return cheapestRoom;
}


//findCheapestVacantRoom([112, "occupied", 150, 175, "occupied"]);

// /******** Tests *******/

console.log(findCheapestVacantRoom([112, "occupied", 150, 175, "occupied"]));
// should return [0, 112] since the cheapest vacant room is Room 0 at $112/night.

console.log(findCheapestVacantRoom(["occupied", 820, "occupied", 700, 455, 722]))
// should return [4, 455] since the cheapest vacant room is Room 4 at $455/night.
