import { useGetAdminUser } from '@/react/api/query/AdminUserQuery';
import React, {ReactNode} from 'react';
import {useParams} from "react-router-dom";
import PageLoader from "@adminLayouts/Loader/PageLoader/PageLoader";
import {AuthorisedError, CanNotGetData} from "@adminLayouts/error";
import SettingUserShowContents from "@adminFeatures/setting/contents/SettingUserShowContents";
import MainLayout from "@adminLayouts/MainLayout/MainLayout";
import {useRecoilValue} from "recoil";
import {IsAuthDataStates} from "@/react/app/adminApp/states/AuthStates";

const SettingUserShowPage = () => {
	const authUserData = useRecoilValue(IsAuthDataStates)
	const params = useParams();
	const {data, isLoading} = useGetAdminUser(Number(params.id));

	console.log(data)
	let contents: ReactNode;
	if(isLoading){
		contents = <PageLoader/>
	}else if (!data){
		contents = <CanNotGetData/>
	}else if (authUserData.authority === 1){
		contents = <AuthorisedError/>
	}else{
		contents = <SettingUserShowContents userData={ data}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default SettingUserShowPage;
