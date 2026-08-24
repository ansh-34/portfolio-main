'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('anshg5384@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email Me',
      value: 'anshg5384@gmail.com',
      href: 'mailto:anshg5384@gmail.com',
      action: 'Send Email',
      isCopyable: true,
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'ansh-gupta-iiitr',
      href: 'https://www.linkedin.com/in/ansh-gupta-iiitr',
      action: 'Connect on LinkedIn',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'ansh-34',
      href: 'https://github.com/ansh-34',
      action: 'View Repositories',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 overflow-hidden bg-slate-50/50 dark:bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 mb-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-full">
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Connect & Build Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Open for Software Engineering internships, Backend development, and AI/ML project opportunities.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-emerald-500/40 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 font-mono text-sm mb-6 break-all">
                    {card.value}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {card.action} &rarr;
                  </a>
                  {card.isCopyable && (
                    <button
                      onClick={handleCopyEmail}
                      className="ml-auto p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
                      title="Copy email address"
                    >
                      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Location & Availability Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-gray-400 p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm text-center"
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-emerald-500" />
            <span>Raichur, Karnataka, India</span>
          </div>
          <div className="hidden sm:block text-slate-300 dark:text-slate-700">&bull;</div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-teal-500" />
            <a href="tel:+919079231064" className="hover:text-emerald-500 transition-colors">+91 9079231064</a>
          </div>
          <div className="hidden sm:block text-slate-300 dark:text-slate-700">&bull;</div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Opportunities</span>
          </div>
        </motion.div>

        {/* Footer Copyright */}
        <div className="mt-16 text-center text-xs text-slate-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ansh Gupta. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
