import React, {useState} from 'react';
import {useAuth} from "@/ts/hooks/AuthContext";
import {useDeregisterFavoriteProducer, useRegisterFavoriteProducer} from "@/ts/_api/query/FavoriteProducerQuery";
import { ProducerShowPanelType } from './_type';
import {ItemFavoriteButton} from "@/ts/components/ui/button";

const ProducerShowPanel: React.FC<ProducerShowPanelType> = ({data}) => {
	const { userData } = useAuth()
	const [favoriteStatus, setFavoriteStatus] = useState(
		data.favorite_producers.some((producer:any) => producer.myUuid === userData.uuid)
	)
	const favoriteRegister = useRegisterFavoriteProducer();
	const favoriteDeregister = useDeregisterFavoriteProducer();

	const handleFavorite = () => {
		if (favoriteStatus){
			favoriteDeregister.mutate({producerUuid:data.uuid})//解除処理
		}else{
			favoriteRegister.mutate({producerUuid:data.uuid})//登録処理
		}
		setFavoriteStatus(!favoriteStatus)
	}

	return (
		<div className="p-4 border-2 bg-white md:flex items-center justify-between">
			<div className="flex items-center gap-4">
				<div className="w-[64px] h-[64px]">
					<img src={data.imgPath} className="w-full h-full object-cover rounded-full"
						 alt="farmerImg"/>
				</div>
				<div className="">
					<p className="tex-sm mb-2">{`${data.address1}${data.address2}`}</p>
					<p className="text-lg">{data.organizationName}</p>
				</div>
			</div>
			<div className="text-center mt-4 md:w-2/3 md:text-right md:mt-0">
				{favoriteStatus ? (
					<ItemFavoriteButton value={'登録解除'} status={true} type={'button'} onClick={handleFavorite}/>
				) : (
					<ItemFavoriteButton value={'登録する'} status={false} type={'button'} onClick={handleFavorite}/>
				)}
			</div>
		</div>
	)
};

export default ProducerShowPanel;
