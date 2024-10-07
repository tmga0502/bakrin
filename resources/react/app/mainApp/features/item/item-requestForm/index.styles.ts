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
	margin-top: 32px;
	margin-bottom: 16px;
`

export {
	Wrapper,
	ButtonGroup,
}
