import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style({
	borderBottom: `2px solid ${vars.color.dark}`,
	marginBottom: '16px',
})

const EnTitle = style({
	color: vars.color.mainGreen,
	marginBottom: '6px',
	textTransform: 'uppercase',
})

const JpTitle = style({
	fontSize: '20px',
})

export {
	Wrapper,
	EnTitle,
	JpTitle,
}
