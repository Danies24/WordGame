import {redux , DELETE_WORD, UNDO_WORD } from './actionTypes';
export const reduxAction = data => ({type: redux, payload: data});
export const deleteAction = id => ({type:DELETE_WORD,payload:id});
export const undoAction = () => ({type:UNDO_WORD});
