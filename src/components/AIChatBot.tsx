import * as React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const mockAIResponse = (input: string) => {
  if (!input.trim()) return "Please ask a question!";
  if (input.toLowerCase().includes('project')) return "I have built PropertyFlow, What's Cooking?, and several Data Science projects!";
  if (input.toLowerCase().includes('skill')) return "My main skills are React, Spring Boot, AWS, Python, and more.";
  if (input.toLowerCase().includes('experience')) return "I've worked at Genesis Technology, L&T, and completed a Data Science externship.";
  return "I'm an AI assistant! Ask me about Sahith's projects, skills, or experience.";
};

const AIChatBot = () => {
  const [messages, setMessages] = React.useState([
    { from: 'ai', text: "Hi! Ask me anything about Sahith's projects, skills, or experience!" }
  ]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'ai', text: mockAIResponse(input) }]);
      setLoading(false);
    }, 800);
  };

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 max-w-xs w-full">
      <motion.div
        className="bg-background/90 border border-primary/20 rounded-2xl shadow-2xl p-4 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
          <span className="font-bold text-primary text-lg">AI Assistant</span>
        </div>
        <div className="flex flex-col gap-2 max-h-64 overflow-y-auto mb-2">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl px-3 py-2 text-sm max-w-[90%] ${msg.from === 'ai' ? 'bg-primary/10 text-primary self-start' : 'bg-primary text-primary-foreground self-end'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              {msg.text}
            </motion.div>
          ))}
          {loading && (
            <motion.div
              className="rounded-xl px-3 py-2 text-sm bg-primary/10 text-primary self-start animate-pulse"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ...
            </motion.div>
          )}
        </div>
        <form onSubmit={sendMessage} className="flex gap-2 mt-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 rounded-lg border border-primary/20 bg-background px-3 py-2 text-sm focus:outline-none focus:border-primary"
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all"
            disabled={loading}
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AIChatBot; 