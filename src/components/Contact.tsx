import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import React, { useRef } from 'react';

function useParallaxTilt() {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const card = ref.current;
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
    const card = ref.current;
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

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jangasahithreddy512@gmail.com',
      href: 'mailto:jangasahithreddy512@gmail.com',
      description: 'Send me an email for business inquiries'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'sahithraeddy512',
      href: 'https://github.com/sahithraeddy512',
      description: 'Check out my code and projects'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'sahith-reddy-janga',
      href: 'https://www.linkedin.com/in/sahith-reddy-janga-82a1aa211',
      description: 'Connect with me professionally'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Contact</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Let's collaborate on your next project! I'm always interested in discussing new opportunities, 
              innovative ideas, and challenging problems to solve.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-glow border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <Button 
                    asChild 
                    variant="outline"
                    className="border-primary/30 text-foreground hover:bg-primary/10 w-full"
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="card-glow border-primary/20 p-8">
              <CardContent className="space-y-6">
                <MessageSquare className="h-16 w-16 text-primary mx-auto" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm currently available for freelance projects and full-time opportunities. 
                    Let's discuss how we can bring your ideas to life!
                  </p>
                  <Button 
                    asChild
                    className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 font-medium glow-box transition-all duration-300 hover:scale-105"
                  >
                    <a href="mailto:sahithreddy512@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Get In Touch
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;