import {tv} from "tailwind-variants";

export const MainButtonTv = tv({
	base: "bg-mainGreen text-white py-2 px-4 rounded-lg whitespace-nowrap hover:opacity-80",
	variants: {
		color: {
			mainGreen: "bg-mainGreen",
			mainYellow: "bg-mainYellow",
			danger: "bg-danger",
			info: "bg-info",
			success: "bg-success",
			dark: "bg-bakDark",
		},
		size: {
			sm: "py-1 px-2 rounded-md",
			md: "py-2 px-4 rounded-xl",
			lg: "py-4 px-6 rounded-2xl",
		},
		width:{
			full: "w-full",
			half: "w-1/2",
			none: "",
		},
		disable: {
			true: "bg-darkGreen opacity-50 hover:opacity-50",
		},
		defaultVariants: {
			size: 'md',
			color: 'mainGreen',
			align: 'left',
			width: 'none'
		},
	},
});