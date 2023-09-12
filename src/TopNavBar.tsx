import  { FC } from 'react';
import logo from "./logo.png";
import { Link } from 'react-router-dom';
import {FaUserAlt}from "react-icons/fa";
interface TopNavBarProps {
  
}

const TopNavBar: FC<TopNavBarProps> = ({  }) => {
  return (
    <div className='bg-green-300 flex flex-row items-center'>
        <img src={logo} className='h-8 mr-3'/>
       <div className='grow'/>
<div className='flex flex-row space-x-4 mr-6 items-center'>
        <Link to="/">Home</Link>
        <Link to="/services/barcode">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/about">Portfolio</Link>
        <Link to="/about">Contact us</Link>
        <Link to="/about">
            <FaUserAlt />
            </Link>
 </div>
    </div>
  )
}

export default TopNavBar;