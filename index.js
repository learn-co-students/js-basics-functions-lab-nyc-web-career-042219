function distanceFromHqInBlocks(num) {
   return num >= 42 ? (num - 42) : (42 - num)
}

function distanceFromHqInFeet(num) {
   return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(num1, num2) {
    return num1 > num2 ? ((num1 - num2) * 264) : ((num2 - num1) * 264)
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    }
    else if (distance > 400) {
        if (distance < 2000) {
            return (distance - 400) * .02
        }
        else if (distance > 2000) {
            if (distance < 2500) {
                return 25
            }
            else {
                return 'cannot travel that far'
            }
        } 
    }
}