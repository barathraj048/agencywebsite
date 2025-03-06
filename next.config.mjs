/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export (GitHub Pages)
  trailingSlash: true, // Ensures proper routing
  images: {
    unoptimized: true, // Fixes Next.js image loading issues
  },
};

export default nextConfig;
