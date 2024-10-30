// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };
// module.exports = {
//   images: {
//     domains: ['syncedreview.com'], ["aceternity.com"].// Add the domain of your external image source here
//   },
// };
// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['syncedreview.com', 'aceternity.com','miro.medium.com','img-c.udemycdn.com'], // Add the domains of your external image sources here
  },
  // You can add other config options here as needed
};

export default nextConfig;