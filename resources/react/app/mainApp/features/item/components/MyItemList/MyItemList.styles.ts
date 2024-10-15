import {css} from "@emotion/react";

const Wrapper = css`
	margin-bottom: 48px;
`

const Container = css`
	padding: 0 32px;
	margin-bottom: 48px;
	&>div{
		margin: 32px 0;
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
	Wrapper,
	Container,
	Title,
	RadioBox,
}
