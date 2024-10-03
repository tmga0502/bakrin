import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const ItemName = style({
	fontSize: '24px'
})

const DescriptionWrapper = style({
	padding: 32
})

const DescriptionItem = style({
	marginBottom: 16,
	lineHeight: '32px',
})

const DescriptionItemRed = style([
	DescriptionItem,
	{
		color: vars.color.danger,
	}
])

export {
	ItemName,
	DescriptionWrapper,
	DescriptionItem,
	DescriptionItemRed,
}
