import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EcoTrack AI",
      description: "A SaaS platform using AI to track and optimize carbon footprints for small businesses.",
      tags: ["React", "Node.js", "AI"],
      link: "#"
    },
    {
      title: "FounderLink",
      description: "A networking platform specifically designed for early-stage startup founders to find co-founders.",
      tags: ["Next.js", "Firebase", "Tailwind"],
      link: "#"
    },
    {
      title: "DevFlow",
      description: "An internal tool for development teams to manage their sprint cycles and public documentation.",
      tags: ["TypeScript", "MongoDB", "Framer"],
      link: "#"
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