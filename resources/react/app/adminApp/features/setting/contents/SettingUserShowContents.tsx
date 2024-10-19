import React from 'react';
import {UserType} from "@adminFeatures/setting/types/type";
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import UserData from "@adminFeatures/setting/components/UserData/UserData";
import ContainerSm from "@adminLayouts/container/ContainerSm/ContainerSm";

const SettingUserShowContents: React.FC<UserType> = ({userData}) => {
	return (
		<div>
			<MainTitle title={'ユーザー詳細'}/>
			<ContainerSm>
				<UserData userData={userData}/>
			</ContainerSm>
		</div>
	);
};

export default SettingUserShowContents;
