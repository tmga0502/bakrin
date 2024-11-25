import React, {useState} from 'react';
import {ShowPanelType} from "./ShowPanel.type";
import {AddressStyle, ButtonBox, ImageBox, ImageStyle, NameStyle, ProfileBox, Wrapper} from './ShowPanel.styles';
import {useDeregisterFavoriteUser, useRegisterFavoriteUser} from "@/react/api/query/FavoriteUserQuery";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import FavoriteButton from "@mainElements/button/FavoriteButton/FavoriteButton";

const ShowPanel: React.FC<ShowPanelType> = ({data}) => {
	const userData = useRecoilValue(IsAuthUserDataStates)
	const [favoriteStatus, setFavoriteStatus] = useState(
		data.favorite_users.some((user:any) => user.favorite_by_user_id === userData.id)
	)
	const favoriteRegister = useRegisterFavoriteUser();
	const favoriteDeregister = useDeregisterFavoriteUser();

	console.log(data)

	const handleFavorite = () => {
		if (favoriteStatus){
			favoriteDeregister.mutate({userUuid:data.uuid})//解除処理
		}else{
			favoriteRegister.mutate({userUuid:data.uuid})//登録処理
		}
		setFavoriteStatus(!favoriteStatus)
	}

	return (
		<div css={Wrapper}>
			<div css={ProfileBox}>
				<div css={ImageBox}>
					<img src={data.thumbnail_path} css={ImageStyle} alt="farmerImg"/>
				</div>
				<div>
					<p css={AddressStyle}>{`${data.address1}${data.address2}`}</p>
					<p css={NameStyle}>{data.organization_name}</p>
				</div>
			</div>
			<div css={ButtonBox}>
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
