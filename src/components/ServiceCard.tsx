
// components/ServiceCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, Icon, color, features }) => {
  return (
    <div className="h-full p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 relative group">
      {/* Icône animée */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="mb-4"
      >
        <Icon className="w-10 h-10" style={{ color }} />
      </motion.div>

      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300 mb-4">
        {description}
      </p>

      {/* Liste des fonctionnalités */}
      <ul className="text-gray-400 list-disc list-inside mb-4">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {/* Effet de lueur au survol */}
      <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ServiceCard;

