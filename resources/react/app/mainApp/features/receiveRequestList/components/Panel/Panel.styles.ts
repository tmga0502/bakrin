import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const LinkBox = css`
	display: flex;
	align-items: center;
	gap: 16px;
	max-width: 500px;
	min-width: 350px;
	margin: 0 auto 16px auto;
	padding: 16px;
	border: 1px solid ${ theme.color.gray };
	border-radius: 8px;
	background-color: ${theme.color.white};
	box-shadow: ${theme.shadow.sm};
`

const ImageBox = css`
	width: 120px;
	height: 120px;
`

const ImageStyle = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const DescriptionBox = css`
	width: calc(100% - 120px - 1rem);
`

const ItemName = css`
	margin-bottom: 8px;
`

const ProducerName = css`
	text-align: right;
	margin-bottom: 16px;
`

const RequestDate = css`
	text-align: right;
	font-size: 12px;
`


export {
	LinkBox,
	ImageBox,
	ImageStyle,
	DescriptionBox,
	ItemName,
	ProducerName,
	RequestDate
}
