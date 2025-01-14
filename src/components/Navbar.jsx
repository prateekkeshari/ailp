import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 flex justify-center w-full px-4">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`rounded-full ${
          isDark 
            ? 'bg-black/30 border-gray-800' 
            : 'bg-white/30 border-gray-200'
        } backdrop-blur-lg border w-full max-w-2xl`}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-14">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-medium"
            >
              emailAI
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="#features" isDark={isDark}>Features</NavLink>
              <NavLink href="#pricing" isDark={isDark}>Pricing</NavLink>
              <NavLink href="#about" isDark={isDark}>About</NavLink>
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              <button className={`px-4 py-1.5 text-sm rounded-full ${
                isDark 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              } transition-all duration-300`}>
                Start Writing
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-1.5 rounded-full transition-colors duration-300 ${
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              <button 
                className={`p-1.5 rounded-full transition-colors ${
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-3 space-y-1 mt-1"
            >
              <MobileNavLink href="#features" isDark={isDark}>Features</MobileNavLink>
              <MobileNavLink href="#pricing" isDark={isDark}>Pricing</MobileNavLink>
              <MobileNavLink href="#about" isDark={isDark}>About</MobileNavLink>
              <div className="pt-2">
                <button className={`w-full px-4 py-1.5 text-sm rounded-full ${
                  isDark 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                } transition-all duration-300`}>
                  Start Writing
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
};

const NavLink = ({ href, children, isDark }) => (
  <a 
    href={href}
    className={`text-sm transition-colors duration-300 ${
      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, isDark }) => (
  <a 
    href={href}
    className={`block px-4 py-1.5 text-sm rounded-full transition-colors ${
      isDark ? 'text-gray-400 hover:bg-gray-800/50' : 'text-gray-600 hover:bg-gray-100/50'
    }`}
  >
    {children}
  </a>
);

export default Navbar; 