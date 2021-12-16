import React, { useState} from 'react';
import * as Progress from 'react-native-progress';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Header({wordArray}) {
  //let count = wordArray.length;
let text ;
let bar ;
let count=0;
wordArray.map(word=>word.visible=== true ? count++:null)



if (count === 1) {
  text = "Good Effort";
  bar = 0.2
} else if (count === 2) {
  text = "Keep Going";
  bar = 0.4;
} else if (count === 3) {
  text = "Amazing";
  bar = 0.6;
} else if (count === 4) {
  text = "Excellent"
  bar = 0.8
} else if (count === 5) {
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
} else if (count > 5) {
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
          
            <Text style={styles.appreciation}>{text}
            </Text> 
          </View>
          <Progress.Bar progress={bar} width={310} height={15} color={'#548CA8'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  One: {
    fontSize : 30,
     color:'#334257',
     fontWeight: '700',
    textTransform:'uppercase',

  },
  heading:{
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  appreciation:{
    fontFamily: 'Readex Pro',
    fontWeight: '700',
    fontSize : 30,
    color:'#334257',
    width:'100%',
    textAlign:'center',
    paddingTop:5,
    paddingBottom:10,
}
});
