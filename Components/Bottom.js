import React from 'react'
import {  ScrollView, StyleSheet, View } from 'react-native'
import WordFormed from './WordFormed';

export default function Bottom({wordTyped}) {
   
    return (
    <ScrollView style={style.container}> 
    {wordTyped.map((word,index)=>
        <WordFormed key={index} letterTyped={word} />
    )}
    </ScrollView>  
    )
}

const style = StyleSheet.create({
    
    container:{
        height:"100%",
        position:'absolute',
        width:'100%',
        top:320,
    }
})
