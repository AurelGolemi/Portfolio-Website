"use client";
import { useState } from "react";
import Image from "next/image";
import ContactForm from "./contactForm";
import LoadingScreen from "./LoadingScreen";

export default function Home() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  console.log("Modal state:", isContactModalOpen);

  // Debug function
  const handleGetInTouchClick = () => {
    console.log("Get In Touch clicked!");
    setIsContactModalOpen(true);
    console.log("Modal should be open now");
  };

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gray-100">
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
          <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo/Name */}
              <div className="text-xl font-bold text-gray-900">
                Aurel Golemi
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("profile")}
                  className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  Profile
                </button>
                <button
                  onClick={() => scrollToSection("contact-me")}
                  className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  Contact Me
                </button>
              </div>
              {/* Action Buttons */}
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/AurelGolemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  GitHub
                </a>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="relative pt-24 pb-16 px-4 md:px-8 min-h-screen flex items-center overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
              <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto text-center z-10">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Available for Jobs
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {"Hi, I'm"}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aurel Golemi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                I craft beautiful, functional websites using core & modern
                technologies like
                <span className="font-semibold text-red-600">
                  {" "}
                  HTML, CSS, JavaScript
                </span>
                ,<span className="font-semibold text-cyan-500"> React</span> and
                <span className="font-semibold text-gray-800"> Next</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-100 shadow-lg hover:shadow-xl hover:scale-95 cursor-pointer"
                >
                  View My Work
                </button>
                <a
                  href="/Aurel-Golemi-CV.pdf"
                  download="Aurel-Golemi-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-700 hover:text-gray-700 transition-all duration-100 text-center hover:shadow-lg cursor-pointer"
                >
                  Download Resume
                </a>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                About Me
              </h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  {
                    "I'm a passionate web developer who loves creating digital experiences that make a difference. My journey into web development started with curiosity and has grown into a deep appreciation for clean code and user-centered design."
                  }
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I have successfully built several projects including a
                  comprehensive product landing page and an interactive travel
                  planner application. These projects taught me the importance
                  of responsive design, user experience, and writing
                  maintainable code.
                </p>
                <p className="text-lg leading-relaxed">
                  {
                    "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community."
                  }
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Photo side */}
                <div className="relative group">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    {/* Replace with your actual image */}
                    <Image
                      src="/Aurel_Golemi_New.jpg"
                      alt="Aurel Golemi"
                      width={700}
                      height={700}
                    />
                    {/* If you don't have a photo yet, use this placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-8xl font-bold">AG</span>
                    </div>
                  </div>

                  {/* Decorative border */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-2xl -z-10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                </div>

                {/* Content side */}
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                      Frontend Developer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      Building the web, one component at a time
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {`I'm passionate about creating seamless user experiences and writing clean, maintainable code. Currently seeking internship opportunities to grow and 
            contribute to innovative projects.`}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">2+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">
                        5+
                      </div>
                      <div className="text-sm text-gray-600">Technologies</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-pink-600">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">Dedication</div>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://github.com/AurelGolemi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6 text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aurel-golemi-8518272b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/aurelgolemi2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6 text-pink-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Profile Section */}
          <section
            id="profile"
            className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                My Profile
              </h2>

              {/* Skills Grid */}
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="flex gap-2 justify-center mb-3">
                      {/* HTML Logo */}
                      <svg viewBox="0 0 452 520" className="w-10 h-10">
                        <path
                          fill="#e34f26"
                          d="M41 460L0 0h451l-41 460-185 52"
                        />
                        <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                        <path
                          fill="#ecedee"
                          d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                        />
                        <path
                          fill="#fff"
                          d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
                        />
                      </svg>
                      {/* CSS Logo */}
                      <svg
                        viewBox="0 0 452 520"
                        className="w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#264DE4"
                          d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
                        />
                        <path
                          fill="#2965F1"
                          d="M405.388 431.408l35.148-393.73H256v435.146z"
                        />
                        <path
                          fill="#EBEBEB"
                          d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
                        />
                        <path
                          fill="#FFF"
                          d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
                        />
                      </svg>
                      {/* JavaScript Logo */}
                      <svg viewBox="0 0 256 256" className="w-10 h-10">
                        <rect width="256" height="256" fill="#F7DF1E" />
                        <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Core Web Technologies
                    </h4>
                    <p className="text-sm text-gray-700">
                      HTML5, CSS3, JavaScript (ES6+), Responsive Design & Extras
                      (Wordpress + Elementor)
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="w-12 h-12 mx-auto mb-3">
                      <svg viewBox="0 0 256 250" className="w-full h-full">
                        <path
                          fill="#161614"
                          d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Git/GitHub
                    </h4>
                    <p className="text-sm text-gray-700">
                      Commits & Push Projects
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="w-12 h-12 mx-auto mb-3">
                      <svg
                        viewBox="-11.5 -10.23174 23 20.46348"
                        className="w-full h-full"
                      >
                        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                        <g stroke="#61dafb" strokeWidth="1" fill="none">
                          <ellipse rx="11" ry="4.2" />
                          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                        </g>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">React</h4>
                    <p className="text-sm text-gray-700">
                      Components & State Management
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="w-12 h-12 mx-auto mb-3">
                      <svg viewBox="0 0 256 154" className="w-full h-full">
                        <defs>
                          <linearGradient
                            x1="-2.778%"
                            y1="32%"
                            x2="100%"
                            y2="67.556%"
                            id="gradient"
                          >
                            <stop stopColor="#2298BD" offset="0%" />
                            <stop stopColor="#0ED7B5" offset="100%" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                          fill="url(#gradient)"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Tailwind CSS
                    </h4>
                    <p className="text-sm text-gray-700">
                      Utility-First Styling
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="w-12 h-12 mx-auto mb-3">
                      <svg
                        width="256"
                        height="256"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12"
                      >
                        <rect width="256" height="256" fill="#007ACC" />
                        <text
                          className="cursor-default"
                          x="75"
                          y="225"
                          fontFamily="Segoe UI, Arial, sans-serif"
                          fontSize="150"
                          fontWeight="bold"
                          fill="#fff"
                        >
                          TS
                        </text>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      TypeScript
                    </h4>
                    <p className="text-sm text-gray-700">
                      Static Typing & Scalable Code
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="w-12 h-12 mx-auto mb-3">
                      <svg viewBox="0 0 180 180" className="w-full h-full">
                        <mask
                          id="mask"
                          height="180"
                          width="180"
                          y="0"
                          x="0"
                          maskUnits="userSpaceOnUse"
                        >
                          <circle fill="white" r="90" cy="90" cx="90" />
                        </mask>
                        <g mask="url(#mask)">
                          <circle fill="black" r="90" cy="90" cx="90" />
                          <path
                            fill="url(#paint0_linear)"
                            d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
                          />
                          <path
                            fill="url(#paint1_linear)"
                            d="M115 54h12v72h-12z"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            y2="143"
                            x2="120.799"
                            y1="54"
                            x1="109"
                            gradientUnits="userSpaceOnUse"
                            id="paint0_linear"
                          >
                            <stop stopColor="white" />
                            <stop
                              stopColor="white"
                              stopOpacity="0"
                              offset="1"
                            />
                          </linearGradient>
                          <linearGradient
                            y2="126"
                            x2="121"
                            y1="54"
                            x1="121"
                            gradientUnits="userSpaceOnUse"
                            id="paint1_linear"
                          >
                            <stop stopColor="white" />
                            <stop
                              stopColor="white"
                              stopOpacity="0"
                              offset="1"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">NextJS</h4>
                    <p className="text-sm text-gray-700">
                      Server-Side Rendering & API Routes
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="w-12 h-12 mx-auto mb-3">
                      <svg
                        viewBox="0 0 41 41"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="1.5"
                      >
                        <rect width="41" height="41" fill="#10A37F" rx="8" />
                        <path
                          d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      AI & Automation
                    </h4>
                    <p className="text-sm text-gray-700">
                      Prompt Engineering, AI Integrations, ChatGPT APIs
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="flex gap-2 justify-center items-center mx-auto mb-3">
                      <svg
                        className="w-12 h-12"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985" />
                        <path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419-.038-.935-.064-1.898-.093-2.919-.021-.747-.047-1.684-.085-2.664a18.8 18.8 0 01-4.962 1.568c-3.079.526-6.389.356-9.84-.507-2.435-.609-4.965-1.871-6.407-3.82-4.203 3.681-8.212 3.182-10.396 2.453-3.853-1.285-7.301-4.896-10.542-11.037-2.309-4.375-4.542-10.075-6.638-16.943-3.65-11.96-5.969-24.557-6.175-28.693C4.292 23.698 7.777 14.44 15.296 9.129 27.157.751 45.128 5.678 51.68 7.915c4.402-2.653 9.581-3.944 15.433-3.851 3.143.051 6.136.327 8.916.823 2.9-.912 8.628-2.221 15.185-2.139 12.081.144 22.092 4.852 28.949 13.615 4.894 6.252 2.474 19.381.597 26.651-2.642 10.226-7.271 21.102-12.957 30.57 1.544.011 3.781-.174 6.961-.831 6.274-1.295 8.109 2.069 8.607 3.575 1.995 6.042-6.677 10.608-9.382 11.864-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013-1.216-.107-.12 1.014-.116.991c-.311 11.999-2.025 19.598-5.552 24.619-3.697 5.264-8.835 6.739-13.361 7.709-1.544.33-2.947.474-4.219.474zm-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434.028.99.054 1.927.089 2.802.106 2.65.355 8.855 1.327 11.477.137.371.26.747.39 1.146 1.083 3.316 1.626 4.979 6.309 3.978 3.931-.843 5.952-1.599 7.534-3.851 2.299-3.274 3.585-9.86 3.821-19.575l4.783.116-4.75-.57.14-1.186c.455-3.91.783-6.734 3.396-8.602 2.097-1.498 4.486-1.353 6.389-1.01-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965 1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304 2.906-11.251 2.02-17.226 1.134-18.356-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194-1.8.335-.922-.191c-2.542-.528-5.366-.82-8.393-.869-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721-4.656 3.298-6.777 9.76-6.305 19.207.156 3.119 2.275 14.926 5.771 26.377 4.831 15.825 9.221 21.082 11.054 21.693.32.108 1.15-.537 1.976-1.529a270.708 270.708 0 0110.694-12.07l2.77-2.915 3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238-1.51 1.688-.174.196 4.388 2.025 1.836-2.301z" />
                        <path
                          fill="#336791"
                          d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"
                        />
                        <path
                          fill="#fff"
                          d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185-1.562-3.907-1.899-19.069-1.551-31.503a1.59 1.59 0 011.64-1.55 1.594 1.594 0 011.55 1.639c-.401 14.341.168 27.337 1.324 30.229 1.804 4.509 4.54 8.453 12.275 6.796 7.343-1.575 10.093-4.359 11.318-11.46.94-5.449 2.799-20.951 3.028-24.01a1.593 1.593 0 011.71-1.472 1.597 1.597 0 011.472 1.71c-.239 3.185-2.089 18.657-3.065 24.315-1.446 8.387-5.185 12.191-13.794 14.037-1.463.313-2.792.453-4 .454zM31.321 90.466a6.71 6.71 0 01-2.116-.35c-5.347-1.784-10.44-10.492-15.138-25.885-3.576-11.717-5.842-23.947-6.041-27.922-.589-11.784 2.445-20.121 9.02-24.778 13.007-9.216 34.888-.44 35.813-.062a1.596 1.596 0 01-1.207 2.955c-.211-.086-21.193-8.492-32.768-.285-5.622 3.986-8.203 11.392-7.672 22.011.167 3.349 2.284 15.285 5.906 27.149 4.194 13.742 8.967 22.413 13.096 23.79.648.216 2.62.873 5.439-2.517A245.272 245.272 0 0145.88 73.046a1.596 1.596 0 012.304 2.208c-.048.05-4.847 5.067-10.077 11.359-2.477 2.979-4.851 3.853-6.786 3.853zm69.429-13.445a1.596 1.596 0 01-1.322-2.487c14.863-22.055 20.08-48.704 15.612-54.414-5.624-7.186-13.565-10.939-23.604-11.156-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849a1.6 1.6 0 01.631-2.025c.046-.027.192-.089.429-.176l-.021.006.021-.007c1.641-.601 7.639-2.4 15.068-2.315 11.108.118 20.284 4.401 26.534 12.388 2.957 3.779 2.964 12.485.019 23.887-3.002 11.625-8.651 24.118-15.497 34.277-.306.457-.81.703-1.323.703zm.76 10.21c-2.538 0-4.813-.358-6.175-1.174-1.4-.839-1.667-1.979-1.702-2.584-.382-6.71 3.32-7.878 5.208-8.411-.263-.398-.637-.866-1.024-1.349-1.101-1.376-2.609-3.26-3.771-6.078-.182-.44-.752-1.463-1.412-2.648-3.579-6.418-11.026-19.773-6.242-26.612 2.214-3.165 6.623-4.411 13.119-3.716C97.6 28.837 88.5 10.625 66.907 10.271c-6.494-.108-11.82 1.889-15.822 5.93-8.96 9.049-8.636 25.422-8.631 25.586a1.595 1.595 0 11-3.19.084c-.02-.727-.354-17.909 9.554-27.916C53.455 9.272 59.559 6.96 66.96 7.081c13.814.227 22.706 7.25 27.732 13.101 5.479 6.377 8.165 13.411 8.386 15.759.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104-3.639 5.201 3.406 17.834 6.414 23.229.768 1.376 1.322 2.371 1.576 2.985.988 2.396 2.277 4.006 3.312 5.3.911 1.138 1.7 2.125 1.982 3.283.131.23 1.99 2.98 13.021.703 2.765-.57 4.423-.083 4.93 1.45.997 3.015-4.597 6.532-7.694 7.97-2.775 1.29-7.204 2.106-11.036 2.106zm-4.696-4.021c.35.353 2.101.962 5.727.806 3.224-.138 6.624-.839 8.664-1.786 2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577a6.162 6.162 0 01-.54-.401c-.302.119-.581.197-.78.253-1.58.443-3.214.902-2.996 5.105zm-45.562 8.915c-1.752 0-3.596-.239-5.479-.71-1.951-.488-5.24-1.957-5.19-4.37.057-2.707 3.994-3.519 5.476-3.824 5.354-1.103 5.703-1.545 7.376-3.67.488-.619 1.095-1.39 1.923-2.314 1.229-1.376 2.572-2.073 3.992-2.073.989 0 1.8.335 2.336.558 1.708.708 3.133 2.42 3.719 4.467.529 1.847.276 3.625-.71 5.006-3.237 4.533-7.886 6.93-13.443 6.93zm-7.222-4.943c.481.372 1.445.869 2.518 1.137 1.631.408 3.213.615 4.705.615 4.546 0 8.196-1.882 10.847-5.594.553-.774.387-1.757.239-2.274-.31-1.083-1.08-2.068-1.873-2.397-.43-.178-.787-.314-1.115-.314-.176 0-.712 0-1.614 1.009a41.146 41.146 0 00-1.794 2.162c-2.084 2.646-3.039 3.544-9.239 4.821-1.513.31-2.289.626-2.674.835zm12.269-7.36a1.596 1.596 0 01-1.575-1.354 8.218 8.218 0 01-.08-.799c-4.064-.076-7.985-1.82-10.962-4.926-3.764-3.927-5.477-9.368-4.699-14.927.845-6.037.529-11.366.359-14.229-.047-.796-.081-1.371-.079-1.769.003-.505.013-1.844 4.489-4.113 1.592-.807 4.784-2.215 8.271-2.576 5.777-.597 9.585 1.976 10.725 7.246 3.077 14.228.244 20.521-1.825 25.117-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354a1.595 1.595 0 01-1.335 1.819l-.244.02zM42.464 42.26l.062 1.139c.176 2.974.504 8.508-.384 14.86-.641 4.585.759 9.06 3.843 12.276 2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646 1.991-4.424 4.47-9.931 1.615-23.132-.565-2.615-1.936-4.128-4.189-4.627-4.628-1.022-11.525 2.459-12.974 3.837zm9.63-.677c-.08.564 1.033 2.07 2.485 2.271 1.449.203 2.689-.975 2.768-1.539.079-.564-1.033-1.186-2.485-1.388-1.451-.202-2.691.092-2.768.656zm2.818 2.826l-.407-.028c-.9-.125-1.81-.692-2.433-1.518-.219-.29-.576-.852-.505-1.354.101-.736.999-1.177 2.4-1.177.313 0 .639.023.967.069.766.106 1.477.327 2.002.62.91.508.977 1.075.936 1.368-.112.813-1.405 2.02-2.96 2.02zm-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082-.096-.182-.762-.634-2.025-.81a5.823 5.823 0 00-.821-.059c-.812 0-1.243.183-1.345.282zm43.605-1.245c.079.564-1.033 2.07-2.484 2.272-1.45.202-2.691-.975-2.771-1.539-.076-.564 1.036-1.187 2.486-1.388 1.45-.203 2.689.092 2.769.655zm-2.819 2.56c-1.396 0-2.601-1.086-2.7-1.791-.115-.846 1.278-1.489 2.712-1.688.316-.044.629-.066.93-.066 1.238 0 2.058.363 2.14.949.053.379-.238.964-.739 1.492-.331.347-1.026.948-1.973 1.079l-.37.025zm.943-3.013c-.276 0-.564.021-.856.061-1.441.201-2.301.779-2.259 1.089.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919.443-.465.619-.903.598-1.052-.028-.198-.56-.49-1.613-.49zm3.965 32.843a1.594 1.594 0 01-1.324-2.483c3.398-5.075 2.776-10.25 2.175-15.255-.257-2.132-.521-4.337-.453-6.453.07-2.177.347-3.973.614-5.71.317-2.058.617-4.002.493-6.31a1.595 1.595 0 113.186-.172c.142 2.638-.197 4.838-.525 6.967-.253 1.643-.515 3.342-.578 5.327-.061 1.874.178 3.864.431 5.97.64 5.322 1.365 11.354-2.691 17.411a1.596 1.596 0 01-1.328.708z"
                        />
                      </svg>
                      <svg
                        className="w-12 h-12"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <defs>
                          <linearGradient
                            id="a"
                            x1="53.974"
                            x2="94.163"
                            y1="54.974"
                            y2="71.829"
                            gradientTransform="translate(29.387 60.096) scale(1.1436)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#249361" />
                            <stop offset="1" stop-color="#3ecf8e" />
                          </linearGradient>
                          <linearGradient
                            id="b"
                            x1="36.156"
                            x2="54.484"
                            y1="30.578"
                            y2="65.081"
                            gradientTransform="translate(29.387 60.096) scale(1.1436)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" />
                            <stop offset="1" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#a)"
                          d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
                          transform="translate(-27.722 -60.338)"
                        />
                        <path
                          fill="url(#b)"
                          fill-opacity=".2"
                          d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
                          transform="translate(-27.722 -60.338)"
                        />
                        <path
                          fill="#3ecf8e"
                          d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Supabase/PostgreSQL (basic)
                    </h4>
                    <p className="text-sm text-gray-700">
                      Setting up databases, user data & connecting to the
                      Front-End
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div id="projects" className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Featured Projects
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src="/projects/street-style.jpg"
                        alt="Style Accord Landing Page Screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Street Style (Product Landing Page | Demo)
                      </h4>
                      <p className="text-gray-700 mb-4">
                        A responsive landing page built with NextJs, Tailwind
                        CSS and TypeScript featuring modern design principles
                        and smooth animations, showing different products from
                        differnet brands.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-800 text-gray-100 text-sm rounded-full">
                          NextJS
                        </span>
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full">
                          React
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          Tailwind CSS
                        </span>
                        <span className="px-3 py-1 bg-blue-800 text-blue-100 text-sm rounded-full">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-gray-900 text-gray-100 text-sm rounded-full">
                          Vercel
                        </span>
                        <span className="px-3 py-1 bg-green-900 text-green-100 text-sm rounded-full">
                          Supabase
                        </span>
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href="https://street-style-iota.vercel.app/"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Live →
                        </a>
                        <a
                          href="https://github.com/AurelGolemi/street-style"
                          className="text-gray-600 hover:text-gray-800 font-medium"
                        >
                          View Code →
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src="/projects/daily-tracker.PNG"
                        alt="Daily Tracker Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Daily Tracker
                      </h4>
                      <p className="text-gray-600 mb-4">
                        The Daily Tracker App is a web application built with
                        React.js and Tailwind CSS that helps users organize and
                        monitor their daily tasks and habits. It features task
                        creation, progress tracking, and a clean, responsive
                        interface designed for usability across devices.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                          HTML
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          CSS
                        </span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-500 text-sm rounded-full">
                          JavaScript
                        </span>
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full">
                          React
                        </span>
                        <span className="px-3 py-1 bg-violet-100 text-violet-800 text-sm rounded-full">
                          Tailwind CSS
                        </span>
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href="https://my-daily-tracker.netlify.app"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Live →
                        </a>
                        <a
                          href="https://github.com/AurelGolemi/daily-tracker"
                          className="text-gray-600 hover:text-gray-800 font-medium"
                        >
                          View Code →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="projects" className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Professional Projects (Internship)
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src="/projects/athens-house-of-myths-image.jpeg"
                        alt="Athens House of Myths Screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Athens House Of Myths - Production Website Enhancement
                        (WordPress | Elementor + Custom CSS)
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Enhanced navigation, page architecture, and user
                        experience during my internship at Leon Architect Group.
                        Implemented custom CSS to extend Elementor styling,
                        improved responsiveness, optimized URL structure, and
                        unified the layout across multiple room pages.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          WordPress
                        </span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-500 text-sm rounded-full">
                          Elementor
                        </span>
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href="https://athenshouseofmyths.com/"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Live →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src="/projects/leon-architect-group.webp"
                        alt="Leon Architect Group Screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Leon Architect Group – Homepage & Layout Revamp
                        (WordPress | Elementor + Custom Code)
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Improved the website’s design, structure, and usability
                        during my internship at Leon Architect Group. Refined
                        layouts with Elementor and custom code, corrected URL
                        structure for clarity and SEO, reworked a custom
                        in-house plugin (Vortex), and redesigned the “Είσοδος”
                        access flow using shortcode-based logic. Also created
                        and customized an additional project page while
                        maintaining design consistency across the site.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          WordPress
                        </span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-500 text-sm rounded-full">
                          Elementor
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-500 text-sm rounded-full">
                          Hostinger
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-500 text-sm rounded-full">
                          PHP
                        </span>
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href="https://leonarchitectgroup.com/"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Live →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hire Me Section */}
          <section
            id="contact-me"
            className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {"Let's Work Together"}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {
                  "I'm passionate about creating exceptional web experiences and would love to help bring your projects to life. Here's why you should consider working with me:"
                }
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-600">
                    I work efficiently to deliver high-quality results within
                    agreed timelines.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Creative Solutions
                  </h3>
                  <p className="text-gray-600">
                    I bring fresh prespectives and innovative approaches to
                    every project.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Collaborative
                  </h3>
                  <p className="text-gray-600">
                    I believe in open communication and working closely with
                    clients.
                  </p>
                </div>
              </div>

              <button
                onClick={handleGetInTouchClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer z-9999"
              >
                Get In Touch
              </button>
              {/* debug modal state removed */}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Aurel Golemi</h3>
                <p className="text-gray-300">
                  Web Developer passionate about creating beautiful, functional
                  digital experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#profile"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact-me"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/AurelGolemi"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/aurel-golemi-8518272b7/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=golemiaurel68@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Gmail
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/aurelgolemi2/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-300">
                © 2025 Aurel Golemi. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Simple Test Modal */}

        <ContactForm
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </>
  );
}

{
  /* {isContactModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div 
            className="bg-white p-8 rounded-lg max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Modal Works!</h3>
            <p className="mb-4 text-gray-800">If you can see this, the modal is working correctly.</p>
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close Modal
            </button>
          </div>
        </div>
      )} */
}

/* Original Code - Vercel */
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
