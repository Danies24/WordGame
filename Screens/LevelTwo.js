import React,{useState}from 'react'
import {Button, Text,View,TextInput, SafeAreaView, StyleSheet, ScrollView, Alert, TouchableOpacity} from 'react-native'
import {useSelector , useDispatch} from 'react-redux'
import { primaryColorBackgroundColor } from '../Components/Colors';
import Header from '../Components/Header';


function LevelTwo() {
    const data= useSelector((state)=>state.wordArray);
    const dispatch = useDispatch();
    return (
        <>
        <ScrollView style={style.wholePage}>
        <View style={style.mainContainer}>
        <View style={style.container}>
            <Header/>
        </View>
        </View>
        </ScrollView>
        </>
        
    )
}

export default LevelTwo;

const style = StyleSheet.create({
  wholePage:{
    backgroundColor:primaryColorBackgroundColor,
    paddingTop:15
  },
    mainContainer:{
      width:'100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
      color:'#548CA8'
    },
    container:{
      width:'80%',
    }
  })
  