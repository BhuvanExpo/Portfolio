import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Briefcase, Trophy } from 'lucide-react';

const Achievements = () => {
  const sections = [
    {
      title: "Hackathons",
      icon: <Trophy size={20} />,
      items: [
        { name: "Global AI Hackathon 2025", role: "1st Runner Up", date: "Feb 2025" },
        { name: "Smart India Hackathon", role: "Finalist", date: "Dec 2024" }
      ]
    },
    {
      title: "Internships",
      icon: <Briefcase size={20} />,
      items: [
        { name: "StartupX Lab", role: "Frontend Developer", date: "Jun - Aug 2024" },
        { name: "TechNova Solutions", role: "UI Designer", date: "Jan - Mar 2024" }
      ]
    },
    {
      title: "Certificates",
      icon: <Award size={20} />,
      items: [
        { name: "AWS Certified Developer", role: "Amazon Web Services", date: "2024" },
        { name: "Full Stack Masterclass", role: "Meta", date: "2023" }
      ]
    },
    {
      title: "Events",
      icon: <Calendar size={20} />,
      items: [
        { name: "Google DevFest 2024", role: "Speaker", date: "Nov 2024" },
        { name: "Startup Weekend", role: "Organizer", date: "Oct 2024" }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-16 tracking-tighter uppercase">Accomplishments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">{section.title}</h3>
              </div>
              
              <div className="space-y-4">
                {section.items.map((item, j) => (
                  <div key={j} className="group flex justify-between items-start p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">{item.name}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{item.role}</p>
                    </div>
                    <span className="text-[10px] font-mono text-gray-600">{item.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;