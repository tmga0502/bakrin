import {css} from "@emotion/react";
import {CommonInputStyle} from "@/react/app/mainApp/components/elements/form/_common/common.styled";


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
		${CommonInputStyle};
		appearance: none;
		padding: 4px calc(8px + 26px) 4px 8px;
		cursor: pointer;
	}

`

export {
	SelectStyle,
}
