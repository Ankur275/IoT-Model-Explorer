import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const teamMembers = [
  { name: 'Maharshi Dalal', role: 'Lead Frontend Developer', avatar: '/avatars/alice.jpg' },
  { name: 'Nandani Rathod', role: 'Frontend Developer', avatar: '/avatars/bob.jpg' },
  { name: 'Jay Patel', role: 'Frontend Developer', avatar: '/avatars/charlie.jpg' },
  { name: 'Ankur', role: 'Team Lead and Lead Backend Developer', avatar: '/avatars/bob.jpg' },
  { name: 'Vishvas Barad', role: 'Backend Developer', avatar: '/avatars/charlie.jpg' },
];

const AboutUs = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Meet the team behind IoT Model Explorer</p>
        </motion.div>
      </header>

      {/* Mission Section */}
      <section className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg px-6">
            Our mission is to revolutionize the IoT industry by providing innovative solutions that enhance connectivity, efficiency, and user experience. We are dedicated to delivering high-quality products that meet the evolving needs of our customers.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar alt={member.name} src={member.avatar} sx={{ width: 100, height: 100, margin: '0 auto 16px' }} />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg text-gray-700">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">What We Offer</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-blue-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">IoT Solutions</h3>
            <p className="text-lg">Innovative IoT solutions tailored to your needs.</p>
          </motion.div>
          <motion.div
            className="bg-green-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Consulting Services</h3>
            <p className="text-lg">Expert consulting to help you navigate the IoT landscape.</p>
          </motion.div>
          <motion.div
            className="bg-yellow-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Support & Maintenance</h3>
            <p className="text-lg">Comprehensive support and maintenance services.</p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Our Values</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-pink-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-lg">Continuously pushing the boundaries of technology.</p>
          </motion.div>
          <motion.div
            className="bg-purple-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Integrity</h3>
            <p className="text-lg">Upholding the highest standards of honesty and transparency.</p>
          </motion.div>
          <motion.div
            className="bg-teal-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Customer Focus</h3>
            <p className="text-lg">Putting our customers at the center of everything we do.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg px-6">
            We would love to hear from you! If you have any questions, suggestions, or would like to learn more about our services, please reach out to us.
          </p>
        </motion.div>
        <div className="text-center">
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;