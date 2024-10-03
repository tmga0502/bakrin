import {style} from "@vanilla-extract/css";
import {responsiveStyle, vars} from "@/react/app/mainApp/styles/Themes.css";

export const BackGround = style({
	position: "relative",
	height: '100vh',
	backgroundColor: vars.color.mainGreen,
})

export const Container = style([
	{
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: vars.color.white,
		width: '75%',
		maxWidth: '800px',
		maxHeight: '75%',
	},
	responsiveStyle({
		sm: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: '50%',
		},
	}),
])

export const ImageSectionBox = style([
	{
		width: '100%',
		height: '150px',
		maxHeight: '50%',
	},
	responsiveStyle({
		sm:{
			width: '50%',
			order: 2,
			height: '100%',
			maxHeight: '100%',
		}
	})
])

export const ImageBox = style({
	width: '100%',
	height: '100%',
	position: 'relative',
})

export const BackGroundImage = style({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	filter: 'blur(2px)'
})

export const Logo = style({
	position: 'absolute',
	width: '75%',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
})

export const FormSectionBox = style([
	{
		width: '100%',
		padding: '48px 24px',
	},
	responsiveStyle({
		sm:{
			width: '50%',
			order: 1,
		}
	})
])

export const Title = style([
	{
		fontSize: '20px',
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: '30px',
	},
	responsiveStyle({
		sm:{
			fontSize: '24px',
		}
	})
])

export const ButtonWrapper = style({
	textAlign: 'center',
})
