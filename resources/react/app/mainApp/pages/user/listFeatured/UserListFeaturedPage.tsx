import React from 'react';
import {useGetPopularUsers} from "@/react/api/query/UserQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {UserList} from "@mainFeatures/user/components";

const UserListFeaturedPage = () => {
	const { data: producersData = [] } = useGetPopularUsers();
	return (
		<MainLayout>
			<PageTitle en={'producers'} jp={'注目の生産者一覧'}/>
			<UserList producerList={producersData}/>
		</MainLayout>
	);
};

export default UserListFeaturedPage;
