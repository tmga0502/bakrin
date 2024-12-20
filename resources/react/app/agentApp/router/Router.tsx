import React, {ReactElement} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "@/react/app/agentApp/pages/login/Login";
import {useRecoilValue} from "recoil";
import RegisterPage from "@/react/app/agentApp/pages/register/RegisterPage";
import Home from "@/react/app/agentApp/pages/home/HomePage";
import {IsAgentAuthStates} from "@/react/app/agentApp/states/AuthStates";
import RegisterCompletedPage from "@/react/app/agentApp/pages/register/completed/RegisterCompletedPage";
import SettingPage from "@/react/app/agentApp/pages/setting/SettingPage";

const Router = () => {

	const isAuth = useRecoilValue(IsAgentAuthStates);

	const GuardRoute = (props : {component: ReactElement}) => {
		if(!isAuth) return<Navigate to="/agent/login" />
		return <>{ props.component }</>
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/agent">
					<Route path="login" element={  <Login /> } />
					<Route path="register" element={  <RegisterPage /> } />
					<Route path="register_completed/:agentUuid" element={  <RegisterCompletedPage /> } />

					<Route index={true} element={  <GuardRoute component={ <Home />} /> } />

					<Route path={'my_page'} element={  <GuardRoute component={ <SettingPage />} /> } />

					{/* TOPページ */}
					{/*<Route path={'/'} element={  <GuardRoute component={<HomePage />} /> } />*/}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
