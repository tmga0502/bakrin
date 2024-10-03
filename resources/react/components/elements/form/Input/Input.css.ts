import {globalStyle, style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";


const InputStyle = style({
	outline: 'none',
	marginTop: 0,
	padding: '4px 8px',
	width: '100%',
	border: 'none',
	borderBottom: `solid 1px ${vars.color.black}`,
	fontSize: '14px',

	':focus':{
		borderBottom: `3px solid ${vars.color.mainGreen}`
	},

	selectors: {
		'&::-webkit-inner-spin-button': {
			WebkitAppearance: 'none',
			margin: 0,
			MozAppearance: 'textfield',
		},
		'&::-webkit-outer-spin-button': {
			WebkitAppearance: 'none',
			margin: 0,
			MozAppearance: 'textfield',
		},
	},

})

globalStyle(`${InputStyle}:-webkit-autofill`, {
	WebkitBoxShadow: '0 0 0px 1000px white inset',
	boxShadow: '0 0 0px 1000px white inset',
	WebkitTextFillColor: '#000',
});


export {
	InputStyle,
}
