import {css} from "@emotion/react";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Flex = css`
	display: grid;
	grid-template-columns: 80% 1fr;
	gap: 8px;
`

const MonthFlex = css`

	${mq('sm')}{
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 0;
	}

	&>div{
		margin-bottom: 8px;
	}

	&>span{
		display: block;
		white-space: nowrap;
		margin-bottom: 8px;
	}
`

const RadioGroup = css`
	&>label{
		margin-bottom: 8px;
	}
`

export {
	Flex,
	MonthFlex,
	RadioGroup,
}
