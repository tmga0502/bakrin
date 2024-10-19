import React from 'react';
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import ContainerSm from "@adminLayouts/container/ContainerSm/ContainerSm";
import NewUserForm from "@adminFeatures/setting/components/NewUserForm/NewUserForm";

const SettingNewUserContents = () => {

	return (
		<div>
			<MainTitle title={'ユーザー新規登録'}/>
			<ContainerSm>
				<NewUserForm/>
			</ContainerSm>
		</div>
	);
};

export default SettingNewUserContents;
