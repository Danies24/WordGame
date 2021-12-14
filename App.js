import React ,{useState} from 'react';
import {  ScrollView, StyleSheet, Text, View } from 'react-native';
import BelowContent from './Components/BelowContent';

import Header from './Components/Header';
import Middleware from './Components/Middleware';


const App= () => {
  const [handleDelete, sethandleDelete] = useState([]);


  return (
<ScrollView >
<View style={style.mainContainer}>
<View style={style.container}>
      <Header handleDelete={handleDelete}/>
      <Middleware  sethandleDelete={sethandleDelete} handleDelete={handleDelete}/>
      <BelowContent handleDelete={handleDelete} sethandleDelete={sethandleDelete}/>    
</View>
</View>
</ScrollView>
  );
};

const style = StyleSheet.create({
  mainContainer:{
    width:'100%',
    height:'100%',
    // backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'#334257',
    color:'#548CA8'
  },
  container:{
    width:'80%',
  }
})

export default App;
