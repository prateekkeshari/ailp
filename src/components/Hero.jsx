import { motion } from 'framer-motion';
import { FiMail, FiArrowRight, FiSend, FiUser, FiPieChart } from 'react-icons/fi';

const Hero = ({ isDark }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full ${
          isDark ? 'bg-orange-500' : 'bg-orange-500'
        } opacity-[0.03] blur-3xl`} />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-medium leading-tight mb-6">
              Send emails that people 
              <span className={`block mt-2 ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>
                actually want to open
              </span>
            </h1>
            
            <p className={`text-base mb-8 max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Write better emails in half the time. Our smart tools help you craft messages that convert, connect, and drive results.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                className={`group flex items-center gap-2 px-6 py-2 rounded-full ${
                  isDark 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                } transition-all duration-300`}
              >
                Start Writing Better 
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className={`px-6 py-2 rounded-full border ${
                  isDark 
                    ? 'border-gray-800 hover:bg-gray-800/50' 
                    : 'border-gray-200 hover:bg-gray-100/50'
                } transition-all duration-300`}
              >
                See Examples
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <Stat number="2x" label="More Replies" isDark={isDark} />
              <Stat number="50%" label="Less Writing Time" isDark={isDark} />
              <Stat number="10min" label="Setup Time" isDark={isDark} />
            </motion.div>
          </motion.div>

          {/* Preview Card */}
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={`mx-auto max-w-3xl p-8 rounded-3xl border ${
              isDark 
                ? 'bg-black/20 border-gray-800' 
                : 'bg-white/20 border-gray-200'
              } border backdrop-blur-lg`}
            >
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FiMail className={isDark ? 'text-orange-400' : 'text-orange-500'} size={24} />
                    <div className={`text-sm font-medium`}>Welcome Message</div>
                  </div>
                  <div className="flex gap-3">
                    <IconButton icon={<FiUser />} isDark={isDark} />
                    <IconButton icon={<FiPieChart />} isDark={isDark} />
                    <IconButton icon={<FiSend />} isDark={isDark} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div className={`h-3 w-2/3 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
                  <div className={`h-3 w-1/2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
                  <div className={`h-32 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-200/50'}`} />
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`h-12 rounded-xl ${isDark ? 'bg-gray-800/80' : 'bg-gray-200/80'}`} />
                    <div className={`h-12 rounded-xl ${isDark ? 'bg-gray-800/80' : 'bg-gray-200/80'}`} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stat = ({ number, label, isDark }) => (
  <div className="text-center">
    <div className={`text-lg font-medium ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>{number}</div>
    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{label}</div>
  </div>
);

const IconButton = ({ icon, isDark }) => (
  <button className={`p-2 rounded-xl transition-colors ${
    isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
  }`}>
    {icon}
  </button>
);

export default Hero; 