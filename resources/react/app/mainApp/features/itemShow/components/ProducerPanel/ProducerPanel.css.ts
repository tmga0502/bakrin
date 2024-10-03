import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style({
	padding: 16,
	border: `2px solid ${vars.color.gray}`,
	borderRadius: 8,
	backgroundColor: vars.color.white,
	display: "flex",
	alignItems: 'center',
	gap: 24,
	':hover':{
		opacity: '0.8'
	}
})

const ImageBox = style({
	width: 64,
	height: 64,
})

const ImageStyle = style({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: '100%',
})

const AddressStyle = style({
	fontSize: 12,
	marginBottom: 8,
})

export {
	Wrapper,
	ImageBox,
	ImageStyle,
	AddressStyle,
}
