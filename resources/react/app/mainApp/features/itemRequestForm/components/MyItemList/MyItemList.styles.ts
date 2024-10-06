import {css} from "@emotion/react";

const Container = css`
	padding: 0 32px;
	&>div{
		margin-top: 32px;
	}
`

const Title = css`
	font-weight: bold;
	margin-bottom: 24px;
`

const RadioBox = css`
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 16px;
`

export {
	Container,
	Title,
	RadioBox,
}
