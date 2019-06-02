// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  if (distance > 42) { return distance - 42 }
  else if (distance < 42) { return 42 - distance }
};

function distanceFromHqInFeet(distance) {
  return 264 * distanceFromHqInBlocks(distance)
};

function distanceTravelledInFeet(block1, block2) {
  if (block1 > block2) { return ((block1 - block2) * 264) }
    else if (block2 > block1) { return ((block2 - block1) * 264) }
}

function calculatesFarePrice(start, destination) {

let result = distanceTravelledInFeet(start, destination);

  if (result < 400) { return 0 }
  else if (result > 400 && result <= 2000) { return (result - 400) * .02 }
  else if (result > 2000 && result < 2499) { return 25 }
  else if (result > 2500 ) { return 'cannot travel that far'}


}
//switch (result) {

  //case 'result < 400':
    //return 0;
    //break;
  //case 'result > 400 && result < 2000':
    //return (result - 400) * .02;
    //break;
  //case 'result > 2000':
    //return 25;
    //break;
  //case 'result > 2500':
  //  return 'cannot travel that far';
  //  break;

//}
