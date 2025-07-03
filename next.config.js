/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: '',
  assetPrefix: '',
  images: {
    loader: 'imgix',
    path: '/',
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    const paths = ['/API/:path*'];

    return paths.map((path) => ({
      source: path,
      destination: `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    }));
  },
};

module.exports = nextConfig;
