// pages/index.jsx  
import Head from 'next/head';  
import Header from '../components/layout/Header/Header';
import HeroSection from '../components/sections/HeroSection';  
import ServicesSection from '../components/sections/ServicesSection';  
import SolutionsSection from '../components/sections/SolutionsSection';  
import WhyUsSection from '../components/sections/WhyUsSection';  
import TestimonialsSection from '../components/sections/TestimonialsSection';  
import ContactSection from '../components/sections/ContactSection';  
import Footer from '../components/Footer';  

export default function Home() {  
  return (  
    <>  
      <Head>  
        <title>AfriCoreAI - Intelligence Artificielle pour l'Afrique</title>  
        <meta   
          name="description"   
          content=" Solutions d'Intelligence Artificielle innovantes adaptées au marché africain"   
        />  
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />  
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />  
        <meta name="theme-color" content="#1a1f2e" />  
      </Head>  

      <div className="min-h-screen bg-[#1a1f2e] relative overflow-hidden">  
        <Header />  
        <main>  
          <HeroSection />  
          <ServicesSection />  
          <SolutionsSection />  
          <WhyUsSection />  
          <TestimonialsSection />  
          <ContactSection />  
        </main>  
        <Footer />  
      </div>  
    </>  
  );  
}