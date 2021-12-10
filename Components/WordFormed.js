import React ,{useState} from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default function WordFormed({letterTyped}) {
    
    return (
       
        <View style={style.row}>
            <Text style={style.word}>{letterTyped}</Text>
             <Text style={[style.number]}>{letterTyped.length}</Text> 
         </View>  
    )
}
const style = StyleSheet.create({
    row:{
        width:'100%',
        padding:10,
        flexDirection:'row',
        justifyContent:"space-between"
    },
    word:{
        color:'black',
        fontSize:20,
        textTransform:"capitalize",
        borderBottomWidth: 5,
        borderBottomColor:"black",
        borderStyle:'dotted',
        paddingBottom:10,
        width:'40%'
    },
    number:{
        color:'white',
        padding:10,
        textAlign:'center',
        fontSize:25,
        backgroundColor:'#4F091D',
        width:'10%',
        
    }
})
