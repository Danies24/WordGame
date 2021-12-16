import React,{useState} from 'react'
import { SafeAreaView,StyleSheet, Button, Alert, TouchableOpacity, Text, View} from 'react-native';
import DisplayWord from './DisplayWord';
import LettersLists from './LettersLists';


function Middleware({setwordArray,wordArray}) {

  const [word,setWord]=useState("");
  const wordObj = {
    visible:true,
    wordName : word,
    length : word.length,
    id:Math.floor((Math.random() * 100) + 1),
  }
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
      setwordArray((prevWords)=> {return [...prevWords,wordObj]});
    }
  }


    return ( 
      <>

      <SafeAreaView style={styles.se}>
        <LettersLists getText={getText}/>
      </SafeAreaView>
        <DisplayWord word={word} deleteLetter={deleteLetter}/>
        <TouchableOpacity onPress={shotItButton} style={styles.buttonContainer}>
            <Text  style={styles.buttonSubmit}>SUBMIT WORD</Text>
        </TouchableOpacity>
      </>
    )
}

export default Middleware;
const styles = StyleSheet.create({
    se:{
      flex:-1,
      paddingTop:15,
      flexDirection:'column',
      height:150
    },
    text:{
      fontSize:25,
      textAlign:'center',
    },
    buttonContainer:{
      justifyContent:'center',
      alignItems:'center',
    },
    buttonSubmit:{
      color:'#EEEEEE',
      height: 40, 
      borderRadius:50,
      backgroundColor:'#548CA8',
      width:'70%',
      padding:13,
      fontSize:15,
      fontWeight:'800',
      textAlign:'center',
    }
});