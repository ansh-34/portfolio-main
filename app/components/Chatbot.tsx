'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { X, Send } from 'lucide-react'
import ChatbotIcon from '@/assets/public/icons/chatbotIcon'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Ansh's AI assistant. I can help answer questions about Ansh's skills, projects, experience, and education. Feel free to ask me anything!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [mounted, setMounted] = useState(false)
  const chatBoxRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      )
    }
  }, [mounted])

  useEffect(() => {
    if (chatBoxRef.current) {
      gsap.fromTo(
        chatBoxRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'back.out(1.7)',
        }
      )
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const getPortfolioData = () => ({
    name: 'Ansh Gupta',
    email: 'anshg5384@gmail.com',
    phone: '+91 9079231064',
    location: 'Raichur, Karnataka, India',
    summary: 'AI & Data Science undergraduate at IIIT Raichur (Graduating 2026) and Backend Intern at Infooware. Solved 400+ DSA problems. Builds Full-stack, AI/ML-powered applications and RESTful APIs using Node.js, Express, TypeScript, React.js, Python, PostgreSQL, and MongoDB.',
    skills: {
      languages: ['Python', 'JavaScript', 'TypeScript', 'C/C++', 'SQL', 'HTML', 'CSS'],
      frameworks: ['React.js', 'Express.js', 'Node.js', 'Flask', 'Tailwind CSS', 'Socket.io', 'scikit-learn', 'Pandas'],
      tools: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Git', 'Vercel', 'WebSockets', 'Postman'],
      coursework: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Machine Learning'],
    },
    experience: [
      {
        title: 'Backend Intern – Node.js & TypeScript',
        company: 'Infooware',
        period: 'April 2026 – Present',
        location: 'Remote',
        highlights: [
          'Developing a construction ERP system across 10+ modules using Node.js, TypeScript, Prisma ORM, and PostgreSQL',
          'Shipped 150+ REST APIs with clean layered architecture, reducing response times by 35%',
          'Implemented Role-Based Access Control (RBAC) supporting Admin, HR, Finance, and Project Manager roles',
        ],
      },
      {
        title: 'Teaching Assistant – Design and Analysis of Algorithms',
        company: 'IIIT Raichur',
        period: 'Jan 2026 – April 2026',
        location: 'Raichur, Karnataka',
        highlights: [
          'Mentored 60+ students on algorithm design, complexity analysis, and optimization',
        ],
      },
    ],
    projects: [
      {
        name: 'Job-Hunt',
        description: 'AI-Powered Job Portal',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'shadcn/ui', 'Mistral 7B'],
        period: '2025 - 2026',
        highlights: [
          'Integrated OpenRouter API with Mistral 7B for AI-powered resume analysis and skill gap feedback',
          'Implemented JWT authentication, role-based access for recruiters/students, handling 200+ daily requests',
        ],
      },
      {
        name: 'Crime Rate Predictor',
        description: 'ML-Powered Web Application',
        tech: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'JavaScript', 'REST API'],
        period: '2025',
        highlights: [
          'Evaluated 5 ML models on 1,520 NCRB records; Random Forest achieved R²=0.9323',
          'Built Flask REST API & interactive dashboard with city-wise risk classification and forecasting (2022-2030)',
        ],
      },
      {
        name: 'Chat-App',
        description: 'Real-Time Messaging Application',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'daisyUI'],
        period: '2025',
        highlights: [
          'Real-time messaging platform supporting 20+ concurrent users with Socket.io; reduced message latency by 30%',
        ],
      },
    ],
    education: [
      {
        degree: 'B.Tech in Artificial Intelligence and Data Science',
        institution: 'Indian Institute of Information Technology, Raichur',
        location: 'Raichur, Karnataka',
        period: 'August 2023 – Present (Graduating 2026)',
      },
    ],
    achievements: [
      'Solved 400+ DSA problems across LeetCode & GeeksforGeeks with global rank <5000 in LeetCode Biweekly Contest',
      'Selected for Smart India Hackathon 2024 & 2025',
      'Secured 99.40 percentile in Naukri Campus Young Turks 2025',
    ],
  })

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    const data = getPortfolioData()

    // Skills queries
    if (
      message.includes('skill') ||
      message.includes('technology') ||
      message.includes('language') ||
      message.includes('tech stack') ||
      message.includes('what can')
    ) {
      return `Ansh is skilled in multiple technologies:\n\n**Languages:** ${data.skills.languages.join(', ')}\n\n**Frameworks:** ${data.skills.frameworks.join(', ')}\n\n**Tools & DBs:** ${data.skills.tools.join(', ')}\n\nWould you like to know more about any specific technology?`
    }

    // Projects queries
    if (message.includes('project') || message.includes('work') || message.includes('built')) {
      const projectList = data.projects
        .map((p) => `• **${p.name}** (${p.period}): ${p.description}`)
        .join('\n')
      return `Ansh has built several impressive projects:\n\n${projectList}\n\nWould you like details about any specific project?`
    }

    // Specific project queries
    if (message.includes('job-hunt') || message.includes('job hunt')) {
      const project = data.projects[0]
      return `**Job-Hunt** is an ${project.description} built with ${project.tech.join(', ')}. Key features:\n\n${project.highlights.map((h) => `• ${h}`).join('\n')}`
    }

    if (message.includes('crime')) {
      const project = data.projects[1]
      return `**Crime Rate Predictor** is a ${project.description} built with ${project.tech.join(', ')}. Key features:\n\n${project.highlights.map((h) => `• ${h}`).join('\n')}`
    }

    if (message.includes('chat')) {
      const project = data.projects[2]
      return `**Chat-App** is a ${project.description} built with ${project.tech.join(', ')}. Key features:\n\n${project.highlights.map((h) => `• ${h}`).join('\n')}`
    }

    // Experience queries
    if (
      message.includes('experience') ||
      message.includes('work experience') ||
      message.includes('internship') ||
      message.includes('job')
    ) {
      const exp = data.experience[0]
      return `Ansh is currently working as a **${exp.title}** at **${exp.company}** (${exp.period}, ${exp.location}).\n\nKey responsibilities:\n${exp.highlights.map((h) => `• ${h}`).join('\n')}`
    }

    // Education queries
    if (message.includes('education') || message.includes('degree') || message.includes('study') || message.includes('college') || message.includes('university')) {
      const edu = data.education[0]
      return `Ansh is currently pursuing a **${edu.degree}** from **${edu.institution}**, ${edu.location} (${edu.period}).`
    }

    // Contact queries
    if (
      message.includes('contact') ||
      message.includes('email') ||
      message.includes('reach') ||
      message.includes('phone') ||
      message.includes('call') ||
      message.includes('mail')
    ) {
      return `You can reach Ansh through:\n\n📧 **Email:** ${data.email}\n📱 **Phone:** ${data.phone}\n📍 **Location:** ${data.location}\n\nFeel free to reach out for collaboration or opportunities!`
    }

    // About queries
    if (
      message.includes('about') ||
      message.includes('who is') ||
      message.includes('tell me about') ||
      message.includes('who are you')
    ) {
      return `${data.summary}\n\nCurrently open to software engineering & AI opportunities.`
    }

    // Achievement queries
    if (
      message.includes('achievement') ||
      message.includes('accomplishment') ||
      message.includes('award') ||
      message.includes('leetcode') ||
      message.includes('hackathon')
    ) {
      return `Ansh's achievements:\n\n${data.achievements.map((a) => `• ${a}`).join('\n')}\n\nImpressive, right?`
    }

    // Greeting queries
    if (
      message.includes('hi') ||
      message.includes('hello') ||
      message.includes('hey') ||
      message.includes('greetings')
    ) {
      return `Hello! I'm here to help you learn more about Ansh Gupta. You can ask me about his skills, projects, experience, education, achievements, or how to contact him. What would you like to know?`
    }

    // Location queries
    if (message.includes('location') || message.includes('where') || message.includes('based')) {
      return `Ansh is based in ${data.location} and is currently studying at IIIT Raichur, Karnataka.`
    }

    // Default response
    return `I can help you learn about Ansh's:\n• Skills and technologies\n• Projects and work\n• Experience and internships\n• Education\n• Achievements\n• Contact information\n\nWhat would you like to know?`
  }

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // Show loading state
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: 'Thinking...',
      sender: 'bot',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, loadingMessage])

    try {
      // Call Gemini API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.text }),
      })

      const data = await response.json()

      // Remove loading message
      setMessages((prev) => prev.filter((msg) => msg.id !== loadingMessage.id))

      if (response.ok && data.response) {
        // Use Gemini response
        const botResponse: Message = {
          id: (Date.now() + 2).toString(),
          text: data.response,
          sender: 'bot',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
      } else {
        // Fallback to local rule-based responses if API fails or isn't configured
        const fallbackText = generateBotResponse(userMessage.text)
        const botResponse: Message = {
          id: (Date.now() + 2).toString(),
          text: fallbackText,
          sender: 'bot',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
      }
    } catch (error: any) {
      console.error('Chat error:', error)

      // Remove loading message
      setMessages((prev) => prev.filter((msg) => msg.id !== loadingMessage.id))

      // Use local rule-based response as fallback
      const fallbackText = generateBotResponse(userMessage.text)
      const botResponse: Message = {
        id: (Date.now() + 2).toString(),
        text: fallbackText,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Chat Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-2xl hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300"
        aria-label="Open chat assistant"
        title="Chat with AI Assistant"
      >
        {isOpen ? <X size={28} /> : <ChatbotIcon className="w-7 h-7" />}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div
          ref={chatBoxRef}
          className="fixed bottom-24 right-6 z-40 w-96 max-h-[500px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <ChatbotIcon className="w-6 h-6" /> AI Assistant
            </h3>
            <p className="text-sm opacity-90">Ask me anything about Ansh!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-muted text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 bg-background">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-card border border-input rounded-lg focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
