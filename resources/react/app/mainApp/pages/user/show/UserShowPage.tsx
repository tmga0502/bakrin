import {useParams} from "react-router-dom";
import {useGetUser} from "@/react/api/query/UserQuery";
import React from "react";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {UserType} from "@/react/types/UserType";
import UserShowContext from "@mainFeatures/user/context/UserShowContext";

const UserShowPage = () => {
	const params = useParams()
	const { data: userData = {} as UserType } = useGetUser(params.userId)

	return (
	  <MainLayout>
		  <UserShowContext userData={userData}/>
	  </MainLayout>
	);
};

export default UserShowPage;
