import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const floatingShapes = [
    { 
      top: '10%', 
      left: '5%', 
      delay: 0, 
      color: 'bg-primary-400/20',
      size: 'w-4 h-4'
    },
    { 
      top: '20%', 
      right: '10%', 
      delay: 1, 
      color: 'bg-secondary-400/20',
      size: 'w-6 h-6'
    },
    { 
      bottom: '30%', 
      left: '15%', 
      delay: 2, 
      color: 'bg-accent-400/20',
      size: 'w-3 h-3'
    },
    { 
      bottom: '20%', 
      right: '5%', 
      delay: 3, 
      color: 'bg-primary-400/20',
      size: 'w-5 h-5'
    },
    { 
      top: '40%', 
      left: '20%', 
      delay: 4, 
      color: 'bg-secondary-400/20',
      size: 'w-4 h-4'
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${shape.color} ${shape.size}`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;