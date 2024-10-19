import React from 'react';
import MainLayout from "@adminLayouts/MainLayout/MainLayout";
import HomeContents from "@/react/app/adminApp/features/home/contents/HomeContents";

const Home = () => {
	return (
		<MainLayout>
			<HomeContents/>
		</MainLayout>
	);
};

export default Home;
