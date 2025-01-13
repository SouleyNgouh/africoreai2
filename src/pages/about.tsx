import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header/Header';
import { 
  Target, 
  Eye, 
  Award,
  Users,
  Lightbulb,
  Code,
  Brain,
  Rocket,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Globe,
  Building2
} from 'lucide-react';
import { useRouter } from 'next/router';

const AboutPage: React.FC = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/#contact');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const stats = [
    { label: "Taux de satisfaction", value: "98%" },
    { label: "Clients satisfait", value: "100+" },
    { label: "Projets réalisés", value: "10+" },
    { label: "Entreprises clients", value: "5+" }
  ];

  const achievements = [
    "Expertise en développement d'IA",
    "Solutions innovantes adaptées au contexte local",
    "Équipe d'experts passionnés",
    "Impact social positif"
  ];

  return (
    <div className="min-h-screen bg-[#151822]">
      <Header />
      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Façonner l'avenir de l'IA en Afrique
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AfricoreAI est une entreprise innovante spécialisée dans le développement 
              de solutions d'intelligence artificielle adaptées aux besoins spécifiques 
              du continent africain.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section 
        className="py-16 bg-[#1a1f2d]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-transparent"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4 mb-6">
                <Target className="h-8 w-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Notre Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8">
                Démocratiser l'accès à l'intelligence artificielle en Afrique en développant 
                des solutions innovantes et accessibles qui répondent aux défis spécifiques 
                du continent.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-transparent"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="h-8 w-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Notre Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8">
                Devenir le leader africain des solutions d'intelligence artificielle, 
                reconnu pour notre expertise, notre innovation et notre impact positif 
                sur le développement du continent.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Croissance</h3>
                  <p className="text-gray-400 text-sm">Expansion continue sur le marché africain</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <Globe className="h-8 w-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Impact</h3>
                  <p className="text-gray-400 text-sm">Transformation digitale de l'Afrique</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <Users className="h-8 w-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Formation</h3>
                  <p className="text-gray-400 text-sm">Développement des talents locaux</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-400 text-sm">Centre d'excellence en IA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Roadmap Section */}
      <motion.section 
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Notre Feuille de Route
            </h2>
            <p className="text-gray-400">
              Créée en 2024, AfricoreAI se lance avec une vision ambitieuse 
              pour révolutionner l'IA en Afrique.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900/50" />
            <div className="space-y-12">
              {[
                {
                  year: "2024 T1-T2",
                  title: "Lancement d'AfricoreAI",
                  description: "Création de l'entreprise et développement de nos premières solutions d'IA",
                  status: "En cours"
                },
                {
                  year: "2024 T3-T4",
                  title: "Développement Local",
                  description: "Établissement de partenariats stratégiques au Cameroun et premiers projets clients",
                  status: "À venir"
                },
                {
                  year: "2025 T1",
                  title: "Formation & Solutions",
                  description: "Lancement de notre programme de formation et développement de solutions personnalisées",
                  status: "Planifié"
                },
                {
                  year: "2025 T2",
                  title: "Expansion Initiale",
                  description: "Premiers pas vers l'expansion dans les pays voisins d'Afrique centrale",
                  status: "Objectif"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center`}
                  variants={itemVariants}
                >
                  <div className="w-1/2 pr-8 text-right">
                    {index % 2 === 0 && (
                      <div className="bg-gradient-to-r from-blue-900/30 to-transparent p-6 rounded-lg">
                        <div className="flex items-center justify-end space-x-2 mb-2">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-2">{item.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          item.status === "En cours" 
                            ? "bg-green-500/20 text-green-400"
                            : item.status === "À venir"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="relative flex items-center justify-center w-8">
                    <div className={`h-8 w-8 rounded-full z-10 ${
                      item.status === "En cours"
                        ? "bg-green-500"
                        : "bg-blue-500/50"
                    }`}>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8">
                    {index % 2 !== 0 && (
                      <div className="bg-gradient-to-l from-purple-900/30 to-transparent p-6 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-2">{item.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          item.status === "En cours" 
                            ? "bg-green-500/20 text-green-400"
                            : item.status === "À venir"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-transparent"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à innover avec nous ?
            </h2>
            <p className="text-gray-400 mb-8">
              Découvrez comment nos solutions d'IA peuvent transformer votre entreprise 
              et contribuer au développement technologique de l'Afrique.
            </p>
            <motion.button
              onClick={handleContactClick}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contactez-nous</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;