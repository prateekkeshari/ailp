import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const plans = [
  {
    name: 'Solo',
    price: '29',
    description: 'Perfect for individuals',
    features: [
      'Write better emails instantly',
      'Smart suggestions',
      'Basic templates',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '79',
    description: 'For growing teams',
    features: [
      'Everything in Solo, plus:',
      'Team templates',
      'Advanced tracking',
      'Priority support',
      'Custom branding'
    ],
    popular: true
  },
  {
    name: 'Team',
    price: '199',
    description: 'For larger teams',
    features: [
      'Everything in Pro, plus:',
      'Unlimited users',
      'Advanced analytics',
      '24/7 support',
      'Custom training'
    ]
  }
];

const Pricing = ({ isDark }) => {
  return (
    <section className="py-40" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-2xl font-medium mb-4">Simple pricing</h2>
          <p className={`text-sm max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Start writing better emails today. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${
                isDark 
                  ? 'bg-black/20 hover:bg-black/30 border-gray-800' 
                  : 'bg-white/20 hover:bg-white/30 border-gray-200'
              } ${plan.popular ? 'border-orange-500 border-2' : 'border'} backdrop-blur-sm rounded-3xl p-8 transition-all duration-300`}
            >
              {plan.popular && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs ${
                  isDark ? 'bg-orange-500 text-white' : 'bg-orange-500 text-white'
                }`}>
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-base font-medium mb-2 ${plan.popular ? (isDark ? 'text-orange-400' : 'text-orange-500') : ''}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-3xl font-medium ${isDark ? 'text-white' : 'text-black'}`}>${plan.price}</span>
                  <span className={`ml-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <div className={`mr-3 mt-1 p-0.5 rounded-full ${
                      plan.popular ? (isDark ? 'bg-orange-500/10' : 'bg-orange-500/10') : ''
                    }`}>
                      <FiCheck className={`${
                        plan.popular ? (isDark ? 'text-orange-400' : 'text-orange-500') : isDark ? 'text-gray-400' : 'text-gray-600'
                      }`} size={12} />
                    </div>
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-tight`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`group w-full py-2.5 text-sm rounded-full transition-all duration-300 ${
                  plan.popular
                    ? isDark 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                    : `border ${
                      isDark 
                        ? 'border-gray-800 hover:bg-gray-800/50 text-gray-300 hover:text-white' 
                        : 'border-gray-200 hover:bg-gray-100/50 text-gray-600 hover:text-black'
                    }`
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <FiArrowRight className={`${plan.popular ? 'group-hover:translate-x-1' : ''} transition-transform`} size={14} />
                </span>
              </button>

              {/* Subtle Glow Effect */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 rounded-full ${
                isDark ? 'bg-orange-500' : 'bg-orange-500'
              } opacity-[0.02] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.04]`} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-16 text-center max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          <p className="text-xs">
            All plans include: Free updates, Basic analytics, and Email support.
            <br />Need something specific? <a href="#" className={`${isDark ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'} transition-colors`}>Let's talk</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 