import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NeX Library — Learn, Explore, Grow",
      description: "Building the next generation digital library experience — fast, minimal, and designed for students who want knowledge without limits.",
      tags: ["REACT.JS", "NODE.JS", "AI"],
      link: "https://nex-library.vercel.app/"
    },
    {
      title: "PowerFit Gym — Train Hard. Stay Strong",
      description: "Redefining fitness with modern equipment, professional workouts, and a community driven by growth and discipline.",
      tags: ["REACT.JS", "NODE.JS", "TAILWIND"],
      link: "https://powerfit-gym.vercel.app/"
    },
    {
      title: "EcoTrack AI",
      description: "A SaaS platform using AI to track and optimize carbon footprints for small businesses.",
      tags: ["React", "Node.js", "AI"],
      link: "#"
    }
  ];

  return (
    <section id="websites" className="py-24 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-12 tracking-tighter uppercase">Websites & Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-card p-8 rounded-[32px] border border-white/5 flex flex-col h-full relative overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight size={24} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 bg-white/5 text-gray-500 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;