import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle // Icône pour WhatsApp
} from 'lucide-react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Chatbot',
    'Automation',
    'Développement sur mesure',
    'Machine Learning',
    'Formation',
    'Conseils'
  ];

  const company = [
    { name: 'À propos', href: '/about' }, 
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const legal = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'CGV', href: '/cgv' }
  ];

  const socialLinks = [
    { 
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/237682036795'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/africoreai' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/africoreai' 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://web.facebook.com/people/AfriCore-AI/61568187999901/' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com/africoreai' 
    }
  ];

  const contact = [
    { 
      icon: Mail, 
      text: 'contact@africoreai.com',
      href: 'mailto:contact@africoreai.com'
    },
    { 
      icon: Phone, 
      text: '+237 6 82 03 67 95',
      href: 'tel:+237682036795'
    },
    { 
      icon: MapPin, 
      text: 'Yaoundé, Cameroun',
      href: 'https://maps.google.com/?q=Yaoundé,Cameroun'
    }
  ];

  return (
    <footer className="bg-[#151822] text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/images/africoreai-logo.png" 
                  alt="AfricoreAI" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-white">AfricoreAI</span>
              </div>
              
              <p className="text-gray-400 mb-6">
                Solutions d'Intelligence Artificielle innovantes pour l'Afrique. 
                Nous transformons les défis en opportunités grâce à la technologie.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Entreprise</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              {contact.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} AfricoreAI by Mucotech SARL. Tous droits réservés.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-4 text-sm">
              {legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;