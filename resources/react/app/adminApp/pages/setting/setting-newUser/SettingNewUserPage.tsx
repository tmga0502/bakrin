import React, {ReactNode} from 'react';
import MainLayout from "@adminLayouts/MainLayout/MainLayout";
import {useRecoilValue} from "recoil";
import {IsAuthDataStates} from "@/react/app/adminApp/states/AuthStates";
import {AuthorisedError} from "@adminLayouts/error";
import SettingNewUserContents from "@adminFeatures/setting/contents/SettingNewUserContents";

const SettingNewUserPage = () => {
	const authUserData = useRecoilValue(IsAuthDataStates)

	let contents: ReactNode;
	if (authUserData.authority === 1){
		contents = <AuthorisedError/>
	}else{
		contents = <SettingNewUserContents/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default SettingNewUserPage;
