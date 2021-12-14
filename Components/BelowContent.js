import React ,{useState}from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RoundBtn from './RoundBtn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BelowContent({wordArray,setwordArray}) {
    const [visible, sevisible] = useState(true)
    const wordDelete = (id)=>{
        setwordArray(prevItems=>{
          return prevItems.filter(word => word.id != id);
        });

      }
    return (
        <>
        <View style={style.undoContainer}>
            {/* <Text >Undo </Text> */}
         <FontAwesome5 name={'history'} style={style.undo} size={20} color={'#334257'}/>
        </View>

         {  wordArray.map((word,index)=>
                <View  key={index} style={style.container}>
                <View style={style.row}>

                    <Text style={style.word}>{word.wordName}</Text>
                    <RoundBtn style={[style.number]} text={word.length}/> 

                    <TouchableOpacity onPress={()=>wordDelete(word.id)}>
                    <Text  style={style.delete}>
                        <FontAwesome5 name={'trash'} size={20} color={'#334257'}/>
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
         )}
        </>
    )
}
const style = StyleSheet.create({
    undoContainer:{
        flex:1,
        paddingTop:20,

        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        // backgroundColor:'red'
    },
    container:{
        width:'100%',
    },row:{
        width:'100%',
        padding:5,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        color:'#334257'
    },word:{
        fontSize:30,
        textTransform:"capitalize",
        borderBottomWidth: 2,
        borderBottomColor:"#334257",
        borderStyle:'solid',
        paddingBottom:10,
        width:'50%',
        color:'#334257'

    },numberDelete:{
        flexDirection:'row',
        width:"30%",
        justifyContent:'space-around'
    },
    
})