import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	padding: 16px;
	border: 2px solid ${theme.color.gray};
	border-radius: 8px;
	background-color: ${theme.color.white};
	display: flex;
	align-items: center;
	gap: 24px;
	&:hover{
		opacity: 0.8;
	}
`

const ImageBox = css`
	width: 64px;
	height: 64px;
`

const ImageStyle = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;
`

const AddressStyle = css`
	font-size: 12px;
	margin-bottom: 8px;
`

export {
	Wrapper,
	ImageBox,
	ImageStyle,
	AddressStyle,
}
