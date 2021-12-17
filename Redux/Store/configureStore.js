import {createStore} from 'redux';
  
import letterClickReducer from "../Reducers/letterClickReducer"
  
const store=createStore(letterClickReducer);
  
export default store;
