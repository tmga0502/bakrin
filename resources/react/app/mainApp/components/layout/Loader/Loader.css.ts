import {style} from "@vanilla-extract/css";

const Wrapper = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
	zIndex: '99999'
})

const Text = style({
	textAlign: 'center',
	marginTop: '12px',
})

export {
	Wrapper,
	Text,
}
