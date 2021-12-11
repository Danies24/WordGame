import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function DisplayWord({word,deleteLetter}) {

    return (
        <View style={styles.container}>
            <Text style={styles.typedWord}>{word}</Text>
            <TouchableOpacity  onPress={deleteLetter} >
                <Text style={styles.delete}>
                ---
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        overflow:"hidden",
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth: 5,
        borderBottomColor:"black",
        borderStyle:'solid',
        padding:10,

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