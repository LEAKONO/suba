import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../utils/constants';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, controls] = useScrollAnimation();

  const experienceIcons = {
    BarChart3: '📊',
    Megaphone: '📢',
    Network: '🌐'
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-primary-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-secondary-400 rounded-full animate-pulse animation-delay-2000"></div>
      
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
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"
            variants={scaleIn}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Key roles and contributions in humanitarian policy, security, and coordination across diverse environments
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <motion.div 
            className="flex overflow-x-auto pb-6 mb-8 scrollbar-hide space-x-3"
            variants={fadeInUp}
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 px-6 py-4 rounded-xl transition-all duration-300 font-semibold text-left min-w-64 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === index ? 'bg-white/20' : 'bg-primary-100'
                  }`}>
                    <span className="text-lg">{experienceIcons[exp.icon]}</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm">{exp.organization}</div>
                    <div className="text-xs opacity-80">{exp.period.split('–')[0].trim()}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Experience Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {experiences[activeTab].title}
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-primary-600 font-semibold mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {experiences[activeTab].organization}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-4 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-primary-500" />
                      <span>{experiences[activeTab].location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-primary-500" />
                      <span>{experiences[activeTab].period}</span>
                    </div>
                  </motion.div>
                </div>
                <motion.div 
                  className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 rounded-full font-semibold text-sm md:text-base border border-primary-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {experiences[activeTab].period}
                </motion.div>
              </div>
              
              <div className="space-y-4">
                {experiences[activeTab].highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover-lift group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <motion.div 
            className="flex justify-between mt-8"
            variants={fadeInUp}
          >
            <motion.button
              onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
              disabled={activeTab === 0}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl'
              }`}
              whileHover={activeTab !== 0 ? { scale: 1.05, x: -5 } : {}}
              whileTap={activeTab !== 0 ? { scale: 0.95 } : {}}
            >
              <ChevronLeft size={20} className="mr-2" />
              Previous Role
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab(prev => Math.min(experiences.length - 1, prev + 1))}
              disabled={activeTab === experiences.length - 1}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === experiences.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl'
              }`}
              whileHover={activeTab !== experiences.length - 1 ? { scale: 1.05, x: 5 } : {}}
              whileTap={activeTab !== experiences.length - 1 ? { scale: 0.95 } : {}}
            >
              Next Role
              <ChevronRight size={20} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;