import React from 'react';
import { motion } from 'framer-motion';
// import smartIrrigationImage from './path/to/smart-irrigation.jpg';
// import droneImage from './path/to/drone.jpg';
// import soilSensorImage from './path/to/soil-sensor.jpg';
// import livestockTrackingImage from './path/to/livestock-tracking.jpg';

const AgriculturePage = () => {
  const devices = [
    {
      title: 'Smart Irrigation Systems',
      description: 'Automated irrigation systems that optimize water usage based on real-time data.',
      // image: smartIrrigationImage,
      details: ['Monitor soil moisture', 'Control irrigation schedules', 'Reduce water wastage']
    },
    {
      title: 'Agricultural Drones',
      description: 'Drones used for monitoring crops, spraying fertilizers, and collecting data.',
      // image: droneImage,
      details: ['Aerial crop monitoring', 'Precision spraying', 'Data collection and analysis']
    },
    {
      title: 'Soil Sensors',
      description: 'Sensors that monitor soil conditions and provide data for optimal crop growth.',
      // image: soilSensorImage,
      details: ['Measure soil moisture', 'Monitor nutrient levels', 'Track temperature']
    },
    {
      title: 'Livestock Tracking Systems',
      description: 'Systems to monitor and manage the health and location of livestock.',
      // image: livestockTrackingImage,
      details: ['Track livestock location', 'Monitor health metrics', 'Improve herd management']
    }
  ];

  const benefits = [
    {
      title: 'Optimized Resource Use',
      description: 'IoT devices help in efficient use of water, fertilizers, and pesticides.'
    },
    {
      title: 'Increased Crop Yields',
      description: 'Real-time monitoring and data-driven decisions lead to better crop management.'
    },
    {
      title: 'Improved Livestock Management',
      description: 'Tracking systems enhance the health and productivity of livestock.'
    },
    {
      title: 'Cost Savings',
      description: 'Automation and precision agriculture reduce operational costs.'
    }
  ];

  const challenges = [
    {
      title: 'High Initial Costs',
      description: 'The setup and installation of IoT systems can be expensive for farmers.'
    },
    {
      title: 'Data Privacy Concerns',
      description: 'Ensuring the security and privacy of agricultural data is crucial.'
    },
    {
      title: 'Connectivity Issues',
      description: 'Reliable internet connectivity is essential for IoT devices to function properly.'
    },
    {
      title: 'Technical Expertise',
      description: 'Farmers need training to effectively use and maintain IoT systems.'
    }
  ];

  const caseStudies = [
    {
      title: 'Smart Irrigation in Arid Regions',
      overview: 'Implementation of smart irrigation systems in water-scarce areas.',
      implementation: 'Installed soil moisture sensors and automated irrigation controllers.',
      outcome: 'Significant water savings and improved crop yields.'
    },
    {
      title: 'Drone Usage in Precision Farming',
      overview: 'Use of drones for monitoring crop health and spraying fertilizers.',
      implementation: 'Deployed drones equipped with cameras and spraying mechanisms.',
      outcome: 'Enhanced crop monitoring and efficient fertilizer use.'
    },
    {
      title: 'Livestock Health Monitoring',
      overview: 'Tracking health and location of livestock using IoT devices.',
      implementation: 'Fitted livestock with GPS and health monitoring devices.',
      outcome: 'Improved livestock health and reduced losses.'
    }
  ];

  const futureTrends = [
    {
      title: 'AI and Machine Learning Integration',
      description: 'Future IoT devices will use AI and ML for predictive analytics and decision-making.'
    },
    {
      title: 'Blockchain for Traceability',
      description: 'Blockchain technology will enhance the traceability of agricultural products.'
    },
    {
      title: 'Robotics in Agriculture',
      description: 'Increased use of robots for planting, harvesting, and other agricultural tasks.'
    },
    {
      title: 'Advanced Sensor Technology',
      description: 'Development of more advanced sensors for precise monitoring of agricultural conditions.'
    }
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-500 to-yellow-500 text-white py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">IoT in Agriculture</h1>
          <p className="text-lg">Revolutionizing agriculture with innovative IoT solutions</p>
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
            The Internet of Things (IoT) in agriculture involves the use of interconnected devices to collect and analyze data, improving the efficiency and productivity of farming practices. From precision farming to livestock management, IoT is transforming the agricultural landscape.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Key Objectives of IoT in Agriculture</h3>
          <ul className="text-lg list-disc list-inside px-6">
            <li><span className="font-semibold">Enhance Resource Efficiency:</span> Optimize the use of water, fertilizers, and pesticides.</li>
            <li><span className="font-semibold">Increase Crop Yields:</span> Improve crop management through real-time monitoring and data-driven decisions.</li>
            <li><span className="font-semibold">Improve Livestock Management:</span> Monitor and manage the health and productivity of livestock.</li>
            <li><span className="font-semibold">Reduce Operational Costs:</span> Lower costs through automation and precision farming techniques.</li>
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
          <h2 className="text-4xl font-bold mb-4">Devices in Agriculture IoT</h2>
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
          <h2 className="text-4xl font-bold">Benefits of IoT in Agriculture</h2>
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
          <h2 className="text-4xl font-bold">Challenges in Agriculture IoT</h2>
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
          <h2 className="text-4xl font-bold">Future Trends in Agriculture IoT</h2>
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

export default AgriculturePage;
