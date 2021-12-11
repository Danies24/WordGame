import React ,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default function WordFormed({letterTyped}) {
    return (
        <View style={style.row}>
            <Text style={style.word}>{letterTyped}</Text>
            <View style={style.numberDelete}>
                <Text style={[style.number]}>{letterTyped.length}</Text> 
                <TouchableOpacity>
                    <Text style={style.delete}>--</Text>
                </TouchableOpacity>
            </View>
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
        width:'50%'
    },
    numberDelete:{
        flexDirection:'row',
        width:"30%",
        justifyContent:'space-around'
    },
    number:{
        color:'white',
        padding:10,
        textAlign:'center',
        fontSize:20,
        backgroundColor:'#4F091D',
    },
    delete:{
        fontSize:30,
        color:'black',
    }

})
