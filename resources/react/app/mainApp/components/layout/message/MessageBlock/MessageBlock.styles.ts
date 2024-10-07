import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = (layout: 'sender' | 'receiver') => {

	const MarginLeft = layout === 'sender' ? 'auto' : '';
	const MarginRight = layout === 'receiver' ? 'auto' : '';
	const BackGroundColor = layout === 'sender' ? theme.color.darkGreen : theme.color.gray;

	return css`
		max-width: 75%;
		padding: 16px;
		box-shadow: ${theme.shadow.sm};
		border-radius: 8px;
		margin-bottom: 32px;
		margin-left: ${MarginLeft};
		margin-right: ${MarginRight};
		background-color: ${BackGroundColor};
	`
}

const UserInfoBox = css`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-bottom: 8px;
`

const ImageWrapper = css`
	width: 40px;
	height: 40px;
	background-color: ${theme.color.white};
	border-radius: 100%;
`

const ImageStyle = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;
`

const NameStyle = css`
	 width: calc(100% - 40px);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const MessageBox = css`
	line-height: 32px;
`

export {
	Wrapper,
	UserInfoBox,
	ImageWrapper,
	ImageStyle,
	NameStyle,
	MessageBox,
}
