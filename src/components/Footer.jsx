import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold">emailAI</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Transform your email marketing with the power of artificial intelligence.
              </p>
              <div className="flex space-x-4">
                <SocialLink href="#" icon={<FiGithub />} isDark={isDark} />
                <SocialLink href="#" icon={<FiTwitter />} isDark={isDark} />
                <SocialLink href="#" icon={<FiLinkedin />} isDark={isDark} />
                <SocialLink href="#" icon={<FiMail />} isDark={isDark} />
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <FooterLink href="#" isDark={isDark}>Features</FooterLink>
              <FooterLink href="#" isDark={isDark}>Pricing</FooterLink>
              <FooterLink href="#" isDark={isDark}>API</FooterLink>
              <FooterLink href="#" isDark={isDark}>Integration</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="#" isDark={isDark}>About</FooterLink>
              <FooterLink href="#" isDark={isDark}>Blog</FooterLink>
              <FooterLink href="#" isDark={isDark}>Careers</FooterLink>
              <FooterLink href="#" isDark={isDark}>Contact</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#" isDark={isDark}>Documentation</FooterLink>
              <FooterLink href="#" isDark={isDark}>Help Center</FooterLink>
              <FooterLink href="#" isDark={isDark}>Guidelines</FooterLink>
              <FooterLink href="#" isDark={isDark}>Tutorial</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="#" isDark={isDark}>Privacy</FooterLink>
              <FooterLink href="#" isDark={isDark}>Terms</FooterLink>
              <FooterLink href="#" isDark={isDark}>Security</FooterLink>
              <FooterLink href="#" isDark={isDark}>Status</FooterLink>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-12 pt-8 border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          } text-center ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          <p>© {currentYear} emailAI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, isDark }) => (
  <a 
    href={href}
    className={`p-2 rounded-full transition-colors ${
      isDark 
        ? 'hover:bg-gray-800 text-gray-400 hover:text-orange-400' 
        : 'hover:bg-gray-100 text-gray-600 hover:text-orange-500'
    }`}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children, isDark }) => (
  <li>
    <a 
      href={href}
      className={`transition-colors ${
        isDark 
          ? 'text-gray-400 hover:text-orange-400' 
          : 'text-gray-600 hover:text-orange-500'
      }`}
    >
      {children}
    </a>
  </li>
);

export default Footer; 