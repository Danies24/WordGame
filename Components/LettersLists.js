import React from 'react'
import { StyleSheet, View } from 'react-native';
import RoundBtn from './RoundBtn';

export default function LettersLists({getText}) {
    const texts1 = ['P','L','P','L','S'];
    const texts2 = ['A','C','E','H','D'];


    return (
    <>
        <View style={styles.middleware}>
            { texts1.map((text,index)=>
            <RoundBtn fun={getText} key={index} text={text}/>
            )}
        </View>
        <View style={styles.middleware}>
            { texts2.map((text,index)=>
            <RoundBtn fun={getText} key={index} text={text}/>
            )}
        </View>
    </>
    )
}
const styles = StyleSheet.create({
    middleware:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
      },
})