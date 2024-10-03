import {style} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const ButtonStyle = recipe({
	base:{
		display: 'block',
		border: `2px solid ${vars.color.pink}`,
		padding: '8px 16px',
		borderRadius: '4px',
		':hover': {
			opacity: '0.8',
		}
	},
	variants:{
		status:{
			true: {
				backgroundColor: vars.color.pink,
				color: vars.color.white,
			},
			false: {
				color: vars.color.pink,
			}
		},
		size:{
			sm:{padding: '4px 8px',},
			md:{padding: '6px 10px',},
			lg:{padding: '8px 12px',},
		},
		align: {
			left: {marginRight: 'auto',},
			center: {margin: '0 auto',},
			right: {marginLeft: 'auto',},
		},
		width: {
			full: {width: '100%'},
			half: {width: '50%'},
			none: {width: 'initial'},
		},
		disabled: {
			true : {
				backgroundColor: vars.color.dark,
				opacity: '0.6',
				':hover':{
					cursor: 'default'
				}
			},
		}
	},
	defaultVariants:{
		status: true,
		size: 'md',
		align: 'center',
	}
})

const TextStyle = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})

const Title = style({
	marginRight: 8,
})

export {
	ButtonStyle,
	TextStyle,
	Title,
}
