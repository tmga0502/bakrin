import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";
import {Data, Password, PaymentMethod} from "./components";
import {IndexType} from "@/react/app/mainApp/features/myPage/myPage-profile/types/type";

const Index: React.FC<IndexType> = ({userData}) => {
	return (
		<>
			<PageTitle en={'profile'} jp={'プロフィール'}/>
			<ContainerSm>
				<Data userData={userData}/>
				<Password/>
				<PaymentMethod userData={userData}/>
			</ContainerSm>
		</>
	);
};

export default Index;
