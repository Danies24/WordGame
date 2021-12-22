import React,{useEffect} from 'react'
import { Alert, BackHandler, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import GmailSignIn from '../Components/GmailSignIn';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function EntryPage({navigation}) {
     useEffect(()=>{
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
        webClientId: '354893042307-3fp7esrmrld4f0t58sdeqg78n8voo6jg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        //hostedDomain: '', // specifies a hosted domain restriction
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        //accountName: '', // [Android] specifies an account name on the device that should be used
//iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        //googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
        //openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
        profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
      });

     },[])
     signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo);
           } catch (error) {
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
    };


 
    const startGame=()=>{
        navigation.navigate("FirstPage");
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
            {/* <GmailSignIn/> */}
        </View>
        <GoogleSigninButton
  style={{ width: 192, height: 48 }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={signIn}
/>;
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
