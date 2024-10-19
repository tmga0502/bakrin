import React from 'react';
import {UsersType} from "@adminFeatures/setting/types/type";
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import ContainerSm from "@adminLayouts/container/ContainerSm/ContainerSm";
import UserListCard from "@adminFeatures/setting/components/UserListCard/UserListCard";

const SettingListUserContents: React.FC<UsersType> = ({usersData}) => {
	console.log(usersData)
	return (
		<div>
			<MainTitle title={'ユーザー一覧'}/>
			<ContainerSm>
				{usersData.map(user => (
					<UserListCard userData={user} key={user.id}/>
				))}
			</ContainerSm>
		</div>
	);
};

export default SettingListUserContents;
