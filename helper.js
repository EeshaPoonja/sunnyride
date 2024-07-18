import SunCalc from 'suncalc';
export function getSunDirectionRelativeToJourney(sunAzimuth, journeyDirection) {
    const relativeSunDirection = (sunAzimuth - journeyDirection + 360) % 360;
    return relativeSunDirection;
};

export function calculateBearing(loc1, loc2){
    const startLat = toRadians(loc1.latitude);
    const startLng = toRadians(loc1.longitude);
    const endLat = toRadians(loc2.latitude);
    const endLng = toRadians(loc2.longitude);
    const dLng = endLng - startLng;
    const y = Math.sin(dLng) * Math.cos(endLat);
    const x = Math.cos(startLat) * Math.sin(endLat) -
              Math.sin(startLat) * Math.cos(endLat) * Math.cos(dLng);
    let bearing = Math.atan2(y, x);
    bearing = toDegrees(bearing);
    bearing = (bearing + 360) % 360;
   /* console.log('journey direction is :')

      if (bearing >= 337.5 || bearing < 22.5) {
          console.log('N');
      } else if (bearing >= 22.5 && bearing < 67.5) {
         console.log('NE');
      } else if (bearing >= 67.5 && bearing < 112.5) {
           console.log('E');
      } else if (bearing >= 112.5 && bearing < 157.5) {
          console.log('SE');
      } else if (bearing >= 157.5 && bearing < 202.5) {
          console.log('S');
      } else if (bearing >= 202.5 && bearing < 247.5) {
          console.log('SW');
      } else if (bearing >= 247.5 && bearing < 292.5) {
          console.log('W');
      } else if (bearing >= 292.5 && bearing < 337.5) {
           console.log('NW');
      } else {
          console.log('Invalid angle');
      }
  */

  return bearing;
   
};


export function finaldirection(location1,location2,currentTime){

   
    const startSunPos = SunCalc.getPosition(currentTime,location1.latitude ,location1.longitude );
     let sun= toDegrees(startSunPos.azimuth)+180;
    const journeyDirection = calculateBearing(location1, location2);
    const startSunDirection = getSunDirectionRelativeToJourney(sun, journeyDirection);
   // console.log('sun direction', startSunDirection)
    if (startSunDirection >= 315 || startSunDirection < 45) {
       // console.log(' sun is in dir','front') ;
        return 'front';
    } else if (startSunDirection >= 45 && startSunDirection < 135) {
     // console.log('sun is in  dir','right') ;
      return 'right';
    } else if (startSunDirection >= 135 && startSunDirection < 225) {
    //  console.log('sun is in  dir','back') ;
      return 'back';
    } else {
      //console.log('sun is in dir','left') ;
      return 'left';
    }
    
    
    }
const toRadians=(deg)=>{

    return (deg*Math.PI/180)
    }
    const toDegrees=(rad)=>{
      return (rad*180/Math.PI)
      }