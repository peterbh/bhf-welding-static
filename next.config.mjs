import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    loader: 'akamai',
    path: '/bhf-welding-static',
  },
  assetPrefix: '/bhf-welding-static',
  basePath: '/bhf-welding-static',
};

export default withVanillaExtract(nextConfig);
