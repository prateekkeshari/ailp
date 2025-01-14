import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CTA = ({ isDark }) => {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full ${
          isDark ? 'bg-orange-500' : 'bg-orange-500'
        } opacity-[0.02] blur-3xl`} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`max-w-3xl mx-auto p-12 rounded-3xl border ${
            isDark 
              ? 'bg-black/20 border-gray-800' 
              : 'bg-white/20 border-gray-200'
          } backdrop-blur-sm text-center`}
        >
          <h2 className="text-2xl font-medium mb-4">
            Stop sending emails that
            <span className={`block mt-1 ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>
              no one reads
            </span>
          </h2>
          
          <p className={`text-sm mb-8 max-w-xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Join thousands of people who write better emails and get better results.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className={`group flex items-center justify-center gap-2 px-6 py-2 rounded-full text-sm ${
              isDark 
                ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            } transition-all duration-300`}>
              Start Writing Better
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`px-6 py-2 rounded-full text-sm border ${
              isDark 
                ? 'border-gray-800 hover:bg-gray-800/50' 
                : 'border-gray-200 hover:bg-gray-100/50'
            } transition-all duration-300`}>
              Talk to Sales
            </button>
          </motion.div>

          {/* Stats */}
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <Stat number="1M+" label="Emails Improved" isDark={isDark} />
            <Stat number="93%" label="Open Rate" isDark={isDark} />
            <Stat number="2x" label="More Replies" isDark={isDark} />
            <Stat number="5/5" label="User Rating" isDark={isDark} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stat = ({ number, label, isDark }) => (
  <div className="text-center">
    <div className={`text-base font-medium ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>{number}</div>
    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      {label}
    </div>
  </div>
);

export default CTA; 