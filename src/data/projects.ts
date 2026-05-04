export interface Project {
	description: string;
	href: string;
	icon?: string;
	image?: string;
	title: string;
}

export const projects: Project[] = [
	{
		description:
			"Personal blog and project index built with Astro Cactus and deployed on Cloudflare Workers.",
		href: "https://tianpeng.dev",
		icon: "mdi:web",
		title: "tianpeng.dev",
	},
];
