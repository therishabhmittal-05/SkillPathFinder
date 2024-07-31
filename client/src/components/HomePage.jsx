import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">SkillBoost</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link></li>
              <li><Link to="/register" className="hover:text-blue-200 transition duration-300">Register</Link></li>
              <li><Link to="/login" className="hover:text-blue-200 transition duration-300">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="bg-blue-100 text-blue-800 py-4 px-6 shadow-inner">
        <blockquote className="text-center text-lg italic">
          "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          <footer className="mt-2 text-sm text-blue-600">— Malcolm X</footer>
        </blockquote>
      </div>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Boost Your Skills with Personalized Learning Paths</h2>
            <p className="text-xl mb-8">Discover your current skill level and get tailored recommendations to advance your career.</p>
            <Link to="/register" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">Get Started</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold mb-4">1. Register</h4>
                <p>Create an account to start your learning journey.</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold mb-4">2. Skill Assessment</h4>
                <p>Take a test to determine your current skill level.</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold mb-4">3. Personalized Path</h4>
                <p>Receive a customized learning path and course recommendations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SkillBoost. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;