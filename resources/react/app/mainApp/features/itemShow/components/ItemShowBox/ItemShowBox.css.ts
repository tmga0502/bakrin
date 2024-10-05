import {style} from "@vanilla-extract/css";
import {responsiveStyle} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style([
	{
		display: 'grid',
		gridTemplateColumns: '100%',
		gap: 24,
	},
	responsiveStyle({
		lg:{
			gridTemplateColumns: '50% 50%',
		}
	})
])

const ButtonGroup = style({
	marginBottom: 48,
})

const ButtonBox = style({
	marginBottom: 24,
})

export {
	Wrapper,
	ButtonGroup,
	ButtonBox,
}
