import './Course.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const courses = [
  {
    id: 1,
    title: "Quickstart your web Development journy with {HTML, CSS, JS}",
    description: "Become proficient in Html CSS And js",
    imageUrl: "src/assets/Courses/HtmlCssJS.png",
    duration: "10 weeks",
    level: "Beginner",
    price: "₹2,999"
  },
  {
    id: 2,
    title: "Comprehensive Front-End Development Mastery Course",
    description: "Kickstart your career in web development with our detailed Front-End Development course. Learn HTML, CSS, and JavaScript, and master React.js to build interactive, responsive web applications. Ideal for those looking to excel in modern web design and development.",
    imageUrl: "src/assets/Courses/FrontEnd.png",
    duration: "16 weeks",
    level: "Intermediate",
    price: "₹4,999",
    isRecommended: true,
  },
  {
    id: 3,
    title: "Advanced Node.js Backend Development Course",
    description: "Enhance your backend development skills with our comprehensive Node.js course. Understand server-side programming, build scalable applications, and delve into real-world back-end solutions. Perfect for developers aiming to advance their knowledge in server-side technologies.",
    imageUrl: "src/assets/Courses/Backend.png",
    duration: "20 weeks",
    level: "Intermediate to Advanced",
    price: "₹4,999",
    isRecommended: true,
  },
  {
    id: 4,
    title: "MERN Stack Full-Stack Development Course",
    description: "Become a full-stack developer with our in-depth MERN Stack course. Master MongoDB, Express.js, React.js, and Node.js to create dynamic, data-driven web applications. This course is designed for both beginners and advanced learners looking to build comprehensive web solutions.",
    imageUrl: "src/assets/Courses/FullStack.png",
    duration: "24 weeks",
    level: "Beginner to Advanced",
    price: "₹10,999",
  },
  {
    id: 5,
    title: "Advanced React.js Development Course",
    description: "Elevate your React.js skills with our advanced course. Dive into state management, React hooks, and complex UI development. This course is designed for developers who already have a basic understanding of React and want to deepen their expertise.",
    imageUrl: "src/assets/Courses/React.png",
    duration: "12 weeks",
    level: "Intermediate",
    price: "₹2,999",
  },
  {
    id: 6,
    title: "Python Programming Advanced Course",
    description: "Advance your Python programming skills with our comprehensive course. Explore data structures, algorithms, and object-oriented programming to build efficient Python applications. Ideal for those looking to enhance their Python expertise and tackle complex programming challenges.",
    imageUrl: "src/assets/Courses/AdvancePython.png",
    duration: "18 weeks",
    level: "Beginner to Intermediate",
    price: "₹2,999",
  },
];

const CourseCard = ({ course, index, onEnrollClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-700"
    >
      <div className="w-full h-48 overflow-hidden">
        <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover object-center image" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-white font">{course.title}</h2>
        <p className="text-gray-400 mb-4 font">{course.duration} • {course.level}</p>
        <div className="flex justify-between items-center ">
          <span className="text-2xl font-bold text-blue-400 font">{course.price}</span>
          <button
            onClick={() => onEnrollClick(course)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none font"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Course = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userName, setUserName] = useState('');

  const openModal = (course) => {
    setSelectedCourse(course);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCourse(null);
  };

  const handleEnrollClick = () => {
    if (userName) {
      sendWhatsAppMessage(userName);
      closeModal();
    }
  };

  const sendWhatsAppMessage = (userName) => {
    const whatsappNumber = '919356965876'; 
    const message = encodeURIComponent(`Enrollment request from ${userName} for "${selectedCourse.title}"`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="h-[84vh] overflow-auto bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-white mb-12"
        >
          Top Web Development Courses to Boost Your Career
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} onEnrollClick={openModal} />
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Enroll in Course"
        className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20 blacktext"
      >
        <h2 className="text-2xl font-bold mb-4">Enroll in {selectedCourse?.title}</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 blacktext"
        />
        <button
          onClick={handleEnrollClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none w-full"
        >
          Confirm Enrollment
        </button>
      </Modal>
    </div>
  );
};

export default Course;
