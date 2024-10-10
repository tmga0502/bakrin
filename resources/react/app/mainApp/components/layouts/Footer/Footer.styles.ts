import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	width: 100vw;
	background-color: ${theme.color.dark};
	padding: 16px 0;
	z-index: 30,
`

const UlStyle = css`
	text-align: center;
	color: ${theme.color.white};
	margin-bottom: 16px;
	${mq('md')}{
		text-align: left;
		display: flex;
		justify-content: center;
	}
`

const ListStyle = css`
	color: ${theme.color.white};
	padding: 8px 16px;
	&:hover {
		opacity: .8;
	}
	${mq('md')}{
		border-radius: 1px solid ${theme.color.white};
	}
`

const CopyWrite = css`
	text-align: center;
	color: ${theme.color.white};
`

export {
	Wrapper,
	UlStyle,
	ListStyle,
	CopyWrite
}
