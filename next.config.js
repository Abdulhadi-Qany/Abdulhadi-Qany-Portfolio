/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const nextConfig = {
    output: 'export',
    bundlePagesRouterDependencies: true,
    serverExternalPackages: ['react-activity-calendar', 'react-github-calendar'],
    images: {
        unoptimized: true
    },
    turbopack: {
        root: __dirname,
    }
}

module.exports = nextConfig
