import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from './magicui/ShimmerButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  const words = ["Startup Founder", "Web Developer", "BTech Student", "Innovator"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden px-4 md:px-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 w-full flex flex-col items-center text-center"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 font-medium"
        >
          Building the future in public
        </motion.span>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tightest text-white mb-10 leading-[0.8] w-full break-words">
          BHUVAN G M
        </h1>
        
        <div className="h-12 mb-20 flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl md:text-3xl text-gray-400 font-light tracking-wide italic"
            >
              {words[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* side-by-side equal distance buttons */}
        <div className="flex flex-row gap-6 md:gap-12 items-center justify-center w-full px-4">
          <Link to="/journey" className="flex-1 max-w-[220px]">
            <ShimmerButton className="w-full">
              Explore Journey
            </ShimmerButton>
          </Link>
          
          <Link to="/websites" className="flex-1 max-w-[220px]">
            <ShimmerButton className="w-full">
              View Projects
            </ShimmerButton>
          </Link>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-gray-700 uppercase tracking-[0.3em]">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-gray-800 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;