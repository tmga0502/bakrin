import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	width: 100%;
	max-height: 100%;
	flex: 1;
	background-color: ${theme.color.white};
	border: 1px solid ${theme.color.gray};
	box-shadow: ${theme.shadow.sm};
	overflow-y: scroll;
	padding: 16px;
`

export {
	Wrapper,
}
