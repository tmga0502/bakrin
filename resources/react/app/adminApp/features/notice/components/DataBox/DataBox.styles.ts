import {css} from "@emotion/react";
import {theme} from "@/react/app/adminApp/styles/Theme";

const Wrapper = css`
	margin-bottom: 24px;
`

const TitleStyle = css`
	padding: 4px 8px;
	margin-bottom: 16px;
	border-bottom: 1px solid ${theme.color.gray};
`

const BodyStyle = css`
	padding: 8px;
`

export {
	Wrapper,
	TitleStyle,
	BodyStyle,
}
