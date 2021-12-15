import React ,{useState}from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RoundBtn from './RoundBtn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

export default function BelowContent({wordArray,setwordArray}) {
    const [hiddenIdArray, sethiddenIdArray] = useState([]);

    //Word Delete Function
    const wordDelete = (wordObj)=>{
        wordArray.map(item=>item.id===wordObj.id ? item.visible=false : null)
        sethiddenIdArray(previtems=>[...previtems,wordObj.id]);
    }

    //Undo Button Function
const undoButton=()=>{
    // let index0 = hiddenIdArray[0];
    // let index1 = hiddenIdArray[1];
    hiddenIdArray.forEach(hiddenid=>{
        let hello = hiddenid 
        wordArray.map(item=>item.id == hello ? item.visible=true : null)
    })
}
    return (
        <>
        <TouchableOpacity onPress={undoButton} style={style.undoContainer} >
            {/* <Text >Undo </Text> */}
         <FontAwesome5 name={'history'} style={style.undo} size={20} color={'#334257'}/>
        </TouchableOpacity>

         {  wordArray.map((word,index)=>
                word.visible ? 
                <View  key={index} style={style.container}>
                <View style={style.row}>

                    <Text style={style.word}>{word.wordName}</Text>
                    <RoundBtn style={[style.number]} text={word.length}/> 

                    <TouchableOpacity onPress={()=>wordDelete(word)}>
                    <Text  style={style.delete}>
                        <FontAwesome5 name={'trash'} size={20} color={'#334257'}/>
                    </Text>
                    </TouchableOpacity>
                </View> 
                </View>: <View/>
         )}
        </>
    )
}
const style = StyleSheet.create({
    undoContainer:{
        flex:1,
        paddingTop:20,

        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    container:{
        width:'100%',
    },row:{
        width:'100%',
        padding:5,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        color:'#334257',
    },word:{
        fontSize:30,
        textTransform:"capitalize",
        borderBottomWidth: 2,
        borderBottomColor:"#334257",
        borderStyle:'solid',
        paddingBottom:10,
        width:'50%',
        color:'#334257'

    },numberDelete:{
        flexDirection:'row',
        width:"30%",
        justifyContent:'space-around'
    },
    
})