import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import {Data, Password, PaymentMethod} from "@/react/app/mainApp/features/myPageInfo/components";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";

const MyPageProfile = () => {
	const userData = useRecoilValue(IsAuthProducerDataStates);
	return (
		<MainLayout>
			<PageTitle en={'profile'} jp={'プロフィール'}/>
			<ContainerSm>
				<Data userData={userData}/>
				<Password/>
				<PaymentMethod userData={userData}/>
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageProfile;
