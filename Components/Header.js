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
          <View>
            <Text style={styles.One}>Give me Five</Text>
          </View>
          <Progress.Bar progress={0.7} width={395} height={10} color={'red'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  One: {
     marginBottom: 10,
    fontSize : 40,
     color:'red',
     fontFamily: 'Readex Pro',
     fontWeight: '700',
  },
  
  Header:{
    marginTop:50,
  }
});
