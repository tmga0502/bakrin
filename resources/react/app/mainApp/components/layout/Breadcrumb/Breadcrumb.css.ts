import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style({
	width: '100%',
	height: '40px',
	borderRadius: '8px',
	backgroundColor: vars.color.lightYellow,
	padding: '8px 16px',
	marginBottom: '24px',
})

const TextStyle = style({
	color: vars.color.dark,
	marginRight: '8px',
	lineHeight: '24px',
})

const HoverTextStyle = style([
	TextStyle,
	{
		':hover':{
			opacity: '0.8'
		}
	}
])

const ArrowStyle = style({
	color: vars.color.dark,
	marginRight: '8px',
})


export {
	Wrapper,
	TextStyle,
	HoverTextStyle,
	ArrowStyle,
}
