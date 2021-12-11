import React,{useState} from 'react'
import RoundBtn from './RoundBtn';
import { SafeAreaView,View,StyleSheet, Text, Button, TouchableOpacity, Alert} from 'react-native';
import DisplayWord from './DisplayWord';
import Bottom from './Bottom';
import LettersLists from './LettersLists';


function Middleware() {

  const [word,setWord]=useState("");
  const [submitWord,setSubmitWord]=useState([]);


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
      setSubmitWord((prevWords)=> {return [...prevWords,word]});
    }
  }
  
    return (
      
    <SafeAreaView style={styles.se}>
      <LettersLists getText={getText}/>
      <DisplayWord word={word} deleteLetter={deleteLetter}/>
      <Button onPress={shotItButton} title="Shot a Word Kiddie" color="#4F091D"/>
      <Bottom wordTyped={submitWord}/>
    </SafeAreaView>
  
    )
}

export default Middleware
const styles = StyleSheet.create({
    se:{
      flex:-1,
      paddingTop:30,
      flexDirection:'column',
      height:300,
    },
    text:{
      fontSize:25,
      textAlign:'center',
    },
  });