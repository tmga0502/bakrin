import React, {useState} from 'react';
import {ShowPanelType} from "./ShowPanel.type";
import {AddressStyle, ButtonBox, ImageBox, ImageStyle, NameStyle, ProfileBox, Wrapper} from './ShowPanel.styles';
import {useDeregisterFavoriteProducer, useRegisterFavoriteProducer} from "@/react/api/query/FavoriteProducerQuery";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import FavoriteButton from "@mainElements/button/FavoriteButton/FavoriteButton";

const ShowPanel: React.FC<ShowPanelType> = ({data}) => {
	const userData = useRecoilValue(IsAuthProducerDataStates)
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
		<div css={Wrapper}>
			<div css={ProfileBox}>
				<div css={ImageBox}>
					<img src={data.imgPath} css={ImageStyle} alt="farmerImg"/>
				</div>
				<div>
					<p css={AddressStyle}>{`${data.address1}${data.address2}`}</p>
					<p css={NameStyle}>{data.organizationName}</p>
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
