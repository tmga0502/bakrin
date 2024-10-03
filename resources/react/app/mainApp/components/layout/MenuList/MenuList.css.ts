import {style} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

export const LinkStyle = style({
	':hover':{
		opacity: '.8',
	}
})

export const LiStyle = recipe({
	base: {
		display: 'flex',
		alignItems: 'center',
		padding: '12px 4px',
		marginBottom: '4px',
	},
	variants: {
		color: {
			white: {backgroundColor: vars.color.white},
			gray: {backgroundColor: vars.color.gray},
		}
	},
	defaultVariants:{
		color: 'white'
	}
})

export const SpanStyle = style({
	marginLeft: '8px',
})
