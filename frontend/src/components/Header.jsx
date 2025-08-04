import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiWifi, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // Form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Handlers for menu and contact form
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

  // Smooth scroll helper
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Form input change handler
  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Form submit handler with POST to backend and toast notifications
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic front-end validation
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/contact', { // Change URL if backend is deployed elsewhere
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data); // See what error you get


      if (res.ok) {
        toast.success(data.message || 'Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
        setContactFormOpen(false);
      } else {
        toast.error(data.error || 'Failed to send message.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
  <ToastContainer 
    position="top-center"
    toastClassName="pointer-events-auto"
    bodyClassName="pointer-events-auto"
  />
</div>




      <header className="absolute w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.3 }}
            className='flex items-center'
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
              ρᥴᦓ
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
              𝔖𝔬𝔣𝔱𝔴𝔞𝔯𝔢
            </span>
          </motion.div>

          {/* Navigation Links (Desktop) */}
          <nav className='hidden lg:flex space-x-8'>
            {navItems.map((item, index) => {
              const lowerItem = item.toLowerCase();
              return (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.7 + index * 0.2 }}
                  href={`#${lowerItem}`}
                  onClick={(e) => handleNavClick(e, lowerItem)}
                  className='relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group'
                >
                  {item}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300'></span>
                </motion.a>
              );
            })}
          </nav>

          {/* Social Icons + Hire Me Button */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              {
                Icon: FiGithub,
                href: "https://github.com/pramio",
                label: "GitHub (pramio - Palash Ch Sarkar)",
              },
              {
                Icon: FaWhatsapp,
                href: "https://wa.me/918293480035?text=Hello%20Palash!%20I%20visited%20your%20portfolio.",
                label: "WhatsApp Chat with Palash",
              },
              {
                Icon: FiLinkedin,
                href: "https://www.linkedin.com/in/palash-ch-sarkar-485697247",
                label: "LinkedIn: Palash",
              },
            ].map(({ Icon, href, label }, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.2, duration: 0.8 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
              >
                <Icon className='w-5 h-5' />
              </motion.a>
            ))}

            <motion.button
              onClick={openContactForm}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className='px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500'
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg'
            >
              <div className='px-4 pt-2 pb-6'>
                <nav className='flex flex-col space-y-1'>
                  {navItems.map((item) => {
                    const lowerItem = item.toLowerCase();
                    return (
                      <a
                        key={item}
                        href={`#${lowerItem}`}
                        onClick={(e) => {
                          handleNavClick(e, lowerItem);
                          toggleMenu();
                        }}
                        className='text-gray-800 dark:text-gray-200 py-3 font-medium hover:text-violet-600 dark:hover:text-violet-400'
                      >
                        {item}
                      </a>
                    );
                  })}
                </nav>

                <div className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
                  <div className='flex justify-center space-x-6 mb-6'>
                    {[FiGithub, FiLinkedin, FiWifi].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className='text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400'
                      >
                        <Icon className='w-6 h-6' />
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={openContactForm}
                    className='block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold text-center hover:opacity-90'
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Modal */}
        <AnimatePresence>
          {contactFormOpen && (
            <motion.div
              onClick={closeContactForm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md'
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 30 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 30,
                    duration: 0.8,
                  }}
                  className='p-6'
                >
                  <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
                      Get in Touch
                    </h2>
                    <button
                      onClick={closeContactForm}
                      className='text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                      aria-label="Close contact form"
                    >
                      <FiX className='w-6 h-6' />
                    </button>
                  </div>
                  <form className='space-y-4' onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>
                        Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={form.name}
                        onChange={handleFormChange}
                        className='w-full px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600'
                        placeholder='John Doe'
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-1'>
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={form.email}
                        onChange={handleFormChange}
                        className='w-full px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600'
                        placeholder='you@example.com'
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-1'>
                        Message
                      </label>
                      <textarea
                        rows="4"
                        id='message'
                        name='message'
                        value={form.message}
                        onChange={handleFormChange}
                        className='w-full px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600'
                        placeholder='Enter your message here...'
                        required
                      />
                    </div>

                    <motion.button
                      type='submit'
                      disabled={loading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold text-center hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
