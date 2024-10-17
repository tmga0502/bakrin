import { css } from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Wrapper = css`
	background-color: ${theme.color.gray};
	border-radius: 8px;
	padding: 8px 24px;
	margin-bottom: 24px;
`

const InputBoxStyle = css`
	display: flex;
	justify-content: space-between;
	gap:48px;
`

export {
	Wrapper,
	InputBoxStyle,
}
