import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function EntryPage({navigation}) {

  // GoogleSignin.configure({
  //   webClientId: '354893042307-3fp7esrmrld4f0t58sdeqg78n8voo6jg.apps.googleusercontent.com',
  // });
    const startGame=()=>{
        navigation.navigate("FirstPage");
      }
      const exit=()=>{
        Alert.alert(
            "Are you sure want to exit ?",
            "",
            [
              { text: "Cancel",style: "cancel" },
              {text:"YES",style:"cancel"}
            ]
          );
      }
    return (
        <SafeAreaView style={style.mainContainer}>
        <View style={style.insideBox}>

            <Text  style={style.gameName}>WORD GAME</Text>
            <TouchableOpacity style={style.buttonContainer} onPress={startGame}>
            <Text  style={style.buttonSubmit}>START GAME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonContainer}>
            <Text  style={style.buttonSubmit} onPress={exit}>EXIT</Text>
            </TouchableOpacity>
            <Text>GMAIL</Text>
        </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        flex:1,
        // backgroundColor:'#000B49',
        backgroundColor:"#678983",
        justifyContent:'center',
        alignItems:'center'
    },
    insideBox:{
        width:'90%',
        height:'40%',
        // backgroundColor:'black',
        justifyContent:'space-around',
        alignItems:'center'
    },
    gameName:{
        fontSize:50,
        fontFamily: 'Moo Lah Lah',
        // color:'#FFE6BC',
        color:'white',
        fontWeight:'bold',
        fontStyle:'italic',
    },
    buttonContainer:{
        width:'50%',
      },
      buttonSubmit:{
        
        color:'black',
        height: 40, 
        borderRadius:10,
        backgroundColor:'white',

        padding:8,
        fontSize:19,
        fontWeight:'500',
        textAlign:'center',
      }
})