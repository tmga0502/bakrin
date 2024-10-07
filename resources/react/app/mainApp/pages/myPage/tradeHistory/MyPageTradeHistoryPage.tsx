import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import MyPageHistory from "../../../features/myPage/myPage-tradeHistory";

const MyPageTradeHistoryPage = () => {
	return (
		<MainLayout>
			<MyPageHistory/>
		</MainLayout>
	);
};

export default MyPageTradeHistoryPage;
