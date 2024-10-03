import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Box = style({
	padding: '8px 16px',
	marginBottom: 4,
	borderBottom: `2px solid ${vars.color.gray}`
})

const ItemWrapper = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
})


export {
	Box,
	ItemWrapper,
}
