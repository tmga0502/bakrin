import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const TextareaStyle = css`
	width: 100%;
	padding: 8px;
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	resize: none;
	&:focus{
		border:1px solid ${theme.color.mainGreen};
	}
`

export {
	TextareaStyle,
}
