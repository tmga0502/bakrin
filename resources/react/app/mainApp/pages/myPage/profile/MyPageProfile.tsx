import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/title";
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {Data, Password, PaymentMethod} from "@/react/app/mainApp/pages/myPage/profile/features";

const MyPageProfile = () => {
	return (
		<MainAppLayout>
			<PageTitle en={'profile'} jp={'プロフィール'}/>
			<div className="max-w-[500px] mx-auto">
				<Data />
				<Password/>
				<PaymentMethod/>
			</div>
		</MainAppLayout>
	);
};

export default MyPageProfile;