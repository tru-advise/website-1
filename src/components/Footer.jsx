import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = ({ designOption = 'option1' }) => {
  const isOption1 = designOption === 'option1';

  return (
    <footer
      className={`py-12 ${
        isOption1 ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-900 to-gray-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span
                className={`text-2xl font-bold ${
                  isOption1 ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400'
                }`}
              >
                <span className="text-white">tru</span>
                <span className={isOption1 ? 'text-red-500' : ''}>advise</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Consulting & Advising
            </p>
            <p className="text-gray-400 text-sm">
              Professional consulting services for business growth, strategy, and success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-white font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`text-gray-400 hover:${
                    isOption1 ? 'text-red-500' : 'text-teal-400'
                  } transition-colors duration-200`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services/transaction"
                  className={`text-gray-400 hover:${
                    isOption1 ? 'text-red-500' : 'text-teal-400'
                  } transition-colors duration-200`}
                >
                  Transaction Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/management"
                  className={`text-gray-400 hover:${
                    isOption1 ? 'text-red-500' : 'text-teal-400'
                  } transition-colors duration-200`}
                >
                  Management Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/advisory"
                  className={`text-gray-400 hover:${
                    isOption1 ? 'text-red-500' : 'text-teal-400'
                  } transition-colors duration-200`}
                >
                  Advisory Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-white font-semibold mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone size={18} className={`mr-3 ${isOption1 ? 'text-red-500' : 'text-teal-400'}`} />
                <span className="text-sm">+971 50 613 9795</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className={`mr-3 ${isOption1 ? 'text-red-500' : 'text-teal-400'}`} />
                <span className="text-sm">prakash@truadvise.ae</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className={`mr-3 ${isOption1 ? 'text-red-500' : 'text-teal-400'}`} />
                <span className="text-sm">prakash.truadvise@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} truadvise Consulting & Advising. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
