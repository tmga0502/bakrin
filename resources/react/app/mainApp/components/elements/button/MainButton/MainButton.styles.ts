import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {ButtonPropsType} from "@/react/app/mainApp/components/elements/button/MainButton/MainButton.type";
import {getWidthProps} from "@/react/app/mainApp/components/elements/button/MainButton/functions/getWidthProps";
import {getSizeProps} from "@/react/app/mainApp/components/elements/button/MainButton/functions/getSizeProps";
import {getFontSizeProps} from "@/react/app/mainApp/components/elements/button/MainButton/functions/getFontSizeProps";

const ButtonStyle = (props: ButtonPropsType) => {
	const {color, size , width, align, disabled} = props
	const Width = getWidthProps(width)
	const BgColor = disabled ? theme.color.gray : theme.color[color]
	const Padding = getSizeProps(size)
	const FontSize = getFontSizeProps(size)
	const Opacity = disabled ? 0.8 : 1;
	const Cursor = disabled ? 'not-allowed' : 'pointer'
	const MarginLeft = align === 'left' ? '' : 'auto'
	const MarginRight = align === 'right' ? '' : 'auto'

	return css`
		display: block;
		width: ${Width};
		font-size: ${FontSize};
		border-radius: 4px;
		background-color: ${BgColor};
		color: ${theme.color.white};
		box-shadow: ${theme.shadow.sm};
		padding: ${Padding};
		margin-left: ${MarginLeft};
		margin-right: ${MarginRight};
		white-space: nowrap;
		opacity: ${Opacity};
		&:hover{
			cursor: ${Cursor};
			opacity: 0.8;
		}
	`
}

export {ButtonStyle}
