import { Pressable } from "react-native";
import { StyleSheet, TextInput, View,Text} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function Mybutton({data,fun}){
    return(

        <View style={styles.contain}>
        <Pressable onPress={fun} >

       {data}
  
        </Pressable >
        
        </View>
    );
}
const styles=StyleSheet.create({

    contain:{
       backgroundColor:'darkblue',
       width:'20%',
       paddingLeft:12,
       paddingTop:8,
   
    },

})