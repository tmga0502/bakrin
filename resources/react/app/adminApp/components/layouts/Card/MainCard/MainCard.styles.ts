import {css} from "@emotion/react";
import {theme} from "@/react/app/adminApp/styles/Theme";

const Wrapper = css`
	border: 1px solid ${theme.color.gray};
	border-radius: 8px;
	box-shadow: ${theme.shadow.sm};
`

const TitleStyle = css`
	background-color: ${theme.color.dark};
	color: ${theme.color.white};
	border-radius: 8px 8px 0 0;
	padding: 8px 16px;
`

const ContentsStyle = css`
	padding: 16px;
`

export {
	Wrapper,
	TitleStyle,
	ContentsStyle,
}
