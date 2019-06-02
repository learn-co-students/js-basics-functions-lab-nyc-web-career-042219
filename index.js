// Code your solution in this file!
function distanceTravelledInFeet(startingBlock, endingBlock) {
  let distanceInBlocks = endingBlock - startingBlock;

  if (distanceInBlocks < 0) {
    distanceInBlocks *= -1
  }

  let distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}

function distanceFromHqInBlocks(value) {
  let distance;
  if (value >= 43) {
    distance = value - 42;
  } else if (value < 42) {
    distance = 42 - value;
  } else {
    distance = 0;
  }
  return distance;
}

function distanceFromHqInFeet(value) {
  let distance = distanceTravelledInFeet(42, value);
  return distance;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let price;
  if (distance <= 400) {
    price = 0
  } else if (distance > 400 && distance < 2000) {
    price = (distance - 400) * 0.02
  } else if (distance > 2000 && distance < 2500) {
    price = 25
  } else {
    price = "cannot travel that far"
  }
  return price
}
