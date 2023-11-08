/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
		/**
		 * Explicitly exclude `@swc/core*` folder from standalone output in `.next/standalone`.
		 */
		// outputFileTracingExcludes: {
		// 	"**/*": ["./node_modules/@swc/core*"]
		// }
	}
}

module.exports = nextConfig
