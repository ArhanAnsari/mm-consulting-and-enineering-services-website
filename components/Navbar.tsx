'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-black border-b border-yellow-500 z-50 shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <Image src="/logo.jpeg" alt="MM Logo" width={60} height={60} />
          <span className="text-yellow-400 font-bold text-xl tracking-wide">MM Consultant</span>
        </div>
      </div>
    </motion.nav>
  );
}