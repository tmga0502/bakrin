import {globalStyle} from '@vanilla-extract/css';
import {vars} from "@/react/app/mainApp/styles/Themes.css";

globalStyle('html, body', {
	minWidth: '330px',
	fontSize: '14px',
	fontFamily: "'M PLUS 1p', 'sans-serif'",
	fontWeight: 400,
	fontStyle: 'normal',
});

globalStyle('a', {
	color: vars.color.black,
	textDecoration: 'none',
});

globalStyle('a:hover', {
	color: vars.color.mainGreen,
});

globalStyle('li', {
	listStyle: 'none',
});
