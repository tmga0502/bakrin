import {css} from "@emotion/react";

const PasswordWrapper = css`
	display: flex;
	gap: 8px;
	& > input{
		width: calc(100% - 28px);
	}
`

const RadioBox = css`
	margin: 12px 0;
`

export {
	PasswordWrapper,
	RadioBox,
}
