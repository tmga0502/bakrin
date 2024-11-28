import { UserType } from '@/react/types/UserType';
import React from 'react';
import {ItemList, Pr, ShowPanel} from "@mainFeatures/user/components";

const UserShowContext:React.FC<{userData: UserType}> = ({userData}) => {
	return (
		<>
			<ShowPanel data={userData}/>
			<Pr data={userData}/>
			<ItemList itemData={userData.items}/>
		</>
	);
};

export default UserShowContext;
