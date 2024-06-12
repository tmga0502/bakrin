import React from 'react';
import {PageTitle} from "@/ts/components/ui/title/Title";
import {MainAppLayout} from "@/ts/components/ui/layout";
import Data from "@/ts/components/pages/mainApp/MyPage/Profile/features/Data";
import Password from "@/ts/components/pages/mainApp/MyPage/Profile/features/Password";
import PaymentMethod from "@/ts/components/pages/mainApp/MyPage/Profile/features/PaymentMethod";

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
