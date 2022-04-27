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
   console.log (distanceTravelledInFeet(start, destination));
   if (destination > start) {
   return destination - start * 264;
   } else {
      return start - destination * 264;
   }  
}

