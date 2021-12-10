import React from 'react'
import {  StyleSheet, View } from 'react-native'
import WordFormed from './WordFormed';

export default function Bottom({wordTyped}) {
    
    return (
    <View style={style.container}>      
        <WordFormed letterTyped={wordTyped} /> 
        {/* <WordFormed letterTyped={wordTyped} />
        <WordFormed letterTyped="Ragavi" />
        <WordFormed letterTyped="Vidyanand" />
        <WordFormed letterTyped="Sagar" /> */}
    </View>  
    )
}

const style = StyleSheet.create({
    
    container:{
        height:800,
        position:'absolute',
        width:'100%',
        top:320,
        left:25,
    }
})
