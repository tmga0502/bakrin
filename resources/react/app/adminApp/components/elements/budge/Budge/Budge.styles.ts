import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {BudgeStylePropsType} from "@/react/app/mainApp/components/elements/budge/Budge/Budge.type";

const BudgeStyles = (props: BudgeStylePropsType) => {
	const BgColor = theme.color[props.color];

	return css`
		color: ${theme.color.white};
		background-color: ${BgColor};
		padding: 4px 8px;
		display: inline;
		border-radius: 4px;
		margin-left: 8px;
		font-size: 12px;
	`
}

export {
	BudgeStyles,
}
