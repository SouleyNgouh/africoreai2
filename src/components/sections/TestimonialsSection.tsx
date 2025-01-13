
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  company?: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mme. Aïcha NSANGOU",
    role: "Attachée de Recherche",
    company: "IMPM",
    location: "Yaoundé",
    image: "/images/testimonials/aicha-nsangou.jpg",
    rating: 5,
    quote: "AfricoreAI a révolutionné notre approche de l'analyse de données médicales. Leur solution d'IA nous a permis d'améliorer significativement notre capacité de diagnostic et de réduire le temps de traitement des données de 60%."
  },
  {
    name: "M. Mohamed NDAM NJIKAM",
    role: "Directeur Exécutif",
    company: "GSDG",
    location: "Yaoundé",
    image: "/images/testimonials/mohamed-ndam.jpg",
    rating: 5,
    quote: "La compréhension approfondie des enjeux africains par l'équipe d'AfricoreAI a fait toute la différence. Leur solution est parfaitement adaptée à nos besoins locaux et a transformé notre approche analytique."
  },
  {
    name: "Mme Aminatou MBALA",
    role: "CEO",
    company: "Mams Délices & Mams Events",
    location: "Douala",
    image: "/images/testimonials/aminatou-mbala.jpg",
    rating: 5,
    quote: "L'accompagnement personnalisé et l'expertise technique d'AfricoreAI nous ont permis de déployer des solutions d'IA durables et efficaces. Notre productivité a augmenté de 40% depuis l'implémentation."
  }
];

const TestimonialImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
        {alt.charAt(0)}
      </div>
    );
  }

  return (
    <div className="relative w-16 h-16">
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        className="rounded-full object-cover border-2 border-blue-500"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 relative group hover:border-blue-400/50 transition-all duration-300">
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
        <Quote className="w-6 h-6 text-white" />
      </div>

      <div className="flex space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
            }`}
          />
        ))}
      </div>

      <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center">
        <TestimonialImage
          src={testimonial.image}
          alt={testimonial.name}
        />
        <div className="ml-4">
          <h4 className="text-white font-semibold text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-400">
            {testimonial.role}
            {testimonial.company && ` @ ${testimonial.company}`}
          </p>
          <p className="text-gray-500 text-sm">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setCurrent(index);
  };

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1f2e] to-[#151822]" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="relative"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 inline-block">
                Témoignages
              </span>
            </motion.div>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ce que disent nos clients
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Découvrez comment nous transformons les entreprises africaines grâce à l'IA
            </motion.p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard testimonial={testimonials[current]} />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-blue-500/80 hover:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300 backdrop-blur-sm"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-blue-500/80 hover:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300 backdrop-blur-sm"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-blue-500 w-6'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

