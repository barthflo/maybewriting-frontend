const withPWA = require('next-pwa');

module.exports = withPWA({
	reactStrictMode: true,
	images: {
		domains: ['storage-francesco.s3.eu-west-2.amazonaws.com'],
	},
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === 'development',
		buildExcludes: [/middleware-manifest\.json$/],
	},
	env: {
		STRAPI_URL: process.env.STRAPI_URL,
	},
});
