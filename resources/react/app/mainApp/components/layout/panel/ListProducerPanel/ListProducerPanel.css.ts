import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style({
	border: `1px solid ${vars.color.gray}`,
	borderRadius: '8px',
	boxShadow: vars.shadow.sm,
})

const ImageBox = style({
	position: 'relative',
	width: '100%',
	'::before':{
		content:'',
		display: 'block',
		paddingTop: '100%',
	}
})

const ImageStyle = style({
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
	objectFit: 'cover',
	borderRadius: '8px 8px 0 0',
})

const InfoBox = style({
	padding: '8px',
})

const AddressBox = style({
	lineHeight: '32px',
	fontSize: '12px',
})


export {
	Wrapper,
	ImageBox,
	ImageStyle,
	InfoBox,
	AddressBox,
}
