import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const CardContainer = css`
	width: 100%;
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	color: ${theme.color.dark};
	background-color: ${theme.color.white};
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
	box-shadow: ${theme.shadow.sm};
	&:hover{
		cursor: pointer;
		opacity: 0.8;
	}
`

const CardText = css`
	margin: 0;
`

const CardIcon = css`
	font-size: 20px;
`

const WrapperStyle = css`
	padding: 16px;
	margin-bottom: 48px;
`

const TitleStyle = css`
	border-bottom: 2px solid ${theme.color.gray};
	padding-bottom: 8px;
	margin-bottom: 16px;
`

export {
	CardContainer,
	CardText,
	CardIcon,
	WrapperStyle,
	TitleStyle,
}
