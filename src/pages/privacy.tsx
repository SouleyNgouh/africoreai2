import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#151822]">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Politique de Confidentialité</h1>
          
          <div className="space-y-8 text-gray-300">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Collecte des informations</h2>
              <p>
                Nous collectons les informations que vous nous fournissez directement lorsque vous :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remplissez un formulaire de contact</li>
                <li>Vous inscrivez à notre newsletter</li>
                <li>Utilisez nos services</li>
                <li>Interagissez avec notre site web</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Utilisation des informations</h2>
              <p>
                Les informations que nous collectons sont utilisées pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vous fournir nos services</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Communiquer avec vous</li>
                <li>Personnaliser votre expérience</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Protection des données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
                personnelles contre tout accès, modification, divulgation ou destruction non autorisée. 
                Ces mesures incluent le chiffrement des données, les pare-feu et les contrôles d'accès.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Vos droits</h2>
              <p>
                Conformément à la réglementation en vigueur, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez 
                configurer votre navigateur pour refuser tous les cookies ou pour être informé quand un 
                cookie est envoyé. Toutefois, certaines fonctionnalités du site pourraient ne pas 
                fonctionner correctement sans cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur le site. Nous vous 
                encourageons à consulter régulièrement cette page pour rester informé des éventuelles 
                modifications.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos 
                droits, vous pouvez nous contacter :
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>Par email : contact@africoreai.com</li>
                <li>Par téléphone : +237 6 82 03 67 95</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;