import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	position: relative;
	height: 100%;
`

const MessageBox = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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
