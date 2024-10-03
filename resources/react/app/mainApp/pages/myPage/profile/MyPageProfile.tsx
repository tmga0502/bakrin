import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/title";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import {useAuth} from "@/react/app/mainApp/hooks/AuthContext";
import {Data, Password, PaymentMethod} from "@/react/app/mainApp/features/myPageInfo/components";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";

const MyPageProfile = () => {
	const {userData} = useAuth();
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
