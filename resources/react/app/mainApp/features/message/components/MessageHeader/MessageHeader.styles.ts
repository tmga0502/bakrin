import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: flex;
	flex-shrink: 0;
	gap: 24px;
	padding: 8px;
	background-color: ${theme.color.default};
	border-radius: 8px 8px 0 0;
`

const TextStyle = css`
	color: ${theme.color.white};
`


export {
	Wrapper,
	TextStyle,
}
