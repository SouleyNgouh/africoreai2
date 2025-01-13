// components/sections/WhyUsSection.tsx  
import React from 'react';  
import { motion } from 'framer-motion';  
import {   
  Award,   
  Clock,   
  Users,   
  TrendingUp  
} from 'lucide-react';  

const WhyUsSection = () => {  
  const features = [  
    {  
      icon: Award,  
      title: "Innovation Continue",  
      description: "Développement constant de solutions IA avancées pour répondre aux besoins actuels et futurs",  
      stat: "Inno+",  
      statLabel: "Projets innovants"  
    },  
    {  
      icon: Clock,  
      title: "Réactivité Élevée",  
      description: "Capacité rapide à s'adapter et à fournir des solutions sur mesure en un temps record",  
      stat: "Rapide",  
      statLabel: "Temps de réponse"  
    },  
    {  
      icon: Users,  
      title: "Expertise Locale",  
      description: "Connaissance approfondie du marché local pour des solutions parfaitement adaptées",  
      stat: "Locale",  
      statLabel: "Compréhension du marché"  
    },  
    {  
      icon: TrendingUp,  
      title: "Croissance Dynamique",  
      description: "Expansion rapide avec des résultats tangibles et une amélioration continue",  
      stat: "Dynamique",  
      statLabel: "Croissance annuelle"  
    }  
  ];  

  const achievements = [  
    { label: "Projets Innovants", value: "10+" },  
    { label: "Clients Satisfaits", value: "100+" },  
    { label: "Startups Soutenues", value: "5+" },  
    { label: "Feedback Positif", value: "98%" }  
  ];  

  return (  
    <section id="why-us" className="py-20 relative overflow-hidden">  
      {/* Fond avec gradient */}  
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e]/95 to-[#1a1f2e]" />  

      {/* Contenu principal */}  
      <div className="container mx-auto px-4 relative z-10">  
        {/* En-tête de section */}  
        <motion.div  
          initial={{ opacity: 0, y: 20 }}  
          whileInView={{ opacity: 1, y: 0 }}  
          viewport={{ once: true }}  
          transition={{ duration: 0.6 }}  
          className="text-center mb-16"  
        >  
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">  
            Pourquoi Choisir Notre Expertise ?  
          </h2>  
          <p className="text-gray-300 max-w-2xl mx-auto">  
            Découvrez ce qui nous distingue et comment nous pouvons transformer   
            votre vision en réalité grâce à notre expertise en IA  
          </p>  
        </motion.div>  

        {/* Grille des caractéristiques */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">  
          {features.map((feature, index) => (  
            <motion.div  
              key={index}  
              initial={{ opacity: 0, y: 20 }}  
              whileInView={{ opacity: 1, y: 0 }}  
              viewport={{ once: true }}  
              transition={{ delay: index * 0.1 }}  
              whileHover={{ y: -5 }}  
              className="relative group"  
            >  
              <div className="h-full p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">  
                {/* Icône animée */}  
                <motion.div  
                  whileHover={{ scale: 1.1 }}  
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}  
                  className="mb-4"  
                >  
                  <feature.icon className="w-10 h-10 text-blue-400" />  
                </motion.div>  

                {/* Statistique */}  
                <div className="mb-3">  
                  <span className="text-3xl font-bold text-blue-400">  
                    {feature.stat}  
                  </span>  
                  <span className="text-sm text-gray-400 ml-2">  
                    {feature.statLabel}  
                  </span>  
                </div>  

                <h3 className="text-xl font-semibold text-white mb-2">  
                  {feature.title}  
                </h3>  
                <p className="text-gray-300">  
                  {feature.description}  
                </p>  

                {/* Effet de lueur au survol */}  
                <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />  
              </div>  
            </motion.div>  
          ))}  
        </div>  

        {/* Bannière de réalisations */}  
        {/* ... (votre code existant) */}  
      </div>  

      {/* Particules d'arrière-plan */}  
      {/* ... (votre code existant) */}  
    </section>  
  );  
}  

export default WhyUsSection;