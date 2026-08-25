import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message. Message must be a non-empty string.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set in environment variables')
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    const systemPrompt = `You are a professional, concise AI assistant for Ansh Gupta's portfolio. Provide helpful, accurate answers about Ansh's background, skills, projects, experience, education, and achievements. Keep responses friendly and direct.

  Ansh Gupta's Portfolio Information:
- Name: Ansh Gupta
- Title: AI & Data Science Undergraduate | Full-Stack & AI/ML Developer | IIIT Raichur '27
- Email: anshg5384@gmail.com
- Phone: +91 9079231064
- Location: Raichur, Karnataka, India
- Summary: 
  AI & Data Science undergraduate at IIIT Raichur (Graduating 2027) with hands-on experience building full-stack applications using React.js, Node.js, Express.js, and TypeScript. Built and deployed AI/ML-powered web applications integrating LLM APIs and predictive models. Currently interning as a Backend Engineer at Infooware; solved 400+ DSA problems across competitive platforms.
- Skills: 
  * Languages: Python, JavaScript, TypeScript, C/C++, SQL, HTML, CSS
  * Libraries & Frameworks: React.js, Express.js, Node.js, Flask, Tailwind CSS, Socket.io, scikit-learn, Pandas
  * Tools & Databases: MongoDB, PostgreSQL, Prisma ORM, Git, Vercel, WebSockets, Postman
  * Coursework: DSA, OOP, DBMS, Operating Systems, Machine Learning
- Projects: 
  * Job-Hunt - AI-Powered Job Portal with OpenRouter API & Mistral 7B for resume analysis, JWT auth, and role-based access (React.js, Node.js, Express.js, MongoDB, TypeScript, shadcn/ui)
  * Crime Rate Predictor - ML Web Application using SVR, KNN, Decision Tree, Random Forest (R²=0.9323), Neural Network on NCRB dataset with Flask REST API (Python, Flask, scikit-learn, Pandas)
  * Chat-App - Real-Time Messaging Application supporting 20+ concurrent users with Socket.io (React.js, Node.js, Express.js, MongoDB, Socket.io, daisyUI)
- Work Experience: 
  * Backend Intern – Node.js & TypeScript at Infooware (April 2026–Present, Remote) - Developing construction ERP system, shipped 150+ REST APIs with Prisma & PostgreSQL, implemented RBAC system.
  * Teaching Assistant – Design & Analysis of Algorithms at IIIT Raichur (Jan 2026–April 2026) - Mentoring 60+ students on algorithms and complexity analysis.
- Education: 
  * B.Tech in Artificial Intelligence and Data Science from Indian Institute of Information Technology, Raichur (Aug 2023–Present, Graduating 2027)
- Achievements: 
  * Solved 400+ DSA problems across LeetCode and GeeksforGeeks; global rank under 5000 in LeetCode Biweekly Contest.
  * Selected for Smart India Hackathon 2024 & 2025.
  * Secured 99.40 percentile in Naukri Campus Young Turks 2025.
- Links: GitHub (github.com/ansh-34), LinkedIn (www.linkedin.com/in/ansh-gupta-iiitr), Portfolio, GeeksforGeeks, LeetCode
- Resume: Available for download via the floating green resume download button

You should:
- Answer questions about Ansh's portfolio, skills, projects, experience, education, and achievements
- If asked about resume or CV, direct them to the resume download button
- Keep responses concise (2-4 sentences unless more detail is requested)
- Be clear and professional; no roleplay or character voices
- If asked non-portfolio questions, politely redirect to portfolio-related topics` 

    const response = await model.generateContent([
      {
        text: systemPrompt,
      },
      {
        text: `User question: ${message}`,
      },
    ])

    const responseText = response.response.text()

    return NextResponse.json(
      {
        response: responseText,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Chat API Error:', error)

    // Check if it's a Gemini API error
    if (error.message?.includes('API')) {
      return NextResponse.json(
        {
          error: 'Gemini API error. Please check your API key and try again.',
          details: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        error: 'Failed to process your request. Please try again.',
        details: error?.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}
