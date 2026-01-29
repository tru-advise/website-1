src/pages/AdvisoryServicesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cpu, Database, Shield, Zap, LineChart, Cloud } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const AdvisoryServicesPage = () => {
  const { toast } = useToast();
  const designOption = 'option1';

  const features = [
    {
      title: 'Banking IT Solutions',
      description: 'Comprehensive IT services for the banking sector to maintain financial integrity and security.',
      icon: <Database size={28} />,
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Fully equipped with AI solutions for optimized implementation and maximum efficiency.',
      icon: <Cpu size={28} />,
    },
    {
      title: 'Financial & ERP Solutions',
      description: 'Complete financial and ERP solutions for corporate organizations.',
      icon: <LineChart size={28} />,
    },
    {
      title: 'IT Security Review',
      description: 'Complete review of IT systems in use by banking and corporate sectors.',
      icon: <Shield size={28} />,
    },
    {
      title: 'Technology Consulting',
      description: 'Suggest latest technologies appropriate for operations to achieve maximum output.',
      icon: <Zap size={28} />,
    },
    {
      title: 'Cloud Solutions',
      description: 'Modern cloud-based solutions for scalability and business continuity.',
      icon: <Cloud size={28} />,
    },
  ];

  const capabilities = [
    'Banking sector IT services',
    'AI solution implementation',
    'Financial integrity systems',
    'ERP solution deployment',
    'IT system comprehensive review',
    'Technology optimization consulting',
    'Cloud infrastructure design',
    'Digital transformation strategy',
  ];

  return (
    <>
      <Helmet>
        <title>IT Services & AI Advisory - truadvise Consulting & Advising</title>
        <meta
          name="description"
          content="Advanced IT services and AI solutions for banking and corporate sectors, including ERP implementation, security review, and technology consulting."
        />
      </Helmet>

      <div className="bg-gradient-to-br from-gray-50 to-white">
        <Navigation designOption={designOption} />

        {/* Hero Section */}
        <HeroSection
          title="IT Services & AI Blend"
          subtitle="Advanced technology solutions for banking and corporate excellence"
          ctaText="Contact Us"
          ctaAction={() => {
            toast({
              title: 'Feature coming soon!',
              description: 'This feature is under development.',
            });
          }}
          backgroundImage="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5?w=1920&q=80"
          designOption={designOption}
          height="min-h-[60vh]"
        />

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Technology Excellence</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="leading-relaxed">
                  ✨ We provide all IT services related to Banking Sector and also Financial and ERP Solutions to the Corporate in order to maintain Financial Integrity.
                </p>
                <p className="leading-relaxed">
                  ✨ We are fully equipped with AI Solutions. We make best and optimized use of AI in our implementation plans.
                </p>
                <p className="leading-relaxed">
                  ✨ We provide services for complete review of IT systems in use by Banking Sector and the Corporate Sectors.
                </p>
                <p className="leading-relaxed">
                  ✨ We can suggest latest technologies appropriate for its operations to make best use of the resources to achieve maximum output and profitability.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge IT solutions for modern business challenges
              </p>
            </motion.div>

            <FeatureGrid features={features} designOption={designOption} />
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2?w=800&q=80"
                  alt="Technology and innovation"
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900">Comprehensive IT Solutions</h2>
                <p className="text-lg text-gray-700">
                  Our technology services leverage the latest innovations in AI, cloud computing, and enterprise systems to deliver maximum value and efficiency.
                </p>
                <ul className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 text-xl mr-3">✓</span>
                      <span className="text-gray-700 text-lg">{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Elevate Your Technology Infrastructure"
          subtitle="Partner with us to implement cutting-edge IT solutions that drive efficiency and innovation."
          ctaText="Schedule a Consultation"
          ctaAction={() => {
            toast({
              title: 'Feature coming soon!',
              description: 'This feature is under development.',
            });
          }}
          designOption={designOption}
        />

        <Footer designOption={designOption} />
      </div>
    </>
  );
};

export default AdvisoryServicesPage;
