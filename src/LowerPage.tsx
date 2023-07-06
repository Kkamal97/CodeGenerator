import React from "react";
import { Route, Routes } from "react-router-dom";
import QRGenerator from "./QRGenerator";
import BarGenerator from "./BarGenerator";
// ADDED BY (kk) [2023-06-05]:, 
function LowerPage ({arr1,constValue}){

    return <>
    <Routes>

<Route path="/BarCode" element={<BarGenerator  arr1={arr1} constValue={constValue}/>} />
<Route path="/QRGenerator" element={<QRGenerator arr1={arr1} constValue={constValue} />} />
    </Routes>
    </>
}
export default LowerPage;