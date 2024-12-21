import React from 'react';
import MainLayout from "@adminLayouts/MainLayout/MainLayout";
import MyPageContext from "@/react/app/agentApp/features/setting/context/MyPageContext";

const SettingPage = () => {
	return (
		<MainLayout>
			<MyPageContext/>
		</MainLayout>
	);
};

export default SettingPage;
