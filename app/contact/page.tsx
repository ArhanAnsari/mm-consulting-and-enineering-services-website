'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="px-4 md:px-20 mt-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">Contact Us</h1>
      <p className="text-white text-lg mb-4">We are located at:</p>
      <p className="text-white">Ganganagar, Akola - 444001, Maharashtra</p>
      <p className="text-white mt-4">Email: <a href="mailto:shoebm151@gmail.com" className="text-yellow-400 underline">shoebm151@gmail.com</a></p>
    </motion.section>
  );
}