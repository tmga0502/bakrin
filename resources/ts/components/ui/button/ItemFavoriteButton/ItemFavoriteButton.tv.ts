import {tv} from "tailwind-variants";

export const FavoriteButtonTv = tv({
	base: "border-pink-500 border-solid border-2 py-2 px-4 rounded-lg hover:opacity-8",
	variants: {
		status: {
			true: "bg-pink-500 text-white",
			false: "text-pink-500",
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
			true: "pointer-events-none opacity-20",
		},
		defaultVariants: {
			status: 'false',
			size: 'md',
			width: 'none'
		},
	},
});
