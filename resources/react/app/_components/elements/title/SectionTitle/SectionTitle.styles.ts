import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: flex;
	justify-content: space-between;
	margin-bottom: 12px;
`

const TitleStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-weight: bold;
	&::before{
		content: '';
		width: 20px;
		border-top: 16px solid ${theme.color.mainGreen};
		margin-right: 8px;
	}
`

const MoreLinkStyle = css`
	display: flex;
	align-items: center;
	&::after{
		content: '>';
		margin-left: 8px;
	}
`

export {
	Wrapper,
	TitleStyle,
	MoreLinkStyle,
}
