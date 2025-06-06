'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="px-4 md:px-20 mt-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">Projects</h1>
      <p className="text-white text-lg">Our upcoming project gallery will showcase a wide range of our completed and ongoing engineering solutions.</p>
    </motion.section>
  );
}