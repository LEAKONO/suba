import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { skills } from '../utils/constants';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [ref, controls] = useScrollAnimation();

  const skillIcons = {
    Handshake: '🤝',
    FileText: '📊',
    Shield: '🛡️',
    AlertTriangle: '🚨',
    Globe: '🌐',
    Peace: '🕊️'
  };

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-100 rounded-full -translate-y-36 translate-x-36 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full translate-y-48 -translate-x-48 opacity-30"></div>
      
      <motion.div 
        ref={ref}
        className="container-custom section-padding relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate={controls}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            Key <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"
            variants={scaleIn}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Expertise developed through 18+ years of progressive leadership in complex humanitarian environments
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 cursor-pointer transition-all duration-500 border-2 hover-lift ${
                activeSkill === index 
                  ? 'border-primary-300 shadow-2xl scale-105' 
                  : 'border-transparent hover:border-primary-200 shadow-lg'
              }`}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              onClick={() => setActiveSkill(activeSkill === index ? null : index)}
            >
              {/* Skill Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-2xl`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {skillIcons[skill.icon]}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{skill.category}</h3>
                    <div className="text-right md:hidden">
                      <div className="text-2xl font-bold gradient-text">{skill.proficiency}%</div>
                    </div>
                  </div>
                </div>
                <div className="text-right hidden md:block">
                  <div className="text-2xl font-bold gradient-text">{skill.proficiency}%</div>
                  <div className="text-xs text-gray-500">Proficiency</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                <motion.div 
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              
              {/* Skill Description */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeSkill === index ? 'auto' : 0,
                  opacity: activeSkill === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-200">{skill.description}</p>
              </motion.div>
              
              {/* Expand Button */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-primary-600 font-medium flex items-center">
                  {activeSkill === index ? 'Show less' : 'Learn more'}
                  {activeSkill === index ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                </div>
                <div className="text-xs text-gray-500 md:hidden">
                  {skill.proficiency}% proficiency
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Expertise */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-gray-900 to-primary-900 rounded-3xl p-8 text-white relative overflow-hidden"
          variants={fadeInUp}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-hero-pattern"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { name: "Strategic Planning", icon: "🎯" },
                { name: "Risk Assessment", icon: "📈" },
                { name: "Team Leadership", icon: "👥" },
                { name: "Crisis Management", icon: "⚡" }
              ].map((expertise, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl mb-2">{expertise.icon}</div>
                  <div className="text-sm font-medium">{expertise.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;