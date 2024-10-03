import {style} from "@vanilla-extract/css";
import {responsiveStyle} from "@/react/app/mainApp/styles/Themes.css";

const GridStyle = style([
	{
		width: '100%',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '16px',
	},
	responsiveStyle({
		sm:{
			gridTemplateColumns: '1fr 1fr 1fr',
		},
		lg:{
			gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
		}
	}),
])

export {
	GridStyle,
}
