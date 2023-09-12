import React, { FC } from 'react'
import cute from "./cuteKitten.gif";
import { Link } from 'react-router-dom';
interface HomeProps {
  
}

const Home: FC<HomeProps> = ({  }) => {
  return (
    <div>
     <h1>Home Page under development </h1>
     <img src={cute} className='h-36'/>
     <Link to="/services/barcode" className='underline text-blue-600'>Generate Your Bar-Code Here</Link>
    </div>
  )
}

export default Home;