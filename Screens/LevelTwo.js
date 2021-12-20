import React,{useState}from 'react'
import {Button, Text,View,TextInput} from 'react-native'
import {useSelector , useDispatch} from 'react-redux'
import Header from '../Components/Header';
import {reduxAction,deleteAction,undoAction} from '../redux/action';

function LevelTwo() {
    let data= useSelector((state)=>state.wordArray);
    let HiddenId = useSelector(state => state.hiddenIdArray);
    const [text, setText] = useState('');
    const dispatch =useDispatch();

    const handleSubmit = ()=>{
        dispatch(reduxAction({visible:true, wordName : text,length :text.length,id:Math.floor(Math.random() * 100 + 1)}));
        setText("");
    }
    console.log(HiddenId);

    return (
        <>
        {/* <Header /> */}
        <Text>{data.length}</Text>
        <View>
            <TextInput  
                style={{height: 40}}
                placeholder="word"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Button title="Submit" onPress={text.length != 0 ? handleSubmit:null}/>
            <Text onPress={()=>dispatch(undoAction())}>UNDO</Text>
            {data.map((item,index)=>item.visible === true ? 
            <View key={index} style={{fontSize:50,flexDirection:'row',justifyContent:'space-between'}}>
                <Text>{item.wordName}</Text>
                <Text>{item.length}</Text>
                <Text>{item.id}</Text>
                <Text onPress={()=>dispatch(deleteAction(item.id))}>X</Text>
            </View>: null)}
        </View>
        </>
        
    )
}

export default LevelTwo;