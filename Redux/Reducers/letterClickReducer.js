import { LETTER_CLICK } from '../constants';

const initialState = {
letter: ""
};

const letterClickReducer = (state = initialState, action) => {
    switch(action.type) {
        case LETTER_CLICK:
            return {
            ...state,
            letter:action.payload
        };
        default:
            return state;
    }
}
export default letterClickReducer;