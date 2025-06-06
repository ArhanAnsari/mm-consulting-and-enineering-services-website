'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-20 mt-20 space-y-20"
    >
      <section className="text-center">
        <Image src="/logo.jpeg" alt="MM Logo" width={300} height={150} className="mx-auto" />
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mt-6">MM Consultant & Construction</h1>
        <p className="text-white mt-4 max-w-2xl mx-auto">
          We are a civil engineering consultancy offering expert services in building planning, 3D designing, estimating, and site surveying.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/about" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md">About Us</Link>
          <Link href="/services" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md">Services</Link>
          <Link href="/team" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md">Meet the Team</Link>
        </div>
      </section>

      <section className="text-white max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Services</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {['Building Planning', 'Estimating', '3D Designing', 'Site Surveying'].map((s, i) => (
            <li key={i} className="bg-gray-900 p-4 rounded border border-yellow-500 shadow">{s}</li>
          ))}
        </ul>
      </section>

      <section className="text-white max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Contact Info</h2>
        <p>📍 Ganganagar, Akola - 444001, Maharashtra</p>
        <p>📧 <a href="mailto:shoebm151@gmail.com" className="text-yellow-400 underline">shoebm151@gmail.com</a></p>
      </section>
    </motion.main>
  );
}