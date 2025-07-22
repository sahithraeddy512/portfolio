import * as React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, Variants, useReducedMotion } from 'framer-motion';

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

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const github = useParallaxTilt();
  const linkedin = useParallaxTilt();
  const mail = useParallaxTilt();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
      >
        <div className="section-padding py-12">
          <motion.div
            className="flex flex-col items-center gap-8"
            variants={fadeInVariant}
            {...(shouldReduceMotion ? { style: { opacity: 1, transform: 'none' } } : {})}
          >
            <div className="text-center">
              <div className="text-xl font-bold gradient-text mb-2">
                &lt;SR/&gt;
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Building the web, one component at a time.
              </p>
            </div>
            <div className="flex justify-center items-center gap-6 w-full">
              <motion.a 
                ref={github.ref}
                onMouseMove={github.handleMouseMove}
                onMouseLeave={github.handleMouseLeave}
                variants={iconPulse} 
                initial="rest" 
                whileHover="hover" 
                href="https://github.com/sahithraeddy512" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a 
                ref={linkedin.ref}
                onMouseMove={linkedin.handleMouseMove}
                onMouseLeave={linkedin.handleMouseLeave}
                variants={iconPulse} 
                initial="rest" 
                whileHover="hover" 
                href="https://www.linkedin.com/in/sahith-reddy-janga-82a1aa211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                ref={mail.ref}
                onMouseMove={mail.handleMouseMove}
                onMouseLeave={mail.handleMouseLeave}
                variants={iconPulse} 
                initial="rest" 
                whileHover="hover" 
                href="mailto:jangasahithreddy512@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;