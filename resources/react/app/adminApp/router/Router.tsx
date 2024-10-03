import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "@/react/app/mainApp/pages/login/Login";
import Home from "@/react/app/adminApp/pages/home/Home";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin/">
					{/*<Route index={true} element={  <HomePage /> } />*/}
					<Route index={true} element={  <Home /> } />

				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
