import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Box = css`
	width: 100%;
	height: 60px;
	background-color: ${theme.color.dark};
	padding: 8px;
	&:hover{
		opacity: 0.8
	}
`

const IconBox = css`
	color:${theme.color.white};
	text-align: center;
	height: 50%;
	line-height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const TextBox = css`
	color: ${theme.color.white};
	text-align: center;
	height: 50%;
	line-height: 30px;
`

export {
	Box,
	IconBox,
	TextBox,
}
