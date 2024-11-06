import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	padding: 16px;
	border-bottom: 1px solid ${theme.color.gray};
	background-color: ${theme.color.mainGreen};
	color: ${theme.color.white};
	border-radius: 8px 8px 0 0;
`

export {
	Wrapper,
}
