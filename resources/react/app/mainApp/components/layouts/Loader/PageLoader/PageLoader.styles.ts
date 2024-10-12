import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	z-index: 99999;
	opacity: 0.8;
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
