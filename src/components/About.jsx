import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 aspect-square glass-card rounded-[40px] border border-white/5 flex items-center justify-center p-8 overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <span className="text-8xl font-black text-white/10 group-hover:text-white/20 transition-colors">B</span>
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Innovation first</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">The Vision</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-6 font-medium">
            I am a <span className="text-white">BTech student</span> by education, but a <span className="text-white">Founder</span> by passion. My work lives at the intersection of complex engineering and clean design.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Currently building and shipping digital products while documenting the entire journey in public. I believe in the power of transparency and building tools that solve real problems for the next generation of founders.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-2xl font-black text-white">03+</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Websites Shipped</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">05+</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Hackathon Wins</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">60+</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Days Publicly Building</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;