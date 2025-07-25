
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    const handleMouseEnter = () => setIsHoveringLink(true);
    const handleMouseLeave = () => setIsHoveringLink(false);

    document.querySelectorAll('a, button, .hover-target').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.querySelectorAll('a, button, .hover-target').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(251, 146, 60, 0.7)', // Tailwind orange-500 with opacity
      width: 32,
      height: 32,
      mixBlendMode: 'normal',
      border: 'none',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness:100,
        damping: 6
      }
    },
    text: {
      x: mousePosition.x - 48,
      y: mousePosition.y - 48,
      backgroundColor: 'rgba(0,0,0,0.7)',
      width: 96,
      height: 96,
      mixBlendMode: 'difference',
      border: '1px solid #FFA500', // Tailwind orange-500
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 100,
        damping: 6
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full backdrop-blur-xs pointer-events-none z-[9999]"
      variants={variants}
      animate={isHoveringLink ? 'text' : 'default'}
    />
  );
};

export default CursorFollower;