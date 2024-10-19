import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

export const CommonInputStyle = css`
	outline: none;
	margin-top: 0;
	padding: 4px 8px;
	width: 100%;
	background-color: ${theme.color.white};
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	&:focus{
		border: 1px solid ${theme.color.mainGreen};
	}
`
