import React from "react";
import AdminRouter from "@/ts/router/routes/AdminRouter";
import MainRouter from "@/ts/router/routes/MainRouter";
import ScrollTop from "@/ts/functions/ScrollTop";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const Router = () => {
    return (
        <BrowserRouter>
            <ScrollTop/>
            <Routes>
                <Route path="/*" element={<MainRouter />} />
                <Route path="/admin/*" element={<AdminRouter />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router
