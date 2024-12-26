import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Katı modda hataları tespit etmek için
  output: "export",      // Statik dosya çıktısı oluşturmak için
  images: {
    domains: ["example.com"], // Dışardan yüklenebilecek resimlerin domainleri
    unoptimized: true,
  },
  webpack: (config) => {
    // Webpack yapılandırmanızı özelleştirmek isterseniz:
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": "./components",
      "@/utils": "./utils",
    };
    return config;
  },
};

export default nextConfig;
