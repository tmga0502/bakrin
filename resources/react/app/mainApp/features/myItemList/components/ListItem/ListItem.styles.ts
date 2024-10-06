import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	background-color: ${theme.color.white};
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	box-shadow: ${theme.shadow.sm};
	padding: 16px;
	margin-bottom: 8px;
`

const ItemBox = css`
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
`

const TextBox = css`
	${mq('md')}{
		display: flex;
		align-items: center;
		gap: 8px;
	}
`

const ItemName = css`
	margin-top: 8px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	${mq('md')}{
		margin-top: 0;
	}
`


const LinkBox = css`
	display: block;
	white-space: nowrap;
	&:hover{
		opacity: 0.8;
	}
`


export {
	Wrapper,
	ItemBox,
	ImageBox,
	ImageStyle,
	TextBox,
	ItemName,
	LinkBox,
}
