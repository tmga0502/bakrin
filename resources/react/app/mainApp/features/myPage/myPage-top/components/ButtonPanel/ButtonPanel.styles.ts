import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Container = css`
	width: 100%;
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	background-color: ${theme.color.white};
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
	box-shadow: ${theme.shadow.sm};
	&:hover{
		cursor: pointer;
		opacity: 0.8;
	}
`

const TextStyle = css`
	margin: 0;
`

const ArrowStyle = css`
	font-size: 20px;
`

export {
	Container,
	TextStyle,
	ArrowStyle,
}
