import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Box = style({
	width: '100%',
	height: '60px',
	backgroundColor: vars.color.dark,
	padding: '8px',
	':hover': {
		opacity: 0.8
	}
})

const IconBox = style({
	color: vars.color.white,
	textAlign: 'center',
	height: '50%',
	lineHeight: '45px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})

const TextBox = style({
	color: vars.color.white,
	textAlign: 'center',
	height: '50%',
	lineHeight: '30px',
})

export {
	Box,
	IconBox,
	TextBox,
}
