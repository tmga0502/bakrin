import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	z-index: 99999;
	opacity: 0.5;
	background-color: ${theme.color.white};
`
const Text = css`
	text-align: center;
	margin-top: 12px;
`

export {
	Wrapper,
	Text,
}
