import {redux} from './actionTypes';

const initialState = {
  wordArray: [
    {
      visible: false,
      wordName: '',
      length: 0,
      id: Math.floor(Math.random() * 100 + 1),
    },
  ],

  hiddenIdArray: [],
};

export const mainreducer = (state = initialState, action) => {
  switch (action.type) {
    case redux:
      return {...state, wordArray: [...state.wordArray, action.payload]};

    default:
      return state;
  }
};
