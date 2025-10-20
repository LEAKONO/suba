import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, MapPin, Mail, Phone, Award } from 'lucide-react';
import { personalInfo } from '../utils/constants';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';
import Typewriter from './ui/Typewriter';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Award images array - updated with 6 images
  const awardImages = [
    '/images/1PM.jpeg',
    '/images/2PM.jpeg',
    '/images/3 PM.jpeg',
    '/images/4PM.jpeg', // Add your 4th image
    '/images/5PM.jpeg', // Add your 5th image
    '/images/6PM.jpeg', // Add your 6th image
  ];

  // Single standout achievement
  const standoutAchievement = {
    title: "Silver Star Presidential Award for Valor",
    year: "2013",
    description: "Recognized by the President of Kenya for leading a high-risk extraction mission under fire during AMISOM operations in Somalia, saving 12 personnel.",
    icon: Award,
    type: "Military Honor",
    color: "from-yellow-400 to-yellow-600"
  };

  // Rotate award images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % awardImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [awardImages.length]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-secondary-900/30 animate-pulse-slow"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <motion.div 
        className="container-custom px-4 sm:px-6 lg:px-8 py-20 lg:py-0 relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-16 lg:pt-8">
          {/* Left Content - Moves below on mobile */}
          <motion.div variants={slideInLeft} className="text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="block text-white drop-shadow-lg">Beautah</span>
              <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent drop-shadow-lg">
                Mwanza Suba
              </span>
            </motion.h1>

            <motion.div 
              className="text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 font-light"
              variants={fadeInUp}
            >
              <Typewriter 
                text="Humanitarian Policy & Security Expert" 
                speed={50}
                className="text-gray-200 drop-shadow-lg"
              />
            </motion.div>

            <motion.p 
              className="text-base md:text-lg lg:text-xl mb-8 lg:mb-10 text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg"
              variants={fadeInUp}
            >
              Award-winning leader with <span className="text-white font-semibold">18+ years</span> in humanitarian policy, 
              access negotiation, and civil-military coordination across East, Central and Horn of Africa. 
              Recognized for resilience and commitment to human rights.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-3 text-gray-200 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg">
                <MapPin size={18} className="text-primary-300" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg">
                <Mail size={18} className="text-primary-300" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg">
                <Phone size={18} className="text-primary-300" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <motion.a 
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a 
                href="#achievements"
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Achievements
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image at top on mobile */}
          <motion.div 
            variants={slideInRight} 
            className="flex justify-center lg:justify-end"
          >
            <div className="max-w-md w-full">
              {/* Award Content - Simple Text Above */}
              <div className="text-center space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <Award size={20} className="text-yellow-400" />
                  <span className="text-sm text-yellow-300 font-semibold bg-yellow-400/10 px-3 py-1 rounded-full">
                    {standoutAchievement.type}
                  </span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  {standoutAchievement.title}
                </h3>
                
                <div className="flex items-center justify-center">
                  <span className="text-lg text-yellow-300 font-bold bg-yellow-400/10 px-4 py-2 rounded-full">
                    {standoutAchievement.year}
                  </span>
                </div>
              </div>

              {/* Award Image Carousel */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-transparent">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={awardImages[currentImage]}
                    alt="Silver Star Presidential Award for Valor"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                </AnimatePresence>
                
                {/* Image Navigation Dots - Now shows 6 dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {awardImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                        index === currentImage 
                          ? 'bg-yellow-400 scale-125 shadow-lg' 
                          : 'bg-white/70 hover:bg-white/90 shadow-md'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Add custom animation for slow pulse */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;