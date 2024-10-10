import {css} from "@emotion/react";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const ShowButtonBox = css`
	margin-bottom: 24px;
`

const ShowButtonGroup = css`
	margin-bottom: 48px;
`

const ShowContentsBox = css`
	width: 100%;
`

const ShowWrapper = css`
	display: grid;
	grid-template-columns: 100%;
	gap: 24px;
	${mq('lg')}{
		grid-template-columns: 50% 50%;
	}
`

export {
	ShowButtonBox,
	ShowButtonGroup,
	ShowContentsBox,
	ShowWrapper
}
