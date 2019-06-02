// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return Math.abs(location - 42)

}
function distanceFromHqInFeet(location){
   return distanceFromHqInBlocks(location)*264
}


function distanceTravelledInFeet(beg, end){
    return Math.abs(end-beg)*264
    

}

function calculatesFarePrice(beg, end){
    let d = distanceTravelledInFeet(beg, end);
    if(d <= 400 ){
        return 0
    } else if(d < 2000 ){
        return (d-400)*.02
    } else if(d <=2500){
        return 25
    } else {
        return 'cannot travel that far'
    }

}