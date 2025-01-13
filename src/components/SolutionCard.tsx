
// src/components/SolutionCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Icon as LucideIcon } from 'lucide-react';

interface SolutionProps {
  title: string;
  subtitle: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  features: string[];
}

const SolutionCard: React.FC<SolutionProps> = ({
  title,
  subtitle,
  description,
  Icon,
  color,
  features,
}) => {
  // Déterminer le texte du bouton en fonction du titre de la solution
  const getButtonText = (): string => {
    switch (title) {
      case 'AfriAssist':
        return 'Demander un test';
      case 'AfriInsight':
        return 'Découvrir';
      case 'AfriForm':
        return 'Commander';
      default:
        return 'En savoir plus';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Carte de la solution */}
      <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
        {/* Icône */}
        <div className="relative mb-6">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon
              size={32}
              className="transition-transform duration-300 group-hover:scale-110"
              style={{ color }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Contenu */}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm font-medium text-blue-400 mb-4">{subtitle}</p>
        <p className="text-gray-400 mb-6">{description}</p>

        {/* Caractéristiques */}
        <div className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-300">
              <div
                className="w-1.5 h-1.5 rounded-full mr-2"
                style={{ backgroundColor: color }}
              />
              {feature}
            </div>
          ))}
        </div>

        {/* Bouton d'action */}
        <button
          className="mt-6 w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: `${color}15`,
            color: color,
            border: `1px solid ${color}30`,
          }}
          aria-label={`Action pour ${title}`}
        >
          {getButtonText()}
        </button>
      </div>
    </motion.div>
  );
};

export default SolutionCard;

