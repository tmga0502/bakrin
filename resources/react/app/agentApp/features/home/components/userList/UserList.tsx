import React from 'react';
import MainCard from "@/react/app/agentApp/components/layouts/Card/MainCard/MainCard";
import {UserType} from "@/react/types/UserType";

const UserList: React.FC<{users: UserType[]}> = ({users}) => {
	return (
		<MainCard title={'紹介者一覧'}>
			<ul>
				{users.map((user) => (
					<li className={'mb-2'} key={user.id}>{user.organization_name}</li>
				))}
			</ul>
		</MainCard>
	);
};

export default UserList;
