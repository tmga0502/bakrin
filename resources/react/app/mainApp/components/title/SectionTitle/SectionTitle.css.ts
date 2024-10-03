import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style({
	display: "flex",
	justifyContent: 'space-between',
	marginBottom: '12px',
})

const TitleStyle = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '16px',
	fontWeight: 'bold',
	'::before': {
		content: '',
		width: '20px',
		borderTop: `16px solid ${vars.color.mainGreen}`,
		marginRight: '8px',
	}
})

const MoreLinkStyle = style({
	display: 'flex',
	alignItems: 'center',
	'::after': {
		content: '>',
		marginLeft: '8px',
	}
})

export {
	Wrapper,
	TitleStyle,
	MoreLinkStyle,
}
