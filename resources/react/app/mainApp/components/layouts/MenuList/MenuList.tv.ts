import {tv} from "tailwind-variants";

export const MenuListTv = tv({
	base: 'flex items-center px-2 py-1 mb-4',
	variants:{
		color:{
			white: 'bg-white',
			gray: 'bg-lightGray text-white',
		}
	}
})
