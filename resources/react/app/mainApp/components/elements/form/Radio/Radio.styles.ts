import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	display: flex;
	align-items: center;
	gap: 8px;
	position: relative;
	cursor: pointer;
	&::before, &::after{
		border-radius: 50%;
		content: '';
	}
	&::before{
		width: 18px;
		height: 18px;
		border: 2px solid ${theme.color.gray};
		box-sizing: border-box;
	}
	&::after{
		position: absolute;
		top: 50%;
		left: 9px;
		transform: translate(-50%, -50%);
		width: 9px;
		height: 9px;
		background-color: ${theme.color.gray};
	}
	&:has(:checked)::after {
		background-color: ${theme.color.mainGreen};
		animation: anim-radio-2 .3s linear;
	}
`

const RadioStyle = css`
	display: none;
`

export {
	Wrapper,
	RadioStyle,
}
