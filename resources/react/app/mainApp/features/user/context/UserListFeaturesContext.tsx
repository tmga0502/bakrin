import React from 'react';
import {PageTitle} from "@mainElements/title";
import {UserList} from "@mainFeatures/user/components";
import {UserType} from "@/react/types/UserType";

const UserListContext:React.FC<{usersData: UserType[]}> = ({usersData}) => {
	console.log(usersData)
	return (
		<>
			<PageTitle en={'producers'} jp={'注目の生産者'}/>
			<UserList usersData={usersData}/>
		</>
	);
};

export default UserListContext;
