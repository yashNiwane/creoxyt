import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white p-6"
    >
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl font-extrabold mb-4 text-center"
      >
        Blogs are Coming Soon!
      </motion.h1>
      <motion.p 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg text-gray-400 max-w-3xl text-center mb-6"
      >
        Stay tuned for exciting content on web development, programming tips, and industry insights. We're working hard to bring you the best blogs!
      </motion.p>
      <motion.div 
        initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
        animate={{ scale: 1.2, rotate: 360, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative w-40 h-40 mb-6"
      >
        <motion.img 
          src="src/assets/Logo.jpg" 
          alt="Coming Soon" 
          className="w-full h-full object-cover rounded-full shadow-lg"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.3, rotate: -360 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Follow us on social media and subscribe to our newsletter to get the latest updates on our blog launch.
        </p>
        <motion.a 
          href="/contact" 
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Contact Us
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
