import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const services = [
  'Chatbot',
  'Automation',
  'Développement sur mesure',
  'Machine Learning',
  'Formation',
  'Conseils',
  'Autre'
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    clientType: 'particular',
    companyName: '',
    service: '',
    otherService: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a7ecd4dc-6599-4d92-9ffc-58738fca1150',
          from_name: formData.fullName,
          subject: `Nouveau contact de ${formData.fullName} - ${formData.service}`,
          client_type: formData.clientType,
          company: formData.clientType === 'enterprise' ? formData.companyName : 'N/A',
          service: formData.service,
          other_service: formData.service === 'Autre' ? formData.otherService : 'N/A',
          message: formData.message,
          email: formData.email
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Réinitialiser le formulaire
        setFormData({
          fullName: '',
          email: '',
          clientType: 'particular',
          companyName: '',
          service: '',
          otherService: '',
          message: ''
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition-colors duration-300";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#151822] to-[#1a1f2e]">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 inline-block">
              Contact
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Contactez-nous
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Laissez-nous un message, nous reviendrons rapidement vers vous !
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom complet */}
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  Nom complet <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Votre nom complet"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="votre@email.com"
                />
              </div>

              {/* Type de client */}
              <div>
                <label className={labelClasses}>
                  Type de client <span className="text-blue-400">*</span>
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="clientType"
                      value="particular"
                      checked={formData.clientType === 'particular'}
                      onChange={handleChange}
                      className="form-radio text-blue-500 focus:ring-blue-500 bg-transparent border-white/30"
                    />
                    <span className="text-gray-300">Particulier</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="clientType"
                      value="enterprise"
                      checked={formData.clientType === 'enterprise'}
                      onChange={handleChange}
                      className="form-radio text-blue-500 focus:ring-blue-500 bg-transparent border-white/30"
                    />
                    <span className="text-gray-300">Entreprise</span>
                  </label>
                </div>
              </div>

              {/* Nom de l'entreprise (conditionnel) */}
              {formData.clientType === 'enterprise' && (
                <div>
                  <label htmlFor="companyName" className={labelClasses}>
                    Nom de l'entreprise <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              )}

              {/* Service */}
              <div>
                <label htmlFor="service" className={labelClasses}>
                  Service concerné <span className="text-blue-400">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="" disabled>Sélectionnez un service</option>
                  {services.map((service, index) => (
                    <option 
                      key={index} 
                      value={service}
                      className="bg-[#1a1f2e] text-white"
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Autre service (conditionnel) */}
              {formData.service === 'Autre' && (
                <div>
                  <label htmlFor="otherService" className={labelClasses}>
                    Précisez le service <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="otherService"
                    name="otherService"
                    value={formData.otherService}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Décrivez le service souhaité"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${inputClasses} resize-none`}
                  placeholder="Votre message..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-4 px-6 rounded-lg font-semibold flex 
                  items-center justify-center space-x-2 transition-all duration-300
                  ${isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'
                  }
                `}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-spin' : ''}`} />
              </motion.button>

              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 text-green-400 p-4 rounded-lg text-center"
                >
                  Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 text-red-400 p-4 rounded-lg text-center"
                >
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;