import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const TextareaStyle = style({
	width: '100%',
	padding: '8px',
	border: `1px solid ${vars.color.gray};`,
	borderRadius: '4px',
	resize: 'none',

	selectors:{
		'&:focus':{
			border: `2px solid ${vars.color.mainGreen};`,
		}
	}
})

export {
	TextareaStyle,
}
