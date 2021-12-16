import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import BelowContent from '../Components/BelowContent';
import Header from '../Components/Header';
import Middleware from '../Components/Middleware';

export default function HomeScreen({navigation}) {
    const [wordArray, setwordArray] = useState([]);

    //Navigation Function For Next Level
    const handlenavigation =()=>{
      navigation.navigate("LevelTwo");
      setwordArray([]);
    }


  return (
  <ScrollView >
  <View style={style.mainContainer}>
  <View style={style.container}>
        <Header wordArray={wordArray} setwordArray={setwordArray} handlenavigation={handlenavigation}/>
        <Middleware  setwordArray={setwordArray} wordArray={wordArray}/>
        <BelowContent wordArray={wordArray} setwordArray={setwordArray}/>    
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

