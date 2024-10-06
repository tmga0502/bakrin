import {css} from "@emotion/react";

const BudgeStyle = (color: string, textColor: string) => css`
	display: inline-block;
	width: 60px;
	height: 20px;
	padding: 0 2px;
	margin: 0 2px;
	line-height: 20px;
	font-size: 12px;
	background-color: ${color};
	color: ${textColor};
	border-radius: 4px;
	text-align: center;
`

export {
	BudgeStyle
}
