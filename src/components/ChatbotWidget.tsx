import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import type { ChatMessage } from '@/types';
import { answerFaq } from '@/lib/generation';

const suggestions = [
  'How much does it cost?',
  'What is your return policy?',
  'When will my order arrive?',
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'intro',
      role: 'bot',
      text: "Hi! I'm your Customer FAQ Bot. Ask me anything about your product — pricing, shipping, returns, and more.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      text,
    };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'bot',
        text: answerFaq(text),
      };
      setMessages((m) => [...m, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-glow transition-all duration-300 hover:scale-105 ${
          open ? 'rotate-90' : 'animate-pulse-ring'
        }`}
        aria-label="Toggle FAQ bot"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="animate-fade-in-up fixed bottom-24 right-6 z-50 flex h-[30rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850/95 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] bg-ink-800/80 px-4 py-3.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600">
              <Bot className="h-5 w-5 text-white" />
              <span className="absolute -bottom-0 -right-0 h-3 w-3 rounded-full border-2 border-ink-850 bg-emerald-400" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-white">
                Customer FAQ Bot
              </p>
              <p className="text-[11px] text-emerald-400">Online now</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'rounded-br-md bg-indigo-500 text-white'
                      : 'rounded-bl-md bg-white/[0.06] text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white/[0.06] px-4 py-3">
                  <span
                    className="typing-dot h-2 w-2 rounded-full bg-slate-400"
                    style={{ animationDelay: '0ms' }}
                  />
                  <span
                    className="typing-dot h-2 w-2 rounded-full bg-slate-400"
                    style={{ animationDelay: '160ms' }}
                  />
                  <span
                    className="typing-dot h-2 w-2 rounded-full bg-slate-400"
                    style={{ animationDelay: '320ms' }}
                  />
                </div>
              </div>
            )}

            {/* Suggestions (only at start) */}
            {messages.length === 1 && !isTyping && (
              <div className="animate-fade-in space-y-2 pt-2">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-600">
                  Try asking
                </p>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="block w-full rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-left text-xs text-slate-300 transition-all hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="border-t border-white/[0.06] bg-ink-800/80 p-3"
          >
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your product..."
                className="flex-1 rounded-xl border border-white/10 bg-ink-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-white transition-all hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
