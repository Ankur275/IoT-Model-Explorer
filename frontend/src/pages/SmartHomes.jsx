import React from 'react';
import { motion } from 'framer-motion';
// import smartThermostatImage from './path/to/smart-thermostat.jpg';
// import smartLightingImage from './path/to/smart-lighting.jpg';
// import smartSecurityImage from './path/to/smart-security.jpg';
// import smartAppliancesImage from './path/to/smart-appliances.jpg';

const SmartHomesPage = () => {
  const devices = [
    {
      title: 'Smart Thermostats',
      description: 'Intelligent thermostats that learn your schedule and preferences.',
      // image: smartThermostatImage,
      details: ['Energy-efficient heating and cooling', 'Remote control via smartphone', 'Learning algorithms'],
    },
    {
      title: 'Smart Lighting',
      description: 'Customizable lighting systems for convenience and energy savings.',
      // image: smartLightingImage,
      details: ['Remote control', 'Scheduled lighting', 'Energy-efficient bulbs'],
    },
    {
      title: 'Smart Security Systems',
      description: 'Advanced security systems to protect your home.',
      // image: smartSecurityImage,
      details: ['Video surveillance', 'Smart locks', 'Motion detectors'],
    },
    {
      title: 'Smart Appliances',
    description: 'Connected appliances for a more efficient home.',
      // image: smartAppliancesImage,
      details: ['Smart refrigerators', 'Connected ovens', 'Automated laundry machines'],
    },
  ];

  const benefits = [
    {
      title: 'Convenience and Comfort',
      description: 'Smart home devices provide greater convenience and comfort.',
    },
    {
      title: 'Energy Efficiency',
      description: 'Reduced energy consumption through intelligent systems.',
    },
    {
      title: 'Enhanced Security',
      description: 'Improved home security with advanced monitoring systems.',
    },
    {
      title: 'Cost Savings',
      description: 'Lower utility bills and maintenance costs.',
    },
  ];

  const challenges = [
    {
      title: 'High Initial Costs',
      description: 'Significant upfront investment for smart home technology.',
    },
    {
      title: 'Data Privacy Concerns',
      description: 'Ensuring the security and privacy of personal data is critical.',
    },
    {
      title: 'Interoperability Issues',
      description: 'Integration of various smart home devices can be challenging.',
    },
    {
      title: 'Technical Expertise',
      description: 'Need for skilled professionals to install and maintain systems.',
    },
  ];

  const caseStudies = [
    {
      title: 'Smart Thermostats in New York',
      overview: 'Deployment of smart thermostats in residential buildings.',
      implementation: 'Installed intelligent thermostats with learning algorithms.',
      outcome: 'Reduced energy consumption and improved comfort.',
    },
    {
      title: 'Smart Lighting in Amsterdam',
      overview: 'Installation of smart lighting systems in homes.',
      implementation: 'Deployed remote-controlled and scheduled lighting.',
      outcome: 'Increased energy efficiency and convenience.',
    },
    {
      title: 'Smart Security in San Francisco',
      overview: 'Enhanced home security with smart systems.',
      implementation: 'Installed video surveillance and smart locks.',
      outcome: 'Improved home safety and security.',
    },
  ];

  const futureTrends = [
    {
      title: 'Voice Control Integration',
      description: 'Increased use of voice assistants for smart home control.',
    },
    {
      title: 'AI and Machine Learning',
      description: 'Advanced analytics for personalized home automation.',
    },
    {
      title: 'Enhanced Connectivity',
      description: 'Greater connectivity with 5G and advanced Wi-Fi technologies.',
    },
    {
      title: 'Sustainability Focus',
      description: 'More eco-friendly and energy-efficient smart home solutions.',
    },
  ];

  const renderList = (items) =>
    items.map((item, index) => (
      <motion.div
        key={index}
        className="bg-gray-50 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
        <p className="text-lg">{item.description}</p>
      </motion.div>
    ));

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">IoT in Smart Homes</h1>
          <p className="text-lg">Revolutionizing home living with intelligent IoT solutions</p>
        </motion.div>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Introduction</h2>
          <p className="text-lg px-6">
            The Internet of Things (IoT) in smart homes involves the use of connected devices to enhance the convenience, comfort, and efficiency of home living. From smart thermostats to advanced security systems, IoT is making homes smarter and more responsive to residents' needs.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Key Objectives of IoT in Smart Homes</h3>
          <ul className="text-lg list-disc list-inside px-6">
            <li><span className="font-semibold">Increase Convenience:</span> Make daily tasks easier and more efficient.</li>
            <li><span className="font-semibold">Enhance Security:</span> Protect homes and families with advanced security measures.</li>
            <li><span className="font-semibold">Improve Energy Efficiency:</span> Reduce energy usage and costs.</li>
            <li><span className="font-semibold">Enhance Comfort:</span> Create a more comfortable living environment.</li>
          </ul>
        </motion.div>
      </section>

      {/* Device Section */}
      <section className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Devices in Smart Homes IoT</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {devices.map((device, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={device.image} alt={device.title} className="w-full h-48 object-cover mb-6 rounded-lg" />
              <h3 className="text-2xl font-bold mb-4">{device.title}</h3>
              <p className="text-lg mb-4">{device.description}</p>
              <ul className="text-gray-700">
                {device.details.map((detail, idx) => (
                  <li key={idx} className="mb-2">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Benefits of IoT in Smart Homes</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderList(benefits)}
        </div>
      </section>

      {/* Challenges Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Challenges in Smart Homes IoT</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderList(challenges)}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Case Studies</h2>
        </motion.div>
        <div className="grid grid—grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
              <p className="text-lg mb-4"><span className="font-semibold">Overview:</span> {caseStudy.overview}</p>
              <p className="text-lg mb-4"><span className="font-semibold">Implementation:</span> {caseStudy.implementation}</p>
              <p className="text-lg"><span className="font-semibold">Outcome:</span> {caseStudy.outcome}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Future Trends Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Future Trends in Smart Homes IoT</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderList(futureTrends)}
        </div>
      </section>
    </div>
  );
};

export default SmartHomesPage;
