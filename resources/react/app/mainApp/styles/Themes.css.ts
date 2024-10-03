import { createGlobalTheme } from '@vanilla-extract/css';
import {responsiveStyleType} from "@/react/app/mainApp/styles/types";

export const vars = createGlobalTheme(':root', {
	color: {
		mainGreen:   '#00BF63',
		lightGreen:  '#05FF87',
		darkGreen:   '#6AA98A',
		mainYellow:  '#FFC107',
		lightYellow: '#fadd4e',
		darkYellow:  '#dabd78',
		white:       '#FFFFFF',
		gray:        '#dddddd',
		success:     '#22c55e',
		info:        '#38bdf8',
		danger:      '#dc2626',
		warning:     '#fbbf24',
		default:     '#737373',
		dark   :     '#757575',
		black:       '#131313',
	},
	font: {
		body: 'arial'
	},
	shadow: {
		sm: '2px 2px 4px 1px rgba(0, 0, 0, 0.2)',
		md: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)',
	}
});

export const responsiveStyle = ({ sm={}, md = {},  lg={}, xl={} }:responsiveStyleType) => ({
	'@media': {
		'screen and (min-width: 640px)': sm,
		'screen and (min-width: 768px)': md,
		'screen and (min-width: 1024px)': lg,
		'screen and (min-width: 1280px)': xl,
	}
});

