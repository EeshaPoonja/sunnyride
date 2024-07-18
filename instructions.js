import React from 'react';
import { StyleSheet, TextInput, View,Text,Button,Image,ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Otbutton from './otherbuttons';
export default function Instruscreen({setscreen}){
    function changescreen(){
        setscreen('2');
    }
    return(
<View style={styles.front}>
    <View style={styles.imcol}>
<Image
        source={require('./assets/1.png')} // Adjust path as necessary
        style={styles.ima}
      />
      <Image
        source={require('./assets/2.png')} // Adjust path as necessary
        style={styles.ima}
      />
      <Image
        source={require('./assets/3.png')} // Adjust path as necessary
        style={styles.ima}
      />
      </View>
        <View style={styles.forw}>
        <Otbutton data={<AntDesign name="forward" size={24} color="white" swi={false}/>} fun={changescreen} />
        </View>
        </View>

    );}
    const styles=StyleSheet.create({
        imcol:{
 flexDirection:'row',
 width:'80%',
 height:'50%',
 flexWrap:'wrap'
        },
        forw:{
            width:'70%',
            marginLeft:'70%',
            marginRight:'10%',
            paddingLeft:'15%',
            paddingTop:'15%',
            marginTop:0
                },
                ima:{
                    width:'50%',
                    height:'70%',
                    marginTop:0
                },
        front:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal:'10%',
      marginTop:0
          
        },

        textc:{
            color:'yellow' ,
            fontSize:40
        }
    })