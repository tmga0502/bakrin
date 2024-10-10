import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	position: relative;
	width: 100%;
	border-radius: 4px;
	box-shadow: ${theme.shadow.sm};
	&::before{
		content: '';
		display: block;
		padding-top: 100%;
		border-radius: 8px;
	}
`

const ImageStyle = css`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-Fit: cover;
	border-radius: 4px;
`

export{
	Wrapper,
	ImageStyle,
}
