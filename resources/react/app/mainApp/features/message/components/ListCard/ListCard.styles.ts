import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const CardStyle = css`
	display: block;
	background-color: ${theme.color.white};
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	margin-bottom: 16px;
	box-shadow: ${theme.shadow.sm};
	padding: 12px
`

const ContentsBox = css`
	display: flex;
	align-items: center;
	gap: 24px;
`

const ImageBox = css`
	width: 60px;
	height: 60px;
`

const ImageStyle = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;
`

const TextBox = css`
	width: calc(100% - 60px - 24px);
`

const ProducerName = css`
	margin-bottom: 8px
`

const Message = css`
	font-size: 12px;
	color: ${theme.color.dark};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

export {
	CardStyle,
	ContentsBox,
	ImageBox,
	ImageStyle,
	TextBox,
	ProducerName,
	Message,
}
