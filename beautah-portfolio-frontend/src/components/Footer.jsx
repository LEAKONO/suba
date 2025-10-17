import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-hero-pattern"></div>
      
      {/* Main Footer Content */}
      <motion.div 
        className="container-custom section-padding py-12 relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-4 gap-8 items-start">
          {/* Brand Column */}
          <motion.div
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <motion.div
              className="flex items-center space-x-3 mb-4 justify-center md:justify-start"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">BS</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">{personalInfo.name.split(' ')[0]}</div>
                <div className="text-primary-200 text-sm">Humanitarian Expert</div>
              </div>
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Award-winning humanitarian policy and security expert dedicated to creating 
              safer access and better coordination in conflict-affected regions.
            </p>
            <div className="flex space-x-3 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <div className="space-y-3">
              {['Home', 'About', 'Skills', 'Experience', 'Achievements', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Expertise */}
          <motion.div
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <h3 className="font-semibold text-white mb-4 text-lg">Expertise</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>Humanitarian Access</div>
              <div>Policy Analysis</div>
              <div>Civil-Military Coordination</div>
              <div>Crisis Response</div>
              <div>Stakeholder Engagement</div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <h3 className="font-semibold text-white mb-4 text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div 
              className="mt-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-3 border border-green-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-green-200 text-xs font-medium">Available for Consulting</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-white/20 mt-8 pt-8 text-center"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm flex items-center justify-center space-x-1">
              <span>© {currentYear} Beautah Mwanza Suba. All rights reserved.</span>
              <span>Made with</span>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Heart size={14} className="text-red-400" />
              </motion.div>
              <span>for humanitarian impact</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Back to Top Button for Mobile */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-2xl z-40 md:hidden flex items-center justify-center text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;