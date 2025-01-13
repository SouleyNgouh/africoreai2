import React from 'react';
import { motion } from 'framer-motion';

const CGV: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#151822]">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Conditions Générales de Vente</h1>
          
          <div className="space-y-8 text-gray-300">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Objet et champ d'application</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations 
                de services conclues par AfricoreAI, branche de Mucotech SARL, société de droit camerounais, auprès de ses clients 
                professionnels ou particuliers, quelles que soient les clauses pouvant figurer sur les 
                documents du Client.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Services proposés</h2>
              <p>
              AfricoreAI propose les services suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Développement de chatbots</li>
                <li>Solutions d'automatisation</li>
                <li>Développement sur mesure</li>
                <li>Services de Machine Learning</li>
                <li>Formation en Intelligence Artificielle</li>
                <li>Conseil en transformation digitale</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Devis et commandes</h2>
              <p>
                Pour chaque prestation, un devis détaillé est établi gratuitement. Le devis est valable 
                pendant 30 jours à compter de sa date d'émission. La commande est considérée comme 
                définitive après :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Réception du devis signé avec la mention "Bon pour accord"</li>
                <li>Versement de l'acompte spécifié dans le devis (si applicable)</li>
                <li>Réception des informations et documents nécessaires à la réalisation de la prestation</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Prix et modalités de paiement</h2>
              <p>
                Les prix sont exprimés en FCFA et sont soumis à la TVA en vigueur. Les modalités de 
                paiement sont les suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>40% d'acompte à la commande</li>
                <li>30% au jalon intermédiaire défini dans le devis</li>
                <li>30% à la livraison</li>
              </ul>
              <p>
                Le paiement s'effectue par virement bancaire, Mobile Money, ou tout autre moyen 
                convenu entre les parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Délais de livraison</h2>
              <p>
                Les délais de livraison sont indiqués dans le devis et commencent à courir à partir de :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>La réception de l'acompte</li>
                <li>La fourniture par le Client de l'ensemble des éléments nécessaires</li>
                <li>La validation du cahier des charges</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Propriété intellectuelle</h2>
              <p>
                Le transfert de propriété des développements réalisés n'est effectif qu'après le paiement 
                intégral du prix. Les droits d'utilisation des solutions développées sont définis dans 
                le devis et/ou le contrat de prestation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Garantie et maintenance</h2>
              <p>
                Nos prestations bénéficient d'une garantie de 3 mois à compter de la livraison. Cette 
                garantie couvre les bugs et dysfonctionnements, mais ne s'applique pas aux modifications 
                demandées par le Client après la livraison.
              </p>
              <p>
                Des contrats de maintenance peuvent être proposés séparément pour assurer le suivi et 
                l'évolution des solutions développées.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Confidentialité</h2>
              <p>
                Chaque partie s'engage à maintenir confidentielles les informations et documents de 
                l'autre partie dont elle aurait eu connaissance avant, pendant ou après la réalisation 
                de la prestation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">9. Responsabilité</h2>
              <p>
                La responsabilité de Mucotech SARL ne pourra être engagée qu'en cas de faute prouvée 
                et est limitée au montant HT payé par le Client pour la prestation concernée.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">10. Résiliation</h2>
              <p>
                En cas de manquement par l'une des parties à l'une de ses obligations, le contrat 
                pourra être résilié de plein droit 30 jours après l'envoi d'une mise en demeure 
                restée sans effet.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">11. Droit applicable et juridiction</h2>
              <p>
                Les présentes CGV sont soumises au droit camerounais. Tout litige relatif à leur 
                interprétation ou leur exécution relève de la compétence exclusive des tribunaux 
                de Yaoundé.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">12. Contact</h2>
              <p>
                Pour toute question relative à ces CGV, vous pouvez nous contacter :
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

export default CGV;