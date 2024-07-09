'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Welcome to BlogApp</h1>
        <div className="space-y-4">
          <Link href="/login">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold"
            >
              Login
            </motion.button>
          </Link>
          <Link href="/signup">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}