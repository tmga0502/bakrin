import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";
import {LinkButton, LogoutButton} from "@/react/app/mainApp/features/myPage/myPage-top/components";

const Index = () => {
	return (
		<>
			<PageTitle en={'MY PAGE'} jp={'マイページ'}/>
			<ContainerSm>
				<LinkButton linkUrl={'/mypage/myfavorite'} name={'お気に入り'}/>
				<LinkButton linkUrl={'/'} name={'欲しいもの'}/>
				<LinkButton linkUrl={'/mypage/tradeHistory'} name={'交換履歴'}/>
				<LinkButton linkUrl={'/mypage/invoice'} name={'請求書'}/>
				<LinkButton linkUrl={'/mypage/profile'} name={'基本情報'}/>
				<LogoutButton />
			</ContainerSm>
		</>
	);
};

export default Index;
