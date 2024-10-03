import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style({
	position: 'relative',
	width: '100%',
	borderRadius: '4px',
	boxShadow: vars.shadow.sm,
	'::before': {
		content: '',
		display: 'block',
		paddingTop: '100%',
		borderRadius: '8px',
	}
})

const ImageStyle = style({
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
	objectFit: 'cover',
	borderRadius: '4px',
})


export{
	Wrapper,
	ImageStyle,
}
