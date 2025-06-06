'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="px-4 md:px-20 mt-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">About Us</h1>
      <p className="text-white text-lg leading-8 max-w-4xl">
        MM Consultant & Construction is a professional civil engineering and consulting firm committed to delivering innovative, efficient, and sustainable construction solutions. With over a decade of experience, we specialize in a wide range of services like building planning, 3D designing, and site surveying, ensuring excellence in every project we undertake.
      </p>
    </motion.section>
  );
}
