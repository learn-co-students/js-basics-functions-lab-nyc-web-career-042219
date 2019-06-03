// Code your solution in this file!

function distanceFromHqInBlocks(value) {
  let distance = value >= 42 ? (value - 42) : ( ((value - 42) * -1))
  return distance
}

function distanceFromHqInFeet(value) {
  let result = distanceFromHqInBlocks(value) * 264
  return result
}

function distanceTravelledInFeet(start, destination) {
  let distance = (Math.abs(start-destination))*264
  return distance
}

function calculatesFarePrice(start, destination) {
  let fare
  let distance = distanceTravelledInFeet (start, destination)
  if (distance <= 400) {
    fare = 0
  }
  else if (distance > 400 && distance < 2000) {
    fare = (.02 * (distance-400))
  }
  else if (distance >= 2000 && distance <= 2500) {
    fare = 25
  }
  else {
    fare = "cannot travel that far"
  }
  return fare
}
