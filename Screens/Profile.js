import React ,{useState}from 'react'
import {Text,Image, PixelRatio,View,Button} from 'react-native'
import EntryPage, { userdetails,changer } from './EntryPage'
import analytics from "@react-native-firebase/analytics"
// import InAppReview from 'react-native-in-app-review'
import { useNavigation } from '@react-navigation/native'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

function Profile() {
    const Navigation=useNavigation();
    const [isSignedIn,setisSignedIn]=useState(true)
    const signOut = async () => {
        
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signOut();
           const In = await GoogleSignin.isSignedIn();
          setisSignedIn(In);
        //   changer=true;
      };
    return (<>{isSignedIn?<View style={{flex:1,alignItems:'center'}}>
    <Image source={{uri:userdetails.photo}} style={{height:150, width:150,borderRadius:150/2,alignItems:'center',marginBottom:20}}/>
       <Text style={{fontSize:30,fontWeight:'500',marginBottom:10}}>{userdetails.name}</Text>
       <Text style={{fontWeight:'400',fontSize:25}}>{userdetails.email}</Text>
       
       <Button title="signOut" onPress={signOut}/>
        </View>:Navigation.navigate("EntryPage")}
        </>
    )
}

export default Profile
