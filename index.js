const hqBlock = 42;
const blockInFeet = 264;

function distanceFromHqInBlocks(start){
    return Math.abs(start - hqBlock);
}

function distanceFromHqInFeet(start){
    return distanceFromHqInBlocks(start) * blockInFeet;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * blockInFeet;
}

function calculatesFarePrice(start, destination){
    let result;
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        result = 0;
    }
    else if(distance > 400 && distance <= 2000){
        result = (distance - 400) * 0.02;
    }
    else if(distance > 2000 && distance <= 2500){
        result = 25;
    }
    else if(distance > 2500){
        result = 'cannot travel that far';
    }
    return result;
}

