import React, { useState } from "react";
import { FaLock, FaLightbulb, FaRegQuestionCircle } from "react-icons/fa";
import {
  GiSmartRefrigerator,
  GiPadlockOpen,
  GiElectric,
  GiArchiveResearch,
} from "react-icons/gi";
import { MdOutlineHistory, MdRateReview } from "react-icons/md";
import { GrInstall, GrShieldSecurity } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSafetyCertificate, AiFillEnvironment } from "react-icons/ai";

const SmartDeviceInfo = () => {
  const [activePage, setActivePage] = useState("smartLock");

  const renderContent = () => {
    switch (activePage) {
      case "smartLock":
        return <SmartLockInfo />;
      case "automatedLighting":
        return <AutomatedLightingInfo />;
      case "smartRefrigerator":
        return <SmartRefrigeratorInfo />;
      default:
        return <SmartLockInfo />;
    }
  };

  return (
    <div className="mx-auto p-6 bg-gray-900 text-white font-sans">
      <nav className="w-72 bg-gray-800 p-6 fixed h-full shadow-lg">
        <ul>
          <li onClick={() => setActivePage("smartLock")} className="cursor-pointer mb-4">Smart Lock</li>
          <li onClick={() => setActivePage("automatedLighting")} className="cursor-pointer mb-4">Automated Lighting</li>
          <li onClick={() => setActivePage("smartRefrigerator")} className="cursor-pointer mb-4">Smart Refrigerator</li>
        </ul>
      </nav>
      {renderContent()}
    </div>
  );
};

const AutomatedLightingInfo = () => {
    return (
      <div className="pl-80">
        <h1 className="text-6xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 animate-pulse">
          Automated Lighting Information
        </h1>
        {/* Add content for Automated Lighting */}
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaLightbulb className="mr-3 text-yellow-400 animate-pulse" />
            Device Overview
          </h2>
          <p className="leading-relaxed">
            Automated lighting systems use smart technology to control lighting in homes and businesses. These systems allow for remote control, scheduling, and energy-saving features, enhancing convenience and reducing electricity consumption.
          </p>
        </section>
  
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiElectric className="mr-3 text-blue-400 animate-pulse" />
            Technical Specifications
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Connectivity: Wi-Fi, Zigbee, Z-Wave</li>
            <li>Power Source: Direct electrical connection</li>
            <li>Compatibility: Compatible with various light fixtures and smart home systems</li>
            <li>Security: Data encryption for secure communication</li>
            <li>Integration: Works with Alexa, Google Assistant, and Apple HomeKit</li>
          </ul>
        </section>
  
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiElectric className="mr-3 text-green-400 animate-pulse" />
            Key Features and Functionalities
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Remote Control: Manage lighting from anywhere using a smartphone app</li>
            <li>Scheduling: Set schedules for lights to turn on and off</li>
            <li>Energy Saving: Automatically turn off lights when not in use</li>
            <li>Voice Control: Control lighting with voice commands</li>
            <li>Scene Setting: Create and control lighting scenes for different occasions</li>
          </ul>
        </section>
  
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-cyan-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaRegQuestionCircle className="mr-3 text-red-500 animate-pulse" />
            Use Cases
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Home Automation: Enhance comfort and convenience in homes</li>
            <li>Office Lighting: Improve energy efficiency and productivity in offices</li>
            <li>Outdoor Lighting: Manage and control outdoor lighting for security and ambiance</li>
            <li>Energy Management: Reduce electricity consumption and costs</li>
          </ul>
        </section>
  
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-orange-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiArchiveResearch className="mr-3 text-purple-600 animate-pulse" />
            Impact and Importance
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Energy Efficiency: Significantly reduces energy consumption</li>
            <li>Convenience: Provides easy control over lighting systems</li>
            <li>Security: Enhances home and business security</li>
            <li>Environmental Impact: Contributes to environmental sustainability</li>
          </ul>
        </section>
  
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-teal-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaRegLightbulb className="mr-3 text-yellow-400 animate-pulse" />
            Market Trends
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Growing Demand: Increasing demand for energy-efficient and smart home solutions</li>
            <li>Technological Advancements: Continuous advancements in smart lighting technology</li>
            <li>Adoption Rates: High adoption rates in both residential and commercial sectors</li>
            <li>Market Growth: Significant growth projected in the smart lighting market</li>
          </ul>
        </section>
  
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-purple-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaBolt className="mr-3 text-blue-400 animate-pulse" />
            Safety and Security Measures
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Data Encryption: Ensures secure communication between devices</li>
            <li>Secure Installation: Professional installation to avoid security vulnerabilities</li>
            <li>Firmware Updates: Regular updates to enhance security and functionality</li>
          </ul>
        </section>
  
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-yellow-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <BsGraphUpArrow className="mr-3 text-green-400 animate-pulse" />
            Market Research and Analytics
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Market Insights: Detailed insights into market trends and consumer preferences</li>
            <li>Growth Projections: Positive growth projections for the smart lighting market</li>
            <li>Competitive Analysis: Analysis of key players and competitive landscape</li>
          </ul>
        </section>
  
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GrShieldSecurity className="mr-3 text-teal-400 animate-pulse" />
            Certifications and Standards
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Energy Star: Certification for energy-efficient products</li>
            <li>UL Certification: Ensures safety and reliability</li>
            <li>Industry Standards: Compliance with industry standards for smart lighting</li>
          </ul>
        </section>
  
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GrInstall className="mr-3 text-blue-400 animate-pulse" />
            Installation and Setup
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Easy Installation: Designed for easy DIY installation</li>
            <li>Professional Installation: Option for professional installation services</li>
            <li>Setup Guide: Comprehensive setup guide provided with the product</li>
          </ul>
        </section>
      </div>
    );
  };
  export default AutomatedLightingInfo;