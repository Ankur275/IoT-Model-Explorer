import React from 'react';
import { motion } from 'framer-motion';
// import smartLightingImage from './path/to/smart-lighting.jpg';
// import trafficManagementImage from './path/to/traffic-management.jpg';
// import wasteManagementImage from './path/to/waste-management.jpg';
// import airQualityMonitoringImage from './path/to/air-quality-monitoring.jpg';

const SmartCitiesPage = () => {
  const devices = [
    {
      title: 'Smart Lighting',
      description: 'Intelligent lighting systems that adjust brightness based on real-time data.',
      // image: smartLightingImage,
      details: ['Energy-efficient lighting', 'Automatic dimming', 'Remote control']
    },
    {
      title: 'Traffic Management Systems',
      description: 'Systems to monitor and manage city traffic for reduced congestion.',
      // image: trafficManagementImage,
      details: ['Real-time traffic monitoring', 'Adaptive signal control', 'Traffic data analytics']
    },
    {
      title: 'Smart Waste Management',
      description: 'Automated systems for efficient waste collection and management.',
      // image: wasteManagementImage,
      details: ['Smart bins', 'Optimized waste collection routes', 'Reduced operational costs']
    },
    {
      title: 'Air Quality Monitoring',
      description: 'Sensors to monitor air quality and provide real-time data.',
      // image: airQualityMonitoringImage,
      details: ['Real-time pollution tracking', 'Data-driven policy making', 'Public health improvement']
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Quality of Life',
      description: 'Smart city solutions improve living standards and public services.'
    },
    {
      title: 'Energy Efficiency',
      description: 'Reduced energy consumption through intelligent systems.'
    },
    {
      title: 'Reduced Traffic Congestion',
      description: 'Better traffic flow and reduced travel times.'
    },
    {
      title: 'Improved Waste Management',
      description: 'Efficient and sustainable waste collection and disposal.'
    }
  ];

  const challenges = [
    {
      title: 'High Implementation Costs',
      description: 'Significant investment required for infrastructure and technology.'
    },
    {
      title: 'Data Privacy Concerns',
      description: 'Ensuring the security and privacy of citizen data is critical.'
    },
    {
      title: 'Interoperability Issues',
      description: 'Integration of various systems and technologies can be challenging.'
    },
    {
      title: 'Technical Expertise',
      description: 'Skilled professionals needed to manage and maintain smart city systems.'
    }
  ];

  const caseStudies = [
    {
      title: 'Smart Lighting in Los Angeles',
      overview: 'Deployment of smart lighting systems across the city.',
      implementation: 'Installed energy-efficient LED lights with remote control capabilities.',
      outcome: 'Reduced energy consumption and operational costs.'
    },
    {
      title: 'Traffic Management in Singapore',
      overview: 'Advanced traffic management system to reduce congestion.',
      implementation: 'Implemented adaptive signal control and real-time traffic monitoring.',
      outcome: 'Improved traffic flow and reduced travel times.'
    },
    {
      title: 'Waste Management in Seoul',
      overview: 'Smart waste management system for efficient waste collection.',
      implementation: 'Deployed smart bins and optimized collection routes.',
      outcome: 'Reduced operational costs and improved waste management efficiency.'
    }
  ];

  const futureTrends = [
    {
      title: '5G Connectivity',
      description: 'Enhanced connectivity for real-time data transmission and smart city applications.'
    },
    {
      title: 'AI and Machine Learning',
      description: 'Advanced analytics for predictive maintenance and decision-making.'
    },
    {
      title: 'Blockchain for Security',
      description: 'Increased use of blockchain for secure data transactions.'
    },
    {
      title: 'IoT Integration',
      description: 'Seamless integration of IoT devices for comprehensive smart city solutions.'
    }
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">IoT in Smart Cities</h1>
          <p className="text-lg">Transforming urban living with intelligent IoT solutions</p>
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
            The Internet of Things (IoT) in smart cities involves the use of connected devices and systems to enhance urban living. From intelligent lighting to advanced traffic management, IoT is making cities more efficient, sustainable, and livable.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Key Objectives of IoT in Smart Cities</h3>
          <ul className="text-lg list-disc list-inside px-6">
            <li><span className="font-semibold">Enhance Quality of Life:</span> Improve public services and urban living standards.</li>
            <li><span className="font-semibold">Optimize Resource Use:</span> Reduce energy consumption and operational costs.</li>
            <li><span className="font-semibold">Improve Traffic Management:</span> Reduce congestion and improve traffic flow.</li>
            <li><span className="font-semibold">Ensure Sustainability:</span> Implement efficient waste management and environmental monitoring.</li>
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
          <h2 className="text-4xl font-bold mb-4">Devices in Smart Cities IoT</h2>
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
          <h2 className="text-4xl font-bold">Benefits of IoT in Smart Cities</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-lg">{benefit.description}</p>
            </motion.div>
          ))}
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
          <h2 className="text-4xl font-bold">Challenges in Smart Cities IoT</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="bg-red-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">{challenge.title}</h3>
              <p className="text-lg">{challenge.description}</p>
            </motion.div>
          ))}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="bg-green-100 p-6 rounded-lg shadow-lg"
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
          <h2 className="text-4xl font-bold">Future Trends in Smart Cities IoT</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureTrends.map((trend, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">{trend.title}</h3>
              <p className="text-lg">{trend.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SmartCitiesPage;
