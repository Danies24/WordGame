import {redux,DELETE_WORD, UNDO_WORD, NEXT_LEVEL} from './actionTypes';


const initialState = {
  wordArray: [],
  hiddenIdArray: [],

};

export const mainreducer = (state = initialState, action) => {
  
  switch (action.type) {
    case redux:
      
      return {...state, wordArray: [...state.wordArray, action.payload],
      };
    case DELETE_WORD :
      const call =(word)=>{
        word.visible=false
        return word
      }
      let newWordArray=state.wordArray.map((word,index)=>((word.id===action.payload)?(call(word)):word))
      console.log(newWordArray);
      return {...state,
        wordArray: newWordArray,
        hiddenIdArray: [...state.hiddenIdArray,action.payload],
        
      }
    case UNDO_WORD :
      return {
        ...state,
        wordArray:[...state.wordArray,state.hiddenIdArray.map((hid)=>state.wordArray.map((word)=>word.id===hid?word.visible=true:null))]
        
      
      };
      case NEXT_LEVEL : 
      return {...state,
        wordArray:[]
      }
    default:
      return state;
  }
};