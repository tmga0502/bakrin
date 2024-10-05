import {style} from "@vanilla-extract/css";

const Container = style({
	padding: '0 32px',
})

const Title = style({
	fontWeight: 'bold',
	marginBottom: 24
})

const RadioBox = style({
	display: 'flex',
	alignItems: 'center',
	gap: 12,
	marginBottom: 16,
})

export {
	Container,
	Title,
	RadioBox,
}
