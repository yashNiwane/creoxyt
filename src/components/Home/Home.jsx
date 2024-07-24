import { useState, useEffect } from 'react';
import answer1 from '../../assets/answer1.jpg';
import answer2 from '../../assets/answer2.jpg';
import answer3 from '../../assets/answer3.jpg';
import answer4 from '../../assets/answer4.jpg';
import answer5 from '../../assets/answer5.jpg';
import './Home.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const answers = [
    {
      heading: "Industry-Expert Instructors",
      text: "Learn from seasoned professionals who bring real-world experience and insights into the classroom. Our instructors are dedicated to providing practical knowledge that prepares you for the competitive IT industry."
    },
    {
      heading: "Comprehensive Curriculum",
      text: "Our courses cover the latest technologies and industry trends, ensuring you gain the skills that employers demand. From Frontend and Backend Development to Blockchain and Application Development, we've got you covered."
    },
    {
      heading: "Job-Ready Training",
      text: "We don't just teach theory; we focus on hands-on learning and real-world projects. Our goal is to make you job-ready, equipping you with the skills and experience needed to secure top positions in the IT sector."
    },
    {
      heading: "Personalized Learning Experience",
      text: "At Creoxy, we understand that every student is unique. Our small class sizes and personalized support ensure you receive the attention and guidance you need to succeed. Your success is our priority."
    },
    {
      heading: "Thriving Community and Network",
      text: "Join a vibrant community of learners, alumni, and industry professionals. Participate in hackathons, networking events, and continuous learning opportunities. At Creoxy, you're not just enrolling in a course; you're becoming part of a supportive and dynamic community."
    }
  ];

  const images = [answer1, answer2, answer3, answer4, answer5];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % answers.length);
        setIsChanging(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='super'>
      <div className='container'>
        <div className='text'>
          <h1 className='question animate-pulse'>Why Creoxy?</h1>
          <br />
          {answers.map((answer, index) => (
            <div 
              key={index} 
              className={`answer-container ${
                currentIndex === index
                  ? isChanging
                    ? 'fade-out'
                    : 'fade-in'
                  : 'hidden'
              }`}
            >
              <ul>
                <li>
                  <h2 className="slide-in">{answer.heading}</h2>
                  <br />
                  <p className="slide-up">{answer.text}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`animated-image ${
                currentIndex === index
                  ? isChanging
                    ? 'zoom-out'
                    : 'zoom-in'
                  : 'hidden'
              }`}
              alt={`Answer ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;