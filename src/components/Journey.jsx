import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  const milestones = [
    { day: "Day 01", title: "The Spark", description: "Identified a gap in the market and started brainstorming the MVP.", status: "completed" },
    { day: "Day 15", title: "First Prototype", description: "Built a basic landing page and validated the idea with 100+ users.", status: "completed" },
    { day: "Day 30", title: "Beta Launch", description: "Released the beta version to early adopters and collected feedback.", status: "current" },
    { day: "Day 60", title: "Scaling Up", description: "Optimizing performance and preparing for a public launch.", status: "upcoming" }
  ];

  return (
    <section id="journey" className="py-24 bg-black px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-16 tracking-tighter uppercase">Startup Journey</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gray-800"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10"></div>
                
                {/* Content Block */}
                <div className={`ml-10 md:ml-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 text-right'}`}>
                  <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                    <span className="text-xs font-mono text-gray-500 mb-2 block">{item.day}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;