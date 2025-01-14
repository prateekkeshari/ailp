import { motion } from 'framer-motion';
import { FiZap, FiUsers, FiClock, FiTrendingUp, FiLayers, FiCode } from 'react-icons/fi';
import { useState } from 'react';

const Features = ({ isDark }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: FiZap,
      title: "Smart Suggestions",
      description: "Get real-time writing suggestions powered by advanced AI to improve your message clarity and impact"
    },
    {
      icon: FiUsers,
      title: "Personal Touch",
      description: "Automatically personalize each email while maintaining your authentic voice and style"
    },
    {
      icon: FiClock,
      title: "Quick Templates",
      description: "Start with customizable templates that adapt to your needs and save hours of writing time"
    },
    {
      icon: FiTrendingUp,
      title: "Response Tracking",
      description: "Track open rates, click-through rates, and engagement to optimize your email performance"
    },
    {
      icon: FiLayers,
      title: "Clear Insights",
      description: "Simple, actionable stats that help you understand what works and improve your results"
    },
    {
      icon: FiCode,
      title: "Easy Integration",
      description: "Connect with your favorite tools in minutes - no complex setup or technical skills needed"
    }
  ];

  return (
    <section className="py-24 px-4" id="features">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className={`text-xs ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>
            Features
          </span>
          <h2 className={`mt-3 text-3xl font-medium ${isDark ? 'text-white' : 'text-black'}`}>
            Everything you need
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`group relative ${
                isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'
              } rounded-2xl p-4 transition-colors duration-300`}
            >
              <div className="flex gap-4 items-start">
                <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${
                  hoveredFeature === index
                    ? isDark ? 'bg-orange-500/10' : 'bg-orange-500/10'
                    : isDark ? 'bg-white/5' : 'bg-black/5'
                } transition-colors duration-300`}>
                  <feature.icon 
                    size={18} 
                    className={hoveredFeature === index ? 'text-orange-500' : isDark ? 'text-gray-400' : 'text-gray-600'} 
                  />
                </div>

                <div>
                  <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className={`absolute inset-0 border border-transparent group-hover:border-orange-500/10 rounded-2xl transition-colors duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 