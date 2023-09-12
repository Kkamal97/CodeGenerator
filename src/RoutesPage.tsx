import React, { FC,useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import About from './About';
import Title from './Title';
import Home from './Home';

interface RoutesPageProps {
  
}

const RoutesPage: FC<RoutesPageProps> = ({  }) => {
    let [stringArray,setStringArray]=useState([]);
  return (
    <div className='flex flex-row'>
        <Routes >
<Route path="/" element={<Home />} />         
<Route path="/About" element={<About />} />
<Route path="/services/BarCode" element={<Title stringArray={stringArray} setStringArray={setStringArray}/>} />
        </Routes>
    
    </div>
  )
}

export default RoutesPage;