import React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, View,Text,Button} from 'react-native';
import Subapp from './subapp';
import FrontScreen from './Frontscreen';

import Instruscreen from './instructions';
import { LinearGradient } from 'expo-linear-gradient';

export default function App(){

  const [screen,setscreen]=useState('0');
  
  return(
   

    <LinearGradient colors={['#FFF9D0','#CAF4FF','#A0DEFF','#5AB2FF']} style={styles.linearGradient}>
          {console.log(screen)}
    {screen==='0' &&<FrontScreen setscreen={setscreen} />}
    {console.log(screen)}
    {screen==='1' && <Instruscreen setscreen={setscreen} />}
   {screen==='2' && <Subapp />}
   
   
    </LinearGradient>
  
  );

}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  
  }
});