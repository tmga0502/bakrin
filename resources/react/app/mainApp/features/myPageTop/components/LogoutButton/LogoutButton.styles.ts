import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const LogoutButtonStyle = css`
	width: 100%;
	&:hover{
		color: ${theme.color.mainGreen};
	}
`

export {
	LogoutButtonStyle,
}
