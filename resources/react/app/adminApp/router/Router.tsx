import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

const Router = () => {
	return (
		<BrowserRouter>
			<Route path="/admin">
				{/*<Route index={true} element={  <HomePage /> } />*/}
			</Route>
		</BrowserRouter>
	);
};

export default Router;
