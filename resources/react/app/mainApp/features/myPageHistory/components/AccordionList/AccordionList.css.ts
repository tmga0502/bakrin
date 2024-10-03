import {style} from "@vanilla-extract/css";
import {vars} from "@/react/app/mainApp/styles/Themes.css";

const AccordionBox = style({
	width: '100%',
	border: `1px solid ${vars.color.gray}`,
	backgroundColor: vars.color.white,
	borderRadius: '4px',
	boxShadow: vars.shadow.sm,
	padding: '16px',
	marginBottom: '8px',
	':hover':{
		cursor: 'pointer',
	}
})

const Title = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
})

const Body = style({
	display: 'flex',
	alignItems: 'center',
	marginTop: '16px',
	paddingBottom: '8px',
	borderBottom: `2px solid ${vars.color.gray}`,
})

const ImageBox = style({
	width: '40px',
	height: '40px',
})

const ImageStyle = style({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
});

const ItemNameStyle = style({
	margin: '0 0 0 8px',
})

const ProducerNameStyle = style({
	margin: '0 0 0 auto'
})

export {
	AccordionBox,
	Title,
	Body,
	ImageBox,
	ImageStyle,
	ItemNameStyle,
	ProducerNameStyle,
}
