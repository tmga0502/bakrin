import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style({
	display: 'flex',
	alignItems: 'center',
	columnGap: '4px',
	width: 'fit-content',
	lineHeight: '1',
	cursor: 'pointer',
	marginBottom: '16px',
})

const RadioStyle = style({
	appearance: 'none',
	position: 'relative',
	width: '20px',
	height: '20px',
	border: `1px solid ${vars.color.mainGreen}`,
	borderRadius: '9999px',
	backgroundColor: vars.color.gray,
	cursor: 'pointer',
	selectors: {
		'&:checked::after': {
			content        : '',
			position       : 'absolute',
			inset          : 0,
			width          : '12px',
			height         : '12px',
			margin         : 'auto',
			borderRadius   : '9999px',
			backgroundColor: vars.color.mainGreen,
		},
	}
})

export {
	Wrapper,
	RadioStyle,
}
