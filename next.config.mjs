/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 
  images: {
    domains: ['example.com'],
    unoptimized: true,
  },
  output: 'standalone',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

// Change this line to use ES module export
export default nextConfig;