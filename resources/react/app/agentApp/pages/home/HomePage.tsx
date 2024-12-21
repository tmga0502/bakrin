import React, {ReactNode} from 'react';
import MainLayout from "@/react/app/agentApp/components/layouts/MainLayout/MainLayout";
import HomeContext from "@/react/app/agentApp/features/home/context/HomeContext";
import {useGetReferralUsers} from "@/react/api/query/UserQuery";
import PageLoader from "@mainLayouts/Loader/PageLoader/PageLoader";
import ErrorPage from "@/react/app/mainApp/pages/error/Error";

const HomePage = () => {

	const {data: users, isLoading, isError, isSuccess} = useGetReferralUsers();

	let context: ReactNode
	if(isLoading) context = <PageLoader/>
	if (isError) context = <ErrorPage/>
	if (isSuccess) context = <HomeContext users={users}/>

	return (
		<MainLayout>
			{context}
		</MainLayout>
	);
};

export default HomePage;
