import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {primaryColorBackgroundColor} from "../Components/Colors";
import analytics from "@react-native-firebase/analytics"

import Header from '../Components/Header';
import { levelNameAction, nextLevelAction } from '../redux/action';


export default function HomeScreen({navigation}) {
  analytics().logScreenView({
    screen_class:"HomeScreen",
    screen_name:"HomeScreen"
  })



  const data= useSelector((state)=>state.wordArray);
  const dispatch = useDispatch()
    
  const handlenavigation=()=>{
      dispatch(nextLevelAction())
      navigation.navigate("LevelTwo",{ name: 'LevelTwo' });
      analytics().logLevelUp({
        level:2,
        character:"Level 2"
      })
    }

  return (
    <ImageBackground source={require('../Images/GameScreen1.jpeg')} style={style.wholePage}>

  <View style={style.mainContainer}>
          <Header handlenavigation={handlenavigation}/>
  </View>
  </ImageBackground>
  );
};

const style = StyleSheet.create({
  wholePage:{
    paddingTop:35,
    paddingBottom:35,
    justifyContent:'center',
    alignItems:'center',
  },
  mainContainer:{
    width:'80%',
    height:'100%',
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