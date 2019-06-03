// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
     return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance)*264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination)*264;
}

 function calculatesFarePrice(start, destination) {
     let d = distanceTravelledInFeet(start, destination);
      if(d <= 400 ){
          return 0
      } else if(d < 2000 ){
          return (d-400)*.02
      } else if(d <=2500){
          return 25
      } else {
          return 'cannot travel that far'
      }
 }
