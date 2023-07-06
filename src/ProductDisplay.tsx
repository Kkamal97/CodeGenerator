import React, { useState } from "react";
// ADDED BY (kk) [2023-05-10]:, 
import QRCode from 'qrcode';
import { range } from "lodash";
function ProductDisplay (items){
const [imgURL,setImgUrl]=useState();
const {create,toCanvas,toDataURL}=QRCode;

const [ input1, setInput1 ] = useState("Hello world!");
const [ input2, setInput2 ] = useState();

const RARA=range(1,5,1)
console.log("RARA check the array",RARA);




    return <>
    <h1>hello kamli</h1>
    <input onChange={(e)=>{setInput1(e.target.value)}} className="border border-gray-700" placeholder="input1" />
    <input onChange={(e)=>{setInput2(e.target.value)}} placeholder="input2" className="border border-gray-700"/>
    
    {RARA.map(function (items){
       let [tempraryImage,setTempraryImage]=useState("hii");
       const item=items.toString();
        toDataURL(item).then(function(response){
            console.log("response mil gya",response);
            setTempraryImage(response);
        })
        return(<>
      <img className="w-16" src={tempraryImage} />
      <p className="text-xs">{items}</p>
        </>)
    })}

    </>
}
export default ProductDisplay;