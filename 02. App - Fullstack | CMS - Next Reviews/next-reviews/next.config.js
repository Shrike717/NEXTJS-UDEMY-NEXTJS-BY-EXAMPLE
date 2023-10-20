// Exporting an object with common js convention:
// This tells the editor which properties are available in this object
/** @type {import(next).nextConfig} */

module.exports = {
	// output: "export",
	// This allows us to use the Next.js Image component to optimize images
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/uploads/**",
			},
		],
	},
	// eslint: {
	// 	ignoreDuringBuilds: true,
	// },
};
