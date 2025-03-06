// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // HQ is located on 42nd Street
    return Math.abs(pickupLocation - hqLocation);
}

console.log(distanceFromHqInBlocks(43)); 
console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34))


function distanceFromHqInFeet(pickupLocation){
    const hqLocation = 42
    return Math.abs((pickupLocation - hqLocation)* 264)
}

console.logconsole.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(pickupLocation, hqLocation){
    return Math.abs((pickupLocation - hqLocation)* 264)
}

console.log(distanceTravelledInFeet(48, 43))
console.log(distanceTravelledInFeet(34, 28))
console.log(distanceTravelledInFeet(60, 50))

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; // 1 block = 264 feet
    let distance = Math.abs(destination - start) * feetPerBlock;

    if (distance <= 400) {
        return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate for distances over 2000 feet but under 2500 feet
    } else {
        return 'cannot travel that far'; // Over 2500 feet is not allowed
    }
}
console.log(calculatesFarePrice(50, 58))