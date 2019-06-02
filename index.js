// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs(endingBlock - startingBlock) * 264;
}

function calculatesFarePrice(start, destination) {
    let price;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        price = 0;
    } else if (distance > 400 && distance < 2000) {
        price = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        price = 25;
    } else {
        price = 'cannot travel that far';
    }
    return price;
}