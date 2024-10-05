import {css} from "@emotion/react";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: none;
	${mq('md')}{
		display: block;
		width: 200px;
		background-color: ${theme.color.white};
		margin-top: -120px;
		z-index: 50;
	}
`

const LogoBox = css`
	display: flex;
	align-items: center;
	width: 100%;
	height: 120px;
	padding: 16px;
`

const LogoStyle = css`
	width: 100%;
`

const ButtonBox = css`
	display: flex;
	gap: 4px;
	margin-bottom: 8px;
`

const LinkBox = css`
	display: inline-block;
	width: 50%;
`

export {
	Wrapper,
	LogoBox,
	LogoStyle,
	ButtonBox,
	LinkBox,
}
