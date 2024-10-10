import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Style = (heading: boolean) => css`
	padding: 4px 8px;
	width: ${heading ? 0 : ''};
	white-space: ${heading ? "nowrap" : ""};
	background-color: ${heading ? theme.color.dark : ''};
	color: ${heading ? theme.color.white : ''};
`

export {
	Style,
}
