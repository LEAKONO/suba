import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Training from './components/Training';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import { motion } from "framer-motion";

import { MessageCircle } from 'lucide-react';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = ['home', 'about', 'skills', 'experience', 'training', 'achievements', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }

      // Update scroll state for header
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App bg-white min-h-screen">
      <Header activeSection={activeSection} isScrolled={isScrolled} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Training />
      <Achievements />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Floating Chat Button */}
      <motion.button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 group"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 20px 25px -5px rgba(59, 130, 246, 0.3)',
            '0 25px 50px -12px rgba(59, 130, 246, 0.5)',
            '0 20px 25px -5px rgba(59, 130, 246, 0.3)'
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle size={24} />
        <span className="absolute -top-2 -right-2 flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 text-white text-xs items-center justify-center font-bold">
            AI
          </span>
        </span>
      </motion.button>
      
      {/* Chat Bot */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Loading Screen (optional) */}
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-1000 opacity-0 pointer-events-none">
        <div className="text-center">
          <div className="loading-dots">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="mt-4 text-gray-600">Loading amazing content...</p>
        </div>
      </div>
    </div>
  );
}

export default App;