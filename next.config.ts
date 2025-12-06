/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',

// as cpanel doesnt soupprt image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;