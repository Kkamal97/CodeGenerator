import { range } from "lodash";
import React, { useState } from "react";
import LowerPage from "./LowerPage";
import { Link, useParams } from "react-router-dom";
// ADDED BY (kk) [2023-05-10]:, 
function Title (){
    const [arr1,setArr1]=useState([]);
    const [constValue,setConstValue]=useState(1);
   const [linkBar1,setLinkBar1]=useState("")
   const [linkBar2,setLinkBar2]=useState("")
let vari1;
let vari2;
let vari3;
let vari4;

function handleChange1 (e){ 
    vari1=e.target.value
console.log("yaar checkkrle",  vari1);
}
function handleChange2 (e){ vari2=+(e.target.value)}
function handleChange3 (e){ vari3=+(e.target.value)}
function handleChange4 (e){ vari4=+(e.target.value)}

function handleSubmit(){
const jolo=range(vari2,vari3,vari4);
setArr1(jolo);
setConstValue(vari1);
console.log("tik tik kole",jolo );

}

function chikling(){

    arr1.map(function (items){

    })
}
const handleLink=()=>{
    console.log("chik chik click ho giya");
}

    return <>
    <p>this is title bar   </p>
    <div className="flex flex-col items-start text-xs justify-center">
        <div>
    <input id="constantValue" onChange={handleChange1} placeholder="Constant" className="border border-gray-300 rounded-md p-2 m-3"></input>
    <label htmlFor="constantValue">CONSTANT VALUE</label>
    </div>
    <div className="flex flex-row items-center">
    <input id="from" onChange={handleChange2} placeholder="Numeric from" className="border border-gray-300 rounded-md p-2 m-3 "></input>
    <label htmlFor="from">FROM (NUMERIC VALUES ONLY)</label>
    <input id="to" onChange={handleChange3} placeholder="Numeric Upto" className="border border-gray-300 rounded-md p-2 m-3"></input>
    <label htmlFor="to">UPTO (NUMERIC VALUES ONLY)</label>
    </div>
<div>
    <input id="steps" onChange={handleChange4} placeholder="Numeric Steps" className="border border-gray-300 rounded-md p-2 m-3"/>
    <label htmlFor="steps">STEPS (NUMERIC VALUES ONLY)</label>
    </div>
    <button onClick={handleSubmit} className="border border-gray-500 w-44 rounded-md self-center bg-sky-200">Get</button>
    </div>
    <div className="flex flex-row">
    <Link to="/BarCode" className="w-1/2" onClick={()=>{setLinkBar1("bg-blue-700");setLinkBar2("bg-gray-50")}}>
        Bar Code
        <div className={"  h-1  " + linkBar1} ></div>
    </Link>
    <Link to="/QRGenerator" className="w-1/2" onClick={()=>{setLinkBar2("bg-blue-700");setLinkBar1("bg-gray-50")}}>
        QR Code
        <div className={"  h-1  " + linkBar2}></div>
    </Link>
    </div>
        <LowerPage arr1={arr1} constValue={constValue}/>
    </>
}
export default Title;