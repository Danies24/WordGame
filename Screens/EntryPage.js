import React,{useEffect} from 'react';
import analytics from '@react-native-firebase/analytics';
import { Alert, BackHandler, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function EntryPage({navigation}) {

 
  // analytics().logEvent('Screen_Name', {screen_name:"EntryPage"});//Analytics For ScreenNAme
 


  useEffect(()=>{
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
      webClientId: '354893042307-3fp7esrmrld4f0t58sdeqg78n8voo6jg.apps.googleusercontent.com', 
      offlineAccess: true,
      forceCodeForRefreshToken: true, 
      profileImageSize: 120, 
    });

   },[])
   const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
         } 
    catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
    // analytics().logEvent('UserInfo',{userInfo:"user Info"});
    
  };
 
    const startGame = ()=>{
      navigation.navigate("FirstPage");
      // analytics().logSelectContent({content_type: 'Start Button Clicked',item_id: 'start1'});
   
      }


      const exit=()=>{
        Alert.alert(
            "Are you sure want to exit ?",
            "",
            [
              { text: "Cancel",style: "cancel" },
              {text:"YES",onPress: () => BackHandler.exitApp(),style:"cancel"}
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
            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
            />
            {/* <Button title='Analytics Check' onPress={realtimeLogContent}/> */}
        </View>
        </SafeAreaView>
    )
} 
const style = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor:"#678983",
        justifyContent:'center',
        alignItems:'center'
    },
    insideBox:{
        width:'90%',
        height:'40%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    gameName:{
        fontSize:50,
        fontFamily: 'Moo Lah Lah',
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
