import {style} from "@vanilla-extract/css";
import {responsiveStyle} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style({
	flexDirection: 'column',
	minHeight: '100vh',
	minWidth: '80%',
})

const Container = style({
	maxWidth: '1280px',
	minWidth: '330px',
	margin: '0 auto',
	display: 'flex',
	minHeight: 'calc(100vh - 120px)',
})


const MainBox = style([
	{
		width: '100%',
		padding: '16px',
		marginBottom: '96px',
	},
	responsiveStyle({
		md:{
			width: 'calc(100% - 200px)'
		}
	})
])

export {
	Wrapper,
	Container,
	MainBox,
}
