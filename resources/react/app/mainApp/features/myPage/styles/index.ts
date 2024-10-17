import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const CardContainer = css`
	width: 100%;
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	color: ${theme.color.dark};
	background-color: ${theme.color.white};
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
	box-shadow: ${theme.shadow.sm};
	&:hover{
		cursor: pointer;
		opacity: 0.8;
	}
`

const CardText = css`
	margin: 0;
`

const CardIcon = css`
	font-size: 20px;
`

const CategoryContainer = css`
	margin-bottom: 24px;
`

const CategoryTitle = css`
	border: 1px solid ${theme.color.gray};
	border-radius: 4px;
	background-color: ${theme.color.gray};
	padding: 4px;
`

const VarietyLists = css`
	display: grid;
	grid-template-columns: 1fr;
	padding: 16px 0;
	${mq('xs')}{
		grid-template-columns: 50% 50%;
	}
	${mq('lg')}{
		grid-template-columns: 33% 33% 1fr;
	}
`

export {
	CardContainer,
	CardText,
	CardIcon,
	CategoryContainer,
	CategoryTitle,
	VarietyLists,
}
