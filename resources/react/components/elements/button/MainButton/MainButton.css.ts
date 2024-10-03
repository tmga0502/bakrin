import {recipe} from '@vanilla-extract/recipes'
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const ButtonStyle = recipe({
	base: {
		display: 'block',
		borderRadius: '4px',
		backgroundColor: vars.color.mainGreen,
		color: vars.color.white,
		boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.35)',
		':hover':{
			opacity: '0.8',
		}
	},
	variants: {
		color:{
			mainGreen: {
				backgroundColor: vars.color.mainGreen,
				color          : vars.color.white
			},
			mainYellow:{
				backgroundColor: vars.color.mainYellow,
				color          : vars.color.white
			},
			danger:{
				backgroundColor: vars.color.danger,
				color          : vars.color.white
			},
			info:{
				backgroundColor: vars.color.info,
				color          : vars.color.white
			},
			success:{
				backgroundColor: vars.color.success,
				color          : vars.color.white
			},
			dark:{
				backgroundColor: vars.color.dark,
				color          : vars.color.white
			},
			default:{
				backgroundColor: vars.color.default,
				color          : vars.color.white
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
		color: 'mainGreen',
		size: 'md',
		align: 'center',
	}
})
export {
	ButtonStyle,
}
