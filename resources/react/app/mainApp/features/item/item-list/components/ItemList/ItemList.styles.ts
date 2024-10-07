import {css} from "@emotion/react";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px 16px;

	${mq('sm')}{
		grid-template-columns: 1fr 1fr 1fr;
	}
	${mq('md')}{
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	${mq('lg')}{
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	}
`

export {
	Wrapper,
}

