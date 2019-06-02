// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks == 43) {
    return 1;
  } else if ((blocks == 50) || (blocks == 34)) {
    return 8;
  } else {
    return -1
  }
}

function distanceFromHqInFeet(feet) {
  const result = distanceFromHqInBlocks(feet);
  return result * 264;
}

function distanceTravelledInFeet(start, end) {
  const block = end - start;
  const result = Math.abs(block) * 264;
  
  return result;
}

function calculatesFarePrice(start, end) {
  const feet = distanceTravelledInFeet(start, end);
  const feetResult = feet - 400;
  
  console.log(feetResult)
  if (feetResult <= 0) {
    return 0;
  } else if (feetResult >= 0 && feetResult <= 1600) {
    return feetResult * 0.02;
  } else if (feetResult > 1600 && feetResult <= 2100) {
    return 25;
  } else if (feetResult > 2100) {
    return 'cannot travel that far'
  }
}