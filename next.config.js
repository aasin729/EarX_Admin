/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: '', //isProd ? '/nowa/preview' : undefined,
  assetPrefix: '', //isProd ? 'https://nextjs.spruko.com/nowa/preview/' : undefined,
  images: {
    loader: 'imgix',
    path: '/',
  },
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    const paths = ['/auth/logout', '/auth/login'];

    return paths.map((path) => ({
      source: path,
      destination: `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    }));
  },
};

module.exports = nextConfig;
