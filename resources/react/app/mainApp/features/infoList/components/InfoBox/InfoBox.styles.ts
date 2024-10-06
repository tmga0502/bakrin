import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Box = css`
	padding: 8px 16px;
	margin-bottom: 4px;
	border-bottom: 2px solid ${theme.color.gray}
`

const ItemWrapper = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export {
	Box,
	ItemWrapper,
}
