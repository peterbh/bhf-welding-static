import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  basePath: '/bhf-welding-static',
};

export default withVanillaExtract(nextConfig);
