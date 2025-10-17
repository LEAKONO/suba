// frontend/src/components/ChatBot.jsx - COMPLETE UPDATED VERSION
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Mail, AlertCircle } from 'lucide-react';

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm here to tell you about Beautah Mwanza Suba's professional background. I can answer questions about his experience, skills, awards, education, and how to contact him for collaboration.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [importantQuestion, setImportantQuestion] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const messagesEndRef = useRef(null);

  // Pre-defined responses
  const predefinedResponses = {
    experience: `Beautah has over 18 years of progressive leadership in humanitarian policy, government relations, access negotiation, and security across East, Central and Horn of Africa. 

**Key Recent Roles:**
• Humanitarian Policy & Risk Analyst - Kenya Defence Forces (2024-2025)
• Advocacy & External Engagement Officer - StratCom-Kenya (2023-2024)  
• Liaison, Advocacy & Access Coordination Lead - EACRF-MONUSCO (2022-2023)
• Strategic Communications and Policy Analyst - Kenya Defence Forces (2022)

**Key Achievements:**
• Analyzed 200+ reports monthly influencing humanitarian access strategies
• Led 10+ external engagement campaigns enhancing policy influence
• Facilitated 25+ inter-agency coordination meetings improving response efficiency
• Produced 50+ policy briefs adopted by regional coordination platforms`,

    skills: `**Core Professional Competencies:**
• Humanitarian Access Negotiation - Securing access in conflict zones
• Policy Analysis & Advocacy - Developing evidence-based policy briefs  
• Civil-Military Coordination - Enhancing cooperation between actors
• Crisis Response & Risk Analysis - Leading in volatile settings
• Stakeholder Engagement & Diplomacy - High-level negotiation expertise
• Cross-Border Peacebuilding - Facilitating dialogue in contested zones

**Technical Expertise:**
• Strategic Communications & Information Operations
• Intelligence & Security Analysis
• Inter-agency Coordination
• VIP Protocol & Event Logistics

**Languages:**
• English (Fluent)
• Kiswahili (Fluent) 
• French (Working Knowledge)
• Amharic (Working Knowledge)`,

    awards: `**Major Honors & Awards:**
• Silver Star Presidential Award for Valour (2013) - For leadership during AMISOM operations
• Operation Linda Nchi Medal
• EACRF-DRC Peacekeeping Medal  
• AMISOM Medal
• Jubilee Medal
• Defence Forces Commendation

**Recognition:**
Awarded by the President of Kenya for enabling humanitarian access and security during complex crises in Somalia. Recognized for exceptional leadership and strategic contributions to regional security.`,

    education: `**Education & Professional Development:**
• Bachelor of Science in Military Science - Egerton University (2018)
• Diploma in Military Science - Egerton University (2009)
• Security Risk Management Professional - International NGO Safety and Security Association (INSSA)
• Basic Military Training - Kenya Defence Forces (2009)

**Professional Certifications:**
• Strategic Intelligence Analysis - Defence Intelligence Academy
• Political & Economic Intelligence Analysis
• Strategic Communications - StratCom Joint Information Activities Group, UK
• Joint Information Operations - UK Joint Information Activities Group
• Civil-Military Coordination - Kenya Defence Forces
• Multiple UN and international security certifications`,

    contact: `**Contact Beautah Directly:**

📧 **Email:** bsuba0387@gmail.com
📞 **Phone:** +254 (0)726 767 684
📍 **Location:** Nairobi, Kenya

**Best Ways to Connect:**
• **Email** for detailed inquiries and collaboration proposals
• **Phone** for urgent matters or immediate discussions
• **Contact Form** on this website for general inquiries

**Availability:**
Currently available for:
• Humanitarian consulting projects
• Policy advisory roles
• Security coordination initiatives
• Speaking engagements
• Training and capacity building`,

    organizations: `**Key Organizations & Partnerships:**

**Military & Security:**
• Kenya Defence Forces (Various roles 2009-Present)
• East African Community Regional Force (EACRF)
• African Union Missions

**United Nations:**
• MONUSCO (UN Organization Stabilization Mission in DRC)
• World Food Programme (WFP)
• Office for the Coordination of Humanitarian Affairs (OCHA)

**International Collaboration:**
• UK Joint Information Activities Group (JIAG)
• US Africa Command (AFRICOM)
• Multiple International NGOs
• Regional Governments across East Africa

**Notable Projects:**
• Kenya-Ethiopia cross-border peace negotiations
• Moyale One Stop Border Post opening
• KDF Strategic Communications policy development
• EACRF-MONUSCO coordination enhancement`,

    collaboration: `**Areas for Potential Collaboration:**

Beautah is open to partnerships in:

**Humanitarian Access & Security:**
• Access negotiation in conflict zones
• Civil-military coordination frameworks
• Humanitarian policy development
• Crisis response planning

**Policy & Strategy:**
• Regional security analysis
• Humanitarian policy advisory
• Strategic communications
• Stakeholder engagement strategies

**Training & Capacity Building:**
• Security risk management training
• Humanitarian access negotiation workshops
• Civil-military coordination training
• Strategic communications development

**Contact him directly to discuss specific collaboration opportunities.**`,

    default: `I specialize in discussing Beautah Mwanza Suba's professional background and expertise. I can provide information about:

• **Professional Experience** - 18+ years in humanitarian policy & security
• **Key Skills** - Access negotiation, policy analysis, coordination
• **Awards & Recognition** - Presidential awards and honors
• **Education & Certifications** - Academic and professional qualifications
• **Contact Information** - How to reach Beautah directly
• **Organizations** - UN, military, and international partnerships
• **Collaboration** - Potential partnership opportunities

What would you like to know more about?`
  };

  // Smart detection for important questions
  const shouldAlertBeautah = (question) => {
    const triggers = [
      // Employment related
      'hire', 'job', 'employment', 'position', 'vacancy', 'recruit', 'work with', 'opportunity',
      // Project related  
      'project', 'contract', 'collaboration', 'partnership', 'work together', 'collaborate',
      // Urgent matters
      'urgent', 'asap', 'immediate', 'emergency', 'critical', 'important',
      // Meetings
      'meeting', 'call', 'interview', 'discuss', 'schedule', 'appointment',
      // Business
      'proposal', 'quote', 'budget', 'price', 'cost', 'rate', 'payment',
      // Consulting
      'consultancy', 'consulting', 'advisor', 'advisory', 'consultant',
      // Specific opportunities
      'opportunity', 'role', 'position', 'need help', 'looking for'
    ];

    return triggers.some(trigger => 
      question.toLowerCase().includes(trigger)
    );
  };

  // Send email to Beautah
  const sendEmailToBeautah = async (question, email = '') => {
    try {
      const response = await fetch('http://localhost:5000/api/send-chat-alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question,
          visitorEmail: email || 'Not provided',
          timestamp: new Date().toISOString()
        }),
      });

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Failed to send email alert:', error);
      return false;
    }
  };

  const getResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('experience') || message.includes('work') || message.includes('career') || message.includes('role') || message.includes('background')) 
      return predefinedResponses.experience;
    if (message.includes('skill') || message.includes('expertise') || message.includes('capability') || message.includes('competency') || message.includes('what can'))
      return predefinedResponses.skills;
    if (message.includes('award') || message.includes('achievement') || message.includes('honor') || message.includes('recognition') || message.includes('medal'))
      return predefinedResponses.awards;
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach') || message.includes('get in touch') || message.includes('how to contact'))
      return predefinedResponses.contact;
    if (message.includes('education') || message.includes('degree') || message.includes('qualification') || message.includes('certification') || message.includes('study'))
      return predefinedResponses.education;
    if (message.includes('organization') || message.includes('un') || message.includes('ngo') || message.includes('partner') || message.includes('who has') || message.includes('worked with'))
      return predefinedResponses.organizations;
    if (message.includes('collaborat') || message.includes('partner') || message.includes('work together') || message.includes('hire') || message.includes('consult') || message.includes('project'))
      return predefinedResponses.collaboration;
    
    return predefinedResponses.default;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === '' || isLoading) return;

    const userMessage = {
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Check if this needs Beautah's attention
    if (shouldAlertBeautah(inputText)) {
      setImportantQuestion(inputText);
      setShowEmailPrompt(true);
      return; // Don't proceed with normal response
    }

    // Continue with normal pre-defined response
    setIsLoading(true);
    setTimeout(() => {
      const botResponse = {
        text: getResponse(inputText),
        sender: 'bot', 
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 800 + Math.random() * 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Suggested questions
  const suggestedQuestions = [
    "What are Beautah's main skills?",
    "How can I contact Beautah?",
    "What organizations has he worked with?",
    "Tell me about his experience"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          {/* Chat Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-4 right-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Professional Assistant</h3>
                    <p className="text-xs opacity-80">Learn about Beautah's career</p>
                  </div>
                </div>
                <motion.button 
                  onClick={onClose}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>
            
            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    {message.sender === 'bot' && (
                      <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot size={12} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl p-3 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-br-none'
                          : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200'
                      }`}
                    >
                      <div className="whitespace-pre-line">{message.text}</div>
                      <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-none p-3 shadow-sm border border-gray-200">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Suggested questions */}
              {messages.length <= 2 && (
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setInputText(question);
                          setTimeout(() => handleSendMessage(), 100);
                        }}
                        className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full hover:bg-primary-200 transition-colors border border-primary-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Beautah's professional background..."
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-gray-50"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || inputText.trim() === ''}
                  className={`px-4 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    isLoading || inputText.trim() === ''
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg'
                  }`}
                  whileHover={(!isLoading && inputText.trim() !== '') ? { scale: 1.05 } : {}}
                  whileTap={(!isLoading && inputText.trim() !== '') ? { scale: 0.95 } : {}}
                >
                  <Send size={20} />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Ask about experience, skills, or how to contact Beautah
              </p>
            </div>
          </motion.div>

          {/* Email Alert Prompt */}
          <AnimatePresence>
            {showEmailPrompt && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-2xl p-6 max-w-md w-full"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="text-yellow-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Important Inquiry Detected</h3>
                      <p className="text-sm text-gray-600">This sounds like something Beautah should see</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Question
                      </label>
                      <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-gray-700">{importantQuestion}</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email (optional - for Beautah to reply)
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={visitorEmail}
                        onChange={(e) => setVisitorEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Beautah will receive your question and can contact you directly
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3 mt-6">
                    <button
                      onClick={async () => {
                        const success = await sendEmailToBeautah(importantQuestion, visitorEmail);
                        if (success) {
                          setMessages(prev => [...prev, {
                            text: "✅ I've sent your important question directly to Beautah. He'll review it and get back to you soon. You can also email him directly at bsuba0387@gmail.com",
                            sender: 'bot',
                            timestamp: new Date()
                          }]);
                        } else {
                          setMessages(prev => [...prev, {
                            text: "📧 Please email Beautah directly at bsuba0387@gmail.com with your question. I've detected this as an important inquiry that needs his personal attention.",
                            sender: 'bot',
                            timestamp: new Date()
                          }]);
                        }
                        setShowEmailPrompt(false);
                        setVisitorEmail('');
                      }}
                      className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Mail size={16} />
                      <span>Send to Beautah</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowEmailPrompt(false);
                        setVisitorEmail('');
                        // Continue with normal response
                        setIsLoading(true);
                        setTimeout(() => {
                          const botResponse = {
                            text: getResponse(importantQuestion),
                            sender: 'bot',
                            timestamp: new Date()
                          };
                          setMessages(prev => [...prev, botResponse]);
                          setIsLoading(false);
                        }, 800);
                      }}
                      className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                    >
                      Just Chat
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;