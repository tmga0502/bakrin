import {tv} from 'tailwind-variants'

export const MessageBlockTv = tv({
	base: 'w-3/4 p-4 shadow-md rounded-md mb-8',
	variants: {
		layout: {
			sender: 'ml-auto bg-lightYellow',
			receiver: 'mr-auto bg-gray-100',
		}
	},
	defaultVariants:{
		layout: 'sender'
	}
})
