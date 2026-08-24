import { motion } from "framer-motion";
import { Code2, Cpu, Cloud, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend & REST APIs",
      description:
        "Designed and shipped 150+ REST APIs using Node.js, Express, TypeScript, and Prisma ORM.",
    },
    {
      icon: Cpu,
      title: "AI & ML Applications",
      description: "Integrated OpenRouter & LLM APIs and trained ML models (Random Forest, SVR, KNN).",
    },
    {
      icon: Cloud,
      title: "Database Architecture",
      description:
        "Modeling normalized PostgreSQL schemas, Prisma data layers, and MongoDB query optimization.",
    },
    {
      icon: Award,
      title: "Competitive Programming",
      description: "Solved 400+ DSA problems across LeetCode & GeeksforGeeks with global rank <5000.",
    },
  ];

  const stats = [
    { value: "400+", label: "DSA Problems" },
    { value: "<5000", label: "LeetCode Rank" },
    { value: "99.40%", label: "Naukri Young Turks" },
    { value: "SIH '24/'25", label: "Hackathon Selectee" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Get to know me
          </span>
          <h2 className="section-heading text-foreground mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI & Data Science student at IIIT Raichur, passionate about backend engineering & full-stack development
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 mb-16">
          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card p-8 rounded-3xl h-full">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/5">
                    <img
                      src="/ansh_portrait.jpg"
                      alt="Ansh Gupta"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-background border border-primary/20 flex items-center justify-center text-sm shadow-lg">
                    🇮🇳
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">
                    Ansh Gupta
                  </h3>
                  <p className="text-sm font-medium gradient-text uppercase tracking-widest">
                    AI & Data Science Undergrad
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  B.Tech in Artificial Intelligence & Data Science student at{" "}
                  <span className="text-primary font-medium">IIIT Raichur</span>
                  , specializing in full-stack development and backend engineering.
                </p>
                <p className="leading-relaxed">
                  Currently working as a{" "}
                  <span className="text-foreground font-medium">
                    Backend Intern
                  </span>{" "}
                  at Infooware, architecting ERP microservices with Node.js, TypeScript, Prisma ORM, and PostgreSQL.
                </p>
                <p className="leading-relaxed">
                  Demonstrated expertise in building AI/ML applications, real-time WebSocket systems, and solving complex DSA problems.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary/5 border border-primary/20 rounded-2xl p-4 text-center"
                  >
                    <div className="text-xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 rounded-3xl"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Education & Key Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-primary font-medium mb-1">
                2023 - Present (Graduation 2026)
              </p>
              <p className="text-lg font-semibold text-foreground">
                B.Tech in Artificial Intelligence & Data Science
              </p>
              <p className="text-sm text-muted-foreground">
                IIIT Raichur, Karnataka
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-start">
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                Smart India Hackathon 2024 & 2025
              </span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                LeetCode Biweekly &lt;5000 Rank
              </span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                Naukri Young Turks 99.40%ile
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
