import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const AccordionBox = css`
	width: 100%;
	color: ${theme.color.dark};
	border: 1px solid ${theme.color.gray};
	background-color: ${theme.color.white};
	border-radius: 4px;
	box-shadow: ${theme.shadow.sm};
	padding: 16px;
	margin-bottom: 8px;
	&:hover{
		cursor: pointer;
	}
`

const Title = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Body = css`
	display: flex;
	align-items: center;
	margin-top: 16px;
	padding-bottom: 8px;
	border-bottom: 2px solid ${theme.color.gray};
`

const ImageBox = css`
	width: 40px;
	height: 40px;
`

const ImageStyle = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const ItemNameStyle = css`
	margin: 0 0 0 8px;
`

const ProducerNameStyle = css`
	margin: 0 0 0 auto;
`

const ArrowStyle = css`
	font-size: 20px;
`

export {
	AccordionBox,
	Title,
	Body,
	ImageBox,
	ImageStyle,
	ItemNameStyle,
	ProducerNameStyle,
	ArrowStyle,
}
