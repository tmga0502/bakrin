import React from 'react';
import {PageTitle} from "@/ts/components/ui/title";
import {MainAppLayout} from "@/ts/components/ui/layout";
import {Data, Password, PaymentMethod} from "@/ts/components/pages/mainApp/MyPage/Profile/features";

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
