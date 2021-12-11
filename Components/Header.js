import React from 'react';
import {ProgressBar,Colors} from 'react-native-paper';
import * as Progress from 'react-native-progress';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
export default function Header() {
    return (
        <SafeAreaView style={styles.Header}>
          <View style={styles.heading}>
            <Text style={styles.One}>Give me Five</Text>
            <Text>Danies</Text>
          </View>
          
          <Progress.Bar progress={0.1} width={395} height={15} color={'#4F091D'}/>
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
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  Header:{
    marginTop:50,
  }
});
