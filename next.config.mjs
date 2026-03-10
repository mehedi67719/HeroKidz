/** @type {import('next').NextConfig} */
const nextConfig = {
 reactCompiler: true,
 images: {
   remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;