import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import { achievements } from '../utils/constants';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Achievements = () => {
  const [ref, controls] = useScrollAnimation();

  const achievementIcons = {
    Award: Award,
    Peace: Trophy,
    FileCode: Star,
    Handshake: Medal
  };

  const additionalAwards = [
    "Operation Linda Nchi Medal (2011)",
    "EACRF-DRC Peacekeeping Medal (2023)", 
    "AMISOM Medal (2013)",
    "KDF Long Service & Good Conduct Medal (2021)",
    "Jubilee Medal (2017)",
    "Defence Forces Commendation (2019)"
  ];

  return (
    <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-200 rounded-full translate-y-40 -translate-x-40 opacity-20"></div>
      
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
            Honors & <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"
            variants={scaleIn}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Recognition for exceptional service, leadership, and impact in humanitarian and security sectors
          </motion.p>
        </motion.div>

        {/* Main Achievements Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievementIcons[achievement.icon];
            return (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover-lift overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <motion.div 
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent size={32} />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight pr-4">{achievement.title}</h3>
                    <span className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {achievement.type}
                  </span>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">{achievement.description}</p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Recognition */}
        <motion.div 
          className="bg-gradient-to-r from-gray-900 to-primary-900 rounded-3xl p-8 text-white relative overflow-hidden"
          variants={fadeInUp}
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500 rounded-full -translate-x-16 -translate-y-16 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-500 rounded-full translate-x-20 translate-y-20 opacity-20"></div>
          </div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              variants={fadeInUp}
            >
              Additional Recognition & Awards
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalAwards.map((award, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0 animate-pulse"></div>
                  <span className="text-white/90 font-medium">{award}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;