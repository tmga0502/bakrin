import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";
import Form from "@/react/app/mainApp/features/myItemNew/components/Form/Form";

const Index = () => {
	return (
		<div>
			<PageTitle en={'MY ITEM'} jp={'アイテム新規登録'}/>
			<ContainerSm>
				<Form/>
			</ContainerSm>
		</div>
);
};

export default Index;
