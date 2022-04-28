// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location > 42) { 
       return location - 42; 
    } else {
       return 42 - location;
    }

}
function distanceFromHqInFeet(location){
   console.log (distanceFromHqInBlocks(location)* 264);
   return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination){
   if (destination > start) {
   return (destination - start) * 264;
   } else {
      return (start - destination) * 264;
   }  
}

function calculatesFarePrice(start, destination){
   if (destination - start <= 400) {
   return 'gives customer a free sample';
   } else if (destination - start > 400 && desination < 2000) {
      return "2 cents per foot, not including the first 400";
   } else if (destination - start > 2000 && destination < 2500) {
      return 'charges 25 dollars for distance over 2000 feet';
   } else if (destination -start > 2500) {
      return 'cannot travel that far';
   }
}


