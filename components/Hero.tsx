'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="text-center mt-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Engineering Your Future</h1>
      <p className="text-white max-w-xl mx-auto text-lg">Providing innovative and efficient engineering solutions tailored to your needs.</p>
    </motion.section>
  );
}