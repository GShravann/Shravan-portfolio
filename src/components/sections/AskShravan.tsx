import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader } from 'lucide-react';
import { ASK_SHRAVAN_KB } from '../../data/certifications';

type Message = { role: 'user' | 'assistant'; text: string; id: string };

const SUGGESTIONS = [
  'What AI projects has Shravan built?',
  'Tell me about healthcare work',
  'What\'s his tech stack?',
  'What are his internships?',
  'Show me his open source work',
];

function findAnswer(query: string): string {
  const lower = query.toLowerCase();
  for (const entry of ASK_SHRAVAN_KB) {
    if (entry.triggers.some(t => lower.includes(t))) {
      return entry.answer;
    }
  }
  return 'That\'s a great question! For the most accurate answer, feel free to connect with Shravan directly via LinkedIn or email. He\'s always happy to discuss his work, projects and interests in detail. You can reach him at **linkedin.com/in/gandipallyshravankumar/**';
}

function TypewriterText({ text, onDone }: { text: string; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  React.useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    // Render markdown-like bold
    const rawText = text.replace(/\*\*(.*?)\*\*/g, '$1');
    const interval = setInterval(() => {
      if (i >= rawText.length) {
        clearInterval(interval);
        setDone(true);
        onDone?.();
        return;
      }
      setDisplayed(prev => prev + rawText[i]);
      i++;
    }, 12);
    return () => clearInterval(interval);
  }, [text]);

  // Simple bold rendering
  const renderBold = (txt: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    let charCount = 0;
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        const bold = displayed.slice(charCount, charCount + part.length);
        charCount += part.length;
        return <strong key={i} className="text-text-primary">{bold}</strong>;
      } else {
        const plain = displayed.slice(charCount, charCount + part.length);
        charCount += part.length;
        return <span key={i}>{plain}</span>;
      }
    });
  };

  return (
    <span>
      {displayed}
      {!done && <span className="animate-blink">▍</span>}
    </span>
  );
}

export default function AskShravan() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Hi! I\'m Shravan\'s portfolio assistant. Ask me anything about his projects, skills, experience or background.',
      id: 'welcome',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const send = (query: string) => {
    if (!query.trim() || loading) return;
    const userMsg: Message = { role: 'user', text: query, id: Date.now().toString() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const answer = findAnswer(query);
      const assistantMsg: Message = { role: 'assistant', text: answer, id: (Date.now() + 1).toString() };
      setMessages(prev => [...prev, assistantMsg]);
      setLoading(false);
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 600);
  };

  return (
    <>
      {/* Floating trigger */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-accent-violet text-white shadow-violet font-medium text-sm"
        >
          <Bot size={18} />
          {!open && 'Ask My Portfolio'}
          {open && '✕ Close'}
        </motion.button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[520px] flex flex-col glass rounded-2xl border border-accent-violet/20 shadow-violet overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-border-subtle flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent-violet/20 flex items-center justify-center">
                <Bot size={16} className="text-accent-violet" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Ask Shravan</p>
                <p className="text-xs text-text-muted">Portfolio AI assistant</p>
              </div>
              <span className="ml-auto dot-online" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                    msg.role === 'assistant' ? 'bg-accent-violet/20' : 'bg-bg-elevated'
                  }`}>
                    {msg.role === 'assistant' ? <Bot size={12} className="text-accent-violet" /> : <User size={12} />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-accent-violet text-white rounded-tr-sm'
                        : 'glass border border-border-subtle text-text-secondary rounded-tl-sm'
                    }`}
                  >
                    {msg.role === 'assistant' ? (
                      <TypewriterText text={msg.text} />
                    ) : msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent-violet/20 flex items-center justify-center">
                    <Bot size={12} className="text-accent-violet" />
                  </div>
                  <div className="glass border border-border-subtle rounded-2xl rounded-tl-sm px-3 py-2">
                    <Loader size={14} className="text-accent-violet animate-spin" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-accent-violet/20 text-text-muted hover:text-accent-violet hover:border-accent-violet/40 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border-subtle">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send(input)}
                  placeholder="Ask about projects, skills..."
                  className="flex-1 px-3 py-2 bg-bg-card border border-border-subtle rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-violet/50 transition-colors"
                />
                <button
                  onClick={() => send(input)}
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-xl bg-accent-violet text-white flex items-center justify-center disabled:opacity-50 transition-opacity"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
