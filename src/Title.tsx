import  { useState ,FC } from "react";
import { range } from "lodash";
import CodeField from "./CodeField";


interface Titleprops {
    stringArray:string[],
    setStringArray :Function,   
  }
  const VariableArray={vari1:"",vari2:1,vari3:0,vari4:1};
const Title: FC <Titleprops > =({stringArray,setStringArray})=>{

      const [barClicked,setbarClicked] =useState<boolean>(true);    
    const [QRClicked,setQRClicked] =useState<boolean>(false);    

function handleChange1 (e:any){ 
    VariableArray.vari1=e.target.value
}
function handleChange2 (e:any){ VariableArray.vari2=+(e.target.value)}
function handleChange3 (e:any){ VariableArray.vari3=+(e.target.value)}
function handleChange4 (e:any){ VariableArray.vari4=+(e.target.value)}
function handleSubmit(){ 
    let sameStringArray=[...stringArray];      
const numericSequence=range(VariableArray.vari2,VariableArray.vari3 + 1,VariableArray.vari4);
numericSequence.map((items: any)=>{
    const vari1=VariableArray.vari1;
const newSequence=vari1.concat(items);
sameStringArray.push(newSequence);
  })
const jolo:string[]=[...sameStringArray]

setStringArray(jolo);

}
    return <>
   
       <div className="flex flex-col items-start text-xs justify-center">
    <input id="constantValue" onChange={handleChange1} placeholder="Constant" className="border border-gray-300 rounded-md p-2 m-3 mb-0"></input>
    <label htmlFor="constantValue" className="ml-3">CONSTANT VALUE</label>    
    <input id="from" onChange={handleChange2} placeholder="Numeric from" className="border border-gray-300 rounded-md p-2 m-3 mb-0"></input>
    <label htmlFor="from" className="ml-3" >FROM (NUMERIC VALUES ONLY)</label>
    <input id="to" onChange={handleChange3} placeholder="Numeric Upto" className="border border-gray-300 rounded-md p-2 m-3 mb-0"></input>
    <label htmlFor="to" className="ml-3" >UPTO (NUMERIC VALUES ONLY)</label>   
    <input type="number" id="steps" onChange={handleChange4} placeholder="Numeric Steps" className="border border-gray-300 rounded-md p-2 m-3 mb-0"/>
    <label htmlFor="steps" className="ml-3">STEPS (OPTIONAL)</label>

<div className=" flex flex-row mt-2">
<input type="checkbox" id="barCode" value="BarWala"
       defaultChecked={true}
       onClick={(e:any)=>{setbarClicked(e.target.checked)}}
       className="border border-gray-600 mx-2 px-2 " 
        />
<label htmlFor="barCode">Bar Code</label>
<input type="checkbox" id="QRCode" value="QRWala" 
onClick={(e:any)=>{setQRClicked(e.target.checked)}}
className="border border-gray-600 mx-2 px-2 "  />
<label htmlFor="QRCode">QR Code</label>
</div> 
 <button onClick={handleSubmit} className="mt-2 border border-gray-500 w-24 rounded-md self-center bg-green-800">Push</button>
    </div>
   
<CodeField stringArray={stringArray} barClicked={barClicked} QRClicked={QRClicked} /> 
    </>
}
export default Title;