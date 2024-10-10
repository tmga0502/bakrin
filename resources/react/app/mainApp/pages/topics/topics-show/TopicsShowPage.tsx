import React from 'react';
import MainLayout from "@mainLayouts//MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {ShowBox} from "@mainFeatures/topics/components";

const TopicsShowPage = () => {
	return (
		<MainLayout>
			<PageTitle en={'TOPICS'} jp={'〇〇についてのおしらせ'}/>
			<ShowBox/>
		</MainLayout>
	);
};

export default TopicsShowPage;
