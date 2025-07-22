import * as React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion, Variants, useReducedMotion } from 'framer-motion';

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

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();
  const experiences = [
    {
      company: "Genesis Technology Pvt Ltd",
      role: "Full Stack Developer",
      duration: "Nov 2024 – Present",
      location: "Remote",
      current: true,
      description: [
        "Developed PropertyFlow, a scalable real estate platform with dynamic property listings",
        "Implemented JWT authentication and multi-role access (Admin, Agent, Buyer)",
        "Built robust REST APIs using Spring Boot and integrated with AWS cloud services",
        "Designed responsive React.js frontend with optimized user experience",
        "Deployed applications on AWS EC2 with RDS and S3 integration"
      ],
      technologies: ["React.js", "Spring Boot", "MySQL", "AWS", "GitHub Actions"]
    },
    {
      company: "L&T Technology Services",
      role: "Java Full Stack Developer",
      duration: "Jun 2023 – Oct 2024",
      location: "Pune, India",
      current: false,
      description: [
        "Developed and maintained enterprise web applications using Java and Spring Boot",
        "Built responsive user interfaces with React.js and modern CSS frameworks",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented CI/CD pipelines and automated testing procedures",
        "Optimized database queries and improved application performance"
      ],
      technologies: ["Java", "Spring Boot", "React.js", "MySQL", "JUnit", "Git"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Experience</span>
        </h2>
        <div className="grid gap-8">
          {experiences.map((exp, index) => {
            const { ref, handleMouseMove, handleMouseLeave } = useParallaxTilt();
            return (
              <motion.div
                key={index}
                variants={fadeInVariant}
                transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.4, 0, 0.2, 1] }}
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ willChange: 'transform', ...(shouldReduceMotion ? { transform: 'none' } : {}) }}
              >
                {/* Render your experience card/step here, e.g.: */}
                <Card className="card-glow border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <Building className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{exp.role}</p>
                        <p className="text-xs text-muted-foreground">{exp.duration}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-muted-foreground mb-4">
                      {exp.description.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-foreground">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-secondary border border-primary/20 rounded-full text-xs font-medium text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;