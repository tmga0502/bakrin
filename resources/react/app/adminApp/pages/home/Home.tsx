import React from 'react';
import MainLayout from "@adminLayouts/MainLayout/MainLayout";
import HomeContext from "@adminFeatures/home/context/HomeContext";

const Home = () => {
	return (
		<MainLayout>
			<HomeContext/>
		</MainLayout>
	);
};

export default Home;
