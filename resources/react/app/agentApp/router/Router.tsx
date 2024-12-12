import React, {ReactElement} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "@/react/app/agentApp/pages/login/Login";
import {useRecoilValue} from "recoil";
import {IsAuthUserStates} from "@/react/app/mainApp/states/AuthStates";
import HomePage from "@/react/app/mainApp/pages/home/HomePage";
import RegisterPage from "@/react/app/mainApp/pages/register/main/RegisterPage";
import RegisterTemporaryCompletedPage from "@/react/app/mainApp/pages/register/temporaryCompleted/RegisterTemporaryCompletedPage";
import RegisterCompletedPage from "@/react/app/mainApp/pages/register/completed/RegisterCompletedPage";

const Router = () => {

	// const isAuth = useRecoilValue(IsAuthUserStates);
	//
	// const GuardRoute = (props : {component: ReactElement}) => {
	// 	if(!isAuth) return<Navigate to="/login" />
	// 	return <>{ props.component }</>
	// }

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/agent">
					<Route path="login" element={  <Login /> } />

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
