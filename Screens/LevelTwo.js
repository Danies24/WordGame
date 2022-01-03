import React from 'react'
import {View,StyleSheet, ScrollView, ImageBackground} from 'react-native'
import {useDispatch} from 'react-redux'
import { primaryColorBackgroundColor } from '../Components/Colors';
import Header from '../Components/Header';
import analytics from "@react-native-firebase/analytics"
import { levelNameAction } from '../redux/action';


function LevelTwo({route}) {
  const dispatch = useDispatch();
  dispatch(levelNameAction(route.params.name));

  analytics().logScreenView({
    screen_class:"LevelTwo",
    screen_name:"LevelTwo"
  })

    return (
        <>
        <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2020/02/26/19/15/life-is-a-circle-4882586__340.jpg'}} style={style.wholePage}>
          <View style={style.mainContainer}>
          <Header />
          </View>
        </ImageBackground>
        </>
        
    )
}

export default LevelTwo;

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
    container:{
      width:'80%',
    }
  })
  