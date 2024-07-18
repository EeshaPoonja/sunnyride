import React from 'react';
import { StyleSheet, TextInput, View,Text,Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Otbutton from './otherbuttons';

export default function FrontScreen({setscreen}){
    function changescreen(){
        setscreen('1');
    }

return(
    <View style={styles.front }>

    <Text style={styles.textc}>SunnyRide</Text>
  
        <View style={styles.forw}>
        <Otbutton data={<AntDesign name="forward" size={24} color="white" swi={false}/>} fun={changescreen} />
        
        </View>

    </View>
);
}
const styles=StyleSheet.create({
    forw:{

marginLeft:'50%',
marginTop:'100%',

padding:'3%',


    },

    front:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'10%',
    },
  
    textc:{
        color:'darkblue' ,
       fontWeight:'bold',
        fontSize:50,
        textShadowColor: 'white',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    }
})