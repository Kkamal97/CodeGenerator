import React from "react";
import { Link } from "react-router-dom";
// ADDED BY (kk) [2023-06-05]:, 
function BarGenerator ({arr1,constValue}){

    return <>
   
    {arr1 && arr1.map(function(item){
        return(<div className="">
       {(!!constValue) &&  <img src={"https://barcode.tec-it.com/barcode.ashx?data=" + constValue + item} className="ml-3 my-6"/>}
       {(!!constValue) ||   <img src={"https://barcode.tec-it.com/barcode.ashx?data="  + item} className="ml-3 my-6"/>}
        
        </div>)
    })}
    </>
}
export default BarGenerator;