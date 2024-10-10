import React, {useState} from 'react';
import {useDeregisterFavoriteItem, useRegisterFavoriteItem} from "@/react/api/query/FavoriteItemQuery";
import FavoriteButton from "@mainElements/button/FavoriteButton/FavoriteButton";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import {ItemDataType} from "@mainFeatures/item/types";


const ItemFavoriteButton: React.FC<ItemDataType> = ({itemData}) => {
	const userData = useRecoilValue(IsAuthProducerDataStates);
	const [favoriteStatus, setFavoriteStatus] = useState(
		itemData.favorite_items.some((item:any) => item.myUuid === userData.uuid)
	)
	const favoriteRegister = useRegisterFavoriteItem();
	const favoriteDeregister = useDeregisterFavoriteItem();

	const handleFavorite = () => {
		if (favoriteStatus){
			favoriteDeregister.mutate({itemUuid:itemData.uuid})//解除処理
		}else{
			favoriteRegister.mutate({itemUuid:itemData.uuid})//登録処理
		}
		setFavoriteStatus(!favoriteStatus)
	}


	return (
		<>
			{favoriteStatus ? (
				<FavoriteButton value={'登録解除'} status={true} type={'button'} width={'half'} onClick={handleFavorite}/>
			) : (
				<FavoriteButton value={'登録する'} status={false} type={'button'} width={'half'} onClick={handleFavorite}/>
			)}
		</>
	);
};

export default ItemFavoriteButton;
