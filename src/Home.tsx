import cute from "./cuteKitten.gif";
import { Link } from 'react-router-dom';
import bg from "./Lotus.png";

const Home = () => {
  return (
    <div >
     <Link to="/services/barcode" className='underline text-blue-600'>Generate Your Bar-Code Here</Link>
     <img src={bg} className='w-auto opacity-50'/>
   
     <h1>Home Page under development </h1>
     <img src={cute} className='h-36'/>
    </div>
  )
}

export default Home;