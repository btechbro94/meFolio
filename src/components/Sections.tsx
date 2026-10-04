import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain, Database, Code, Shield, GraduationCap, Building2, School,
  Lightbulb, FileText, Users, ExternalLink, Github, Calendar,
  BookOpen, ArrowRight, Mail, MapPin, Send, CheckCircle,
  Sparkles, Zap, Globe, Cpu, Lock, Layers,
} from "lucide-react";
import {
  about, expertise, technologies, projects, projectFilters,
  teachingAreas, teachingFormats, courses, research, experience,
  education, certifications, services, socialLinks, contactPurposes,
  profile,
} from "../data/profile";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={24} />, Database: <Database size={24} />,
  Code: <Code size={24} />, Shield: <Shield size={24} />,
  GraduationCap: <GraduationCap size={24} />, Building2: <Building2 size={24} />,
  School: <School size={24} />, Lightbulb: <Lightbulb size={24} />,
  FileText: <FileText size={24} />, Users: <Users size={24} />,
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
      <span className="text-primary-light text-xs font-semibold tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}

function AnimatedCounter({ value }: { value: string }) {
  const numMatch = value.match(/^(\d+)/);
  const suffix = value.replace(/^\d+/, "");
  const num = numMatch ? parseInt(numMatch[1]) : null;

  if (num === null) {
    return <span className="text-xl sm:text-2xl font-bold gradient-text">{value}</span>;
  }

  return (
    <motion.span
      className="text-xl sm:text-2xl font-bold gradient-text"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {num}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

// ============ ABOUT ============
export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="max-w-3xl mb-16">
          <SectionLabel>About</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{about.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div {...fadeInUp} className="lg:col-span-2 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-text-secondary text-lg leading-relaxed">{p}</p>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            {/* Portrait placeholder */}
            <div className="aspect-square rounded-2xl bg-surface-light border border-border flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-500" />
              <div className="text-center relative z-10">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white mb-3 shadow-lg shadow-primary/20">
                  AM
                </div>
                <p className="text-text-muted text-sm">Professional Photo</p>
                <p className="text-text-muted text-xs mt-1">Replace with actual image</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  {...stagger}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-surface-light border border-border hover:border-primary/20 transition-colors"
                >
                  <AnimatedCounter value={stat.value} />
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ METRICS BAR ============
export function MetricsBar() {
  const metrics = [
    { icon: <Brain size={20} />, label: "AI & ML", value: "Core Focus" },
    { icon: <Database size={20} />, label: "Data Science", value: "Specialization" },
    { icon: <GraduationCap size={20} />, label: "Education", value: "3+ Years" },
    { icon: <Globe size={20} />, label: "Cloud", value: "AWS • Azure • GCP" },
    { icon: <Lock size={20} />, label: "Security", value: "Cyber Security" },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-surface/50 border border-border/50"
            >
              <div className="text-primary-light mb-2">{m.icon}</div>
              <span className="text-sm font-medium text-text-primary">{m.label}</span>
              <span className="text-xs text-text-muted mt-1">{m.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ EXPERTISE ============
export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary-light text-xs font-semibold tracking-[0.2em] uppercase">Expertise</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Core Competencies</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((cat, i) => (
            <motion.div
              key={cat.category}
              {...stagger}
              transition={{ delay: i * 0.1 }}
              className="card-hover p-6 rounded-2xl bg-dark-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light mb-4">
                {iconMap[cat.icon]}
              </div>
              <h3 className="text-lg font-semibold mb-4">{cat.category}</h3>
              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TECHNOLOGIES ============
export function TechSection() {
  const categories = [...new Set(technologies.map(t => t.category))];
  
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary-light text-xs font-semibold tracking-[0.2em] uppercase">Technology</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Technology Ecosystem</h2>
        </motion.div>

        {/* Scrolling marquee */}
        <motion.div {...fadeInUp} className="mb-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10" />
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="px-5 py-2.5 rounded-xl bg-surface-light border border-border text-sm text-text-secondary shrink-0"
              >
                {tech.name}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat, ci) => (
            <motion.div key={cat} {...stagger} transition={{ delay: ci * 0.1 }}>
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/50" />
                {cat}
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.filter(t => t.category === cat).map((tech) => (
                  <span
                    key={tech.name}
                    className="px-4 py-2 rounded-lg bg-surface-light border border-border text-sm text-text-secondary hover:border-primary/30 hover:text-text-primary hover:bg-primary/5 transition-all cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROJECTS ============
export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
        </motion.div>

        {/* Filters */}
        <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-2 mb-12">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? "bg-primary text-white"
                  : "bg-surface-light border border-border text-text-secondary hover:text-text-primary hover:border-border-light"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              {...stagger}
              transition={{ delay: i * 0.1 }}
              className="card-hover group p-6 rounded-2xl bg-dark-card border border-border flex flex-col"
            >
              {project.isPlaceholder && (
                <span className="inline-flex items-center gap-1 text-xs text-amber-400/80 mb-3">
                  <Sparkles size={12} /> Replace with actual project
                </span>
              )}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary-light">{project.category}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-light transition-colors">{project.title}</h3>
              <p className="text-sm text-text-muted mb-2"><span className="text-text-secondary font-medium">Problem:</span> {project.problem}</p>
              <p className="text-sm text-text-muted mb-4"><span className="text-text-secondary font-medium">Solution:</span> {project.solution}</p>
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {project.technologies.map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded bg-surface-lighter text-text-muted">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 pt-3 border-t border-border">
                <a href={project.github} className="flex items-center gap-1 text-sm text-text-secondary hover:text-primary-light transition-colors">
                  <Github size={14} /> Code
                </a>
                <a href={project.demo} className="flex items-center gap-1 text-sm text-text-secondary hover:text-primary-light transition-colors">
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TEACHING ============
export function TeachingSection() {
  return (
    <section id="teaching" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="max-w-3xl mb-16">
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Teaching & Training</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Teaching Technology That Actually Gets Built</h2>
          <p className="text-text-secondary text-lg">Practical, hands-on technology education designed for real-world application.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-primary-light" /> Training Areas
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {teachingAreas.map((area, i) => (
                <motion.div
                  key={area}
                  {...stagger}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-surface-light border border-border hover:border-primary/20 transition-colors"
                >
                  <CheckCircle size={14} className="text-accent shrink-0" />
                  <span className="text-sm text-text-secondary">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Zap size={20} className="text-primary-light" /> Training Formats
            </h3>
            <div className="space-y-3 mb-8">
              {teachingFormats.map((format, i) => (
                <motion.div
                  key={format}
                  {...stagger}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-surface-light border border-border flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Sparkles size={16} className="text-accent" />
                  </div>
                  <span className="text-text-secondary">{format}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              Invite Me for a Workshop <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ COURSES ============
export function CoursesSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Courses</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Training Programs</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              {...stagger}
              transition={{ delay: i * 0.08 }}
              className="card-hover p-6 rounded-2xl bg-dark-card border border-border flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent">{course.level}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-text-muted mb-4 flex-grow">{course.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {course.technologies.map(t => (
                  <span key={t} className="px-2 py-0.5 text-xs rounded bg-surface-lighter text-text-muted">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-xs text-text-muted flex items-center gap-1">
                  <Calendar size={12} /> {course.duration}
                </span>
                <a href="#contact" className="text-sm text-primary-light hover:text-primary transition-colors flex items-center gap-1">
                  Details <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ RESEARCH ============
export function ResearchSection() {
  return (
    <section id="research" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="max-w-3xl mb-16">
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Research</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{research.title}</h2>
          <p className="text-text-secondary text-lg">{research.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-6">Research Areas</h3>
            <div className="grid grid-cols-2 gap-3">
              {research.areas.map((area, i) => (
                <motion.div
                  key={area}
                  {...stagger}
                  transition={{ delay: i * 0.05 }}
                  className="p-3 rounded-lg bg-surface-light border border-border text-sm text-text-secondary flex items-center gap-2"
                >
                  <Cpu size={14} className="text-primary-light shrink-0" />
                  {area}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-6">Publications & Projects</h3>
            <div className="p-8 rounded-2xl bg-surface-light border border-border text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen size={28} className="text-primary-light" />
              </div>
              <p className="text-text-secondary text-lg font-medium mb-2">{research.status}</p>
              <p className="text-text-muted text-sm">Research publications and projects will be listed here as they become available.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ BLOG ============
export function BlogSection() {
  const blogPosts = [
    { title: "Understanding Generative AI: A Practical Guide", category: "Generative AI", date: "Coming Soon", readTime: "5 min" },
    { title: "Building Your First ML Pipeline with Python", category: "Machine Learning", date: "Coming Soon", readTime: "8 min" },
    { title: "Agentic AI: The Future of Autonomous Systems", category: "Agentic AI", date: "Coming Soon", readTime: "6 min" },
  ];

  return (
    <section id="blog" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Insights</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Blog & Insights</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              {...stagger}
              transition={{ delay: i * 0.1 }}
              className="card-hover group rounded-2xl bg-dark-card border border-border overflow-hidden flex flex-col"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <BookOpen size={32} className="text-text-muted" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary-light">{post.category}</span>
                  <span className="text-xs text-text-muted">{post.readTime} read</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-light transition-colors">{post.title}</h3>
                <p className="text-sm text-text-muted flex-grow">Article coming soon. Stay tuned for insights on AI, Data Science and emerging technologies.</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-text-muted">{post.date}</span>
                  <span className="text-sm text-primary-light flex items-center gap-1">Read <ArrowRight size={14} /></span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ EXPERIENCE & EDUCATION ============
export function ExperienceSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div {...fadeInUp}>
            <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Experience</p>
            <h2 className="text-3xl font-bold mb-8">Professional Journey</h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  {...stagger}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-6 border-l-2 border-border"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-primary-light text-sm mb-1">{exp.organization}</p>
                  <p className="text-text-muted text-sm mb-3 flex items-center gap-1">
                    <Calendar size={12} /> {exp.period}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeInUp}>
            <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Education</p>
            <h2 className="text-3xl font-bold mb-8">Academic Background</h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  {...stagger}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-6 border-l-2 border-border"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent" />
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-accent text-sm mb-1">{edu.field}</p>
                  <p className="text-text-muted text-sm">{edu.institution}</p>
                  <p className="text-text-muted text-xs mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Certifications</p>
              <h3 className="text-xl font-bold mb-6">Professional Certifications</h3>
              {certifications.length > 0 ? (
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="p-4 rounded-xl bg-surface-light border border-border">
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-text-muted">{cert.organization} • {cert.date}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-surface-light border border-border text-center">
                  <p className="text-text-muted text-sm">Certifications will be listed here as they are verified and added.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ THE CODING SCIENCE ============
export function CodingScienceSection() {
  return (
    <section id="coding-science" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          {...fadeInUp}
          className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface-light to-dark-card border border-border overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Globe size={14} className="text-primary-light" />
                <span className="text-xs text-primary-light font-medium">Technology Education Initiative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">{profile.brand}</h2>
              <p className="text-primary-light text-lg mb-4">{profile.brandTagline}</p>
              <p className="text-text-secondary text-lg mb-6">{profile.brandDescription}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {["AI Education", "Data Science", "Programming", "Emerging Tech", "School-level Training", "University Programs", "Industry Skills"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 text-xs rounded-lg bg-surface-lighter border border-border text-text-secondary">{tag}</span>
                ))}
              </div>
              
              <a
                href={profile.brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
              >
                Explore The Coding Science <ExternalLink size={16} />
              </a>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
                <div className="text-center">
                  <Layers size={48} className="mx-auto text-primary-light mb-2" />
                  <p className="text-sm text-text-muted">TCS</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ SERVICES ============
export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold">How I Can Help</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...stagger}
              transition={{ delay: i * 0.1 }}
              className="card-hover p-6 rounded-2xl bg-dark-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light mb-4">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-text-secondary text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What People Say</h2>
        </motion.div>

        <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center">
          <div className="p-12 rounded-2xl bg-surface-light border border-border">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Users size={28} className="text-primary-light" />
            </div>
            <p className="text-text-secondary text-lg mb-2">Testimonials coming soon</p>
            <p className="text-text-muted text-sm">Feedback from students, colleagues and collaborators will be featured here.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ CONTACT ============
export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "", email: "", organization: "", purpose: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, integrate with email service or backend
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have an idea, project or opportunity?</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">Let's build something meaningful.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div {...fadeInUp} className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                {socialLinks.email && (
                  <a href={`mailto:${socialLinks.email}`} className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
                    <Mail size={18} className="text-primary-light" /> {socialLinks.email}
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
                    <Globe size={18} className="text-primary-light" /> LinkedIn
                  </a>
                )}
                {socialLinks.github && (
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
                    <Github size={18} className="text-primary-light" /> GitHub
                  </a>
                )}
              </div>
              {(!socialLinks.email && !socialLinks.linkedin && !socialLinks.github) && (
                <div className="p-4 rounded-lg bg-surface-light border border-border">
                  <p className="text-text-muted text-sm">Social links will appear here once configured in the data file.</p>
                </div>
              )}
            </div>

            <div className="p-6 rounded-2xl bg-surface-light border border-border">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-primary-light" /> The Coding Science
              </h4>
              <a href={profile.brandUrl} target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline text-sm">
                {profile.brandUrl}
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeInUp} className="lg:col-span-3">
            {submitted ? (
              <div className="p-12 rounded-2xl bg-surface-light border border-border text-center">
                <CheckCircle size={48} className="mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-text-secondary">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name *</label>
                    <input
                      id="name" type="text" required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-text-primary placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email *</label>
                    <input
                      id="email" type="email" required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-text-primary placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-text-secondary mb-2">Organization</label>
                    <input
                      id="organization" type="text"
                      value={formState.organization}
                      onChange={e => setFormState({ ...formState, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-text-primary placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="Company / Institution"
                    />
                  </div>
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-text-secondary mb-2">Purpose *</label>
                    <select
                      id="purpose" required
                      value={formState.purpose}
                      onChange={e => setFormState({ ...formState, purpose: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-text-primary focus:border-primary/50 focus:outline-none transition-colors"
                    >
                      <option value="">Select purpose</option>
                      {contactPurposes.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message *</label>
                  <textarea
                    id="message" required rows={5}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-text-primary placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-white">A</div>
              <span className="font-semibold">{profile.name}</span>
            </div>
            <p className="text-sm text-text-muted">{profile.headline}</p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Expertise", "Work", "Teaching", "Contact"].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-text-muted hover:text-text-primary transition-colors">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="space-y-2">
              {socialLinks.github && <a href={socialLinks.github} className="block text-sm text-text-muted hover:text-text-primary transition-colors">GitHub</a>}
              {socialLinks.linkedin && <a href={socialLinks.linkedin} className="block text-sm text-text-muted hover:text-text-primary transition-colors">LinkedIn</a>}
              {socialLinks.youtube && <a href={socialLinks.youtube} className="block text-sm text-text-muted hover:text-text-primary transition-colors">YouTube</a>}
              {socialLinks.instagram && <a href={socialLinks.instagram} className="block text-sm text-text-muted hover:text-text-primary transition-colors">Instagram</a>}
              {socialLinks.twitter && <a href={socialLinks.twitter} className="block text-sm text-text-muted hover:text-text-primary transition-colors">X / Twitter</a>}
              {(!socialLinks.github && !socialLinks.linkedin) && <p className="text-sm text-text-muted">Social links coming soon</p>}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">The Coding Science</h4>
            <p className="text-sm text-text-muted mb-3">{profile.brandTagline}</p>
            <a href={profile.brandUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-light hover:underline flex items-center gap-1">
              Visit Website <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">© 2026 {profile.name}. All rights reserved.</p>
          <p className="text-sm text-text-muted">Built with passion for AI & Education</p>
        </div>
      </div>
    </footer>
  );
}
