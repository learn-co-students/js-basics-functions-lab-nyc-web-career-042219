// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return Math.abs(42-block);
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264; 
}

function distanceTravelledInFeet(start_block,end_block){
    return Math.abs(start_block - end_block) * 264;
}

function calculatesFarePrice(start,destination){
    let fare;
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        fare = 0;
    } else if (distance >= 400 && distance <= 2000){
        fare = (distance-400)*.02;
    } else if (distance >= 2000 && distance <= 2500){
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }
    return fare;
}