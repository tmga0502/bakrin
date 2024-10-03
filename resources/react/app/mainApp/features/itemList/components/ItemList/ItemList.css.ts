import {style} from "@vanilla-extract/css";
import {responsiveStyle} from "@/react/app/mainApp/styles/Themes.css";

const Wrapper = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '32px 16px',
	},
	responsiveStyle({
		sm:{
			gridTemplateColumns: '1fr 1fr 1fr',
		},
		md: {
			gridTemplateColumns: '1fr 1fr 1fr 1fr',
		},
		lg: {
			gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
		}
	})
])
'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'

export {
	Wrapper,
}
