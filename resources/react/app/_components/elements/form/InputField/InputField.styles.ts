import {css} from "@emotion/react";
import {CommonInputStyle} from "@/react/app/mainApp/components/elements/form/_common/common.styled";
import {theme} from "@/react/app/adminApp/styles/Theme";

const InputStyle = css`
	${CommonInputStyle};

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
	&[readonly]{
		background-color: ${theme.color.gray};
	}
`

export {
	InputStyle,
}
