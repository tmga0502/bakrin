import React from 'react';
import MainLayout from "@/react/app/agentApp/components/layouts/MainLayout/MainLayout";
import HomeContext from "@/react/app/agentApp/features/home/context/HomeContext";

const HomePage = () => {
	return (
		<MainLayout>
			<HomeContext/>
		</MainLayout>
	);
};

export default HomePage;
