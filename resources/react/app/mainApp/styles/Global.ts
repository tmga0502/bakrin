import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

export const globalStyle = () => [
	css`
		body{
			color: ${theme.color.black};
			min-width: 330px;
			font-size: 14px;
			font-family: 'M PLUS 1p', 'sans-serif';
			font-weight: 400;
			font-style: normal;
		}
		a{
			color: ${theme.color.dark};
			text-decoration: none;
			&:hover{
				color: ${theme.color.mainGreen};
			}
		}
		a{
			list-style: none;
		}
	`
]
