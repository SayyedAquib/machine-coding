// src/HomePage.js
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Frontend Solutions</h1>
          <nav>
            <a href="#about" className="text-lg mx-2 hover:underline">
              About
            </a>
            <a href="#services" className="text-lg mx-2 hover:underline">
              Services
            </a>
            <a href="#contact" className="text-lg mx-2 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Solving Machine Coding & LLD Questions
        </h2>
        <p className="text-lg mb-12">
          Welcome to Frontend Solutions, where we tackle the toughest frontend
          development challenges. Dive into our comprehensive collection of
          machine coding and low-level design (LLD) questions, and sharpen your
          coding skills.
        </p>
        <div className="flex justify-center">
          <a
            href="#get-started"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Frontend Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
