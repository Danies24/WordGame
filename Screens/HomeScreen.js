import React, { useState } from 'react'
import { ScrollView, StyleSheet, View,Text,Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


import Header from '../Components/Header';
import { nextLevelAction } from '../redux/action';


export default function HomeScreen({navigation,name,src}) {
  const data= useSelector((state)=>state.wordArray);
  const dispatch = useDispatch()
    const handlenavigation=()=>{
      dispatch(nextLevelAction())
      navigation.navigate("LevelTwo");
    }

  return (
  <ScrollView >
  <View style={style.mainContainer}>
  <View style={style.container}>
        <Text style={{fontSize :20,color:'#009970'}}>{name}</Text>
        <Image source ={{uri:src}}/>
        <Header handlenavigation={handlenavigation}/>
  </View>
  </View> 
  </ScrollView>
  );
};

const style = StyleSheet.create({
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

