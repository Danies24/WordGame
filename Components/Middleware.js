import React,{useState} from 'react'
import RoundBtn from './RoundBtn';
import { SafeAreaView,View,StyleSheet, Text, Button, TouchableOpacity, Alert} from 'react-native';
import DisplayWord from './DisplayWord';
import Bottom from './Bottom';


function Middleware() {

  const [word,setWord]=useState("");
  const [submitWord,setSubmitWord]=useState("");


  //Print the letters which are clicked
  const getText = (data)=>{
    setWord(prevItems=>{
      return [...prevItems ,data]
    });
  }


  //Delete the letters which are clicked
  const deleteLetter=()=>{
    let newWord = word.slice(0,-1);
    setWord(newWord);
  }

  //Button For Submit
  const shotItButton =()=>{
    if(word==""){
      Alert.alert(
        "",
        "Kid ! No Word Found",
        [
          {
            text: "Try Again",
            style: "cancel",
          }
        ])
    }else{
      setWord("");
      setSubmitWord(()=> {return [...word]});      
    }
  }
    return (
    <SafeAreaView style={styles.se}>
      <View style={styles.middleware}>
        <RoundBtn fun={getText} text="P"/>
        <RoundBtn fun={getText} text="L"/>
        <RoundBtn fun={getText} text="P"/>
        <RoundBtn fun={getText} text="T"/>
        <RoundBtn fun={getText} text="S"/>
      </View>
      <View style={styles.middleware}>
        <RoundBtn fun={getText} text="A"/>
        <RoundBtn fun={getText} text="C"/>
        <RoundBtn fun={getText} text="E"/>
        <RoundBtn fun={getText} text="H"/>
        <RoundBtn fun={getText} text="D"/>
      </View>
      <DisplayWord word={word} deleteLetter={deleteLetter}/>
          <Button
            onPress={shotItButton}
            title="Shot a Word Kiddie"
            color="#4F091D"
          />
      <Bottom wordTyped={submitWord}/>
    </SafeAreaView>
    )
}

export default Middleware
const styles = StyleSheet.create({
    middleware:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    se:{
      flex:-1,
      padding:20,
      flexDirection:'column',
      height:300,
    },
    text:{
      padding:10,
      fontSize:25,
      textAlign:'center',
    },
  });