import React, {ReactNode} from 'react';
import {useGetPopularUsers} from "@/react/api/query/UserQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import ErrorPage from "@/react/app/mainApp/pages/error/Error";
import UserListFeaturesContext from "@mainFeatures/user/context/UserListFeaturesContext";

const UserListFeaturedPage = () => {
	const { data: usersData, isLoading, isError, isSuccess } = useGetPopularUsers()

	let context: ReactNode;
	if (isLoading){
		context = <ContentsLoader/>
	}if (isError){
		context = <ErrorPage/>
	}
	if (isSuccess){
		context = <UserListFeaturesContext usersData={usersData}/>
	}

	return (
		<MainLayout>
			{context}
		</MainLayout>
	);
};

export default UserListFeaturedPage;
