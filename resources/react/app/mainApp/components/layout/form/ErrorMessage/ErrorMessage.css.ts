import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const TextStyle = style({
	fontSize: "12px",
	color: vars.color.danger,
	marginTop: '8px',
})

export {
	TextStyle,
}
