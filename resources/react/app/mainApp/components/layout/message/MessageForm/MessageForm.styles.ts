import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: flex;
	flex-shrink: 0;
	gap: 24px;
	padding: 8px;
	background-color: ${theme.color.default};
	border-radius: 0 0 8px 8px;
`

const TextAreaStyle = css`
	width: 100%;
	height: 40px;
	min-height: 24px;
	max-height: 208px;
	padding: 8px;
	background-color: ${theme.color.white};
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	resize: none;
	line-height: 20px;
	overflow: auto;
	resize: none;
	&:focus{
		border:1px solid ${theme.color.mainGreen};
	}
`

const ButtonWrapper = css`
	display: flex;
	align-items: center;
	white-space: nowrap;
`

export {
	Wrapper,
	TextAreaStyle,
	ButtonWrapper,
}
