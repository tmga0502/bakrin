import {useGetPopularUsers} from "@/react/api/query/UserQuery";
import React from "react";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {UserList} from "@mainFeatures/user/components";

const UserListPage = () => {
	const { data: usersData = [] } = useGetPopularUsers()
	return (
		<MainLayout>
			<PageTitle en={'producers'} jp={'生産者一覧'}/>
			<UserList usersData={usersData}/>
		</MainLayout>
	);
};

export default UserListPage;
