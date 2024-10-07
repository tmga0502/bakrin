import {css} from "@emotion/react";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const BoxStyle = css`
	text-align: center;
	margin-top: 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
`

const FlexStyle = css`
	display: flex;
	align-items: center;
	gap:24px;
	${mq('md')}{
		margin-top: 0;
	}
`


export {
	BoxStyle,
	FlexStyle,
}
