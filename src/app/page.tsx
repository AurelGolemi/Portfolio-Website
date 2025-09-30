"use client";
import { useState } from "react";
import Image from "next/image";
import ContactForm from "./contactForm";

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
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div className="text-xl font-bold text-gray-900">Aurel Golemi</div>

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
              <a
                onClick={() => setIsContactModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
                target="_blank"
              >
                Hire Me
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 mt-18">
              {"I'm a Web Developer"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I create beautiful, functional websites using modern technologies
              like HTML, CSS, JavaScript and React.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
              >
                View My Work
              </button>
              <a
                href="/Aurel-Golemi-CV.pdf"
                download="Aurel-Golemi-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors text-lg cursor-pointer text-center"
              >
                Download Resume
              </a>
              {/* <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors text-lg cursor-pointer">
                Download Resume
              </button> */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 md:px-8 bg-gray-100">
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
                planner application. These projects taught me the importance of
                responsive design, user experience, and writing maintainable
                code.
              </p>
              <p className="text-lg leading-relaxed">
                {
                  "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community."
                }
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="py-16 px-4 md:px-8">
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
                  <div className="text-2xl mb-2">🌐</div>
                  <h4 className="font-semibold text-gray-900 mb-2">HTML/CSS</h4>
                  <p className="text-sm text-gray-700">
                    Semantic Markup & Modern Styling
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    JavaScript
                  </h4>
                  <p className="text-sm text-gray-700">
                    ES6+ & DOM manipulation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="text-2xl mb-2">💾</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Git/GitHub
                  </h4>
                  <p className="text-sm text-gray-700">
                    Commits & Push Projects
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="text-2xl mb-2">⚛️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">React</h4>
                  <p className="text-sm text-gray-700">
                    Components & State Management
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="text-2xl mb-2">🌀</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Tailwind CSS
                  </h4>
                  <p className="text-sm text-gray-700">Utility-First Styling</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="text-2xl mb-2">💻</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    TypeScript (Basic)
                  </h4>
                  <p className="text-sm text-gray-700">
                    Static Typing & Scalable Code
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="text-2xl mb-2">👨‍💻📱</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    NextJS (Basic)
                  </h4>
                  <p className="text-sm text-gray-700">
                    Server-Side Rendering & API Routes
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AI & Automation
                  </h4>
                  <p className="text-sm text-gray-700">
                    Prompt Engineering, AI Integrations, ChatGPT APIs
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
                      src="/projects/landing-page-clothing.PNG"
                      alt="Style Accord Landing Page Screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Product Landing Page (Style Accord | Clothing Brand)
                    </h4>
                    <p className="text-gray-700 mb-4">
                      A responsive landing page built with HTML, CSS and
                      JavaScript featuring modern design principles and smooth
                      animations, showing different products from differnet
                      brands.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        HTML
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        CSS
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-500 text-sm rounded-full">
                        JavaScript
                      </span>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href="https://style-accord.netlify.app/"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Live →
                      </a>
                      <a
                        href="https://github.com/AurelGolemi/Product-Landing-Page"
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
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
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
          </div>
        </section>

        {/* Hire Me Section */}
        <section id="contact-me" className="py-16 px-4 md:px-8 bg-blue-100">
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
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  I work efficiently to deliver high-quality results within
                  agreed timelines.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Creative Solutions
                </h3>
                <p className="text-gray-600">
                  I bring fresh prespectives and innovative approaches to every
                  project.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🤝</div>
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
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/golemiaurel68%40gmail.com?compose=new"
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
