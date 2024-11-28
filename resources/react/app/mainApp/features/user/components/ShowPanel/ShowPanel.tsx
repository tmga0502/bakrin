import React, {useState} from 'react';
import {useDeregisterFavoriteUser, useRegisterFavoriteUser} from "@/react/api/query/FavoriteUserQuery";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import FavoriteButton from "@mainElements/button/FavoriteButton/FavoriteButton";
import {UserType} from "@/react/types/UserType";

const ShowPanel: React.FC<{data: UserType}> = ({data}) => {
	const userData = useRecoilValue(IsAuthUserDataStates)
	const [favoriteStatus, setFavoriteStatus] = useState(
		data.favorite_users.some((user:any) => user.favorite_by_user_id === userData.id)
	)
	const favoriteRegister = useRegisterFavoriteUser();
	const favoriteDeregister = useDeregisterFavoriteUser();

	const handleFavorite = () => {
		if (favoriteStatus){
			favoriteDeregister.mutate({userUuid:data.uuid})//解除処理
		}else{
			favoriteRegister.mutate({userUuid:data.uuid})//登録処理
		}
		setFavoriteStatus(!favoriteStatus)
	}

	return (
		<div className={'p-4 border-2 border-bakGray md:flex md:items-center md:justify-between'}>
			<div className={'flex items-center gap-4'}>
				<div className={'w-16 h-16'}>
					<img src={data.thumbnail_path} className={'w-full h-full object-cover rounded-full'} alt="farmerImg"/>
				</div>
				<div>
					<p className={'tex-xs mb-2'}>{`${data.address1}${data.address2}`}</p>
					<p className={'text-md'}>{data.organization_name}</p>
				</div>
			</div>
			<div className={'text-center mt-4 md:w-[66%] md:text-right md:mt-0'}>
				{favoriteStatus ? (
					<FavoriteButton value={'登録解除'} status={true} type={'button'} onClick={handleFavorite}/>
				) : (
					<FavoriteButton value={'登録する'} status={false} type={'button'} onClick={handleFavorite}/>
				)}
			</div>
		</div>
	)
};

export default ShowPanel;
