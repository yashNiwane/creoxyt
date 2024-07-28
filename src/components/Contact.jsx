import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xqazegqo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-5 py-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 md:w-2/3 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-lg backdrop-filter backdrop-blur-sm"
      >
        <motion.h2 
          className="text-3xl mb-1 font-bold title-font text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="leading-relaxed mb-5 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We'd love to hear from you! Reach out and let's start a conversation.
        </motion.p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div 
            className="relative mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" className={inputClasses}
              {...register("name", { required: "Name is required" })} />
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
          </motion.div>
          <motion.div 
            className="relative mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" className={inputClasses}
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })} />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
          </motion.div>
          <motion.div 
            className="relative mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <label htmlFor="phone" className="leading-7 text-sm text-gray-400">Phone Number</label>
            <input type="tel" id="phone" name="phone" className={inputClasses}
              {...register("phone", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number"
                }
              })} />
            {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
          </motion.div>
          <motion.div 
            className="relative mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" className={`${inputClasses} h-32 resize-none`}
              {...register("message", { required: "Message is required" })}></textarea>
            {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
          </motion.div>
          <motion.button 
            className={`w-full text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg transition-colors duration-300 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
        {submitStatus === 'success' && (
          <motion.div 
            className="mt-4 text-green-500 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
        {submitStatus === 'error' && (
          <motion.div 
            className="mt-4 text-red-500 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            An error occurred while sending your message. Please try again later.
          </motion.div>
        )}
        <motion.div 
          className="flex justify-center space-x-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a href="https://x.com/creoxyt" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/creoxyt/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com/company/creoxyt" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;