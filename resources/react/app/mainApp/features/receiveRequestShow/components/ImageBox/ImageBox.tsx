import React from 'react';
import {ImageBoxType} from "./ImageBox.type";
import {DescriptionStyle, ImageBoxStyle, ImageStyle, PlanNameStyle, TextWrapper, UserName, Wrapper} from './ImageBox.styles';

const ImageBox: React.FC<ImageBoxType> = (props) => {
	const {user, imgSrc, name, planName, shippingTime} = props
	const userName = user ? '相手のアイテム' : '自分のアイテム'
	return (
		<div css={Wrapper}>
			<p css={UserName}>{userName}</p>
			<div css={ImageBoxStyle}>
				<img css={ImageStyle} src={imgSrc} alt={name}/>
			</div>
			<div css={TextWrapper}>
				<p css={PlanNameStyle}>【{planName}】</p>
				<p css={DescriptionStyle}>{name}</p>
				<p css={DescriptionStyle}>発送時期：{shippingTime}</p>
			</div>
		</div>
	);
};

export default ImageBox;
