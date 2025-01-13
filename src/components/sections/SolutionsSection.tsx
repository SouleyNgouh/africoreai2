
// src/components/sections/SolutionsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import SolutionCard from '../SolutionCard';
import {
  MessageSquare,
  BarChart3,
  FileText,
} from 'lucide-react';

interface Solution {
  title: string;
  subtitle: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  features: string[];
}

const SolutionsSection: React.FC = () => {
  const solutions: Solution[] = [
    {
      title: "AfriAssist",
      subtitle: "Assistant IA Multilingue",
      description: "Chatbot intelligent adapté au contexte africain, capable de communiquer en plusieurs langues et de gérer le service client de manière autonome.",
      Icon: MessageSquare,
      color: "#3b82f6",
      features: [
        "Support multilingue (français, anglais)",
        "Intégration WhatsApp et Telegram",
        "Apprentissage continu",
        "Personnalisation par secteur d'activité",
      ],
    },
    {
      title: "AfriInsight",
      subtitle: "Analytics & Prédictions",
      description: "Plateforme d'analyse prédictive conçue pour le marché africain, offrant des insights précieux pour la prise de décision.",
      Icon: BarChart3,
      color: "#10b981",
      features: [
        "Dashboard interactif personnalisable",
        "Prévisions basées sur l'IA",
        "Rapports automatisés",
        "Visualisation de données avancée",
      ],
    },
    {
      title: "AfriForm",
      subtitle: "Automatisation Documentaire",
      description: "Solution d'automatisation du traitement des documents et formulaires, adaptée aux besoins spécifiques des entreprises africaines.",
      Icon: FileText,
      color: "#8b5cf6",
      features: [
        "Extraction automatique de données",
        "Classification intelligente",
        "Génération de rapports",
        "Workflow personnalisable",
      ],
    },
  ];

  return (
    <section className="py-24 relative bg-gray-900 overflow-hidden" id="solutions">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Nos Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions innovantes prêtes à l'emploi, conçues spécifiquement pour
            répondre aux besoins du marché africain.
          </p>
        </motion.div>

        {/* Grille des solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>

      {/* Éléments décoratifs d'arrière-plan avec animation */}
      <div className="absolute inset-0 -z-10">
        {/* Dégradé animé de droite à gauche */}
        <motion.div
          className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent"
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        {/* Dégradé animé de gauche à droite */}
        <motion.div
          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-500/10 to-transparent"
          animate={{ x: [50, -50, 50] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
};

export default SolutionsSection;

