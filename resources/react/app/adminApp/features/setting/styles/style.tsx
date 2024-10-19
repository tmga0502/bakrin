import { css } from "@emotion/react";
import {theme} from "@/react/app/adminApp/styles/Theme";

export const LinkBoxStyle = css`
	color: ${theme.color.dark};
	margin-bottom: 24px;
	&:hover{
		cursor: pointer;
		opacity: 0.8;
	}
`
