import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white py-16 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-20">
      {/* Left - Call to Action */}
      <div className="md:max-w-md flex-1">
        <h2 className="text-3xl font-bold mb-2">Let’s Talk</h2>
        <p className="mb-6 text-gray-300">
          I believe every successful project starts with a friendly chat. Feel free to reach out—I'm excited to hear about your ideas and goals.
        </p>
        <a
          href="mailto:palashchsarkar42@gmail.com"
          className="inline-block px-7 py-3 rounded-lg bg-gradient-to-r from-violet-700 to-purple-500 text-white font-semibold shadow-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300"
        >
          Tell us about your project
        </a>
      </div>

      {/* Right - Contact Info & Social */}
      <div className="md:min-w-[340px] flex flex-col gap-5">
        <div>
          <ul className="text-sm space-y-1">
            <li>
              <span className="text-gray-400 font-semibold mr-2">Email:</span>
              <a href="mailto:palashchsarkar42@gmail.com" className="hover:text-violet-400 transition">
                palashchsarkar42@gmail.com
              </a>
            </li>
            <li>
              <span className="text-gray-400 font-semibold mr-2">Phone:</span>
              <a href="https://wa.me/918293480035?text=Hello%20Palash!%20I%20visited%20your%20portfolio." target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition">
                (+91) 80166 30035
              </a>
            </li>
            <li>
              <span className="text-gray-400 font-semibold mr-2">Address:</span>
              <span className="block text-gray-300">
                Malda,WestBengal<br />
                India, 732122
              </span>
            </li>
          </ul>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-6 mt-3">
          <a
            href="https://github.com/pramio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-violet-500 transition-colors duration-200"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/918016630035?text=Hello%20Palash!%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-300 hover:text-violet-500 transition-colors duration-200"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/palash-ch-sarkar-485697247"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-violet-500 transition-colors duration-200"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    {/* Divider and copyright */}
    <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs select-none">
      © {new Date().getFullYear()} Palash Ch Sarkar. All rights reserved.
    </div>
  </footer>
);

export default Footer;
