import React from 'react';
import {UserListType} from "./UserList.type";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {UserPanelForList} from "@mainFeatures/user/components";

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
