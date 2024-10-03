import {style} from "@vanilla-extract/css";
import {responsiveStyle, vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style([
	{
		display: 'none',
	},
	responsiveStyle({
		md:{
			display: 'block',
			width: '200px',
			backgroundColor: vars.color.white,
			marginTop: '-120px',
			zIndex: 50,
		}
	})
])

const LogoBox = style({
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	height: '120px',
	padding: '16px',
})

const LogoStyle = style({
	width: '100%',
})

const ButtonBox = style({
	display: 'flex',
	gap: '4px',
	marginBottom: '8px',
})

const LinkBox = style({
	display: 'inline-block',
	width: '50%',
})

export {
	Wrapper,
	LogoBox,
	LogoStyle,
	ButtonBox,
	LinkBox,
}
