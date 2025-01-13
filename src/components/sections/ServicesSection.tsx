
// components/sections/ServicesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ServiceCard';
import {
  Brain,
  MessageCircle,
  Cog,
  Cpu,
  BookOpen,
  Users
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "IA Générative",
      description: "Exploitez la puissance des modèles d'IA générative pour créer du contenu unique, des analyses prédictives et des solutions innovantes adaptées à votre marché.",
      Icon: Brain,
      color: "#3b82f6",
      features: ["Génération de contenu", "Analyse prédictive", "Modèles personnalisés"]
    },
    {
      title: "Chatbots Personnalisés",
      description: "Offrez un support client 24/7 et améliorez l’engagement grâce à des agents conversationnels intelligents et adaptés à vos besoins spécifiques.",
      Icon: MessageCircle,
      color: "#10b981",
      features: ["Support client 24/7", "Engagement amélioré", "Personnalisation avancée"]
    },
    {
      title: "Automatisation Intelligente",
      description: "Optimisez vos processus métier grâce à l'automatisation basée sur l'IA, augmentant votre efficacité opérationnelle et réduisant les coûts.",
      Icon: Cog,
      color: "#f59e0b",
      features: ["Workflow automatisé", "Optimisation des processus", "Réduction des coûts"]
    },
    {
      title: "Machine Learning",
      description: "Exploitez la puissance de l’apprentissage automatique pour analyser et prédire vos données, facilitant ainsi la prise de décision stratégique.",
      Icon: Cpu,
      color: "#8b5cf6",
      features: ["Analyse prédictive", "Algorithmes sur mesure", "Intégration transparente"]
    },
    {
      title: "Formation",
      description: "Développez l’expertise de vos équipes en IA à travers nos programmes de formation ciblés, adaptés à tous les niveaux de compétence.",
      Icon: BookOpen,
      color: "#ec4899",
      features: ["Formation technique", "Ateliers pratiques", "Certification"]
    },
    {
      title: "Conseil",
      description: "Définissez votre stratégie IA et data en vous appuyant sur notre expertise sectorielle et technique, pour une transformation digitale réussie.",
      Icon: Users,
      color: "#6366f1",
      features: ["Audit & Analyse", "Roadmap stratégique", "Accompagnement personnalisé"]
    }
  ];

  return (
    <section className="py-24 relative bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Nos Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des services innovants et sur mesure pour accompagner votre transformation digitale 
            et exploiter pleinement le potentiel de l'intelligence artificielle.
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-500/10 to-transparent" />
      </div>
    </section>
  );
};

export default ServicesSection;

