import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	width: 100vw;
	height: 100vh;
	background-color: rgba(117,117,117,0.79);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99999;
`

const Box = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${theme.color.white};
	max-width: 1180px;
	min-width: 300px;
	max-height: 80%;
	border-radius: 8px;
	text-align: left;
	z-index: 100000;
`

export {
	Wrapper,
	Box,
}
