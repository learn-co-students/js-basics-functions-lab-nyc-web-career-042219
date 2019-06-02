// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264;
}

function calculatesFarePrice(block1, block2) {
  let feet = distanceTravelledInFeet(block1, block2)
  let fare
  switch (true) {
    case (feet > 400 && feet < 2000):
      fare = (feet - 400) * 0.02;
      break;
    case (feet > 2000 && feet < 2500):
      fare = 25;
      break;
    case (feet > 2500):
      fare = 'cannot travel that far';
      break;
    default:
      fare = 0
      break;
  }
  return fare;
}
