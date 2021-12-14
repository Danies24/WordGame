import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RoundBtn from './RoundBtn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BelowContent({handleDelete,sethandleDelete}) {
    const aaguma = (id)=>{
        sethandleDelete(prevItems=>{
          return prevItems.filter(handle => handle.id != id);
        })
      }
    return (
        <>

         {  handleDelete.map((handle,index)=>
                <View  key={index} style={style.container}>
                <View style={style.row}>

                    <Text style={style.word}>{handle.wordName}</Text>
                    <RoundBtn style={[style.number]} text={handle.length}/> 

                    <TouchableOpacity onPress={()=>aaguma(handle.id)}>
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
    container:{
        paddingTop:20,
        width:'100%',
    },row:{
        width:'100%',
        padding:5,
        flexDirection:'row',
        justifyContent:"space-between",alignItems:'center',
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