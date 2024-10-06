import {css} from "@emotion/react";

const BudgeDefaultStyle = (color: string, textColor: string) => css`
	display: inline-block;
	position: absolute;
	top: 3%;
	left: 0;
	padding: 0 16px;
	height: 20px;
	line-height: 20px;
	font-size: 12px;
	background-color: ${color};
	color: ${textColor};
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12);
	z-index: 100;
	border-radius: 0 5px 5px 0;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -7px;
		border: 0;
		height: 24px;
		width: 7px;
		border-radius: 5px 0 0 5px;
		background-color: ${color};
	},
	&::after {
		content: '';
		position: absolute;
		bottom: -7px;
		left: -5px;
		border: 0;
		height: 20px;
		border-radius: 5px 0 0 5px;
		background-color: ${color};
	},
`

export {
	BudgeDefaultStyle,
}
