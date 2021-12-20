import {redux,DELETE_WORD, UNDO_WORD} from './actionTypes';

const initialState = {
  wordArray: [],
  hiddenIdArray: [],
};

export const mainreducer = (state = initialState, action) => {
  switch (action.type) {
    case redux:
      return {...state, wordArray: [...state.wordArray, action.payload]};
    case DELETE_WORD :
      return {
        ...state,
        wordArray:[...state.wordArray.map(item=>item.id === action.payload ? item.visible=false : console.log("Hello"))],
        hiddenIdArray: [...state.hiddenIdArray,action.payload]
      }
    // case UNDO_WORD :
    //   return {
    //     ...state,
    //     hiddenIdArray : state.hiddenIdArray.forEach(hiddenid=>
    //       {state.wordArray.map(item=>item.id === hiddenid ? item.visible=true : null)})
    //   };
    default:
      return state;
  }
};
