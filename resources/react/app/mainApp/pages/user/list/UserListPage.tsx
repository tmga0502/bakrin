import {useGetPopularUsers} from "@/react/api/query/UserQuery";
import React, {ReactNode} from "react";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import ErrorPage from "@/react/app/mainApp/pages/error/Error";
import UserListContext from "@mainFeatures/user/context/UserListContext";

const UserListPage = () => {
	const { data: usersData, isLoading, isError, isSuccess } = useGetPopularUsers()

	let context: ReactNode;
	if (isLoading){
		context = <ContentsLoader/>
	}if (isError){
		context = <ErrorPage/>
	}
	if (isSuccess){
		context = <UserListContext usersData={usersData}/>
	}

	return (
		<MainLayout>
			{context}
		</MainLayout>
	);
};

export default UserListPage;
