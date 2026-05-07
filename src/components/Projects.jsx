import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NeX Library — Learn, Explore, Grow",
      description: "Building the next generation digital library experience — fast, minimal, and designed for students who want knowledge without limits.",
      tags: ["React.js", "Node.js", "AI"],
      link: "https://gym-fawn-five.vercel.app"
    },
    {
      title: "PowerFit Gym — Train Hard. Stay Strong",
      description: "Redefining fitness with modern training, smart workouts, and a community driven by growth and discipline.",
      tags: ["Next.js", "Firebase", "Tailwind"],
      link: "https://gym-fawn-five.vercel.app"
    },
    {
      title: "Nexa Restaurant — Modern Taste, Timeless Experience",
      description: "Redefining restaurant experiences through modern design, premium food, and unforgettable hospitality.",
      tags: ["TypeScript", "MongoDB", "Framer"],
      link: "https://resto-eta-two.vercel.app"
    },
    {
      title: "NovaMind AI — Transforming Ideas Into Intelligence",
      description: "Empower your business with cutting-edge artificial intelligence designed for speed, scalability, and performance.",
      tags: ["TypeScript", "MongoDB", "Framer"],
      link: "https://ai-saas-website-delta.vercel.app"
    }
    
  ];

  return (
    <section id="websites" className="py-24 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-12 tracking-tighter uppercase">Websites & Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-[32px] border border-white/5 flex flex-col h-full relative group"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 bg-white/5 text-gray-500 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
