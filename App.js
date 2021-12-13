import React ,{useState} from 'react';

import Header from './Components/Header';
import Middleware from './Components/Middleware';


const App= () => {
  const [submitWord,setSubmitWord]=useState([]);

  return (
<>
      <Header submitWord={submitWord} setSubmitWord={setSubmitWord}/>
      <Middleware submitWord={submitWord} setSubmitWord={setSubmitWord}/>
</>
  );
};



export default App;
