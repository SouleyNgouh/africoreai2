// components/sections/HeroSection.jsx  
import React, { useMemo } from 'react';  
import { motion } from 'framer-motion';  
import { Users, Star, Briefcase, Sparkles } from 'lucide-react';  
import Image from 'next/image';  

const HeroSection = () => {  
  const stats = useMemo(() => [  
    { icon: Users, value: "100+", label: "Clients satisfaits" },  
    { icon: Star, value: "98%", label: "Taux de satisfaction" },  
    { icon: Briefcase, value: "10+", label: "Projets réalisés" }  
  ], []);  

  return (  
    <section className="relative min-h-screen bg-[#1a1f2e]">  
      {/* Background avec l'image */}  
      <div className="absolute inset-0 overflow-hidden">  
        <div className="absolute inset-0 bg-[#1a1f2e]" />  
        
        {/* Container de l'image héro avec animations */}  
        <motion.div  
          initial={{ opacity: 0, scale: 0.95 }}  
          animate={{ opacity: 1, scale: 1 }}  
          transition={{ duration: 1 }}  
          className="absolute top-0 right-0 w-[45%] h-full"  
        >  
          <div className="relative h-full">  
            {/* Image principale avec animation de flottement */}  
            <motion.div  
              className="relative h-full"  
              animate={{  
                y: [-15, 15, -15],  
              }}  
              transition={{  
                duration: 4,  
                repeat: Infinity,  
                ease: "easeInOut"  
              }}  
            >  
              <Image  
                src="/images/hero-illustration.png"  
                alt="AI Technology in Africa"  
                fill  
                className="object-contain object-right"  
                priority  
              />  
            </motion.div>  

            {/* Cercles lumineux animés autour de l'image */}  
            {[...Array(3)].map((_, i) => (  
              <motion.div  
                key={i}  
                className="absolute rounded-full"  
                style={{  
                  width: `${200 + i * 100}px`,  
                  height: `${200 + i * 100}px`,  
                  border: '2px solid rgba(59, 130, 246, 0.5)',  
                  top: '50%',  
                  right: '30%',  
                  transform: 'translate(50%, -50%)',  
                }}  
                animate={{  
                  rotate: 360,  
                  scale: [1, 1.2, 1],  
                }}  
                transition={{  
                  rotate: {  
                    duration: 10 + i * 3,  
                    repeat: Infinity,  
                    ease: "linear"  
                  },  
                  scale: {  
                    duration: 1,  
                    repeat: Infinity,  
                    ease: "easeInOut"  
                  }  
                }}  
              />  
            ))}  

            {/* Points lumineux qui se déplacent */}  
            {[...Array(10)].map((_, i) => (  
              <motion.div  
                key={`dot-${i}`}  
                className="absolute w-3 h-3 bg-blue-400 rounded-full"  
                style={{  
                  top: `${Math.random() * 100}%`,  
                  right: `${20 + Math.random() * 40}%`,  
                }}  
                animate={{  
                  y: [-30, 30],  
                  x: [-30, 30],  
                  opacity: [0, 1, 0],  
                  scale: [0, 1.5, 0],  
                }}  
                transition={{  
                  duration: 2 + Math.random() * 2,  
                  repeat: Infinity,  
                  ease: "easeInOut",  
                  delay: Math.random() * 2,  
                }}  
              />  
            ))}  

            {/* Effet de réseau neuronal */}  
            <div className="absolute inset-0">  
              {[...Array(5)].map((_, i) => (  
                <motion.div  
                  key={`line-${i}`}  
                  className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent"  
                  style={{  
                    top: `${20 + Math.random() * 60}%`,  
                    right: `${20 + Math.random() * 60}%`,  
                    transform: `rotate(${Math.random() * 180}deg)`,  
                  }}  
                  animate={{  
                    opacity: [0, 1, 0],  
                    scaleY: [0.8, 1.5, 0.8],  
                  }}  
                  transition={{  
                    duration: 2 + Math.random() * 2,  
                    repeat: Infinity,  
                    ease: "easeInOut",  
                    delay: Math.random() * 2,  
                  }}  
                />  
              ))}  
            </div>  

            {/* Effet de fondu sur les bords */}  
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-transparent to-transparent" />  
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-50" />  

            {/* Effet de lueur pulsante */}  
            <motion.div  
              className="absolute inset-0 bg-blue-400/10 rounded-full blur-3xl"  
              animate={{  
                opacity: [0.3, 0.6, 0.3],  
                scale: [0.9, 1.1, 0.9],  
              }}  
              transition={{  
                duration: 3,  
                repeat: Infinity,  
                ease: "easeInOut",  
              }}  
              style={{  
                right: '30%',  
                transform: 'translateX(50%)',  
              }}  
            />  
          </div>  
        </motion.div>  

        {/* Particules d'arrière-plan */}  
        {[...Array(30)].map((_, i) => (  
          <motion.div  
            key={`particle-${i}`}  
            className="absolute w-2 h-2 bg-blue-400/50 rounded-full"  
            style={{  
              top: `${Math.random() * 100}%`,  
              left: `${Math.random() * 100}%`,  
            }}  
            animate={{  
              y: [0, -100],  
              opacity: [0, 1, 0],  
            }}  
            transition={{  
              duration: 5 + Math.random() * 5,  
              repeat: Infinity,  
              ease: "linear",  
              delay: Math.random() * 5,  
            }}  
          />  
        ))}  
      </div>  

      {/* Le reste du contenu (texte et stats) reste identique */}  
      <div className="relative container mx-auto px-4 pt-32 pb-20">  
        <div className="max-w-2xl">  
          <motion.div  
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.6, delay: 0.5 }}  
          >  
            <div className="relative mb-8">  
              <Sparkles className="absolute -left-8 -top-8 w-6 h-6 text-blue-400 animate-pulse" />  
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">  
                <span className="block text-white">Transformez votre</span>  
                <span className="block text-white">entreprise grâce à</span>  
                <span className="block text-white">nos solutions</span>  
                <span className="block text-blue-400">d'IA innovantes</span>  
              </h1>  
              <p className="mt-6 text-xl text-gray-200">  
                Propulsez votre croissance avec des solutions d'IA   
                sur mesure et adaptées à vos besoins spécifiques  
              </p>  
            </div>  

            {/* Stats */}  
            <div className="grid grid-cols-3 gap-6">  
              {stats.map((stat, index) => (  
                <motion.div  
                  key={index}  
                  initial={{ opacity: 0, y: 20 }}  
                  animate={{ opacity: 1, y: 0 }}  
                  transition={{ delay: 0.8 + (0.1 * index) }}  
                  className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300"  
                >  
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 transform-gpu group-hover:scale-110 transition-transform duration-300" />  
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">  
                    {stat.value}  
                  </div>  
                  <div className="text-sm text-gray-300">  
                    {stat.label}  
                  </div>  
                </motion.div>  
              ))}  
            </div>  
          </motion.div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default HeroSection;