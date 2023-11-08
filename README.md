# nextjs-standalone-storybook-test

This is a test of the standalone export from NextJS when using storybook.

## Steps to recreate this project

Create the project

```bash
npx create-next-app@latest nextjs-standalone-storybook-test
cd nextjs-standalone-storybook-test/
```

Edit the `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone'
}

module.exports = nextConfig
```

Test the standalone build

```bash
$ npm run build
# ...
$ du -sh .next/standalone/node_modules/
23M     .next/standalone/node_modules/
```

Add storybook

```bash
npx storybook@latest init
```

Retest the standalone build

```bash
$ npm run build
# ...
$ du -sh .next/standalone/node_modules/
145M    .next/standalone/node_modules/
```

Since storybook adds no dependencies used in `app/`, the expectation is that 
this number would be the same as the previous build.

Setting `outputFileTracingExcludes` is a workaround

```js
const nextConfig = {
    output: 'standalone',
    experimental: {
        /**
        * Explicitly exclude `@swc/core*` folder from standalone output in `.next/standalone`.
        */
        outputFileTracingExcludes: {
            "**/*": ["./node_modules/@swc/core*"]
        }
    }
}
```
