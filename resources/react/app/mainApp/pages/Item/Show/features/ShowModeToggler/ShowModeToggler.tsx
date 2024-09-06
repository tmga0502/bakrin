import React from 'react';
import ButtonGroup from "@/react/app/mainApp/pages/Item/Show/features/BttonGroup/ButtonGroup";
import ItemShowProducerPanel from "@/react/app/mainApp/features/item/ItemShowProducerPanel/ItemShowProducerPanel";
import RequestForm from "@/react/app/mainApp/pages/Item/Show/features/RequestForm/RequestForm";
import {useItemShowMode} from "@/react/app/mainApp/pages/Item/Show/hooks/ItemContext";
import { ShowModeTogglerType } from './ShowModeToggler.type';

const ShowModeToggler: React.FC<ShowModeTogglerType> = ({data}) => {
	const {mode} = useItemShowMode()
	if(mode === 'view'){
		return (
			<>
				<ButtonGroup　data={data}/>
				<ItemShowProducerPanel data={data}/>
			</>
		)
	}

	return <RequestForm />
};

export default ShowModeToggler;
