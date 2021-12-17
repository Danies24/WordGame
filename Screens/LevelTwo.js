import React from 'react'
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import Middleware from '../Components/Middleware';
import RoundBtn from '../Components/RoundBtn';
import { letterClickAction } from '../Redux/Actions/lettersClickAction';
import { LETTER_CLICK } from '../Redux/Constants/index';


export default function LevelTwo() {
    
    return (
        <>
            <Middleware/>
        </>
    )
}
