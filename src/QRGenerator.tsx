import React from "react";
import { useParams } from "react-router-dom";
// ADDED BY (kk) [2023-06-05]:, 
function QRGenerator ({arr1,constValue}){
const ur1=useParams();
console.log("ur1 QR ke andar ",ur1);
    return <>

    {arr1 && arr1.map(function(item){
        return(<div key={item} className="">
       {(!!constValue) && ( <div className="flex flex-grow items-center space-x-1"> <img src={"https://qrcode.tec-it.com/API/QRCode?data=" + constValue + item} className="ml-3 my-6 w-12"/><p>{constValue + item}</p></div>)}
       {(!!constValue) || (<div className="flex flex-grow items-center space-x-1">  <img src={"https://qrcode.tec-it.com/API/QRCode?data="  + item} className="ml-3 my-6 w-12"/><p>{item}</p></div>)}
        
        </div>)
    })}
    </>
}
export default QRGenerator;