import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const WrapperStyle = css`
	padding: 16px;
	margin-bottom: 48px;
`

const TitleStyle = css`
	border-bottom: 2px solid ${theme.color.gray};
	padding-bottom: 8px;
	margin-bottom: 16px;
`

export {
	WrapperStyle,
	TitleStyle,
}
