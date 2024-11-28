import React from 'react';
import GridBox from "@mainLayouts/GridBox/GridBox";
import {UserPanelForList} from "@mainFeatures/user/components";
import {UserType} from "@/react/types/UserType";

type UserListType = {
	usersData   : UserType[],
	slice?      : number,
}

const UserList: React.FC<UserListType> = ({usersData, slice}) => {
	const List = slice === undefined ? usersData : usersData.slice(0, slice)
	return (
		<GridBox>
			{List.map((user) => (
				<UserPanelForList data={user} key={user.id}/>
			))}
		</GridBox>
	);
};

export default UserList;
