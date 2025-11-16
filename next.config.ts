/** next.config.js */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tvmaze.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
