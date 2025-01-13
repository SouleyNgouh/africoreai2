// components/Header.tsx  
import { useState, useEffect } from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import { Menu, X } from 'lucide-react';  
import { motion } from 'framer-motion';  

const Header = () => {  
  const [isOpen, setIsOpen] = useState(false);  
  const [scrolled, setScrolled] = useState(false);  

  useEffect(() => {  
    const handleScroll = () => {  
      setScrolled(window.scrollY > 0);  
    };  
    window.addEventListener('scroll', handleScroll);  
    return () => window.removeEventListener('scroll', handleScroll);  
  }, []);  

  const NavItem = ({ href, children }) => {  
    return (  
      <Link   
        href={href}  
        className={`relative px-3 py-2 transition-all duration-300   
          ${scrolled ? 'text-gray-800' : 'text-white'}   
          hover:text-blue-500 group`}  
      >  
        {children}  
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>  
      </Link>  
    );  
  };  

  return (  
    <header className={`fixed w-full z-50 transition-all duration-300 ${  
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'  
    }`}>  
      <div className="container mx-auto px-4">  
        <div className="flex items-center justify-between h-20">  
          {/* Logo */}  
          <Link href="/" className="flex items-center space-x-3">  
            <div className="relative w-10 h-10">  
              <Image  
                src="/images/africoreai-logo.png"  
                alt="AfriCoreAI Logo"  
                fill  
                style={{ objectFit: 'contain' }}  
                priority  
              />  
            </div>  
            <span className={`text-2xl font-bold ${  
              scrolled ? 'text-blue-600' : 'text-white'  
            }`}>  
              AfriCoreAI  
            </span>  
          </Link>  

          {/* Desktop Navigation */}  
          <nav className="hidden md:flex items-center space-x-6">  
            <NavItem href="/">Accueil</NavItem>  
            <NavItem href="/#services">Services</NavItem>  
            <NavItem href="/#solutions">Solutions</NavItem>  
            <NavItem href="/#why-us">Pourquoi nous</NavItem>  
            <NavItem href="/#testimonials">Témoignages</NavItem>  
            <NavItem href="about">À propos</NavItem>  
            <NavItem href="/#contact">Contact</NavItem>  
            <Link   
              href="/get-started"  
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105  
                ${scrolled   
                  ? 'bg-blue-600 text-white hover:bg-blue-700'   
                  : 'bg-white text-blue-600 hover:bg-gray-100'  
                }`}  
            >  
              Démarrer  
            </Link>  
          </nav>  

          {/* Mobile Menu Button */}  
          <div className="md:hidden">  
            <button  
              onClick={() => setIsOpen(!isOpen)}  
              className={`p-2 rounded-md transition-colors duration-300   
                ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}  
            >  
              {isOpen ? (  
                <X className="h-6 w-6" />  
              ) : (  
                <Menu className="h-6 w-6" />  
              )}  
            </button>  
          </div>  
        </div>  

        {/* Mobile Navigation */}  
        <motion.div  
          initial={false}  
          animate={{ height: isOpen ? 'auto' : 0 }}  
          className={`md:hidden overflow-hidden ${  
            scrolled ? 'bg-white' : 'bg-gray-900/95'  
          } ${isOpen ? 'pb-4' : ''}`}  
        >  
          <div className="flex flex-col space-y-4">  
            <Link   
              href="/"  
              className={`px-4 py-2 ${  
                scrolled   
                  ? 'text-gray-800 hover:bg-gray-100'   
                  : 'text-white hover:bg-white/10'  
              } rounded-md transition-colors duration-300`}  
              onClick={() => setIsOpen(false)}  
            >  
              Accueil  
            </Link>  
            <Link   
              href="/#services"  
              className={`px-4 py-2 ${  
                scrolled   
                  ? 'text-gray-800 hover:bg-gray-100'   
                  : 'text-white hover:bg-white/10'  
              } rounded-md transition-colors duration-300`}  
              onClick={() => setIsOpen(false)}  
            >  
              Services  
            </Link>  
            <Link   
              href="/#solutions"  
              className={`px-4 py-2 ${  
                scrolled   
                  ? 'text-gray-800 hover:bg-gray-100'   
                  : 'text-white hover:bg-white/10'  
              } rounded-md transition-colors duration-300`}  
              onClick={() => setIsOpen(false)}  
            >  
              Solutions  
            </Link>  
            <Link   
              href="/#why-us"  
              className={`px-4 py-2 ${  
                scrolled   
                  ? 'text-gray-800 hover:bg-gray-100'   
                  : 'text-white hover:bg-white/10'  
              } rounded-md transition-colors duration-300`}  
              onClick={() => setIsOpen(false)}  
            >  
              Pourquoi nous  
            </Link>  
            <Link   
              href="/#testimonials"  
              className={`px-4 py-2 ${  
                scrolled   
                  ? 'text-gray-800 hover:bg-gray-100'   
                  : 'text-white hover:bg-white/10'  
              } rounded-md transition-colors duration-300`}  
              onClick={() => setIsOpen(false)}  
            >  
              Témoignages  
            </Link>  
            <Link   
              href="/about"  
              className={`px-4 py-2 ${  
                scrolled   
                  ? 'text-gray-800 hover:bg-gray-100'   
                  : 'text-white hover:bg-white/10'  
              } rounded-md transition-colors duration-300`}  
              onClick={() => setIsOpen(false)}  
            >  
              À propos  
            </Link>  
            <Link   
              href="/#contact"  
              className={`px-4 py-2 ${  
                scrolled   
                  ? 'text-gray-800 hover:bg-gray-100'   
                  : 'text-white hover:bg-white/10'  
              } rounded-md transition-colors duration-300`}  
              onClick={() => setIsOpen(false)}  
            >  
              Contact  
            </Link>  
            <Link   
              href="/get-started"  
              className={`mx-4 px-6 py-2 rounded-full text-center transition-colors duration-300  
                ${scrolled   
                  ? 'bg-blue-600 text-white hover:bg-blue-700'   
                  : 'bg-white text-blue-600 hover:bg-gray-100'  
                }`}  
              onClick={() => setIsOpen(false)}  
            >  
              Démarrer  
            </Link>  
          </div>  
        </motion.div>  
      </div>  
    </header>  
  );  
};  

export default Header;