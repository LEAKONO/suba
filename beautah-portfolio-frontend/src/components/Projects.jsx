import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Target, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [ref, controls] = useScrollAnimation();

  const projects = [
    {
      title: "Humanitarian Access Framework",
      description: "Developed comprehensive access negotiation protocols for conflict zones in Eastern DRC, improving aid delivery efficiency by 40%.",
      category: "Policy Development",
      technologies: ["Access Negotiation", "Risk Assessment", "Stakeholder Engagement"],
      impact: "Enabled safe passage for 50+ aid convoys",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      status: "Completed"
    },
    {
      title: "Cross-Border Peace Initiative",
      description: "Led mediation efforts between pastoralist communities along Kenya-Ethiopia border, establishing 3 humanitarian corridors.",
      category: "Peacebuilding",
      technologies: ["Mediation", "Conflict Resolution", "Community Engagement"],
      impact: "Facilitated access for 100,000+ beneficiaries",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      status: "Ongoing"
    },
    {
      title: "Strategic Communications Policy",
      description: "Created KDF's first comprehensive StratCom policy and training syllabus in collaboration with international partners.",
      category: "Capacity Building",
      technologies: ["Policy Development", "Training", "International Cooperation"],
      impact: "Enhanced information operations capability",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      status: "Implemented"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden">
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
            Key <span className="gradient-text">Initiatives</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"
            variants={scaleIn}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Strategic projects and initiatives that demonstrate impact in humanitarian and security sectors
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl shadow-2xl hover-lift overflow-hidden border border-gray-200"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Project Header */}
                <div className={`relative h-48 bg-gradient-to-r ${project.color} p-6`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-100' 
                          : project.status === 'Ongoing'
                          ? 'bg-blue-500/20 text-blue-100'
                          : 'bg-purple-500/20 text-purple-100'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <span className="text-white/80 text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  
                  {/* Impact */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4 mb-4 border border-primary-100">
                    <div className="text-sm font-semibold text-primary-700 mb-1">Key Impact</div>
                    <div className="text-primary-600 text-sm">{project.impact}</div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Core Competencies</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 px-4 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-20 -translate-x-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can work together on humanitarian initiatives, policy development, or security coordination projects.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
                <ExternalLink size={20} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;