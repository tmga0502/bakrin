import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const InputStyle = css`
	outline: none;
	margin-top: 0;
	padding: 4px 8px;
	width: 100%;
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	font-size: 14px;
	&:focus{
		border: 1px solid ${theme.color.mainGreen};
	}

	&::-webkit-inner-spin-button{
		-webkit-appearance: none;
		margin: 0;
		-moz-appearance: textfield;
	}
	&::-webkit-outer-spin-button{
		-webkit-appearance: none;
		margin: 0;
		-moz-appearance: textfield;
	}
	&:-webkit-autofill{
		-webkit-box-shadow: 0 0 0 1000px white inset;
		box-shadow: 0 0 0 1000px white inset;
		-webkit-text-fill-color: #000;
	}
`

export {
	InputStyle,
}
