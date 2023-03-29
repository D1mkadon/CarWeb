/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "imageio.forbes.com",
      "upload.wikimedia.org",
      "imgr1.auto-motor-und-sport.de",
      "hips.hearstapps.com",
      "cdn1.mecum.com",
      "cdn.prod.www.manager-magazin.de",
      "springerfachmedien.azureedge.net",
      "media1.faz.net",
      "speedhunters-wp-production.s3.amazonaws.com",
      "localhost",
      "cdn.motor1.com",
      "media.ed.edmunds-media.com",
      "media.autoexpress.co.uk",
      "ecomento.de",
      "www.topgear.com",
    ],
  },
};

module.exports = nextConfig;
