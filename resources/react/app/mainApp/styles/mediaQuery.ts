export const breakpoints = {
	xs: 480,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
} as const;

export const mq = (key: keyof typeof breakpoints) => `@media (min-width: ${breakpoints[key]}px)`;
