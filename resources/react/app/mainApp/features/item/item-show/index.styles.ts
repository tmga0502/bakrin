import {css} from "@emotion/react";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	display: grid;
	grid-template-columns: 100%;
	gap: 24px;
	${mq('lg')}{
		grid-template-columns: 50% 50%;
	}
`

const ButtonGroup = css`
	margin-bottom: 48px;
`

const ButtonBox = css`
	margin-bottom: 24px;
`

export {
	Wrapper,
	ButtonGroup,
	ButtonBox,
}
