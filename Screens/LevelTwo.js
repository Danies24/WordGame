import React,{useState}from 'react'
import {Button, Text,View,TextInput} from 'react-native'
import {useSelector , useDispatch} from 'react-redux'
import BelowContent from '../Components/BelowContent';
import Header from '../Components/Header';
import LettersLists from '../Components/LettersLists';
import Middleware from '../Components/Middleware';
import {reduxAction} from '../redux/action'
function Count() {
    const data= useSelector((state)=>state.wordArray);
    const [text, setText] = useState('');
    const dispatch =useDispatch();
    const handleSubmit = ()=>{
        dispatch(reduxAction({visible:true, wordName : text,length :text.length,id:10}));
        setText("");
    }
    return (
        <>
        <Middleware/>
        <View>
            <TextInput  
                style={{height: 40}}
                placeholder="word"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Button title="Submit" onPress={handleSubmit}/>
            {data.map((item,index)=>item.visible === true ? <Text key={index} style={{fontSize:20}}>WordName : {item.wordName}, Id : {item.id}, length : {item.length}</Text>: null)}
        </View>
        </>
        
    )
}

export default Count