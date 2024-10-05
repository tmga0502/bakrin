import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: flex;
	align-items: center;
	column-gap: 4px;
	width: fit-content;
	line-height: 1;
	cursor: pointer;
`

const RadioStyle = css`
	appearance: none;
	position: relative;
	width: 20px;
	height: 20px;
	border: 1px solid ${theme.color.mainGreen};
	border-radius: 9999px;
	background-color: ${theme.color.gray};
	cursor: pointer;
	&:checked::after{
		content: '';
		position: absolute;
		inset: 0;
		width: 12px;
		height: 12px;
		margin: auto;
		border-radius: 9999px;
		background-color: ${theme.color.mainGreen};
	}
`

export {
	Wrapper,
	RadioStyle,
}
