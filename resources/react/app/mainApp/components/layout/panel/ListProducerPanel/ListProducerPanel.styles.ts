import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	border: 1px solid ${theme.color.gray};
	border-radius: 8px;
	box-shadow: ${theme.shadow.sm};
`

const ImageBox = css`
	position: relative;
	width: 100%;
	&::before{
		content: '';
		display: block;
		padding-top: 100%;
	}
`

const ImageStyle = css`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
	border-radius: 8px 8px 0 0;
`

const InfoBox = css`
	padding: 8px;
`

const AddressBox = css`
	line-height: 32px;
	font-size: 12px;
`

export {
	Wrapper,
	ImageBox,
	ImageStyle,
	InfoBox,
	AddressBox,
}
