import React from 'react';
import {ProducersType} from "./Producers.type";
import MainCard from "@adminLayouts/Card/MainCard/MainCard";

const Producers: React.FC<ProducersType> = ({}) => {
	return (
		<MainCard title={'登録ユーザー'}>
			<p>現在の登録者数：100人</p>
			<p>直近1ヶ月のログインユーザー：10人</p>
		</MainCard>
	);
};

export default Producers;
