import * as React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Download, Mail, Phone, Github, Linkedin } from 'lucide-react';

// Simple error boundary for the 3D canvas
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error in 3D Canvas:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null; // Return null or a fallback component
    }
    return this.props.children;
  }
}

const iconPulse: Variants = {
  rest: { scale: 1, boxShadow: "0 0 0px #fff0" },
  hover: { scale: 1.18, boxShadow: "0 0 16px #38bdf8, 0 0 32px #818cf8" }
};

function useParallaxTilt() {
  const ref = React.useRef(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current as HTMLDivElement;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
  };
  const handleMouseLeave = () => {
    const card = ref.current as HTMLDivElement;
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  };
  return { ref, handleMouseMove, handleMouseLeave };
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, ease: [0.4, 0, 0.2, 1] }
  }
};

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
};

// Simple gradient background
const Hero3DBackground = () => {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      opacity: 0.8
    }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `
      }} />
    </div>
  );
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const github = useParallaxTilt();
  const linkedin = useParallaxTilt();
  const mail = useParallaxTilt();
  const download = useParallaxTilt();
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Hero3DBackground />
      </div>
      {/* Background gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"
      ></motion.div>
      <div className="section-padding text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
        >
          <motion.p
            className="text-muted-foreground text-lg mb-4"
            variants={fadeInVariant}
            {...(shouldReduceMotion ? { style: { opacity: 1, transform: 'none' } } : {})}
          >Hi, I'm</motion.p>
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            variants={fadeInVariant}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            {...(shouldReduceMotion ? { style: { opacity: 1, transform: 'none' } } : {})}
          >
            <span className="gradient-text">Sahith Reddy</span>
            <br />
            <span className="text-foreground">Janga</span>
          </motion.h1>
          <motion.div
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto h-12 flex items-center justify-center"
            variants={fadeInVariant}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            {...(shouldReduceMotion ? { style: { opacity: 1, transform: 'none' } } : {})}
          >
            <span className="text-center">Full Stack Developer | Cloud-Native Enthusiast | React & Spring Boot Specialist</span>
          </motion.div>
          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInVariant}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            {...(shouldReduceMotion ? { style: { opacity: 1, transform: 'none' } } : {})}
          >
            Building scalable, cloud-native web applications using React, Spring Boot, and AWS. 
            Passionate about clean code, innovative solutions, and delivering exceptional user experiences.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.12, boxShadow: "0 0 0 4px #818cf8, 0 0 16px #38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ border: '2px solid', borderImage: 'linear-gradient(90deg, #38bdf8, #818cf8) 1', borderRadius: '0.5rem' }}
            >
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium glow-box transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.12, boxShadow: "0 0 0 4px #818cf8, 0 0 16px #38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ border: '2px solid', borderImage: 'linear-gradient(90deg, #38bdf8, #818cf8) 1', borderRadius: '0.5rem' }}
            >
              <Button 
                onClick={() => scrollToSection('#contact')}
                variant="outline" 
                className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 text-lg font-medium transition-all duration-300"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <motion.a ref={github.ref} onMouseMove={github.handleMouseMove} onMouseLeave={github.handleMouseLeave} variants={iconPulse} initial="rest" whileHover="hover" href="https://github.com/sahithraeddy512" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-3 hover:bg-primary/10 rounded-full">
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a ref={linkedin.ref} onMouseMove={linkedin.handleMouseMove} onMouseLeave={linkedin.handleMouseLeave} variants={iconPulse} initial="rest" whileHover="hover" href="https://www.linkedin.com/in/sahith-reddy-janga-82a1aa211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-3 hover:bg-primary/10 rounded-full">
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a ref={mail.ref} onMouseMove={mail.handleMouseMove} onMouseLeave={mail.handleMouseLeave} variants={iconPulse} initial="rest" whileHover="hover" href="mailto:jangasahithreddy512@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-3 hover:bg-primary/10 rounded-full">
              <Mail className="h-6 w-6" />
            </motion.a>
            <motion.a ref={download.ref} onMouseMove={download.handleMouseMove} onMouseLeave={download.handleMouseLeave} variants={iconPulse} initial="rest" whileHover="hover" href="/Sahith_fullstack_resume.pdf" download className="text-muted-foreground hover:text-primary transition-colors p-3 hover:bg-primary/10 rounded-full">
              <Download className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;