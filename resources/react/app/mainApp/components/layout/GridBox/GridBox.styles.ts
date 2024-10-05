import {css} from "@emotion/react";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const GridStyle = css`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;

	${mq('sm')}{
		grid-template-columns: 1fr 1fr 1fr;
	}

	${mq('lg')}{
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	}
`

export {
	GridStyle,
}
