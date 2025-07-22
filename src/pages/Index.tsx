import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ConsoleUI from '@/components/ConsoleUI';
import VisualResume from '@/components/VisualResume';
import AIChatBot from '@/components/AIChatBot';
import { motion } from 'framer-motion';

const AnimatedWave = () => (
  <div className="relative -mt-2 -mb-2 z-10">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
        fill="url(#wave-gradient)"
      />
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AnimatedWave />
      <About />
      <Experience />
      <VisualResume />
      <Projects />
      <Contact />
      <AIChatBot />
      <Footer />
    </div>
  );
};

export default Index;
