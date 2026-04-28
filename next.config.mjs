/** @type {import('next').NextConfig} */

import withMDX from "@next/mdx";

const nextConfig = withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
})

export default nextConfig;
