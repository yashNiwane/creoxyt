
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import image from './assets/Cre.png';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import About from './components/About';
import Blogs from './components/Blog';
import Contact from './components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between border p-4">
        {/* Top left logo */}
        <div className="flex justify-start">
          <img src={image} alt="CREOXY" className='h-12 rounded'/>
        </div>

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Navigation menu */}
        <div className="flex justify-center mt-auto">
          <nav className="bg-gray-800 rounded-lg shadow-xl p-2">
            <ul className="flex space-x-4">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-200 hover:text-blue-400 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  className="text-gray-200 hover:text-blue-400 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-gray-700"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-200 hover:text-blue-400 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/blogs" 
                  className="text-gray-200 hover:text-blue-400 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-gray-700"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;