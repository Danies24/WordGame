import React from 'react'
import { ScrollView, StyleSheet, View,Text,Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {frontFontColor, primaryColorBackgroundColor} from "../Components/Colors";

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
  <ScrollView style={{backgroundColor:primaryColorBackgroundColor}}>
  <View style={style.mainContainer}>
    <View style={style.profileTop}>
          <Text style={{fontSize :20,color:frontFontColor}}>Welcome {name}</Text>
          <Image style={style.tinyLogo} source ={{uri:src}}/>
    </View>
  <View style={style.container}>
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
  },
  container:{
    width:'80%',
  },
  profileTop:{
    
    justifyContent:'space-between',
    flexDirection:"row",
    alignItems:"center",
    width:'80%'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius:50
  },
})