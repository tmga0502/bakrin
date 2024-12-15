import React, {ReactElement} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "@/react/app/agentApp/pages/login/Login";
import {useRecoilValue} from "recoil";
import RegisterPage from "@/react/app/agentApp/pages/register/RegisterPage";
import Home from "@/react/app/agentApp/pages/home/HomePage";
import {IsAuthStates} from "@/react/app/agentApp/states/AuthStates";
import RegisterCompletedPage from "@/react/app/agentApp/pages/register/completed/RegisterCompletedPage";

const Router = () => {

	const isAuth = useRecoilValue(IsAuthStates);

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
					{/*新規登録ページ*/}
					{/*<Route path="/register/:referralCode" element={  <RegisterPage /> } />*/}
					{/*<Route path="/register_completed/" element={  <RegisterTemporaryCompletedPage /> } />*/}
					{/*<Route path="/register_completed/:userUuid" element={  <RegisterCompletedPage /> } />*/}

					{/* TOPページ */}
					{/*<Route path={'/'} element={  <GuardRoute component={<HomePage />} /> } />*/}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
