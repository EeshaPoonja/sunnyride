// App.js
import React from 'react';
import { StyleSheet, TextInput, View,Text,Button} from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {finaldirection} from './helper'
const Subapp = () => {
  const [val,setval]=useState({front:0,back:0,left:0,right:0})
  const [sunny,setsunny]=useState([]);
  const [st,setst]=useState(0)
  const [tt,settt]=useState(0);
  const [from,setfrom]=useState(null);
  const [to,setto]=useState(null);
  const [route,setRoute]=useState([]);
  const [loading,setloading]=useState(false);
  const [location1, setLocation1]=useState({ latitude: 0, longitude: 0 });
  const [location2, setLocation2]=useState({ latitude: 0, longitude: 0 });
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [x,setx]=useState(null);
const [output,setoutput]=useState('');

  
  let sun=[];
  const c=10;
  useEffect(()=>{
    if(loading){
   
      const k=Math.ceil(route.length/c);
      setx(k);
    
      
       
    
      
  }},[loading])
  async function fullfinal(){
    if(route!==null && x!==null){
    let currentTime = new Date();
    const speed=60;//60 km per hour
    k=finaldirection(route[0],route[x],currentTime);
    for(i=1;i<c-1;i++){
      sun.push(k);
    const dist=await fetchRoute(route[x*i],route[x*(i+1)]);
   // console.log('got distance',dist/1000,'km');
   // console.log('time required is',(dist*3600)/(1000*speed),'sec');
     
        currentTime.setTime(currentTime.getTime()+(dist*3600)/(speed));
        
        k=finaldirection(route[x*i],route[x*(i+1)],currentTime);
     console.log('dir',k,'time',currentTime.getHours(),'hr',currentTime.getMinutes(),'min');


    
    


    }
     sun.push(k);
    for(i=0;i<sun.length;i++){

            if(sun[i]==='front'){
              setval(val.front=val.front+1);
      }
      else if(sun[i]==='back'){
        setval(val.back=val.back+1);
      }
      else if(sun[i]==='left'){
        setval(val.left=val.left+1);
      }
      else if(sun[i]==='right'){
        setval(val.right=val.right+1);
      }
    }


   setsunny(sun);

calculate();

    }}
  
  useEffect(()=>{
   fullfinal();

  
  },[x,route])



  function calculate(){
 
    if((val.front!==0 ||val.back!==0 || val.right!==0 || val.left!==0) && val!==null){
      
      if(val.front>val.back && val.front>val.right && val.front>val.left){
       console.log('On an average sun will appear in the front');
       setoutput('On an average sun will appear in the front')
     }
     else if(val.back>val.front && val.back>val.right &&val.back>val.left){
       console.log('On an average sun will appear in the back')
       setoutput('On an average sun will appear in the back')
     }
     else if(val.right>val.front&&val.right>val.back&&val.right>val.left){
       console.log('On an average sun will appear in the right')
       setoutput('On an average sun will appear in the right')
     }
     else if(val.left>val.front&&val.left>val.right&&val.left>val.back){
       console.log('On an average sun will appear in the left')
       setoutput('On an average sun will appear in the left')
     }
     else if(val.left===val.front){
       console.log('On an average sun will appear in the left,front')
       setoutput('On an average sun will appear in the left,front')
     }
     else if(val.right===val.front){
       console.log('On an average sun will appear in the front,right')
       setoutput('On an average sun will appear in the front,right')
     }
     else if(val.left===val.back){
       console.log('On an average sun will appear in the left,back')
       setoutput('On an average sun will appear in the left,back')
     }
     else if(val.right===val.back){
       console.log('On an average sun will appear in the right,back')
       setoutput('On an average sun will appear in the right,back')
     }
     else if(val.front===val.back){
      console.log('On an average sun will appear in the front,back')
      setoutput('On an average sun will appear in the front,back')
    }
    else if(val.right===val,left){
      console.log('On an average sun will appear in the left,right')
      setoutput('On an average sun will appear in the left,right')
    }
   
   }
     else{
       console.log('final invalid');
       setoutput('something went wrong')
      
     }
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    
    })();
  }, []);


  function print1(e){
    setfrom(e);
   
    
  }
  function print2(e){
   
   setto(e);
  

  
 
   
  }

  useEffect(()=>{if(st && tt){
    const ct = new Date();
    
    const z=finaldirection(location1,location2,ct);
    //console.log('initial',z);
    console.log('Initial dir',z,'time',ct.getHours(),'hr',ct.getMinutes(),'min');
    fetchRoute(location1,location2);
  
    
    setst(0);
    settt(0);
  
  }},[st,tt]);


  function final(){
    handleGeocode(from,to);
    console.log('from:',from,'to:',to);
    
  
   
  }

