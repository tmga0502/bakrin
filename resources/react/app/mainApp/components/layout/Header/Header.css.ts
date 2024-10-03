import {style} from "@vanilla-extract/css";
import {responsiveStyle, vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style([
	{
		position: 'relative',
		width: '100vw',
		height: '60px',
	},
	responsiveStyle({
		md: {
			height: '120px'
		}
	})
])

const BackgroundImage = style({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
})

const HamburgerBox = style([
	{
		position: 'absolute',
		width:'36px',
		height:'36px',
		top: '12px',
		right: '12px',
		zIndex: '500',
		':hover':{
			cursor: 'pointer'
		}
	},
	responsiveStyle({
		md:{
			display: 'none',
		}
	}),
])

const MenuWrapper = style({
	position: 'fixed',
	width: '200px',
	height: '100%',
	backgroundColor: vars.color.white,
	top: 0,
	right: 0,
	zIndex: 100
})

const HamburgerUl = style({
	marginTop: '60px',
})

export {
	Wrapper,
	BackgroundImage,
	HamburgerBox,
	MenuWrapper,
	HamburgerUl,
}
