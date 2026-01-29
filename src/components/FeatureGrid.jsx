import React from 'react';
import { motion } from 'framer-motion';

const FeatureGrid = ({ features, designOption = 'option1' }) => {
  const isOption1 = designOption === 'option1';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`p-6 rounded-lg ${
            isOption1
              ? 'bg-white shadow-md hover:shadow-xl border border-gray-100'
              : 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-teal-500/20 hover:border-teal-500/40'
          } transition-all duration-300`}
        >
          <div
            className={`inline-flex p-3 rounded-lg mb-4 ${
              isOption1 ? 'bg-orange-50' : 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20'
            }`}
          >
            <div className={isOption1 ? 'text-orange-600' : 'text-emerald-400'}>
              {feature.icon}
            </div>
          </div>
          <h3
            className={`text-xl font-bold mb-3 ${
              isOption1 ? 'text-gray-900' : 'text-teal-300'
            }`}
          >
            {feature.title}
          </h3>
          <p className={isOption1 ? 'text-gray-600' : 'text-gray-300'}>
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
