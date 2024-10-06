import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	padding: 16px;
	border: 2px solid ${theme.color.gray};
	background-color: ${theme.color.white};
	${mq('md')}{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

const ProfileBox = css`
	display: flex;
	align-items: center;
	gap: 16px;
`

const ImageBox = css`
	width: 64px;
	height: 64px;
`

const ImageStyle = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;
`

const AddressStyle = css`
	font-size: 12px;
	margin-bottom: 8px;
`

const NameStyle = css`
	font-size: 16px;
`

const ButtonBox = css`
	text-align: center;
	margin-top: 16px;
	${mq('md')}{
		width: 66%;
		text-align: right;
		margin-top: 0;
	}
`

export {
	Wrapper,
	ProfileBox,
	ImageBox,
	ImageStyle,
	AddressStyle,
	NameStyle,
	ButtonBox,
}
