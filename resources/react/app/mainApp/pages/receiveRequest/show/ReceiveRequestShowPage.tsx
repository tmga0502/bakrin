import React from "react";
import {useParams} from "react-router-dom";
import {useGetTrade} from "@/react/api/query/TradeQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {TradeType} from "@/react/types/TradeType";
import {ShowTitle, ShowButtonBoxStyle} from "@mainFeatures/trade/styles";
import {PermissionButton, RejectButton, TradeImageBox} from "@mainFeatures/trade/components";


const ReceiveApplicationShowPage = () => {
	const params = useParams()
	const {data: tradeRequestData = {} as TradeType} = useGetTrade(params.tradeUuid as string)

	return (
		<MainLayout>
			<PageTitle en={'RECEIVE REQUEST'} jp={'申請確認'}/>
			<p css={ShowTitle}>以下の交換申請が届いています</p>
			<TradeImageBox tradeRequestData={tradeRequestData}/>
			<div css={ShowButtonBoxStyle}>
				<PermissionButton/>
				<RejectButton/>
			</div>
		</MainLayout>
	);
};

export default ReceiveApplicationShowPage;
