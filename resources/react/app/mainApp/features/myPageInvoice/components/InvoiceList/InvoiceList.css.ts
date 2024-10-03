import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const ListStyle = style({
	width: '100%',
	border: `1px solid ${vars.color.gray}`,
	borderRadius: '4px',
	backgroundColor: vars.color.white,
	padding: '16px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems:	'center',
	marginBottom: '8px',
	boxShadow: vars.shadow.sm,
	':hover': {
		cursor: 'pointer',
		opacity: '0.8',
	}
})


export {
	ListStyle,
}
