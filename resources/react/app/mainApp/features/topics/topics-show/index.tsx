import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import ShowBox from "@/react/app/mainApp/features/topics/topics-show/components/ShowBox/ShowBox";

const Index = () => {
	return (
		<>
			<PageTitle en={'TOPICS'} jp={'〇〇についてのおしらせ'}/>
			<ShowBox/>
		</>
	);
};

export default Index;
