import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: flex;
	width: 100%;
	height: 40px;
	border-radius: 8px;
	background-color: ${theme.color.lightYellow};
	padding: 8px 16px;
	margin-bottom: 24px;
`
const TextStyle = css`
	color: ${theme.color.dark};
	margin-right: 8px;
	line-height: 24px;
`

const HoverTextStyle = css`
	&:hover{
		opacity: .8;
	}
`

const ArrowStyle = css`
	color:  ${theme.color.dark};
	margin-right: 8px;
`

export {
	Wrapper,
	TextStyle,
	HoverTextStyle,
	ArrowStyle,
}
