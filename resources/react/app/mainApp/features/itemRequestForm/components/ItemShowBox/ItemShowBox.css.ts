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
	marginTop: 32,
	marginBottom: 16,
})

export {
	Wrapper,
	ButtonGroup,
}
