import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {Link} from "react-router-dom";
import {LogoutButton, TopListPanel} from "@mainFeatures/myPage/components";

const MyPageTopPage = () => {
	return (
		<MainLayout>
			<PageTitle en={'MY PAGE'} jp={'マイページ'}/>
			<ContainerSm>
				<Link to={'/mypage/myfavorite'}>
					<TopListPanel title={'お気に入り'}/>
				</Link>
				<Link to={'/mypage'}>
					<TopListPanel title={'欲しいもの'}/>
				</Link>
				<Link to={'/mypage/tradeHistory'}>
					<TopListPanel title={'交換履歴'}/>
				</Link>
				<Link to={'/mypage/invoice'}>
					<TopListPanel title={'請求書'}/>
				</Link>
				<Link to={'/mypage/profile'}>
					<TopListPanel title={'基本情報'}/>
				</Link>
				<LogoutButton />
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageTopPage;
