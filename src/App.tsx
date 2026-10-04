import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BackToTop, DataStream } from "./components/Effects";
import {
  AboutSection,
  MetricsBar,
  ExpertiseSection,
  TechSection,
  ProjectsSection,
  TeachingSection,
  CoursesSection,
  ResearchSection,
  BlogSection,
  ExperienceSection,
  CodingScienceSection,
  ServicesSection,
  TestimonialsSection,
  ContactSection,
  Footer,
} from "./components/Sections";

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-text-primary font-sans antialiased relative">
      <DataStream />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <AboutSection />
        <MetricsBar />
        <div className="section-divider" />
        <ExpertiseSection />
        <div className="section-divider" />
        <TechSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <TeachingSection />
        <div className="section-divider" />
        <CoursesSection />
        <div className="section-divider" />
        <ResearchSection />
        <div className="section-divider" />
        <BlogSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <CodingScienceSection />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <TestimonialsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
