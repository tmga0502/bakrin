import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import MyPageProfile from "@/react/app/mainApp/features/myPage/myPage-profile";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";

const MyPageProfilePage = () => {
	const userData = useRecoilValue(IsAuthProducerDataStates);
	return (
		<MainLayout>
			{userData !== undefined ?(
				<MyPageProfile userData={userData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default MyPageProfilePage;
