'use client';

import { useState } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create mailto link
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:golemiaurel68@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    onClose();
  };

  // Don't render anything if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Send me a message</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// export default function Home() {
//   // State for contact modal
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
//   // State for contact form
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
  
//   // Loading state for form submission
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Scroll function
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle form submission
//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate processing time
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     // Create mailto link with form data
//     const subject = encodeURIComponent(`Message from ${formData.name}`);
//     const body = encodeURIComponent(
//       `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
//     );
//     const mailtoLink = `mailto:golemiaurel68@gmail.com?subject=${subject}&body=${body}`;

//     // Open email client
//     window.location.href = mailtoLink;

//     // Reset form and close modal
//     setFormData({ name: '', email: '', message: '' });
//     setIsSubmitting(false);
//     setIsContactModalOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Your existing header */}
//       <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
//         <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-xl font-bold text-gray-900">Aurel Golemi</div>
            
//             <div className="hidden md:flex items-center space-x-8">
//               <button
//                 onClick={() => scrollToSection('about')}
//                 className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer border-none bg-transparent"
//               >
//                 About
//               </button>
//               <button
//                 onClick={() => scrollToSection('profile')}
//                 className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer border-none bg-transparent"
//               >
//                 Profile
//               </button>
//               <button
//                 onClick={() => scrollToSection('contact-me')}
//                 className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer border-none bg-transparent"
//               >
//                 Contact Me
//               </button>
//             </div>

//             <div className="flex items-center space-x-4">
//               <a
//                 href="https://github.com/AurelGolemi"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-700 hover:text-gray-900 transition-colors"
//               >
//                 GitHub
//               </a>
//               <button
//                 onClick={() => setIsContactModalOpen(true)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
//               >
//                 Hire Me
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Your existing main content */}
//       <main>
//         {/* Hero Section */}
//         <section className="pt-24 pb-16 px-4 md:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//               Hi, I'm a Web Developer
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               I create beautiful, functional websites using modern technologies like HTML, CSS, JavaScript and React.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={() => scrollToSection('profile')}
//                 className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
//               >
//                 View My Work
//               </button>
//               <a
//                 href="/Aurel_Golemi_Resume.pdf"
//                 download="Aurel_Golemi_Resume.pdf"
//                 className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors text-lg cursor-pointer text-center inline-block"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Your existing About and Profile sections */}
//         {/* ... */}

//         {/* Contact Me Section with Get In Touch Button */}
//         <section id="contact-me" className="py-16 px-4 md:px-8 bg-blue-50">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
//               Let's Work Together
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//               I'm passionate about creating exceptional web experiences and would love to help bring your projects to life.
//             </p>
            
//             <div className="grid md:grid-cols-3 gap-8 mb-12">
//               <div className="text-center">
//                 <div className="text-3xl mb-4">🚀</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
//                 <p className="text-gray-600">
//                   I work efficiently to deliver high-quality results within agreed timelines.
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-4">💡</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Solutions</h3>
//                 <p className="text-gray-600">
//                   I bring fresh perspectives and innovative approaches to every project.
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-4">🤝</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative</h3>
//                 <p className="text-gray-600">
//                   I believe in open communication and working closely with clients.
//                 </p>
//               </div>
//             </div>
            
//             {/* Get In Touch Button - opens modal */}
//             <button
//               onClick={() => setIsContactModalOpen(true)}
//               className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors text-lg font-semibold"
//             >
//               Get In Touch
//             </button>
//           </div>
//         </section>
//       </main>

//       {/* Your existing footer */}
//       <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
//         {/* Your existing footer content */}
//       </footer>

//       {/* Contact Modal */}
//       {isContactModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xl font-semibold text-gray-900">Send me a message</h3>
//                 <button
//                   onClick={() => setIsContactModalOpen(false)}
//                   className="text-gray-400 hover:text-gray-600 text-2xl"
//                 >
//                   ×
//                 </button>
//               </div>
              
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your full name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>
                
//                 <div className="flex space-x-3 pt-2">
//                   <button
//                     type="button"
//                     onClick={() => setIsContactModalOpen(false)}
//                     className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitting ? 'Sending...' : 'Send Message'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Create mailto link with form data
//     const mailtoLink = `mailto:golemiaurel68@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

//     // Open email client
//     window.location.href = mailtoLink;

//     // Reset form
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-mg">
//       <h3 className="text-xl font-semibold text-gray-900 mb-4">Send me a message</h3>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             required
//             rows={4}
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }