import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	margin: 0 0 32px 0;
	padding: 32px 16px;
	border-bottom: 2px solid ${theme.color.gray};
`

const Title = css`
	font-weight: bold;
	margin-bottom: 12px;
`

export {
	Wrapper,
	Title,
}
