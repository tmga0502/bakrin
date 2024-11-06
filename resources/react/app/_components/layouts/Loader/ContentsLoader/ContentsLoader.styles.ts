import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	z-index: 99999;
	opacity: 0.5;
	background-color: ${theme.color.white};
`

export {
	Wrapper,
}
