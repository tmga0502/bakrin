import React from 'react';
import MainCard from "@adminLayouts/Card/MainCard/MainCard";

const Users: React.FC = () => {
	return (
		<MainCard title={'登録ユーザー'}>
			<p>現在の登録者数：100人</p>
			<p>直近1ヶ月のログインユーザー：10人</p>
		</MainCard>
	);
};

export default Users;
