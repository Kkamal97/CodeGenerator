import { Route, Routes } from "react-router-dom";
import QRGenerator from "./QRGenerator";
import BarGenerator from "./BarGenerator";
import { FC } from "react";
// ADDED BY (kk) [2023-06-05]:, 
type LowerPageProps = {
    arr1:any,
    constValue:any
}
const  LowerPage:FC<LowerPageProps>=({arr1,constValue})=>{
    return <>
    <Routes>
<Route path="/BarCode" element={<BarGenerator  arr1={arr1} constValue={constValue}/>} />
<Route path="/QRGenerator" element={<QRGenerator arr1={arr1} constValue={constValue} />} />
    </Routes>
    </>
}
export default LowerPage;