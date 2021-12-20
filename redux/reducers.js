import {redux,DELETE_WORD, UNDO_WORD, NEXT_LEVEL} from './actionTypes';

const initialState = {
  wordArray: [
  //   {
  //   visible:false,
  //   wordName:"HHH",
  //   length:0,
  //   id:0
  // }
],
  hiddenIdArray: [],
};

export const mainreducer = (state = initialState, action) => {
  switch (action.type) {
    case redux:
      return {...state, wordArray: [...state.wordArray, action.payload]};
    case DELETE_WORD :
      return {
        
        wordArray:[...state.wordArray,state.wordArray.map(item=>item.id === action.payload ? item.visible=false : null)],
        hiddenIdArray: [...state.hiddenIdArray,action.payload]
      }
    case UNDO_WORD :
      return {
        ...state,
        hiddenIdArray :[...state.hiddenIdArray, state.hiddenIdArray.forEach(hiddenid=>{state.wordArray.map(item=>item.id === hiddenid ? item.visible=true : null)})]
      };
      case NEXT_LEVEL : 
      return {
        wordArray:[]
      }
    default:
      return state;
  }
};
