import { motion } from "motion/react";
import { ParticleBackground } from "./components/ParticleBackground";
import {
  Palette,
  Layout,
  Box,
  Film,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const SkillBar = ({ name, icon: Icon, percentage }: { name: string, icon: any, percentage: number }) => (
  <motion.div
    className="space-y-2"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-neon-purple" />
        <span className="font-medium">{name}</span>
      </div>
      <span className="text-sm text-gray-400">{percentage}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-glow-purple to-neon-purple origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: percentage / 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ width: '100%' }}
      />
    </div>
  </motion.div>
);

const ProjectCard = ({ title, category, image }: { title: string, category: string, image: string }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl glass aspect-video cursor-pointer"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-80"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-dark-purple via-transparent to-transparent opacity-60" />
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <p className="text-neon-purple text-xs font-semibold tracking-widest uppercase mb-1">{category}</p>
      <h3 className="text-xl font-bold flex items-center justify-between">
        {title}
        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
    </div>
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-purple/30 rounded-2xl transition-colors pointer-events-none" />
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-dark-purple overflow-x-hidden relative">
      <ParticleBackground />

      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-glow opacity-15 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-glow opacity-15 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h2 className="text-neon-purple font-semibold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
              Designer & Visionary
            </h2>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
              Syauqi <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-purple">Arkan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Creative Designer Crafting <span className="text-white font-medium">Visual Experiences</span> that resonate and inspire.
            </p>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="px-8 py-4 bg-neon-purple text-white rounded-full font-bold hover:bg-glow-purple transition-all shadow-[0_0_20px_rgba(176,38,255,0.4)] flex items-center justify-center gap-2 group">
                View Portfolio
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-all">
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-neon-purple rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-neon-purple inline-block" />
                About Me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a designer focused on creating engaging, functional, and modern visual solutions. With experience in various fields such as graphic design, UI/UX design, 3D design, and motion graphics, I always prioritize detail, aesthetics, and user experience in every work I create.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe that good design is not only about looking beautiful but also about conveying messages effectively.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
                <img
                  src="/about-photo.jpg"
                  alt="Syauqi Arkan Profile"
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neon-purple/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 px-4 bg-deep-purple/50">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Core Skills</h2>
              <p className="text-gray-400">Specialized in multiple creative disciplines</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              <SkillBar name="Graphic Design" icon={Palette} percentage={95} />
              <SkillBar name="UI/UX Design" icon={Layout} percentage={90} />
              <SkillBar name="3D Design" icon={Box} percentage={85} />
              <SkillBar name="Motion Graphic" icon={Film} percentage={80} />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-400">A selection of my recent creative works</p>
            </div>
            <div className="flex gap-4 text-sm font-medium">
              <span className="text-neon-purple cursor-pointer">All</span>
              <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">Design</span>
              <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">3D</span>
              <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">UI/UX</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Cyberpunk Poster Series"
              category="Poster Design"
              image="/cyberpunk-poster.png"
            />
            <ProjectCard
              title="Futuristic Dashboard"
              category="Website Design"
              image="/futuristic-dashboard.png"
            />
            <ProjectCard
              title="Eco-Friendly App"
              category="App Design"
              image="/eco-app-design.png"
            />
            <ProjectCard
              title="Abstract 3D Render"
              category="3D Artwork"
              image="/abstract-3d-render.png"
            />
            <ProjectCard
              title="Minimalist Neon Series"
              category="Poster Design"
              image="/neon-poster-2.png"
            />
            <ProjectCard
              title="Futuristic Structure"
              category="3D Artwork"
              image="/futuristic-3d-2.png"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Have a project in mind? Let's create something extraordinary together.
              </p>

              <a
                href="mailto:syauqiarkan07@gmail.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-dark-purple rounded-full font-black text-xl hover:scale-105 transition-transform mb-12"
              >
                <Mail className="w-6 h-6" />
                Get In Touch
              </a>

              <div className="flex justify-center gap-6">
                {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="p-4 glass rounded-full hover:text-neon-purple transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 text-center px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-xl font-bold tracking-tighter">
              SYAUQI<span className="text-neon-purple">ARKAN</span>
            </h3>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Syauqi Arkan. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
