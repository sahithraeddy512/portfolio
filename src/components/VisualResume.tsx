import * as React from 'react';
import { motion, Variants } from 'framer-motion';
import { Briefcase, GraduationCap, Cpu, Sparkles } from 'lucide-react';

const timelineData = [
  {
    type: 'Experience',
    icon: <Briefcase className="h-6 w-6 text-cyan-400" />, // Neon cyan
    title: 'Full Stack Developer',
    org: 'Genesis Technology Pvt Ltd',
    duration: 'Nov 2024 – Present',
    description: 'Developed PropertyFlow, a real estate platform with React, Spring Boot, MySQL, implementing JWT security, RBAC, and AWS CI/CD pipelines.'
  },
  {
    type: 'Experience',
    icon: <Briefcase className="h-6 w-6 text-fuchsia-400" />, // Neon pink
    title: 'Java Full Stack Developer',
    org: 'L&T Technology Services',
    duration: 'Jun 2023 – Oct 2024',
    description: 'Developed RESTful microservices and frontend components using Spring Boot, React.js, and PostgreSQL, with AWS cloud deployment and CI/CD automation.'
  },
  {
    type: 'Experience',
    icon: <Cpu className="h-6 w-6 text-emerald-400" />, // Neon green
    title: 'Data Science Extern',
    org: 'Smart Internz',
    duration: 'Jan 2022 – May 2022',
    description: 'Worked on ML projects: skin disease detection, fake news analysis, car performance prediction.'
  },
  {
    type: 'Education',
    icon: <GraduationCap className="h-6 w-6 text-yellow-400" />, // Neon yellow
    title: 'B.Tech, Computer Science',
    org: 'Your University',
    duration: '2019 – 2023',
    description: 'Graduated with distinction.'
  }
];

const skills = [
  'Java', 'Spring Boot', 'React.js', 'MySQL', 'PostgreSQL', 'AWS', 'CI/CD', 'Docker', 'Kubernetes', 'Python', 'Flask', 'NLP', 'YOLO', 'CNN', 'LSTM', 'BERT'
];

const timelineVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, ease: [0.4, 0, 0.2, 1] }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
};

// Simple animated background particles
const ParticleBG = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(18)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute rounded-full bg-gradient-to-br from-cyan-400/40 to-fuchsia-500/30 blur-xl"
        style={{
          width: `${16 + Math.random() * 32}px`,
          height: `${16 + Math.random() * 32}px`,
          left: `${Math.random() * 95}%`,
          top: `${Math.random() * 95}%`,
          opacity: 0.5 + Math.random() * 0.3
        }}
        animate={{
          y: [0, Math.random() * 40 - 20, 0],
          x: [0, Math.random() * 40 - 20, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 6 + Math.random() * 4,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay: Math.random() * 2
        }}
      />
    ))}
  </div>
);

const VisualResume = () => {
  return (
    <div className="relative bg-card/80 border border-primary/30 rounded-2xl p-8 shadow-2xl overflow-hidden backdrop-blur-md">
      <ParticleBG />
      <h2 className="text-2xl font-bold mb-4 gradient-text z-10 relative flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
        Visual Resume
      </h2>
      <motion.div
        className="relative border-l-4 border-cyan-400/60 pl-12 mb-12 z-10"
        initial="hidden"
        animate="visible"
        variants={timelineVariants}
      >
        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            className="mb-12 relative group"
            variants={itemVariants}
          >
            {/* Neon-glow node */}
            <div className="absolute -left-7 top-2 w-5 h-5 bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-yellow-400 rounded-full shadow-lg animate-pulse border-4 border-background group-hover:scale-110 transition-transform"></div>
            {/* Animated icon */}
            <div className="absolute -left-14 top-1 bg-background/80 rounded-full p-2 shadow-lg border border-primary/30 animate-pulse">
              {item.icon}
            </div>
            <div className="mb-1 text-sm text-cyan-300 font-mono tracking-wide">{item.duration}</div>
            <div className="font-semibold text-lg text-foreground drop-shadow-lg">{item.title}</div>
            <div className="text-fuchsia-400 text-sm mb-1 font-semibold">{item.org}</div>
            <div className="text-muted-foreground text-sm italic">{item.description}</div>
          </motion.div>
        ))}
      </motion.div>
      <h3 className="text-xl font-semibold gradient-text mb-4 z-10 relative">Skill Badges</h3>
      <motion.div
        className="flex flex-wrap gap-3 z-10 relative"
        initial="hidden"
        animate="visible"
        variants={timelineVariants}
      >
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="px-4 py-2 bg-primary/80 text-primary-foreground rounded-full text-sm font-medium border border-primary/40 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
            variants={badgeVariants}
            style={{}}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default VisualResume; 