// Code your solution in this file!


function distanceFromHqInBlocks(block) {
   // returns the number of blocks given a value
if (block> 42) {
   console.log(block)
   return block - 42 ;
} else { 
   console.log(block)
   return 42 - block;
}}

function distanceFromHqInFeet(block){     
   return distanceFromHqInBlocks(block) * 264;  
   }
   //call the distanceFromHqInBlocks function from inside he distancefromHqInFeet function, 
   // passing the argument from distanceFromHqIn Feet into distanceFromHqInBlocks
   // the return value of distanceFromHqInBlocks can then be used to calculate feet
  
   function distanceTravelledInFeet(start, destination){     
   //returns the number of feet traveled
   
   if (start > destination) {
      return (start - destination) * 264;
   }else {
      return (destination - start) * 264;
   }
}
function calculatesFarePrice(start, destination) {
   // returns the fare for the customer 
let distance = distanceTravelledInFeet(start, destination);
console.log(distance);
 
   if (distance < 400) {
   return (0);
   }if (distance > 2500){
   return ('cannot travel that far');
   }if (distance >2000){
   return (25);   
   }if (distance < 2000) {
   return ( distance - 400) *.02;
   }
}

