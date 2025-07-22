import * as React from 'react';
import { ExternalLink, Github, Building, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, Variants, useReducedMotion } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] }
  })
};

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      ease: [0.4, 0, 0.2, 1]
    }
  }
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
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };
  const handleMouseLeave = () => {
    const card = ref.current as HTMLDivElement;
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  };
  return { ref, handleMouseMove, handleMouseLeave };
}

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  const projects = [
    {
      title: "PropertyFlow",
      description: "Scalable real estate platform with dynamic property listings, JWT authentication, and multi-role access (Admin, Agent, Buyer). Built with modern web technologies and deployed on AWS cloud infrastructure.",
      icon: Building,
      technologies: ["React.js", "Spring Boot", "MySQL", "AWS EC2", "AWS RDS", "AWS S3", "GitHub Actions"],
      features: [
        "Dynamic property listings with advanced filtering",
        "JWT-based authentication system",
        "Multi-role user management (Admin, Agent, Buyer)",
        "Cloud deployment with AWS services",
        "CI/CD pipeline with GitHub Actions"
      ],
      role: "Full Stack Developer at Genesis Technology Pvt Ltd",
      status: "Production",
      githubUrl: "#", // Private repo placeholder
      liveUrl: "#"
    },
    {
      title: "What's Cooking?",
      description: "Full-stack recipe search application with real-time filtering capabilities based on user-selected ingredients. Features an intuitive interface for discovering new recipes and meal planning.",
      icon: ChefHat,
      technologies: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
      features: [
        "Real-time recipe filtering by ingredients",
        "Responsive recipe cards with detailed instructions",
        "Ingredient-based search functionality",
        "Clean and intuitive user interface",
        "Recipe favoriting and saving capabilities"
      ],
      role: "Personal Project",
      status: "Completed",
      githubUrl: "https://github.com/sahithraeddy512",
      liveUrl: "#"
    },
    {
      title: "Skin Disease Identification System",
      description: "Engineered an image classification system using YOLO and CNN, achieving 90%+ diagnostic accuracy by processing 10,000+ images and implementing data augmentation techniques to improve model generalization.",
      icon: Building,
      technologies: ["YOLO", "CNN", "Python", "Data Augmentation"],
      features: [
        "Processed 10,000+ images",
        "Achieved 90%+ diagnostic accuracy",
        "Implemented data augmentation for better generalization"
      ],
      role: "Data Science Extern | Smart Internz",
      status: "Completed",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Fake News Analysis Model",
      description: "Constructed a deep learning model leveraging NLP, applying data cleaning techniques and classifiers like LSTM and BERT, achieving 95%+ accuracy in distinguishing between real and fake news articles from a dataset of 50,000+ news samples.",
      icon: Building,
      technologies: ["LSTM", "BERT", "NLP", "Python"],
      features: [
        "50,000+ news samples",
        "95%+ accuracy distinguishing real/fake news",
        "Data cleaning and advanced NLP"
      ],
      role: "Data Science Extern | Smart Internz",
      status: "Completed",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Car Performance Prediction Web Application",
      description: "Prototyped user-friendly web application using Flask, integrating a Random Forest regression model trained on 100,000+ car data points, enabling users to predict car performance metrics with an 85%+ prediction accuracy based on real-time user input.",
      icon: Building,
      technologies: ["Flask", "Random Forest", "Python", "Regression"],
      features: [
        "100,000+ car data points",
        "85%+ prediction accuracy",
        "Real-time user input for predictions"
      ],
      role: "Data Science Extern | Smart Internz",
      status: "Completed",
      githubUrl: "#",
      liveUrl: "#"
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Projects</span>
        </h2>
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => {
            const { ref, handleMouseMove, handleMouseLeave } = useParallaxTilt();
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ boxShadow: "0 8px 24px rgba(0,0,0,0.18)", rotateZ: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ willChange: 'transform', ...(shouldReduceMotion ? { transform: 'none' } : {}) }}
              >
                <Card className="card-glow border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 bg-primary/10 rounded-lg"
                        whileHover={{ rotate: [0, -15, 15, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
                      >
                        <project.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                            {project.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">{project.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground mb-4">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex gap-3 pt-4">
                      <motion.div
                        whileHover={{ scale: 1.12, boxShadow: "0 4px 16px rgba(0,0,0,0.16)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex-1"
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="border-primary/30 text-foreground hover:bg-primary/10 w-full"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.12, boxShadow: "0 4px 16px rgba(0,0,0,0.16)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex-1"
                      >
                        <Button 
                          size="sm" 
                          asChild
                          className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground w-full"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects or collaborating?
          </p>
          <motion.div whileHover={{ scale: 1.12, boxShadow: "0 4px 16px rgba(0,0,0,0.16)" }} transition={{ type: "spring", stiffness: 300 }} style={{ display: 'inline-block' }}>
            <Button 
              asChild
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 font-medium glow-box transition-all duration-300"
            >
              <a href="https://github.com/sahithraeddy512" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;