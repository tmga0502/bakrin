import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	width: 100%;
	background-color: ${theme.color.white};
	padding: 8px 16px;
	margin-bottom: 32px;
`

const CheckBoxWrapper = css`
	${mq('sm')}{
		display: flex;
		align-items: center;
		gap: 20px;
	}
	${mq('lg')}{
		margin-bottom: 0;
	}
`

const ButtonBox = css`
	width: 70%;
	display: flex;
	gap: 16px;
	justify-content: right;
	margin-top: 4px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	${mq('sm')}{
		width: 50%;
		margin-right: 0;
	}
	${mq('md')}{
		width: 30%;
	}
`

export {
	Wrapper,
	CheckBoxWrapper,
	ButtonBox,
}
