import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Users, Target } from 'lucide-react';
import { personalInfo, languages } from '../utils/constants';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, controls] = useScrollAnimation();

  const highlights = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Silver Star Presidential Award for Valour recipient",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "18+ years across East, Central and Horn of Africa",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Expert in team coordination and stakeholder management",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Humanitarian access and policy influence",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"
            variants={scaleIn}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Dedicated humanitarian professional with a proven track record in complex crisis environments, 
            combining strategic insight with operational excellence.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <motion.div variants={fadeInUp}>
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Professional Profile
            </motion.h3>
            
            <div className="space-y-6">
              <motion.p 
                className="text-gray-700 leading-relaxed text-lg"
                variants={fadeInUp}
              >
                Awarded the <strong className="text-primary-600">Silver Star Presidential Award for Valour</strong> and 
                recognized for enabling humanitarian access and security during complex crises in Somalia. 
                I bring over <strong className="text-primary-600">18 years of progressive leadership</strong> in 
                humanitarian policy, government relations, access negotiation, diplomacy, intelligence & security.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 leading-relaxed text-lg"
                variants={fadeInUp}
              >
                Recognized for <strong className="text-primary-600">resilience and adaptability</strong>, despite living with a disability, 
                and committed to human rights, inclusion, and effective partnerships. My track record includes 
                leading cross-border peace negotiations and enhancing inter-agency coordination through roles 
                with the UN, regional governments, and NGOs.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 leading-relaxed text-lg"
                variants={fadeInUp}
              >
                Fluent in <strong className="text-primary-600">English and Kiswahili</strong>, with working knowledge of 
                <strong className="text-primary-600"> French and Amharic</strong>, I have developed and implemented 
                access and advocacy strategies, convened multi-stakeholder forums, and delivered evidence-based 
                policy briefs in high-risk conflict settings.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              variants={staggerContainer}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg hover-lift border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white mb-3`}>
                    <highlight.icon size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Languages & Education */}
          <motion.div variants={fadeInUp}>
            {/* Languages */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Language Proficiency</h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between"
                    variants={fadeInUp}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{language.flag}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{language.language}</div>
                        <div className="text-sm text-gray-500">{language.level}</div>
                      </div>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-xl p-6 text-white"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-4">Education & Certifications</h3>
              <div className="space-y-3">
                {[
                  "BSc Military Science - Egerton University (2018)",
                  "Diploma in Military Science - Egerton University (2009)",
                  "Security Risk Management Professional - INSSA",
                  "Multiple UN & Military Certifications"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    variants={fadeInUp}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;