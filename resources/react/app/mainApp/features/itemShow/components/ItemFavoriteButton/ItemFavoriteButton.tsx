import React, {useState} from 'react';
import {ItemFavoriteButtonType} from "./ItemFavoriteButton.type";
import {useAuth} from "@/react/app/mainApp/hooks/AuthContext";
import {useDeregisterFavoriteItem, useRegisterFavoriteItem} from "@/react/api/query/FavoriteItemQuery";
import FavoriteButton from "@/react/app/mainApp/components/elements/button/FavoriteButton/FavoriteButton";


const ItemFavoriteButton: React.FC<ItemFavoriteButtonType> = ({data}) => {
	const {userData} = useAuth();
	const [favoriteStatus, setFavoriteStatus] = useState(
		data.favorite_items.some((item:any) => item.myUuid === userData.uuid)
	)
	const favoriteRegister = useRegisterFavoriteItem();
	const favoriteDeregister = useDeregisterFavoriteItem();

	const handleFavorite = () => {
		if (favoriteStatus){
			favoriteDeregister.mutate({itemUuid:data.uuid})//解除処理
		}else{
			favoriteRegister.mutate({itemUuid:data.uuid})//登録処理
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
