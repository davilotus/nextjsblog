/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
      },
    ],
  },
};
