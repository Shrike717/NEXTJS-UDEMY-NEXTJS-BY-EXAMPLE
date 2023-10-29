// Exporting an object with common js convention:
// This tells the editor which properties are available in this object
/** @type {import(next).nextConfig} */

module.exports = {
	// This output: "export", tells Next.js to export the static site into a folder
	// output: "export",
	// This allows us to use the Next.js Image component to optimize images
	images: {
		remotePatterns: [toRemotePattern(process.env.CMS_IMAGE_PATTERN)],
	},
	// eslint: {
	// 	ignoreDuringBuilds: true,
	// },
};

// This function makes URLs to lload images c$onfigurable:
function toRemotePattern(urlString) {
	const url = new URL(urlString);
	return {
		protocol: url.protocol.replace(":", ""),
		hostname: url.hostname,
		port: url.port,
		pathname: url.pathname,
	};
}
