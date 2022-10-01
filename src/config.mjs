export const SITE = {
	name: 'CISO360.AI',

	origin: 'https://ciso360.ai',
	basePathname: '/',

	title: 'CISO360AI — Your All-round Cyber-Intelligent Sidekick',
	description: 'CISO360AI uses gamification, threat intelligence, offensive tactics and a gritty AI to improve cybersecurity governance, risk and compliance and stay ahead of cyber attackers',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: false,
};

export const BLOG = {
	disabled: true,
	postsPerPage: 4,

	blog: {
		disabled: true,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: true,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: true,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: true,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
