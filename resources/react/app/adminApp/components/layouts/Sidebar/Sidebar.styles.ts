import {css} from "@emotion/react";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	width: 60px;
	height: 100%;
	min-height: 100vh;
	background-color: ${theme.color.mainGreen};
	z-index: 50;
	${mq('md')}{
		width: 150px;
	}
`

const LogoBox = css`
	display: none;
	${mq('md')}{
		display: block;
		align-items: center;
		width: 100%;
		padding: 8px;
	}
`

const LogoStyle = css`
	width: 100%;
	border-radius: 8px;
	margin: 8px 0 ;
`

const ListStyle = css`
	padding: 12px 0;
`

const ItemBox = css`
	position: relative;
	color: ${theme.color.white};
	&:hover{
		color: ${theme.color.white};
		opacity: 0.8;
	}
	${mq('md')}{
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 0 8px;
	}
`

const IconStyle = css`
	font-size: 24px;
	display: block;
	text-align: center;
	${mq('md')}{
		font-size: 18px;
		display: flex;
		align-items: center;
	}
`

const TitleStyle = css`
	display: none;
	${mq('md')}{
		display: block;
	}
`

export {
	Wrapper,
	LogoBox,
	LogoStyle,
	ListStyle,
	IconStyle,
	ItemBox,
	TitleStyle,
}
