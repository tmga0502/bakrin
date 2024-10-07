import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";


const SelectStyle = css`
	display: inline-flex;
	align-items: center;
	position: relative;
	width: 100%;
	&::after{
		position: absolute;
		right: 8px;
		width: 10px;
		height: 7px;
		background-color: #535353;
		clip-path: polygon(0 0, 100% 0, 50% 100%);
		content: '';
		pointer-events: none;
	}

	&>select{
		appearance: none;
		width: 100%;
		padding: 4px calc(8px + 26px) 4px 8px;
		border: 1px solid ${theme.color.gray};
		border-radius: 4px;
		background-color: ${theme.color.white};
		font-size: 1em;
		cursor: pointer;
	}

	&>select:focus{
		outline: 1px solid ${theme.color.mainGreen};
	}
`

export {
	SelectStyle,
}
