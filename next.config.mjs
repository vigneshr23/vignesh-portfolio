/** @type {import('next').NextConfig} */

import withMDX from "@next/mdx";

const nextConfig = withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "iili.io" },
        ],
    },
})

export default nextConfig;
