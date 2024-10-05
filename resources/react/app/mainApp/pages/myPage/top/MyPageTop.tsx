import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import {LinkButton, LogoutButton} from "@/react/app/mainApp/features/myPageTop/components";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";

const MyPageTop = () => {
	return (
		<MainLayout>
			<PageTitle en={'MY PAGE'} jp={'マイページ'}/>
			<ContainerSm>
				<LinkButton linkUrl={'/mypage/myfavorite'} name={'お気に入り'}/>
				<LinkButton linkUrl={'/'} name={'欲しいもの'}/>
				<LinkButton linkUrl={'/mypage/tradeHistory'} name={'交換履歴'}/>
				<LinkButton linkUrl={'/mypage/invoice'} name={'請求書'}/>
				<LinkButton linkUrl={'/mypage/profile'} name={'基本情報'}/>
				<LogoutButton />
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageTop;
