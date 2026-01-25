'use client'

import { Home, User, Briefcase, GraduationCap, Heart, Music, MessageSquare, Bot, TrendingUp } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import Image from 'next/image'

export default function Page() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Experience', url: '#experience', icon: GraduationCap },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Skills', url: '#skills', icon: Heart }
  ]

  return (
    <main className="relative min-h-screen">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <AnimatedGradientBackground
          Breathing={true}
          startingGap={110}
          breathingRange={10}
          animationSpeed={0.02}
          gradientColors={[
            "#0A0A0A",
            "#2979FF",
            "#FF80AB",
            "#FF6D00",
            "#FFD600",
            "#00E676",
            "#3D5AFE"
          ]}
          gradientStops={[35, 50, 60, 70, 80, 90, 100]}
          topOffset={0}
        />
      </div>
      <NavBar items={navItems} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white pb-1">
          Nihal Pardeshi
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 font-light">
          Turning AI into real-world impact, one project at a time
        </p>
        <div className="flex justify-center gap-6 z-50">
          <a
            href="https://github.com/NihaallX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all hover:scale-110 cursor-pointer"
          >
            <i className="fab fa-github text-2xl text-white pointer-events-none"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nihaallp/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all hover:scale-110 cursor-pointer"
          >
            <i className="fab fa-linkedin text-2xl text-white pointer-events-none"></i>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-1">About Me</h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-1">About Me</h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto text-lg">Building the future of AI, one algorithm at a time</p>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="group relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
                <User className="w-12 h-12 mb-6 text-primary" />
                <p className="text-lg mb-6 leading-relaxed text-foreground/80">
                  AI/ML undergrad passionate about bridging the gap between cutting-edge research and practical applications.
                  I specialize in building intelligent systems that solve real-world problems while maintaining ethical considerations at the forefront.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  When I'm not training models, you'll find me exploring new architectures, contributing to open-source projects, or mentoring aspiring ML engineers.
                </p>
              </div>
              <div className="group relative bg-gradient-to-br from-primary/10 via-card/50 to-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center rotate-6 group-hover:rotate-12 transition-transform">
                    <Heart className="w-10 h-10 text-white" fill="currentColor" />
                  </div>
                  <p className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-1">AI Philosophy</p>
                  <p className="text-xl italic text-foreground/80">"AI should lessen the load, not increase it."</p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-1">Experience</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto text-lg">My journey in AI and software engineering</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Work Experience</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-lg mb-1">Python/AI Intern</p>
                  <p className="text-sm text-primary font-semibold mb-3">(June 2025 – Present)</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Developed an AI-powered healthcare IVR system using LangGraph and RAG deployed via AWS Lambda and API Gateway</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Integrated multi-channel communication: IVR calls via Twilio, email via SMTP/AWS SES, SMS via AWS SNS</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Designed conversational flows for appointment reminders and automated query handling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Research Experience</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-lg mb-1">Rubric-Based AI Response Evaluation</p>
                  <p className="text-sm text-primary font-semibold mb-3">(July 2025)</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Conducted research for mentor-style AI judges to grade responses based on defined rubrics</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Adapted a 10-point rubric into an optimized 5-point metric through iterative trial-and-error</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Evaluated GPT-4 under varying configurations and measured consistency and accuracy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-1">Projects</h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-1">Projects</h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto text-lg">Transforming ideas into intelligent solutions</p>
          <BentoGrid className="lg:grid-rows-4">
            <BentoGrid className="lg:grid-rows-4">
              <BentoCard
                name="Moodify"
                className="lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3"
                background={
                  <Image
                    src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=800&fit=crop"
                    alt="Music streaming interface"
                    fill
                    className="absolute inset-0 object-cover opacity-60"
                  />
                }
                Icon={Music}
                description="Affective computing music recommendation system with mood detection and chat interface using React.js, Hugging Face, and Spotify API."
                href="https://moodifyxd.vercel.app/"
                cta="Try Moodify"
              />

              <BentoCard
                name="DateHelp"
                className="lg:row-start-3 lg:row-end-5 lg:col-start-2 lg:col-end-3"
                background={
                  <Image
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=800&fit=crop"
                    alt="Dating app interface"
                    fill
                    className="absolute inset-0 object-cover opacity-60"
                  />
                }
                Icon={Heart}
                description="AI-powered dating profile optimization tool. Get data-driven insights to improve your matches."
                href="https://datehelp.tech"
                cta="View Details"
              />

              <BentoCard
                name="HouseGPT"
                className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
                background={
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop"
                    alt="Medical AI interface"
                    fill
                    className="absolute inset-0 object-cover opacity-60"
                  />
                }
                Icon={MessageSquare}
                description="Sarcastic Voice AI Chatbot using Flan-T5-Large, LoRA, RAG, and custom datasets. Currently under active development."
                href="https://colab.research.google.com/drive/10MwwDrCOMGuci2qFceiMm-m66q842KVz"
                cta="View Details"
              />

              <BentoCard
                name="CartPole RL Agent"
                className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5"
                background={
                  <Image
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=800&fit=crop"
                    alt="Reinforcement learning visualization"
                    fill
                    className="absolute inset-0 object-cover opacity-60"
                  />
                }
                Icon={TrendingUp}
                description="DQN agent for CartPole-v1 with modular pipeline and reward visualization using Stable-Baselines3, Gymnasium, and PyTorch."
                href="https://github.com/NihaallX/Reinforcement-Learning"
                cta="View Code"
              />

              <BentoCard
                name="RateMyProf India"
                className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-5"
                background={
                  <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=800&fit=crop"
                    alt="University education"
                    fill
                    className="absolute inset-0 object-cover opacity-60"
                  />
                }
                Icon={User}
                description="A platform where students can rate and review professors across Indian colleges. Provides transparent insights through ratings on teaching quality, clarity, and overall experience with search, filters, and clean UI."
                href="https://ratemyprof.me"
                cta="Visit Site"
              />
            </BentoGrid>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-1">Skills & Technologies</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto text-lg">The tools and technologies I work with</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Python", "JavaScript", "React", "AWS", "PyTorch", "TensorFlow", "Docker", "Git", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"].map((skill) => (
              <div key={skill} className="group relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <GlowingEffect spread={30} glow={true} disabled={false} proximity={48} inactiveZone={0.01} borderWidth={1.5} />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-xl transition-all" />
                <h3 className="font-bold relative z-10 group-hover:text-primary transition-colors">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-1">Let's Build Something Amazing</h2>
          </div>
          <p className="mb-10 max-w-2xl mx-auto text-lg text-foreground/60">
            Whether you're looking to collaborate, discuss AI ethics, or just geek out about the latest in ML research—I'd love to connect!
          </p>
          <div className="flex justify-center gap-6 mb-10 relative z-50">
            <a href="https://github.com/NihaallX" target="_blank" rel="noopener noreferrer" className="group relative w-14 h-14 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer">
              <i className="fab fa-github text-2xl group-hover:text-primary transition-colors pointer-events-none"></i>
            </a>
            <a href="https://www.linkedin.com/in/nihaallp/" target="_blank" rel="noopener noreferrer" className="group relative w-14 h-14 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer">
              <i className="fab fa-linkedin text-2xl group-hover:text-primary transition-colors pointer-events-none"></i>
            </a>
          </div>
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-foreground/40">© 2025 Nihal Pardeshi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
