import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const DataBox = css`
	margin-bottom: 16px;
`

const DataTitle = css`
	display: flex;
	align-items: center;
	font-size: 12px;
	font-weight: bold;
	margin-bottom: 8px;
	&:before{
		content: '';
		width: 8px;
		border-top: 14px solid ${theme.color.mainGreen};
		margin-right: 8px;
	}
`

const DataBody = css`
	padding: 0 0 4px 16px;
`

export {
	DataBox,
	DataTitle,
	DataBody,
}
