import React, { ReactNode } from 'react';
import MainLayout from "@adminLayouts/MainLayout/MainLayout";
import {useRecoilValue} from "recoil";
import {IsAuthDataStates} from "@/react/app/adminApp/states/AuthStates";
import {AuthorisedError} from "@mainLayouts/error";
import SettingListUserContents from "@adminFeatures/setting/contents/SettingListUserContents";
import {useGetAllAdminUser} from "@/react/api/query/AdminUserQuery";
import PageLoader from "@adminLayouts/Loader/PageLoader/PageLoader";
import {CanNotGetData} from "@adminLayouts/error";

const SettingListUserPage = () => {
	const authUserData = useRecoilValue(IsAuthDataStates)
	const {data, isLoading} = useGetAllAdminUser()

	let contents: ReactNode;
	if(isLoading){
		contents = <PageLoader/>
	}else if (!data){
		contents = <CanNotGetData/>
	}else if (authUserData.role === 1){
		contents = <AuthorisedError/>
	}else{
		contents = <SettingListUserContents usersData={data}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default SettingListUserPage;