function current(){

  setLocation1({
    ...location1,
    latitude: parseFloat(location.coords.latitude),
    longitude: parseFloat(location.coords.longitude),
  });
 setfrom('current location')
  setst(1);

}
const toRadians=(deg)=>{

return (deg*Math.PI/180)
}
const toDegrees=(rad)=>{
  return (rad*180/Math.PI)
  }



    const fetchRoute = async (loc1,loc2) => {
      const url = `https://router.project-osrm.org/route/v1/driving/${loc1.longitude},${loc1.latitude};${loc2.longitude},${loc2.latitude}?overview=full&geometries=geojson`;
      
      try {
        const response = await axios.get(url);
        const coordinates = response.data.routes[0].geometry.coordinates;
      //  time=response.data.routes[0].duration;
       dist=response.data.routes[0].distance;
    
        const routeCoordinates = coordinates.map(coord => ({
          latitude: coord[1],
          longitude: coord[0],
        }));
        if(loc2===location2 && loc1===location1){
        setRoute(routeCoordinates);
       // console.log('distoverall',dist);
       // console.log('timeoverall',(dist)/(1000*60));
        setloading(true);
        }
       else{
       // console.log('dist',dist);
        return dist;
       }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.status === 429) {
          // Handle 429 error (Too Many Requests)
          console.error('Too Many Requests error:', error.message);}
          else{
        console.error(error);}
      }


    }
 

   
 

  const handleGeocode = (from,to) => {
   
   if(from ==='current location'){
      setLocation1({
        ...location1,
        latitude: parseFloat(location.coords.latitude),
        longitude: parseFloat(location.coords.longitude),
      });
      
    }
    else{
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(from)}&format=json&limit=1`;
    axios.get(url)
      .then(response => {
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
         
          setLocation1({
            ...location1,
            latitude: parseFloat(lat),
            longitude: parseFloat(lon),
          });
       
          setst(1);
        } else {
          alert("Location1 not found");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Error fetching location");
      });
    }
   

      const url2 = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(to)}&format=json&limit=1`;
    
      axios.get(url2)
        .then(response => {
          if (response.data.length > 0) {
            const { lat, lon } = response.data[0];
            setLocation2({
              ...location2,
              latitude: parseFloat(lat),
              longitude: parseFloat(lon),
            });
            settt(1);
          } else {
            alert("Location2 not found");

          }
        })
        .catch(error => {
          console.error(error);
          alert("Error fetching location");
        });
        
  };

function clearall(){
  settt(0);
  setst(0);
  setRoute([]);
  setx(null);
  setoutput('')
  setfrom(null),
  setto(null),
  setloading(false),
  setval({front:0,back:0,left:0,right:0}),
  console.log('clicked');
  
}
  return (

    <View style={styles.container}>
      {console.log('f',from,'t',to);}
      
     { (from===null && to===null)?(
    <View>
      <Text style={styles.heading}>SunHappy</Text>
      <View style={styles.clear}>
      <Button title='clear' onPress={clearall} color='green'></Button>
      </View>
      <Text style={styles.subhead}>From</Text>
   
      <Button title='currentlocation' onPress={current}></Button>
    <TextInput style={styles.input} onChangeText={print1} name='z' value={from}></TextInput>
    <Text style={styles.subhead}>To</Text>
    <TextInput style={styles.input} onChangeText={print2} value={to}></TextInput>
    <View style={styles.btn}>
    <Button title='Done' onPress={final} color={'blue'} ></Button>
     {(!location && <Text>{errorMsg ? errorMsg : 'Fetching location...'}</Text>)}
    
    </View></View>):(
    <View>
    <Text style={styles.output}>{output}</Text>
     <MapView
        style={styles.map}
         region={{
          latitude: (location1.latitude + location2.latitude) / 2,
          longitude: (location1.longitude + location2.longitude) / 2,
          latitudeDelta: Math.abs(location1.latitude - location2.latitude) + 0.1,
          longitudeDelta: Math.abs(location1.longitude - location2.longitude) + 0.1,
        }}

      >
       {st===1 && <Marker coordinate={location1} />}
       {tt===1 && <Marker coordinate={location2} />}
     
      {loading&& <Polyline coordinates={route} strokeWidth={3} strokeColor="blue"/>}
      </MapView>
      </View>)}
    </View>

  );
};

const styles = StyleSheet.create({
  clear:{
  
    marginLeft:'70%',
    marginRight:'10%',
  
  },
  output:{
    height: 40,
    margin:5,
    marginHorizontal:20,
    borderWidth: 1,
    borderColor:'yellow',
    padding: 10,
    backgroundColor:'white',
    color:'black'
  },
  heading:{
    color:'yellow',
    backgroundColor:'lightblue',
    marginTop:50,
    fontSize:30,
    fontWeight:'bold',
    marginLeft:20},
    subhead:{
      color:'blue',
      fontWeight:'bold',
      backgroundColor:'lightblue',
      marginTop:5,
      marginBottom:2,
      fontSize:20,
      marginLeft:20},
  container: {
    flex: 1,
    backgroundColor:'lightblue'
  },
  input: {
    height: 40,
    margin:5,
    marginHorizontal:20,
    borderWidth: 1,
    borderColor:'yellow',
    padding: 10,
    backgroundColor:'white'
  },
  map: {
    flex: 1,
  },
  btn:{
    marginHorizontal:70,
    marginVertical:10,
    borderColor:'yellow',
    borderWidth:2
  }
});

export default Subapp;
