import {recipe} from "@vanilla-extract/recipes";
import {vars} from "@/react/app/mainApp/styles/Themes.css";
import {toast} from "react-toastify";

const BudgeStyle = recipe({
	base: {
		display: "inline-block",
		position: 'absolute',
		top: '3%',
		left: 0,
		padding: '0 16px',
		height: '20px',
		lineHeight: '20px',
		fontSize: '12px',
		color: vars.color.white,
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.12)',
		zIndex: 100,
		borderRadius: '0 5px 5px 0',
		'::before':{
			content: '',
			position: 'absolute',
			top: 0,
			left: '-7px',
			border: 0,
			height: '24px',
			width: '7px',
			borderRadius: '5px 0 0 5px',
		},
		'::after':{
			content: '',
			position: 'absolute',
			bottom: '-7px',
			left: '-5px',
			border: 0,
			height: '20px',
			borderRadius: '5px 0 0 5px',
		}
	},
	variants: {
		color:{
			success: {
				backgroundColor: vars.color.success,
				'::before':{
					backgroundColor: vars.color.success,
				},
				'::after':{
					backgroundColor: vars.color.success,
				}
			},
			danger: {
				backgroundColor: vars.color.danger,
				'::before':{
					backgroundColor: vars.color.danger,
				},
				'::after':{
					backgroundColor: vars.color.danger,
				}
			},
			info: {
				backgroundColor: vars.color.info,
				'::before':{
					backgroundColor: vars.color.info,
				},
				'::after':{
					backgroundColor: vars.color.info,
				}
			},
			dark: {
				backgroundColor: vars.color.dark,
				'::before':{
					backgroundColor: vars.color.dark,
				},
				'::after':{
					backgroundColor: vars.color.dark,
				}
			},
		}
	},
	defaultVariants:{
		color: 'success'
	}
})


export {
	BudgeStyle,
}
