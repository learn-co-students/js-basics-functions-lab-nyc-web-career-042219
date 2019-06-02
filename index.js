// Code your solution in this file!

function distanceFromHqInBlocks(blockNum) {
  if (blockNum > 42) {
    return blockNum - 42;
  } else {
    return 42 - blockNum;
  }
}

function distanceFromHqInFeet(feetNum) {
  return distanceFromHqInBlocks(feetNum) * 264;
}

function distanceTravelledInFeet(start, end) {
  let totalBlocks;
  start > end ? totalBlocks = start - end : totalBlocks = end - start;
  return totalBlocks * 264;
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
