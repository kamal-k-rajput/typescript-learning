/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kamalkishor.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "www.kamalkishor.in",
//         port: "",
//         pathname: "/account123/**",
//       },
//     ],
//   },
// };
export default nextConfig;
