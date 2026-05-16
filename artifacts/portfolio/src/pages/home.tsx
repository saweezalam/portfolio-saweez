import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail,
  PhoneCall,
  Download, 
  ExternalLink,
  Terminal,
  Code2,
  Figma,
  Smartphone,
  Moon,
  Sun,
  Layers,
  Zap,
  MessageSquareQuote
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  RoadTechThumbnail,
  AppraisalThumbnail,
  EngelVolkersThumbnail,
  NetstreitThumbnail,
  NovoNordiskThumbnail
} from "@/components/project-thumbnails";
import profilePhoto from "@assets/DSC_6868_1778927043028.JPG";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl tracking-tight">S<span className="text-primary">.</span>A</a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full" data-testid="button-theme-toggle">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button asChild className="hidden sm:inline-flex rounded-full px-6" data-testid="button-nav-hire">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 pb-12 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
        </div>
        
        <div className="container mx-auto z-10 relative">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Profile avatar - right side on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="order-first lg:order-last lg:ml-auto shrink-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-blue-500/20 blur-2xl scale-110 animate-pulse" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(0,180,216,0.15)]">
                <img
                  src={profilePhoto}
                  alt="Saweez Alam"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Staff UX Consultant & Frontend Engineer</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] tracking-tight mb-8">
              Architecting <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">enterprise experiences.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              I'm <strong className="text-foreground font-semibold">Saweez Alam</strong>, based in Karachi. I work at the intersection of design systems, scalable architecture, and pixel-perfect execution to build software that feels premium.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-base group" data-testid="button-hero-work" asChild>
                <a href="#work">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base bg-background/50 backdrop-blur-sm" data-testid="button-hero-resume" asChild>
                <a href="/resume.pdf" download="Saweez-Alam-Resume.pdf">
                  <Download className="mr-2 w-4 h-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Engineering with <br/><span className="text-muted-foreground">design intent.</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With 8+ years of experience, I specialize in translating complex Figma designs into responsive, accessible, and performant interfaces. My work revolves around component architecture, design systems, and frontend optimization using React, Next.js, and Angular.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I believe in Apple-level restraint meeting Silicon Valley confidence. A great interface doesn't just work — it feels right. Every interaction, every state, every pixel is deliberate.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full border border-border hover:bg-card" asChild data-testid="link-github">
                  <a href="https://github.com/saweez" target="_blank" rel="noreferrer"><Github className="w-5 h-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full border border-border hover:bg-card" asChild data-testid="link-linkedin">
                  <a href="https://linkedin.com/in/saweez-alam/" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full border border-border hover:bg-card" asChild data-testid="link-email">
                  <a href="mailto:saweezalam90@gmail.com"><Mail className="w-5 h-5" /></a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Code2, title: "Frontend", desc: "React, Next.js, Angular" },
                { icon: Figma, title: "UI Engineering", desc: "Figma-to-HTML, Tailwind" },
                { icon: Terminal, title: "Architecture", desc: "Design Systems, Monorepos" },
                { icon: Smartphone, title: "Responsive", desc: "Mobile-first, Accessible" },
              ].map((skill, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="bg-card/50 border-border/50 backdrop-blur-md h-full hover:bg-card hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-start gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{skill.title}</h3>
                        <p className="text-sm text-muted-foreground">{skill.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-12 bg-card/20 border-y border-border/50 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-display font-bold mb-16 text-center"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-16">
            {[
              {
                company: "10Pearls",
                role: "Staff UX Consultant",
                period: "Present",
                description: "Building scalable enterprise applications using React.js, Next.js, and Angular. Developing reusable component systems and shared UI libraries while collaborating closely with UX and product teams. Focusing on frontend performance optimization and accessibility across enterprise dashboards and management systems.",
                highlights: ["React.js", "Next.js", "Angular", "Design Systems", "Enterprise Dashboards"]
              },
              {
                company: "Creative Chaos",
                role: "UI Developer",
                period: "Previous",
                description: "Developed responsive web applications and enterprise interfaces. Worked with React.js, SCSS, Bootstrap, and frontend integrations. Built scalable UI components and responsive layouts while maintaining strict cross-browser compatibility and mobile responsiveness.",
                highlights: ["React.js", "SCSS", "Bootstrap", "Responsive Layouts"]
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="relative md:pl-0"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="md:w-1/4 shrink-0">
                    <div className="sticky top-24">
                      <h3 className="text-2xl font-bold font-display">{exp.company}</h3>
                      <div className="text-primary font-medium mt-1 mb-2">{exp.role}</div>
                      <Badge variant="outline" className="font-mono text-xs">{exp.period}</Badge>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <Card className="bg-card/30 border-border/50 backdrop-blur-sm">
                      <CardContent className="p-6 md:p-8">
                        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((h, j) => (
                            <Badge key={j} variant="secondary" className="bg-secondary/30 text-secondary-foreground">{h}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-24 px-6 md:px-12">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl">A showcase of enterprise dashboards, custom design systems, and complex frontends.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "RoadTech Dashboard Portal",
                desc: "Monorepo architecture with Admin, OEM, and Dealer portals for an automotive equipment management platform.",
                tech: ["React.js", "TypeScript", "Material UI", "SCSS"],
                featured: true,
                Thumbnail: RoadTechThumbnail
              },
              {
                title: "Home Appraisal System",
                desc: "Performance optimized SPA for real estate appraisal review and management.",
                tech: ["Angular", "MUI", "SCSS"],
                featured: false,
                Thumbnail: AppraisalThumbnail
              },
              {
                title: "Engel & Völkers",
                desc: "Custom design system and responsive frontend for global real estate platform.",
                tech: ["Next.js", "Styled Components"],
                featured: false,
                Thumbnail: EngelVolkersThumbnail
              },
              {
                title: "NETSTREIT",
                desc: "Mobile-first real estate frontend with complex data visualizations.",
                tech: ["React.js", "Gatsby", "Bootstrap"],
                featured: false,
                Thumbnail: NetstreitThumbnail
              },
              {
                title: "Novo Nordisk Sample Management",
                desc: "Healthcare dashboard interfaces for sample management systems.",
                tech: ["React.js", "Bootstrap"],
                featured: false,
                Thumbnail: NovoNordiskThumbnail
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className={project.featured ? "lg:col-span-2" : ""}
              >
                <Card className="group h-full overflow-hidden bg-card/30 border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] cursor-pointer">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className={`bg-muted/20 w-full relative overflow-hidden ${project.featured ? 'h-64 lg:h-96' : 'h-56'}`}>
                      <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700">
                        <project.Thumbnail />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>
                    <div className="p-8 relative flex-1 flex flex-col">
                      <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-3/4 transition-all duration-300 shadow-xl">
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 flex-1">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t, j) => (
                          <Badge key={j} variant="secondary" className="bg-secondary/40 text-secondary-foreground">{t}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-12 bg-card/10">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Technical Arsenal</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Technologies and tools I use to build scalable frontends.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Frontend Frameworks",
                icon: Layers,
                skills: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript ES6+", "Redux Toolkit"]
              },
              {
                title: "UI Engineering",
                icon: Figma,
                skills: ["Figma-to-HTML", "Material UI", "Tailwind CSS", "SCSS", "Styled Components", "Responsive Design", "Design Systems", "Accessibility"]
              },
              {
                title: "Testing & Tools",
                icon: Zap,
                skills: ["Jest", "GitHub Copilot", "GitHub", "Jira", "Vercel", "Firebase"]
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                <Card className="h-full bg-card/40 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <category.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, j) => (
                        <Badge key={j} variant="outline" className="bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 md:text-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Design to Dev Workflow</h2>
            <p className="text-muted-foreground text-lg max-w-2xl md:mx-auto">How I bridge the gap between design concepts and production code.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border/50 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Analyze", desc: "Review Figma files for edge cases, states, and component reusability." },
              { step: "02", title: "Architect", desc: "Plan component hierarchy, state management, and API integration strategy." },
              { step: "03", title: "Execute", desc: "Build accessible, responsive components with pixel-perfect accuracy." },
              { step: "04", title: "Optimize", desc: "Performance tuning, bundle size reduction, and smooth micro-interactions." }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative z-10"
              >
                <Card className="bg-card/80 border-border/50 backdrop-blur-md h-full">
                  <CardContent className="p-6">
                    <div className="text-primary font-display font-bold text-4xl mb-4 opacity-50">{phase.step}</div>
                    <h3 className="font-bold text-xl mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm">{phase.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-card/20 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto relative z-10">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-display font-bold mb-16 text-center"
          >
            What They Say
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Saweez has an incredible eye for detail. His ability to take complex enterprise requirements and translate them into intuitive, performant interfaces is unmatched.",
                name: "Product Manager",
                company: "Enterprise Client"
              },
              {
                quote: "One of the few engineers I've worked with who truly understands design systems. He doesn't just build components, he builds scalable architecture.",
                name: "Lead Designer",
                company: "Agency Partner"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Card className="bg-card/50 border-white/5 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <MessageSquareQuote className="w-8 h-8 text-primary/40 mb-6" />
                    <p className="text-lg mb-6 italic text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's build together.</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap max-w-2xl mx-auto">
              <Button size="lg" className="h-14 text-base rounded-full px-8 group" data-testid="button-contact-email" asChild>
                <a href="mailto:saweezalam90@gmail.com">
                  <Mail className="mr-2 w-4 h-4" />
                  saweezalam90@gmail.com
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-14 text-base rounded-full px-8 bg-background/50" data-testid="button-contact-phone" asChild>
                <a href="tel:+923362164269">
                  <PhoneCall className="mr-2 w-4 h-4" />
                  +92 336-2164269
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-14 text-base rounded-full px-8 bg-background/50" data-testid="button-contact-linkedin" asChild>
                <a href="https://linkedin.com/in/saweez-alam/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-border/50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-xl tracking-tight">S<span className="text-primary">.</span>A</div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Saweez Alam. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/saweez" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-card rounded-full"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/saweez-alam/" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-card rounded-full"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
