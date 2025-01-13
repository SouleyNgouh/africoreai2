import React from 'react';
import { motion } from 'framer-motion';

const MentionsLegales: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#151822]">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Mentions Légales</h1>
          
          <div className="space-y-8 text-gray-300">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Informations légales</h2>
              <p>
                Le site africoreai.com est édité par la société Mucotech SARL, société à responsabilité limitée.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Siège social : Yaoundé, Cameroun</li>
                <li>Téléphone : +237 6 82 03 67 95</li>
                <li>Email : contact@africoreai.com</li>
                <li>RCCM : RC/YAO/2019/B/690</li>
                <li>NUI : M042115978274Y</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Hébergement</h2>
              <p>
                Le site africoreai.com est hébergé par Hostinger.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive 
                de Mucotech SARL ou de ses partenaires. Toute reproduction, représentation, modification, 
                publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, 
                par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sauf 
                autorisation écrite préalable de Mucotech SARL.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Cookies</h2>
              <p>
                Le site utilise des cookies pour améliorer l'expérience utilisateur. En navigant sur ce 
                site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Responsabilité</h2>
              <p>
                Mucotech SARL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées 
                sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans 
                préavis. Toutefois, Mucotech SARL ne peut garantir l'exactitude, la précision ou 
                l'exhaustivité des informations mises à disposition sur ce site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Loi applicable</h2>
              <p>
                Les présentes mentions légales sont soumises au droit camerounais. En cas de litige, 
                les tribunaux camerounais seront seuls compétents.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentionsLegales;