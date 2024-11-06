import {css} from "@emotion/react";
import {mq} from '@/react/app/mainApp/styles/mediaQuery'
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	position: relative;
	width: 100vw;
	height: 60px;

	${mq('md')}{
		height: 120px;
	}
`

const BackgroundImage = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const HamburgerBox = css`
	position: absolute;
	width: 36px;
	height: 36px;
	top: 12px;
	right: 12px;
	z-index: 9901;
	&:hover{
		cursor: pointer;
	}
	${mq('md')}{
		display: none;
	}
`

const MenuWrapper = css`
	position: fixed;
	width: 200px;
	height: 100%;
	background-color: ${theme.color.white};
	top: 0;
	right: 0;
	z-index: 9900;
`

const HamburgerUl = css`
	margin-top: 60px;
`


export {
	Wrapper,
	BackgroundImage,
	HamburgerBox,
	MenuWrapper,
	HamburgerUl,
}
