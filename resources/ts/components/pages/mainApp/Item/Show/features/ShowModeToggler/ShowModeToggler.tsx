import React from 'react';
import ButtonGroup from "@/ts/components/pages/mainApp/Item/Show/features/BttonGroup/ButtonGroup";
import ItemShowProducerPanel from "@/ts/components/model/item/ItemShowProducerPanel/ItemShowProducerPanel";
import RequestForm from "@/ts/components/pages/mainApp/Item/Show/features/RequestForm/RequestForm";
import {useItemShowMode} from "@/ts/components/pages/mainApp/Item/Show/hooks/ItemContext";
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
