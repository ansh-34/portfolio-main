'use client';

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown, Check, Copy, MessageSquare, ExternalLink, X } from "lucide-react";

const Hero = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const socialContainerRef = useRef<HTMLDivElement>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (socialContainerRef.current && !socialContainerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const socialItems = [
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      displayValue: "github.com/ansh-34",
      directUrl: "https://github.com/ansh-34",
      directLabel: "Go to GitHub",
      copyValue: "https://github.com/ansh-34",
      copyLabel: "Copy GitHub Link",
      isPhone: false,
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      displayValue: "linkedin.com/in/ansh-gupta-iiitr",
      directUrl: "https://www.linkedin.com/in/ansh-gupta-iiitr",
      directLabel: "Go to LinkedIn",
      copyValue: "https://www.linkedin.com/in/ansh-gupta-iiitr",
      copyLabel: "Copy LinkedIn Link",
      isPhone: false,
    },
    {
      id: "mail",
      icon: Mail,
      label: "Gmail",
      displayValue: "anshg5384@gmail.com",
      directUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=anshg5384@gmail.com",
      directLabel: "Open in Gmail",
      copyValue: "anshg5384@gmail.com",
      copyLabel: "Copy Email Address",
      isPhone: false,
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      displayValue: "+91 9079231064",
      directUrl: "tel:+919079231064",
      directLabel: "Call Directly",
      copyValue: "+91 9079231064",
      copyLabel: "Copy Phone Number",
      isPhone: true,
      whatsappUrl: "https://wa.me/919079231064?text=Hi%20Ansh,%20I%20saw%20your%20portfolio!",
    },
  ];
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 relative overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.08),_transparent_55%)]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              Open to Software Engineering & AI Roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
            >
              Hi, I’m <span className="gradient-text">Ansh Gupta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              AI & Data Science undergraduate at IIIT Raichur building scalable full-stack applications & AI/ML powered systems.
              <span className="text-primary font-medium"> Solved 400+ DSA problems.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 rounded-full font-medium text-primary-foreground transition-all duration-300 glow-primary"
                style={{ background: "var(--gradient-primary)" }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 rounded-full font-medium text-foreground glass-card border border-primary/30 hover:border-primary/60 transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              ref={socialContainerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-4 relative"
            >
              {socialItems.map((item) => {
                const Icon = item.icon;
                const isOpen = activeMenu === item.id;
                const isCopied = copiedId === item.id;

                return (
                  <div key={item.id} className="relative">
                    <motion.button
                      type="button"
                      onClick={() => setActiveMenu(isOpen ? null : item.id)}
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`${item.label} options`}
                      className={`w-11 h-11 glass-card rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "text-primary border-primary bg-primary/10 ring-2 ring-primary/30"
                          : "text-muted-foreground hover:text-primary hover:border-primary/50"
                      }`}
                    >
                      <Icon size={20} />
                    </motion.button>

                    {/* Popover Action Menu */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 sm:-left-6 bottom-14 z-50 w-64 p-3 rounded-2xl glass-card border border-primary/20 shadow-2xl bg-card/95 backdrop-blur-xl"
                        >
                          {/* Header */}
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/50">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground truncate max-w-[180px]">
                              <Icon size={14} className="text-primary shrink-0" />
                              <span className="truncate">{item.displayValue}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setActiveMenu(null)}
                              className="text-muted-foreground hover:text-foreground p-0.5 rounded transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>

                          {/* Action Options */}
                          <div className="space-y-1.5">
                            {/* Direct Link / Action */}
                            <a
                              href={item.directUrl}
                              target={item.isPhone ? undefined : "_blank"}
                              rel="noopener noreferrer"
                              onClick={() => setActiveMenu(null)}
                              className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              <ExternalLink size={14} className="text-primary shrink-0" />
                              <span>{item.directLabel}</span>
                            </a>

                            {/* WhatsApp (only for phone) */}
                            {item.whatsappUrl && (
                              <a
                                href={item.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setActiveMenu(null)}
                                className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-foreground hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                              >
                                <MessageSquare size={14} className="text-emerald-500 shrink-0" />
                                <span>Chat on WhatsApp</span>
                              </a>
                            )}

                            {/* Copy Action */}
                            <button
                              type="button"
                              onClick={() => handleCopy(item.id, item.copyValue)}
                              className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-left"
                            >
                              <div className="flex items-center gap-2.5">
                                {isCopied ? (
                                  <Check size={14} className="text-emerald-500 shrink-0" />
                                ) : (
                                  <Copy size={14} className="text-primary shrink-0" />
                                )}
                                <span>{isCopied ? "Copied to Clipboard!" : item.copyLabel}</span>
                              </div>
                              {isCopied && (
                                <span className="text-[10px] text-emerald-500 font-semibold">Done</span>
                              )}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Glass Card with Profile Image */}
            <div className="glass-card p-2 rounded-3xl border border-primary/20 relative z-10 overflow-hidden">
               <div className="relative aspect-square w-full rounded-2xl overflow-hidden group">
                  <img 
                    src="/ansh_portrait.jpg" 
                    alt="Ansh Gupta" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               </div>
               
               <div className="p-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-primary font-bold text-lg">
                      AG
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Currently</p>
                      <p className="text-base font-semibold text-foreground leading-tight">Backend Intern</p>
                      <p className="text-xs text-muted-foreground">Infooware · Remote</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-primary/5 border border-primary/10 p-3 text-center">
                      <p className="text-xl font-bold text-foreground">400+</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">DSA Solved</p>
                    </div>
                    <div className="rounded-xl bg-primary/5 border border-primary/10 p-3 text-center">
                      <p className="text-xl font-bold text-foreground">3+</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Major Projects</p>
                    </div>
                    <div className="rounded-xl bg-primary/5 border border-primary/10 p-3 text-center">
                      <p className="text-xl font-bold text-foreground">AI & DS</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">IIIT Raichur</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl z-0" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;