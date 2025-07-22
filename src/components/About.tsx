import * as React from 'react';
import { Download, Code, Globe, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { FaJava, FaReact, FaAws, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostgresql, SiDocker, SiKubernetes, SiTailwindcss, SiMongodb, SiTypescript, SiJavascript, SiNextdotjs, SiVite, SiTensorflow, SiPytorch, SiScikitlearn, SiApachemaven, SiApachehadoop, SiApachespark, SiGooglecloud } from 'react-icons/si';

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

const skillData = [
  // Languages
  { name: 'Python', icon: <FaPython />, category: 'Languages' },
  { name: 'Java', icon: <FaJava />, category: 'Languages' },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Languages' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'Languages' },
  
  // AI/ML
  { name: 'Machine Learning', icon: <SiTensorflow />, category: 'AI/ML' },
  { name: 'Deep Learning', icon: <SiTensorflow />, category: 'AI/ML' },
  { name: 'Natural Language Processing', icon: <SiTensorflow />, category: 'AI/ML' },
  { name: 'TensorFlow', icon: <SiTensorflow />, category: 'AI/ML' },
  { name: 'PyTorch', icon: <SiPytorch />, category: 'AI/ML' },
  { name: 'scikit-learn', icon: <SiScikitlearn />, category: 'AI/ML' },
  
  // Big Data
  { name: 'Big Data', icon: <SiApachehadoop />, category: 'Big Data' },
  { name: 'Hadoop', icon: <SiApachehadoop />, category: 'Big Data' },
  { name: 'Spark', icon: <SiApachespark />, category: 'Big Data' },
  
  // Data Warehousing
  { name: 'Data Warehousing', icon: <FaDatabase />, category: 'Data' },
  { name: 'ETL', icon: <FaDatabase />, category: 'Data' },
  { name: 'Data Modeling', icon: <FaDatabase />, category: 'Data' },
  
  // Frontend
  { name: 'React', icon: <FaReact />, category: 'Frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend' },
  { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend' },
  { name: 'Bootstrap', icon: <FaBootstrap />, category: 'Frontend' },
  { name: 'Vite', icon: <SiVite />, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
  { name: 'Spring Boot', icon: <SiSpringboot />, category: 'Backend' },
  
  // Databases
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Databases' },
  { name: 'MySQL', icon: <SiMysql />, category: 'Databases' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'Databases' },
  
  // Cloud & DevOps
  { name: 'AWS', icon: <FaAws />, category: 'Cloud' },
  { name: 'Google Cloud', icon: <SiGooglecloud />, category: 'Cloud' },
  { name: 'Azure', icon: <FaAws />, category: 'Cloud' },
  { name: 'Docker', icon: <SiDocker />, category: 'DevOps' },
  { name: 'Kubernetes', icon: <SiKubernetes />, category: 'DevOps' },
  { name: 'Git', icon: <FaGitAlt />, category: 'DevOps' },
  { name: 'GitHub', icon: <FaGithub />, category: 'DevOps' },
  { name: 'Maven', icon: <SiApachemaven />, category: 'DevOps' }
];

const categories = ['All', 'AI/ML', 'Big Data', 'Data', 'Frontend', 'Backend', 'Languages', 'Databases', 'Cloud', 'DevOps'];

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selected, setSelected] = React.useState('All');
  const filteredSkills = selected === 'All' ? skillData : skillData.filter(s => s.category === selected);

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Full-stack development expertise with modern frameworks'
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Robust API development and database design'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach to UI/UX development'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">About</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={fadeInVariant}
              {...(shouldReduceMotion ? { style: { opacity: 1, transform: 'none' } } : {})}
            >
              Experienced Full Stack Developer with 2+ years of expertise in building scalable, 
              data-driven web applications. Specialized in cloud deployments, real estate platforms, 
              and secure API design.
            </motion.p>
            
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={fadeInVariant}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              {...(shouldReduceMotion ? { style: { opacity: 1, transform: 'none' } } : {})}
            >
              Passionate about clean code, cross-functional collaboration, and cutting-edge technology. 
              I thrive on solving complex problems and creating innovative solutions that make a real impact.
            </motion.p>
            
            <motion.blockquote
              className="text-xl italic text-center py-8 px-6 border-l-4 border-primary bg-card/50 rounded-r-lg"
              variants={fadeInVariant}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              {...(shouldReduceMotion ? { style: { opacity: 1, transform: 'none' } } : {})}
            >
              "Code is poetry. Clean, scalable, and crafted with passion."
            </motion.blockquote>
            
            <motion.div whileHover={{ scale: 1.08, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }} transition={{ type: "spring", stiffness: 300 }} style={{ display: 'inline-block', marginRight: '0.5rem' }}>
              <Button 
                asChild
                className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 font-medium glow-box transition-all duration-300"
              >
                <a href="/Sahith_fullstack_resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.08, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }} transition={{ type: "spring", stiffness: 300 }} style={{ display: 'inline-block' }}>
              <Button
                asChild
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 font-medium transition-all duration-300"
              >
                <a href="/Sahith_fullstack_resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </motion.div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const { ref, handleMouseMove, handleMouseLeave } = useParallaxTilt();
                return (
                  <motion.div
                    key={index}
                    variants={fadeInVariant}
                    transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.4, 0, 0.2, 1] }}
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ willChange: 'transform' }}
                  >
                    <Card className="card-glow border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            
            <h3 className="text-xl font-semibold gradient-text mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-5 py-2 rounded-full font-medium border transition-all duration-200 ${selected === cat ? 'bg-primary text-primary-foreground' : 'bg-background border-primary/20 text-muted-foreground hover:bg-primary/10'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredSkills.map(skill => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.08, boxShadow: "0 4px 16px rgba(56,189,248,0.12)" }}
                  whileTap={{ scale: 0.96 }}
                  className="flex flex-col items-center justify-center bg-card/80 rounded-xl p-5 shadow border border-primary/10 transition-all duration-300"
                >
                  <span className="text-4xl mb-2">{skill.icon}</span>
                  <span className="text-base font-medium text-foreground text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;