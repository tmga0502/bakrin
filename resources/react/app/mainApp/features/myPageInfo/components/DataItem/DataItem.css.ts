import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const DataBox = style({
	marginBottom: '16px',
})

const DataTitle = style({
	display: 'flex',
	alignItems: 'center',
	fontSize: '12px',
	fontWeight: 'bold',
	marginBottom: '8px',
	':before': {
		content: '',
		width: '8px',
		borderTop: `14px solid ${vars.color.mainGreen}`,
		marginRight: '8px',
	}
})

const DataBody = style({
	padding: '0 0 4px 16px',
})

export {
	DataBox,
	DataTitle,
	DataBody,
}
