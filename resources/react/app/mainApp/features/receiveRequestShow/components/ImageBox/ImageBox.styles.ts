import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	background-color: ${theme.color.white};
	border: 1px solid ${theme.color.gray};
	border-radius: 8px;
	width: 80%;
	max-width: 80%;
	margin: 0 auto 24px auto;
	${mq('sm')}{
		margin: 0 auto;
	}
`

const UserName = css`
	text-align: center;
	border-radius: 8px 8px 0 0;
`

const ImageBoxStyle = css`
	position: relative;
	overflow: hidden;
	&::before{
		content: "";
		padding-top: 100%;
		display: block;
	}
`

const ImageStyle = css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const TextWrapper = css`
	padding: 16px;
`

const PlanNameStyle = css`
	margin-bottom: 8px;
	font-weight: bold;
	text-align: center;
`

const DescriptionStyle = css`
	margin-bottom: 8px;
`


export {
	Wrapper,
	UserName,
	ImageBoxStyle,
	ImageStyle,
	TextWrapper,
	PlanNameStyle,
	DescriptionStyle,
}
