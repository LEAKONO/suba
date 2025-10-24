// src/components/Training.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BookOpen, Target, Award, ExternalLink, Play, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Training = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, controls] = useScrollAnimation();

  const trainingImages = [
    {
      url: "/images/7PM.jpeg",
      videoUrl: "https://drive.google.com/file/d/1Kz44xXRIbmFIHfNwuRApjI5uxaaidlz8/view?usp=sharing",
      title: "Training Session at Defence Intelligence Academy",
      description: "Conducting strategic communications and intelligence security-risk analysis training for officers"
    },
    {
      url: "/images/1PM.jpeg",
      videoUrl: "https://drive.google.com/file/d/1Kz44xXRIbmFIHfNwuRApjI5uxaaidlz8/view?usp=sharing",
      title: "Advanced Strategic Communications Training",
      description: "Leading advanced training sessions on strategic messaging and communication protocols"
    },
    {
      url: "/images/2PM.jpeg", 
      videoUrl: "https://drive.google.com/file/d/1Kz44xXRIbmFIHfNwuRApjI5uxaaidlz8/view?usp=sharing",
      title: "Intelligence Security Analysis Workshop",
      description: "Facilitating risk assessment methodologies and intelligence analysis techniques"
    },
    {
      url: "/images/3 PM.jpeg",
      videoUrl: "https://drive.google.com/file/d/1Kz44xXRIbmFIHfNwuRApjI5uxaaidlz8/view?usp=sharing",
      title: "Civil-Military Coordination Training",
      description: "Training on effective coordination between military and humanitarian organizations"
    },
    {
      url: "/images/8PM.jpeg",
      videoUrl: "https://drive.google.com/file/d/1Kz44xXRIbmFIHfNwuRApjI5uxaaidlz8/view?usp=sharing",
      title: "Field Exercise Demonstration",
      description: "Practical field training exercise demonstrating real-world application of strategic communications"
    },
    {
      url: "/images/9PM.jpeg",
      videoUrl: "https://drive.google.com/file/d/1Kz44xXRIbmFIHfNwuRApjI5uxaaidlz8/view?usp=sharing",
      title: "Leadership Development Program",
      description: "Developing leadership skills and decision-making capabilities in high-pressure scenarios"
    },
    {
      url: "/images/10PM.jpeg",
      videoUrl: "https://drive.google.com/file/d/1Kz44xXRIbmFIHfNwuRApjI5uxaaidlz8/view?usp=sharing",
      title: "Graduation Ceremony & Awards",
      description: "Celebrating the successful completion of intensive training programs with graduating officers"
    }
  ];

  const trainingData = {
    statistics: [
      { number: "500+", label: "Officers Trained", icon: Users },
      { number: "10+", label: "SOPs Developed", icon: BookOpen },
      { number: "35%", label: "Improved Outcomes", icon: Target },
      { number: "8", label: "Interdepartmental Programs", icon: Award }
    ],
    programs: [
      {
        title: "Strategic Communications",
        description: "Advanced training on strategic messaging, information operations, and communication protocols in conflict zones",
        duration: "2 weeks",
        level: "Advanced",
        participants: "Senior Officers"
      },
      {
        title: "Intelligence Security-Risk Analysis",
        description: "Comprehensive risk assessment methodologies and intelligence analysis techniques for security operations",
        duration: "3 weeks",
        level: "Intermediate",
        participants: "Intelligence Personnel"
      },
      {
        title: "Civil-Military Coordination",
        description: "Training on effective coordination between military forces and humanitarian organizations in complex environments",
        duration: "1 week",
        level: "Advanced",
        participants: "Coordination Specialists"
      }
    ],
    achievements: [
      "Improved training outcomes by 35% through curriculum enhancements",
      "Digitized training archives, improving access and learning continuity by 50%",
      "Conducted quarterly learning needs assessments influencing module updates",
      "Coordinated 8 interdepartmental training programs enhancing operational alignment"
    ]
  };

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % trainingImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [trainingImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % trainingImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + trainingImages.length) % trainingImages.length);
  };

  const openVideoInNewTab = () => {
    window.open(trainingImages[currentImageIndex].videoUrl, '_blank');
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = trainingImages[currentImageIndex].url;
    link.download = 'training-session-dia.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openPreviewInNewTab = () => {
    window.open(trainingImages[currentImageIndex].url, '_blank');
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full translate-y-40 -translate-x-40 opacity-20"></div>
      
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
            Training & <span className="gradient-text">Development</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"
            variants={scaleIn}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Excellence in military training and capacity building at the Defence Intelligence Academy
          </motion.p>
        </motion.div>

        {/* Main Training Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Training Image Carousel with Interactive Features */}
          <motion.div 
            className="relative group"
            variants={fadeInUp}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={trainingImages[currentImageIndex].url}
                    alt={trainingImages[currentImageIndex].title}
                    className="w-full h-full object-cover cursor-pointer"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7 }}
                    onClick={openPreviewInNewTab}
                  />
                </AnimatePresence>
                
                {/* Image Badge */}
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  Training Gallery
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    onClick={openVideoInNewTab}
                    className="bg-red-500 text-white px-6 py-4 rounded-2xl font-semibold flex items-center space-x-3 hover:bg-red-600 transition-all duration-300 shadow-2xl"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play size={24} fill="white" />
                    <span>Watch Training Video</span>
                  </motion.button>
                </div>

                {/* Image Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {trainingImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125 shadow-lg' 
                          : 'bg-white/70 hover:bg-white/90 shadow-md'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {trainingImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {trainingImages[currentImageIndex].description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <motion.button
                    onClick={openVideoInNewTab}
                    className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300 flex-1 min-w-[140px] justify-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={18} fill="white" />
                    <span>Watch Video</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={openPreviewInNewTab}
                    className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 flex-1 min-w-[140px] justify-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span>View Image</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={downloadImage}
                    className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex-1 min-w-[140px] justify-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </motion.button>
                </div>
                
                {/* Image Counter */}
                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <span>Image {currentImageIndex + 1} of {trainingImages.length}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevImage}
                      className="p-1 hover:text-blue-600 transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="p-1 hover:text-blue-600 transition-colors"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {trainingData.statistics.slice(0, 2).map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-center justify-center space-x-2">
                          <IconComponent size={20} className="text-blue-500" />
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{stat.number}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Training Programs */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Training Programs Developed</h3>
            <div className="space-y-4">
              {trainingData.programs.map((program, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover-lift group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {program.title}
                    </h4>
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {program.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">Level: {program.level}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">For: {program.participants}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics and Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Statistics Grid */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Training Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              {trainingData.statistics.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-200 hover-lift"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-3">
                      <IconComponent size={28} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            <div className="space-y-4">
              {trainingData.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200 hover-lift group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl p-8 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-20 -translate-x-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Interested in Training Collaboration?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can develop customized training programs for your organization in strategic communications, security analysis, or civil-military coordination.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Training Needs
                <ExternalLink size={20} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Training session"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ExternalLink size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Training;