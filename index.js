// Code your solution in this file!
function distanceFromHqInBlocks(num){
	if (num > 42){
		return num - 42;
	} else {
		return 42 - num;
	}
}

function distanceFromHqInFeet(num){
	return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2){
	let blocks;
	num1 > num2 ? blocks = num1 - num2 : blocks = num2 - num1;
	return blocks * 264;
}

function calculatesFarePrice(num1, num2){
	let distance = distanceTravelledInFeet(num1, num2);
	if (distance <= 400){
		return 0;
	} else if ( distance > 400 && distance <= 2000){
		return (distance-400) * 0.02 ;
	} else if (distance > 2000 && distance <= 2500){
		return 25;
	} else {
		return 'cannot travel that far'
	}
}