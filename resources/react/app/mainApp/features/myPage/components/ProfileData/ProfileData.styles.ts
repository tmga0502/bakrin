import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	margin-bottom: 48px;
`

const TextStyle = css`
	margin: 8px 0 24px 0;
	font-size: 12px;
`

const DataBox = css`
	margin-bottom: 16px;
`

const ImageBox = css`
	width: 120px;
	height: 120px;
	margin: 0 auto 8px auto;
`

const ImageStyle = css`
	width: 100%;
	height: 100%;
	border-radius: 100%;
	object-fit: cover;
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

const Flex =css`
	display: flex;
	justify-content: space-between;
`

export {
	Wrapper,
	TextStyle,
	DataBox,
	ImageBox,
	ImageStyle,
	DataTitle,
	DataBody,
	Flex,
}
