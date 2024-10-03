import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const WrapperStyle = style({
	padding: '16px',
	marginBottom: '48px',
})

const TitleStyle = style({
	borderBottom: `2px solid ${vars.color.gray}`,
	paddingBottom: '8px',
	marginBottom: '16px',
})

export {
	WrapperStyle,
	TitleStyle,
}
