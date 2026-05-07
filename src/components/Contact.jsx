import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10"
        >
          <Mail size={24} className="text-white" />
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">Let's Collaborate.</h2>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
          I'm currently open to new startup projects, partnerships, or just a coffee chat about the future of tech.
        </p>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:hello@bhuvan.com"
          className="inline-flex items-center gap-4 px-12 py-5 bg-white text-black text-sm font-black rounded-full uppercase tracking-tighter hover:bg-gray-200 transition-all"
        >
          Drop an Email <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;