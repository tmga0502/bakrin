import {useParams} from "react-router-dom";
import {useGetUser} from "@/react/api/query/UserQuery";
import React from "react";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {UserType} from "@/react/types/UserType";
import {Pr, ShowPanel, ItemList} from "@mainFeatures/user/components";

const UserShowPage = () => {
	const params = useParams()
	const { data: userData = {} as UserType } = useGetUser(params.userId)
	return (
	  <MainLayout>
		  <ShowPanel data={userData}/>
		  <Pr data={userData}/>
		  <ItemList itemData={userData.items}/>
	  </MainLayout>
	);
};

export default UserShowPage;
