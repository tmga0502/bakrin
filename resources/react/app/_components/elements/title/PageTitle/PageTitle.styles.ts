import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	border-bottom: 2px solid ${theme.color.dark};
	margin-bottom: 16px;
`

const EnTitle = css`
	color: ${theme.color.mainGreen};
	margin-bottom: 6px;
	text-transform: uppercase;
`

const JpTitle = css`
	font-size: 20px;
`

export {
	Wrapper,
	EnTitle,
	JpTitle,
}
