import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   experimental: {
      agentFeedback: true,
   },
   cacheComponents: true,
   partialPrefetching: true,
   turbopack: {
      rules: {
         "*.css": {
            loaders: ["@tailwindcss/turbopack"],
            as: "*.css",
         },
         "*.svg": {
            loaders: ["@svgr/webpack"],
            as: "*.js",
            condition: {
               query: "?react",
            },
         },
      },
   },
   images: {
      remotePatterns: [new URL("https://optim.tildacdn.com/**")],
      qualities: [100, 75],
   },
};

export default nextConfig;
