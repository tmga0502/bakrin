import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

export const BackGround = css`
	position: relative;
	height: 100vh;
	background-color: ${theme.color.mainGreen};
`

export const Container = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${theme.color.white}
	width: 75%;
	max-width: 800px;
	max-height: 75%;
	${mq('sm')}{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50%
	}
`

export const ImageSectionBox = css`
	width: 100%;
	height: 150px;
	max-height: 50%;
	${mq('sm')}{
		width: 50%;
		order: 2;
		height: 100%;
		max-height: 100%;
	}
`

export const ImageBox = css`
	width: 100%;
	height: 100%;
	position: relative;
`

export const BackGroundImage = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: blur(2px);
`

export const Logo = css`
	position: absolute;
	width: 75%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%)
`

export const FormSectionBox = css`
	width: 100%;
	padding: 48px 24px;
	${mq('sm')}{
		width: 50%;
		order: 1;
	}
`

export const Title = css`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 30px;
	${mq('sm')}{
		font-size: 24px;
	}
`

export const ButtonWrapper = css`
	text-align: center;
`
