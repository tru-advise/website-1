import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = ({ title, subtitle, ctaText, ctaAction, designOption = 'option1' }) => {
  const isOption1 = designOption === 'option1';

  return (
    <section
      className={`py-20 ${
        isOption1
          ? 'bg-gradient-to-r from-blue-600 to-blue-800'
          : 'bg-gradient-to-br from-teal-900 to-emerald-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{title}</h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">{subtitle}</p>
          <Button
            onClick={ctaAction}
            size="lg"
            className={`${
              isOption1
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white'
            } px-8 py-6 text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105`}
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
