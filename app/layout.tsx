import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MM Consulting & Engineering Services',
  description: 'Engineering excellence delivered by MM Consultant & Construction.',
  openGraph: {
    title: 'MM Consulting & Engineering Services',
    description: 'Engineering excellence delivered by MM Consultant & Construction.',
    type: 'website',
    siteName: 'MM Consultant',
    images: ['/logo.jpeg'],
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-black text-white'}>
        <Navbar />
        <main className="min-h-screen px-6 pt-24 pb-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
