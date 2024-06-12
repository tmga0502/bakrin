import React from 'react';
import {LuArrowRightLeft} from "react-icons/lu";
import ImageBox from "@/ts/components/model/item/TradeImageBox/ImageBox";

const TradeImageBox = () => {
	return (
		<div className="flex gap-6 justify-between items-center mb-16">
			<ImageBox imgSrc={'https://placehold.jp/400x230.png'} name={'鮭'} planName={'お手軽プラン'}
					 shippingTime={'7月上旬'} user={true}/>
			<LuArrowRightLeft className="text-5xl"/>
			<ImageBox imgSrc={'https://placehold.jp/400x230.png'} name={'トマト'} planName={'お手軽プラン'}
					 shippingTime={'即時'} user={false}/>
		</div>
	);
};

export default TradeImageBox;
