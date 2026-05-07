import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Journey', href: '/journey' },
    { name: 'Websites', href: '/websites' },
    { name: 'Contact', href: '/#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="fixed top-0 left-0 right-0 z-[100]"
    >
      <nav className="px-10 py-10 flex justify-between items-center bg-transparent pointer-events-none">
        {/* Bold B Logo Top Left */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="pointer-events-auto group"
        >
          <img 
            src="/src/assets/profile.png" 
            alt="Bhuvan"
            className="w-12 h-12 rounded-full border-2 border-white/20 object-cover group-hover:border-white transition-all shadow-lg"
          />
        </Link>
        
        {/* Three Bar Menu Toggle Top Right */}
        <Magnetic>
          <button 
            className="text-white hover:opacity-70 transition-opacity p-2 pointer-events-auto"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={36} strokeWidth={1.5} /> : <Menu size={36} strokeWidth={1.5} />}
          </button>
        </Magnetic>
      </nav>

      {/* Dynamic Island Style Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 left-0 right-0 h-screen bg-black/90 backdrop-blur-3xl z-[-1] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase hover:text-gray-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20"
            >
              <a 
                href="#" 
                className="bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-tighter flex items-center gap-3 hover:bg-gray-200 transition-all text-xl"
              >
                Join Us <ArrowUpRight size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;