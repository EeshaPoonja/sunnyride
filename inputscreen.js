import React from 'react';
import { StyleSheet, TextInput, View,Text,Button} from 'react-native';

export default function InputtScreen({setscreen}){
    function done(){
        setscreen('3')
    }
    function notdone(){
      setscreen('1')
  }
    return(
        <View style={styles.container}>
       
        <Text style={styles.heading}>SunHappy</Text>
        <View style={styles.clear}>
        <Button title='clear'  color='green'></Button>
        </View>
        <Text style={styles.subhead}>From</Text>
     
        <Button title='currentlocation' ></Button>
      <TextInput style={styles.input} name='z' ></TextInput>
      <Text style={styles.subhead}>To</Text>
      <TextInput style={styles.input} ></TextInput>
      <View style={styles.btn}>
      <Button title='Done'  color={'blue'} onPress={done} ></Button>
      <Button title='prev'  color={'green'} onPress={notdone} ></Button>
      
</View>
</View>

    );
}

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
  

  