'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const members = [
  {
    name: 'Er. Fahad Shaikh',
    qualifications: 'DCE, BE Civil, ISSE',
    phone: '+919730000521',
    image: '/fahad.jpg',
    description: 'Fahad brings structural expertise with innovative solutions in construction and civil engineering.',
  },
  {
    name: 'Er. Shoeb Shaikh',
    qualifications: 'DCE, BE Civil',
    phone: '+919730607844',
    image: '/shoeb.jpg',
    description: 'Shoeb leads planning and design, ensuring precision in estimating and site execution.',
  },
];

export default function Team() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-20 mt-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">Our Team</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {members.map((member, i) => (
          <div key={i} className="bg-gray-900 rounded-lg p-6 border border-yellow-500 shadow">
            <div className="flex flex-col md:flex-row items-center md:space-x-6">
              <Image src={member.image} alt={member.name} width={120} height={120} className="rounded-full border border-yellow-500" />
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h2 className="text-2xl text-yellow-400 font-semibold">{member.name}</h2>
                <p className="text-white">{member.qualifications}</p>
                <p className="text-white mt-2">{member.description}</p>
                <a href={`tel:${member.phone}`} className="inline-flex items-center text-yellow-400 mt-3 hover:underline">
                  <PhoneCall className="w-5 h-5 mr-2" /> {member.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
