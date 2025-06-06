'use client';
import { motion } from 'framer-motion';

export default function Services() {
  const services = ['Building Planning', 'Estimating', '3D Designing', 'Site Surveying'];
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="px-4 md:px-20 mt-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">Our Services</h1>
      <ul className="grid md:grid-cols-2 gap-6 text-lg text-white">
        {services.map((s, i) => (
          <li key={i} className="bg-gray-900 p-4 rounded-md border border-yellow-500 shadow">
            {s}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}