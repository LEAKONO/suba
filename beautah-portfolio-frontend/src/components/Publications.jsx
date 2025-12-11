import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Publications = () => {
  const [ref, controls] = useScrollAnimation();

  const publications = [
    {
      title: "Weak enforcement measures exacerbate SIM swapping in the DRC",
      organization: "ENACT Africa",
      date: "2025",
      description: "Analysis of how weak regulatory enforcement in the Democratic Republic of Congo has led to increased SIM swapping fraud, impacting financial security and digital identity systems.",
      link: "https://enactafrica.org/enact-observer/weak-enforcement-measures-exacerbate-sim-swapping-in-the-drc",
      category: "Digital Security",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "The Jubaland Forces incursion: Safeguarding Kenya's territorial integrity amid regional volatility",
      organization: "DefenceWeb",
      date: "2025",
      description: "Examination of Jubaland Forces operations and their implications for Kenya's border security and regional stability in the Horn of Africa.",
      link: "https://defenceweb.co.za/security/border-security/the-jubaland-forces-incursion-safeguarding-kenyas-territorial-integrity-amid-regional-volatility/",
      category: "Border Security",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Should Washington and Doha bankroll an EAC-SADC peace deployment in the DRC?",
      organization: "DefenceWeb",
      date: "2025",
      description: "Policy analysis exploring the feasibility and implications of US and Qatari funding for a joint East African and Southern African peacekeeping deployment in the Democratic Republic of Congo.",
      link: "https://defenceweb.co.za/joint/diplomacy-a-peace/should-washington-and-doha-bankroll-an-eac-sadc-peace-deployment-in-the-drc/",
      category: "Peacekeeping",
      icon: Calendar,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      
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
            Recent <span className="gradient-text">Publications</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"
            variants={scaleIn}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Analysis and insights on security, peacekeeping, and regional stability in Africa
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {publications.map((publication, index) => {
            const IconComponent = publication.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl shadow-2xl hover-lift overflow-hidden border border-gray-200"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Publication Header */}
                <div className={`relative h-48 bg-gradient-to-r ${publication.color} p-6`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        {publication.date}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight line-clamp-2">
                        {publication.title}
                      </h3>
                      <span className="text-white/80 text-sm font-medium">{publication.organization}</span>
                    </div>
                  </div>
                </div>

                {/* Publication Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {publication.category}
                    </span>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {publication.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Read Publication</span>
                    <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Context */}
        <motion.div 
          className="bg-gradient-to-r from-gray-900 to-primary-900 rounded-3xl p-8 text-white relative overflow-hidden"
          variants={fadeInUp}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-hero-pattern"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Thought Leadership</h3>
                <p className="text-white/80 leading-relaxed">
                  These publications reflect ongoing analysis of critical security and stability issues in Africa. 
                  Each piece combines field experience with strategic policy insights to inform decision-makers 
                  and advance regional security cooperation.
                </p>
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Analysis
                  <ExternalLink size={18} className="ml-2" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Publications;