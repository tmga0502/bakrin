import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";
import {recipe} from "@vanilla-extract/recipes";

const Container = style({
	display: 'flex',
	borderBottom: `1px solid ${vars.color.gray}`,
	gap: '16px',
	marginBottom: '24px',
})

const TabItem = recipe({
	base: {
		border: `1px solid ${vars.color.gray}`,
		borderRadius: '8px 8px 0 0',
		padding: '8px 16px',
		':hover': {
			cursor: 'pointer',
			opacity: '0.8'
		}
	},
	variants: {
		active:{
			true:{
				backgroundColor: vars.color.mainGreen,
				color: vars.color.white
			},
			false: {
				backgroundColor: vars.color.white
			}
		}
	},
	defaultVariants:{
		active: true
	}
})
export {
	Container,
	TabItem,
}
