import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Container = style({
	width: '100%',
	border: `1px solid ${vars.color.gray}`,
	borderRadius: '4px',
	backgroundColor: vars.color.white,
	padding: '16px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: '16px',
	boxShadow: vars.shadow.sm,
	':hover': {
		cursor: 'pointer',
		opacity: '0.8',
	}
})

const TextStyle = style({
	margin: 0,
})

const ArrowStyle = style({
	fontSize: '20px',
})

export {
	Container,
	TextStyle,
	ArrowStyle,
}
