/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Désactivez temporairement les optimisations problématiques
  experimental: {
    optimizeCss: false, // Désactivé pour éviter les problèmes avec critters
  },

  // Configuration des images
  images: {
    domains: [], // Ajoutez vos domaines d'images si nécessaire
    unoptimized: true // Désactivez temporairement l'optimisation des images
  },

  // Gestion des erreurs
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;