import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const ItemName = css`
	font-size: 24px;
`

const DescriptionWrapper = css`
	padding: 32px;
`

const DescriptionItem = css`
	margin-bottom: 16px;
	line-height: 32px;
`

const ColorRed = css`
	color: ${theme.color.danger}
`

export {
	ItemName,
	DescriptionWrapper,
	DescriptionItem,
	ColorRed,
}
