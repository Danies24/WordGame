import React, { useState } from 'react';
import * as Progress from 'react-native-progress';

import {
  Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Header({submitWord,setSubmitWord}) {
  let arrayLength = submitWord.length;
  console.log(arrayLength);
let text ;
let bar ;
if (arrayLength == 1) {
  text = "Good Effort";
  bar = 0.2
} else if (arrayLength == 2) {
  text = "Keep Going";
  bar = 0.4;
} else if (arrayLength == 3) {
  text = "Amazing";
  bar = 0.6;
} else if (arrayLength == 4) {
  text = "Excellent"
  bar = 0.8
} else if (arrayLength == 5) {
  text = "Rising Star";
  bar = 1;
  Alert.alert(
    "",
    " Hurrah ! You Did It",
    [
      {
        text: "Lets Begin Again ",
        style: "cancel",
      }
    ]);
    // setSubmitWord([]);
} else if (arrayLength > 5) {
  text = "Ultimate"
  bar = 1
} 
else {
  text="let's Begin !";
  bar=0;
}

    return (
        <SafeAreaView style={styles.Header}>
          <View style={styles.heading}>
            <Text style={styles.One}>Give me Five</Text>
            <Text style={styles.appreciation}>{text}</Text> 

          </View>
          <Progress.Bar progress={bar} width={395} height={15} color={'#4F091D'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  One: {
     marginBottom: 10,
    fontSize : 40,
     color:'#4F091D',
     fontFamily: 'Readex Pro',
     fontWeight: '700',
  },
  heading:{
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  Header:{
    marginTop:10,
  },
  appreciation:{
    fontFamily: 'Readex Pro',
    fontWeight: '700',
    fontSize : 30,
    color:'#4F091D',
    textTransform:'uppercase',
    width:'100%',
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10,
}
});
