import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const LogoutButtonStyle = style({
	width: '100%',
	':hover': {
		color: vars.color.mainGreen
	}
})

export {
	LogoutButtonStyle,
}
