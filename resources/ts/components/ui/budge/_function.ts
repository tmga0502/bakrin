import {tv} from "tailwind-variants";

const budgeTv = tv({
	base: "text-white px-1 py-0.5 inline rounded-md mr-2 text-xs font-normal",
	variants: {
		color: {
			mainGreen: "bg-mainGreen",
			mainYellow: "bg-mainYellow",
			danger: "bg-danger",
			info: "bg-info",
			success: "bg-success",
		},
		defaultVariants: {
			color: 'mainGreen',
		},
	},
});

export {
	budgeTv,
}
