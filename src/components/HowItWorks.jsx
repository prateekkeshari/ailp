import { motion } from 'framer-motion';
import { FiEdit3, FiZap, FiSend, FiBarChart2 } from 'react-icons/fi';
import { useState } from 'react';

const HowItWorks = ({ isDark }) => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      icon: FiEdit3,
      title: "Write your email",
      description: "Start with your ideas - our AI helps refine your message as you type"
    },
    {
      icon: FiZap,
      title: "Get smart suggestions",
      description: "Our AI analyzes your content and suggests improvements in real-time"
    },
    {
      icon: FiSend,
      title: "Send with confidence",
      description: "Preview how your email will look and send it at the perfect time"
    },
    {
      icon: FiBarChart2,
      title: "Track results",
      description: "See who's reading, clicking, and engaging with your emails"
    }
  ];

  return (
    <section className="py-24 px-4" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className={`text-xs ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>
            How it works
          </span>
          <h2 className={`mt-3 text-3xl font-medium ${isDark ? 'text-white' : 'text-black'}`}>
            Write better emails in four steps
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`relative px-5 py-6 rounded-2xl ${
                isDark 
                  ? 'bg-black/30 hover:bg-black/50' 
                  : 'bg-white/50 hover:bg-white'
              } transition-all duration-300`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-4 ${
                hoveredStep === index
                  ? isDark ? 'bg-orange-500/10' : 'bg-orange-500/10'
                  : isDark ? 'bg-white/5' : 'bg-black/5'
              } transition-colors duration-300`}>
                <step.icon 
                  size={16} 
                  className={hoveredStep === index ? 'text-orange-500' : isDark ? 'text-gray-400' : 'text-gray-600'} 
                />
              </div>

              <div className={`absolute top-6 right-5 text-[10px] ${
                isDark ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {step.title}
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 