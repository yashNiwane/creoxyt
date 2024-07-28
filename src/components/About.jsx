import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.jpg'

const About = () => {
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
        About Creoxy
      </motion.h1>
      <motion.p 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg text-gray-400 max-w-3xl text-center mb-6"
      >
        Creoxy is dedicated to elevating your web development skills through comprehensive and accessible courses. We offer a range of programs from beginner to advanced levels, covering front-end and back-end technologies to empower you in building modern, responsive web applications.
      </motion.p>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative w-80 h-80 mb-6"
      >
        <motion.img 
          src={Logo} 
          alt="Creoxy Team" 
          className="w-full h-full object-cover rounded-full shadow-lg"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-50 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1.1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <motion.svg 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="text-white"
          >
            <motion.path 
              d="M12 2L2 21H22L12 2Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          At Creoxy, our mission is to provide high-quality, affordable education in web development. We strive to bridge the gap between traditional learning and the skills required in today's tech industry.
        </p>
        <motion.a 
          href="/contact" 
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default About;
