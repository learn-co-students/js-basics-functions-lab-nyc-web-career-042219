// Code your solution in this file!

const distanceFromHqInBlocks = dest => Math.abs((dest - 42));

const distanceFromHqInFeet = dest => distanceFromHqInBlocks(dest) * 264;

const distanceTravelledInFeet = (startPos, endPos) => Math.abs((endPos - startPos)) * 264;

const calculatesFarePrice = (start, destination) => {
  const d = distanceTravelledInFeet(start, destination);
  if (d > 2500) {
    return "cannot travel that far";
  } else if (d > 2000) {
    return 25;
  } else if (d > 400) {
    return (d - 400) * .02
  }
  return 0;

};
