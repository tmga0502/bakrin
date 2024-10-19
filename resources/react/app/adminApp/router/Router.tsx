import React, {ReactElement} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "@/react/app/adminApp/pages/login/LoginPage";
import Home from "@/react/app/adminApp/pages/home/Home";
import {useRecoilValue} from "recoil";
import {IsAuthStates} from "@/react/app/adminApp/states/AuthStates";
import NoticeListPage from "@/react/app/adminApp/pages/Notice/list/NoticeListPage";
import NoticeCreatePage from "@/react/app/adminApp/pages/Notice/create/NoticeCreatePage";
import NoticeShowPage from "@/react/app/adminApp/pages/Notice/show/NoticeShowPage";
import SettingTopPage from "@/react/app/adminApp/pages/setting/setting-top/SettingTopPage";
import SettingNewUserPage from "@/react/app/adminApp/pages/setting/setting-newUser/SettingNewUserPage";
import SettingListUserPage from "@/react/app/adminApp/pages/setting/setting-listUser/SettingListUserPage";
import SettingUserShowPage from "@/react/app/adminApp/pages/setting/setting-userShow/SettingUserShowPage";

const Router = () => {

	const isAuth = useRecoilValue(IsAuthStates);

	const GuardRoute = (props : {component: ReactElement}) => {
		if(!isAuth) return<Navigate to="/admin/login" />
		return <>{ props.component }</>
	}


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin">
					<Route path="login" element={  <Login /> } />

					<Route index={true} element={  <GuardRoute component={ <Home />} /> } />
					<Route path={'notice'} element={  <GuardRoute component={ <NoticeListPage />} /> } />
					<Route path={'notice/new'} element={  <GuardRoute component={ <NoticeCreatePage />} /> } />
					<Route path={'notice/show/:uuid'} element={  <GuardRoute component={ <NoticeShowPage />} /> } />

					<Route path={'setting'} element={  <GuardRoute component={ <SettingTopPage />} /> } />
					<Route path={'setting/newUser'} element={  <GuardRoute component={ <SettingNewUserPage />} /> } />
					<Route path={'setting/userList'} element={  <GuardRoute component={ <SettingListUserPage />} /> } />
					<Route path={'setting/user/:id'} element={  <GuardRoute component={ <SettingUserShowPage />} /> } />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
