import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { useState } from 'react';

const Testimonials = ({ isDark }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Our email response rates doubled since using this tool. The AI suggestions are spot-on and save us hours of writing time.",
      stats: {
        responses: "+127%",
        timeReduced: "4.2hrs"
      }
    },
    {
      name: "Michael Torres",
      role: "Founder",
      company: "GrowthLabs",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "The smart suggestions have transformed how we communicate with our customers. Our emails now feel more personal and engaging.",
      stats: {
        responses: "+94%",
        timeReduced: "3.8hrs"
      }
    },
    {
      name: "Emma Watson",
      role: "Sales Manager",
      company: "CloudScale",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Setup took minutes, and the results were immediate. Our team now writes consistent, high-quality emails in half the time.",
      stats: {
        responses: "+156%",
        timeReduced: "5.1hrs"
      }
    }
  ];

  return (
    <section className="py-24 px-4" id="testimonials">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className={`text-xs ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>
            Testimonials
          </span>
          <h2 className={`mt-3 text-3xl font-medium ${isDark ? 'text-white' : 'text-black'}`}>
            Loved by teams everywhere
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl p-6 ${
                isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'
              } transition-colors duration-300`}
            >
              <div className="flex items-center gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    size={12} 
                    className={`${
                      hoveredIndex === index 
                        ? isDark ? 'text-orange-400 fill-orange-400' : 'text-orange-500 fill-orange-500'
                        : isDark ? 'text-gray-700 fill-gray-700' : 'text-gray-300 fill-gray-300'
                    } transition-colors duration-300`} 
                  />
                ))}
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.content}"
              </p>

              <div className={`flex items-center gap-6 py-4 mb-6 border-y ${
                isDark ? 'border-white/5' : 'border-black/5'
              }`}>
                <div>
                  <div className={`text-[10px] mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Responses
                  </div>
                  <div className={`text-sm ${
                    hoveredIndex === index 
                      ? isDark ? 'text-orange-400' : 'text-orange-500'
                      : isDark ? 'text-white' : 'text-black'
                  } transition-colors duration-300`}>
                    {testimonial.stats.responses}
                  </div>
                </div>
                <div className={`w-px h-8 ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />
                <div>
                  <div className={`text-[10px] mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Time Saved
                  </div>
                  <div className={`text-sm ${
                    hoveredIndex === index 
                      ? isDark ? 'text-orange-400' : 'text-orange-500'
                      : isDark ? 'text-white' : 'text-black'
                  } transition-colors duration-300`}>
                    {testimonial.stats.timeReduced}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {testimonial.role}, {testimonial.company}
                  </div>
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

export default Testimonials; 