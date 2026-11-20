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
      remotePatterns: [
         // new URL("https://optim.tildacdn.com/**"),
         new URL("https://optim.tildacdn.com/**"),
         new URL(process.env.IMAGE_BUCKET + "/**"),
      ],
      qualities: [100, 75],
   },
   output: "standalone",
};

export default nextConfig;
