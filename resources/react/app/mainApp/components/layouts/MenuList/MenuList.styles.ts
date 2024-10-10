import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const LinkStyle = css`
	&:hover{
		opacity: .8;
	}
`

const LiStyle = (color: 'white' | 'gray') => {

	const ColorStyle = color === 'white' ? theme.color.white : theme.color.gray;

	return css`
		display: flex;
		align-items: center;
		padding: 12px 4px;
		margin-bottom: 4px;
		background-color:  ${ColorStyle};
	`
}

const SpanStyle = css`
	margin-left: 8px;
`

export {
	LinkStyle,
	LiStyle,
	SpanStyle,
}
