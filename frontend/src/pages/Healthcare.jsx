import React from 'react';
import { motion } from 'framer-motion';
// import wearableDevicesImage from './path/to/wearable-devices.jpg';
// import rpmDevicesImage from './path/to/rpm-devices.jpg';
// import smartInhalersImage from './path/to/smart-inhalers.jpg';
// import ingestibleSensorsImage from './path/to/ingestible-sensors.jpg';

const HealthcarePage = () => {
  const devices = [
    {
      title: 'Wearable Devices',
      description: 'Devices such as fitness trackers and smartwatches that monitor health metrics.',
      // image: wearableDevicesImage,
      details: ['Monitor heart rate', 'Track physical activity', 'Monitor sleep patterns']
    },
    {
      title: 'Remote Patient Monitoring Devices',
      description: 'Devices that collect patient data and send it to healthcare providers.',
      // image: rpmDevicesImage,
      details: ['Monitor chronic conditions', 'Enable telehealth services', 'Provide real-time alerts']
    },
    {
      title: 'Smart Inhalers',
      description: 'Inhalers equipped with sensors to monitor usage and manage respiratory conditions.',
      // image: smartInhalersImage,
      details: ['Track inhaler usage', 'Monitor breathing patterns', 'Send reminders for medication']
    },
    {
      title: 'Ingestible Sensors',
      description: 'Sensors ingested by patients to monitor internal health metrics.',
      // image: ingestibleSensorsImage,
      details: ['Monitor medication adherence', 'Track internal body conditions', 'Transmit data to healthcare providers']
    }
  ];

  const benefits = [
    {
      title: 'Improved Patient Monitoring',
      description: 'Continuous tracking of vital signs and health metrics allows for early detection of issues.'
    },
    {
      title: 'Enhanced Treatment Outcomes',
      description: 'Accurate and real-time data helps healthcare providers make better-informed decisions.'
    },
    {
      title: 'Operational Efficiency',
      description: 'Automation and real-time data improve hospital efficiency and reduce administrative burdens.'
    },
    {
      title: 'Patient Engagement',
      description: 'Patients stay informed and involved in their health management through connected devices.'
    }
  ];

  const challenges = [
    {
      title: 'Data Privacy Concerns',
      description: 'Protecting patient data from breaches and ensuring confidentiality is a major challenge.'
    },
    {
      title: 'Integration Issues',
      description: 'Ensuring compatibility between different IoT devices and existing healthcare systems can be complex.'
    },
    {
      title: 'High Implementation Costs',
      description: 'The initial investment for IoT infrastructure can be significant for healthcare providers.'
    },
    {
      title: 'Reliability and Accuracy',
      description: 'Ensuring the reliability and accuracy of data collected by IoT devices is crucial.'
    }
  ];

  const caseStudies = [
    {
      title: 'Remote Patient Monitoring in Chronic Disease Management',
      overview: 'Implementation of remote monitoring devices for patients with chronic diseases.',
      implementation: 'Patients were provided with RPM devices to track their vitals and health metrics.',
      outcome: 'Improved disease management and reduced hospital readmissions.'
    },
    {
      title: 'Smart Inhalers for Asthma Management',
      overview: 'Introduction of smart inhalers for asthma patients to monitor and manage their condition.',
      implementation: 'Smart inhalers were distributed to patients, and usage data was collected and analyzed.',
      outcome: 'Better asthma control and reduced emergency visits.'
    },
    {
      title: 'Wearable Devices for Elderly Care',
      overview: 'Use of wearable devices to monitor the health and well-being of elderly patients.',
      implementation: 'Elderly patients were equipped with wearable devices that tracked their health metrics.',
      outcome: 'Enhanced monitoring and timely interventions, leading to improved quality of life.'
    }
  ];

  const futureTrends = [
    {
      title: 'AI and Machine Learning Integration',
      description: 'Future IoT devices will leverage AI and ML for predictive analytics and personalized care.'
    },
    {
      title: 'Enhanced Data Security Measures',
      description: 'Advancements in cybersecurity will ensure better protection of patient data.'
    },
    {
      title: 'Increased Adoption of Telehealth',
      description: 'IoT devices will play a critical role in the expansion and efficiency of telehealth services.'
    },
    {
      title: 'Advanced Wearables and Implantables',
      description: 'Development of more sophisticated wearables and implantable devices for continuous monitoring.'
    }
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">IoT in Healthcare</h1>
          <p className="text-lg">Transforming healthcare with innovative IoT solutions</p>
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
            The Internet of Things (IoT) in healthcare encompasses a network of interconnected devices that communicate and exchange data to enhance patient care. This network includes a diverse range of devices, from basic wearable health trackers to sophisticated medical equipment.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Key Objectives of IoT in Healthcare</h3>
          <ul className="text-lg list-disc list-inside px-6">
            <li><span className="font-semibold">Enhance Patient Monitoring:</span> Continuous tracking of vital signs and health metrics.</li>
            <li><span className="font-semibold">Improve Treatment Outcomes:</span> Accurate data leads to better treatment plans and interventions.</li>
            <li><span className="font-semibold">Streamline Hospital Operations:</span> Automation and real-time data improve hospital efficiency.</li>
            <li><span className="font-semibold">Increase Patient Engagement:</span> Patients stay informed and involved in their health management.</li>
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
          <h2 className="text-4xl font-bold mb-4">Devices in Healthcare IoT</h2>
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
          <h2 className="text-4xl font-bold">Benefits of IoT in Healthcare</h2>
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
          <h2 className="text-4xl font-bold">Challenges in Healthcare IoT</h2>
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
          <h2 className="text-4xl font-bold">Future Trends in Healthcare IoT</h2>
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

export default HealthcarePage;
