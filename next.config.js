// /** @type {import('next').NextConfig} */

// const nextConfig = {};
// const nextConfigWithSvgr = (nextConfig = {}) => {
//   return {
//     ...nextConfig,
//     webpack(config, options) {
//        const fileLoaderRule = config.module.rules.find((rule) =>
//          rule.test?.test?.(".svg")
//        );
//       config.module.rules.push(
//         // Reapply the existing rule, but only for svg imports ending in ?url
//         {
//           ...fileLoaderRule,
//           test: /\.svg$/i,
//           resourceQuery: /url/, // *.svg?url
//         },
//         // Convert all other *.svg imports to React components
//         {
//           test: /\.svg$/i,
//           issuer: /\.[jt]sx?$/,
//           resourceQuery: { not: /url/ }, // exclude if *.svg?url
//           use: ["@svgr/webpack"],
//         }
//       );

//       if (typeof nextConfig.webpack === "function") {
//         return nextConfig.webpack(config, options);
//       }
// fileLoaderRule.exclude = /\.svg$/i;
//       return config;
//     },
//   };
// };

// module.exports =nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig