import React from 'react'
import {  ScrollView, StyleSheet, Text} from 'react-native'
import WordFormed from './WordFormed';

export default function Bottom({submitWord}) {

    return (
    <ScrollView style={style.container}>
        {submitWord.map((word,index)=>
            <WordFormed key={index} index={index} submitWord={submitWord} letterTyped={word} />
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
    },
    
})
