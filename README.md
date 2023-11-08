# nextjs-standalone-storybook-test

This is a test of the standalone export from NextJS when using storybook.

## Steps to recreate this project

Create the project

        npx create-next-app@latest nextjs-standalone-storybook-test
        cd nextjs-standalone-storybook-test/

Edit the `next.config.js`

        /** @type {import('next').NextConfig} */
        const nextConfig = {
            output: 'standalone'
        }

        module.exports = nextConfig

Test the standalone build

        $ npm run build
        # ...
        $ du -sh .next/standalone/node_modules/
        23M     .next/standalone/node_modules/

Add storybook

        npx storybook@latest init

Retest the standalone build

        $ npm run build
        # ...
        $ du -sh .next/standalone/node_modules/
        145M    .next/standalone/node_modules/

Since storybook adds no dependencies used in `app/`, the expectation is that 
this number would be the same as the previous build.