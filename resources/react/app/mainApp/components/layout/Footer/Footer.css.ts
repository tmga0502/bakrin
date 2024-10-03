import {style} from "@vanilla-extract/css";
import {responsiveStyle, vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style({
	width: '100vw',
	backgroundColor: vars.color.dark,
	padding: '16px 0',
	zIndex: 30,
})

const UlStyle = style([
	{
		textAlign: 'center',
		color: vars.color.white,
		marginBottom: '16px',
	},
	responsiveStyle({
		md:{
			textAlign: 'left',
			display: 'flex',
			justifyContent: 'center',
		}
	})
])

const ListStyle = style([
	{
		color: vars.color.white,
		padding: '8px 16px',
		':hover':{
			opacity: '0.8',
		}
	},
	responsiveStyle({
		md:{
			borderRight: `1px solid ${vars.color.white}`,
		}
	})
])

const CopyWrite = style({
	textAlign: 'center',
	color: vars.color.white,
})

export {
	Wrapper,
	UlStyle,
	ListStyle,
	CopyWrite
}
