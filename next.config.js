/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "image-optimizer-reg.production.sephora-asia.net",
      "s3-ap-southeast-1.amazonaws.com",
      "www.sephora.com",
      // "image-optimizer-reg.production.sephora-asia.net/images/product_images/",
    ],
  },
};

module.exports = nextConfig;
