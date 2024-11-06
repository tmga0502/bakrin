import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {getWidthProps} from "./functions/getWidthProps";
import {getSizeProps} from "./functions/getSizeProps";

const ButtonStyle = (props: any) => {
	const {status, size, width, align} = props
	const BgColor = status ? theme.color.pink : theme.color.white
	const Color = status ? theme.color.white : theme.color.pink
	const Width = getWidthProps(width)
	const Padding = getSizeProps(size)
	const MarginLeft = align === 'left' ? '' : 'auto'
	const MarginRight = align === 'right' ? '' : 'auto'

	return css`
		display: block;
		width: ${Width};
		background-color: ${BgColor};
		color: ${Color};
		border: 2px solid ${theme.color.pink};
		padding: ${Padding};
		border-radius: 4px;
		margin-right: ${MarginRight};
		margin-left: ${MarginLeft};
		&:hover{
			opacity: .8;
		}
	`
}

const TextStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Title = css`
	margin-right: 8px;
`

export {
	ButtonStyle,
	TextStyle,
	Title,
}
