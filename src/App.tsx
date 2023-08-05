import {useState} from "react";

import Title from './Title'

//git push ke backup ke liye
function App() {

  let [stringArray,setStringArray]=useState([]);



  return (
    <div className='flex flex-row'>
    <Title stringArray={stringArray} setStringArray={setStringArray}/>
    
    </div>
  )
}

export default App
