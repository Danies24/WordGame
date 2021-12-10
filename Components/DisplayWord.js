import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export default function DisplayWord({word,deleteLetter}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.typedWord}>{word}</Text>
            <Text style={styles.delete} onPress={deleteLetter} >---</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        width:'100%',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth: 5,
        borderBottomColor:"black",
        borderStyle:'solid',
        paddingBottom:10,
    },
    typedWord:{
        paddingLeft:30,
        fontSize:30,
        color:"black"
    },
    delete:{
        fontSize:30,
        color:'black',
    }
})