import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../Page/Principal/Principal";
import AdicionaCarro from "../Page/AdicionaCarro/AdicionaCarro";
import DetalheMotor from "../Page/DetalheMotor/DetalheMotor";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Principal />} />
                <Route path='addCarro' element={<AdicionaCarro />} />
                <Route path='detMotor' element={<DetalheMotor />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router