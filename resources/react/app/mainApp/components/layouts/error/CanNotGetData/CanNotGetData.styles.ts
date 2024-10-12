import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`

const MessageBox = css`
	margin: 0 auto;
`

const IconStyle = css`
	text-align: center;
	color: ${theme.color.danger};
	font-size: 48px;
	line-height: 48px;
`

const MessageStyle = css`
	color: ${theme.color.danger};
	font-size: 16px;
`

const BrStyle = css`
	${mq('sm')}{
		display: none;
	}
`

export {
	Wrapper,
	MessageBox,
	IconStyle,
	MessageStyle,
	BrStyle,
}
