import React, { FC } from 'react'
import { Link } from 'react-router-dom';

interface AboutProps {
  
}

const About: FC<AboutProps> = ({  }) => {
  return (<>
    <div className='font-sans'>
     This Page is using BarCodes from barcode.tec-it
     <h2 className='font-black text-blue-700'>Visit our other web Apps</h2>
     <Link to="https://2doapps.netlify.app/" className='underline text-blue-500'>ToDo App</Link>
   

    <h2 className='font-black text-purple-600'>Upcoming Projects</h2>
   <h3>Hindi Typing App with Node.Js</h3>
   </div>
   </>
  )
}

export default About;