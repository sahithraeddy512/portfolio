import React from 'react';
import ReactConsole from 'react-console-emulator';

const funFacts = [
  "I love building cloud-native apps!",
  "I automate my workflows with CI/CD.",
  "I enjoy learning new tech stacks.",
  "I’m a fan of clean code and good coffee!"
];

const projectList = [
  "PropertyFlow",
  "What's Cooking?",
  "Portfolio Site",
  "More coming soon..."
];

const secretQuotes = [
  '"First, solve the problem. Then, write the code." – Sahith',
  '"Stay curious, keep building!"',
  '"Great things never come from comfort zones."'
];

const skills = [
  'Java', 'Spring Boot', 'React.js', 'MySQL', 'PostgreSQL', 'AWS', 'CI/CD', 'Docker', 'Kubernetes', 'Python', 'Flask', 'NLP', 'YOLO', 'CNN', 'LSTM', 'BERT'
];

const experienceTimeline = [
  'Genesis Technology Pvt Ltd: Full Stack Developer (Nov 2024 – Present)',
  'L&T Technology Services: Java Full Stack Developer (Jun 2023 – Oct 2024)',
  'Smart Internz: Data Science Externship (Jan 2022 – May 2022)'
];

const motivationalQuotes = [
  'Success is not the key to happiness. Happiness is the key to success.',
  'The only way to do great work is to love what you do.',
  'Don’t watch the clock; do what it does. Keep going.',
  'Great things never come from comfort zones.'
];

const externshipDetails = `Data Science Externship (Smart Internz, Jan 2022 – May 2022):\n\n- Skin Disease Identification System: Engineered an image classification system using YOLO and CNN, achieving 90%+ diagnostic accuracy by processing 10,000+ images and implementing data augmentation techniques to improve model generalization.\n- Fake News Analysis Model: Constructed a deep learning model leveraging NLP, applying data cleaning techniques and classifiers like LSTM and BERT, achieving 95%+ accuracy in distinguishing between real and fake news articles from a dataset of 50,000+ news samples.\n- Car Performance Prediction Web Application: Prototyped user-friendly web application using Flask, integrating a Random Forest regression model trained on 100,000+ car data points, enabling users to predict car performance metrics with an 85%+ prediction accuracy based on real-time user input.`;

const contactInfo = `Email: sahithreddy512@gmail.com\nLinkedIn: linkedin.com/in/sahith-reddy-janga-82a1aa211\nGitHub: github.com/sahithraeddy512`;

const commands = {
  'help': {
    description: 'List all available commands',
    usage: 'help',
    fn: () => {
      return [
        'Available commands:',
        'about --funfact',
        'projects --list',
        'secret --quote',
        'help',
        'contact',
        'skills --list',
        'experience --timeline',
        'motivate',
        'externship --data-science'
      ].join('\n');
    }
  },
  'about': {
    description: 'about --funfact: Get a random fun fact about Sahith',
    usage: 'about --funfact',
    fn: (...args) => {
      if (args[0] === '--funfact') {
        return funFacts[Math.floor(Math.random() * funFacts.length)];
      }
      return 'Try: about --funfact';
    }
  },
  'projects': {
    description: 'projects --list: List all projects',
    usage: 'projects --list',
    fn: (...args) => {
      if (args[0] === '--list') {
        return projectList.join('\n');
      }
      return 'Try: projects --list';
    }
  },
  'secret': {
    description: 'secret --quote: Get a secret quote',
    usage: 'secret --quote',
    fn: (...args) => {
      if (args[0] === '--quote') {
        return secretQuotes[Math.floor(Math.random() * secretQuotes.length)];
      }
      return 'Try: secret --quote';
    }
  },
  'contact': {
    description: 'Show contact information',
    usage: 'contact',
    fn: () => contactInfo
  },
  'skills': {
    description: 'skills --list: List all technical skills',
    usage: 'skills --list',
    fn: (...args) => {
      if (args[0] === '--list') {
        return skills.join(', ');
      }
      return 'Try: skills --list';
    }
  },
  'experience': {
    description: 'experience --timeline: Show work experience timeline',
    usage: 'experience --timeline',
    fn: (...args) => {
      if (args[0] === '--timeline') {
        return experienceTimeline.join('\n');
      }
      return 'Try: experience --timeline';
    }
  },
  'motivate': {
    description: 'Get a motivational quote',
    usage: 'motivate',
    fn: () => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  },
  'externship': {
    description: 'externship --data-science: Show Data Science Externship details',
    usage: 'externship --data-science',
    fn: (...args) => {
      if (args[0] === '--data-science') {
        return externshipDetails;
      }
      return 'Try: externship --data-science';
    }
  }
};

const ConsoleUI = () => {
  return (
    <div className="bg-black text-green-400 font-mono p-6 rounded-lg shadow-lg min-h-[200px]">
      <ReactConsole
        commands={commands}
        noDefaults={true}
        welcomeMessage={[
          '> Welcome to Sahith Reddy\'s World!',
          "> Let's build something impactful together.",
          '',
          'Type help to see all available commands!'
        ]}
        promptLabel={'> '}
        style={{ background: 'black', color: '#22d3ee', fontFamily: 'monospace', borderRadius: '0.5rem' }}
        inputTextStyle={{ color: '#22d3ee' }}
        contentStyle={{ color: '#22d3ee' }}
      />
    </div>
  );
};

export default ConsoleUI; 