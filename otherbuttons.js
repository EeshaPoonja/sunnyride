import { Pressable } from "react-native";
import { StyleSheet, TextInput, View,Text} from 'react-native';

export default function Otbutton({data,fun,swi}){
 
    return(

        <View style={styles.contain}>
         
        <Pressable onPress={fun} disabled={swi}>
        
       {data}
  
        </Pressable >
        
        </View>
    );
}
const styles=StyleSheet.create({

    contain:{
   opacity:1,
   flexDirection:'row',
   justifyContent:'center',
  alignItems:'center',
  borderRadius:50,
  borderWidth:1,
   borderColor:'white',
    marginHorizontal:'4%',
   backgroundColor:'darkblue',
    height:50,
    width:100
     
    },

})