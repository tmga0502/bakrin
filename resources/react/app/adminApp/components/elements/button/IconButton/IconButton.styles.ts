import {css} from "@emotion/react";
import {theme} from "@/react/app/adminApp/styles/Theme";
import {ButtonType, IconType} from "@/react/app/adminApp/components/elements/button/IconButton/IconButton.type";

const ButtonStyle = ({size}: ButtonType) => {
	let Size: string
	switch (size){
		case 'sm':
			Size = '28px'
			break;
		case 'md':
		default:
			Size = '40px'
			break;
		case 'lg':
			Size = '48px'
			break;
	}
	return css`
		width: ${Size};
		height: ${Size};
		border-radius: 100%;
		border: 1px solid ${theme.color.gray};
		box-shadow: ${theme.shadow.sm};
	`
}

const IconStyle = ({color, size}: IconType) => {
	let FontSize: string
	switch (size){
		case 'sm':
			FontSize = '20px'
			break;
		case 'md':
		default:
			FontSize = '24px'
			break;
		case 'lg':
			FontSize = '32px'
			break;
	}
	return css`
		font-size: ${FontSize};
		margin: 0 auto;
		padding-top: 4px;
		color: ${theme.color[color]};
	`
}

export {
	ButtonStyle,
	IconStyle,
}
