// Code your solution in this file 
const headquarters = 42;
function distanceFromHqInBlocks(street) {
    return Math.abs(street - headquarters);
  }
  
  function distanceFromHqInFeet(street) {
    const blocks =  distanceFromHqInBlocks(street) ;
    return blocks *264;
  }
  function distanceTravelledInFeet(start, destination) {
     const blocks =  Math.abs(start- destination);
     return blocks *264
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    
    }
  }