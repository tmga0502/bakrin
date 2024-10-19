import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: flex;
	align-items: center;
	gap: 0 .5em;
	position: relative;
	cursor: pointer;
	&::before, &:has(:checked)::after{
		content: '';
	}
	&::before{
		width: 17px;
		height: 17px;
		border-radius: 4px;
		background-color: ${theme.color.gray};
	}
	&:has(:checked)::before {
		background-color: ${theme.color.mainGreen};
	}
	&:has(:checked)::after {
		position: absolute;
		top: 6px;
		left: 6px;
		transform: rotate(45deg);
		width: 4px;
		height: 8px;
		border: solid ${theme.color.white};
		border-width: 0 2px 2px 0;
	}
`

const CheckStyle = css`
	display: none;
`

export {
	Wrapper,
	CheckStyle,
}
