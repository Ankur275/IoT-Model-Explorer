import React, { useState } from "react";
import { FaLightbulb, FaParking, FaBus } from "react-icons/fa";
import {
  GiLightBulb,
  GiRadarSweep,
  GiBusStop,
  GiStreetLight,
} from "react-icons/gi";
import { MdOutlineHistory, MdRateReview, MdLocalHospital } from "react-icons/md";
import { GrInstall, GrShieldSecurity } from "react-icons/gr";
import { LiaIndustrySolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineSafetyCertificate } from "react-icons/ai";

const AdaptiveLightingInfo = () => {
  return (
    <div className="mx-auto p-6 bg-gray-900 text-white font-sans">
      <nav className="w-72 bg-gray-800 p-6 fixed h-full shadow-lg">
        <ul>
          <li onClick={() => setActivePage("adaptiveLighting")} className="cursor-pointer mb-4">Adaptive Lighting Systems</li>
          <li onClick={() => setActivePage("parkingSensors")} className="cursor-pointer mb-4">Parking Sensors</li>
          <li onClick={() => setActivePage("busTrainTrackers")} className="cursor-pointer mb-4">Real-Time Bus and Train Trackers</li>
        </ul>
      </nav>

      <h1 className="text-6xl pl-72 font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
        Adaptive Lighting Systems
      </h1>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiLightBulb className="mr-3 text-yellow-400 animate-pulse" />
            System Overview
          </h2>
          <p className="leading-relaxed">
            Adaptive lighting systems are advanced lighting technologies that automatically adjust the intensity and color of lights based on environmental conditions and user preferences. These systems aim to enhance energy efficiency, comfort, and safety in various settings, including homes, offices, and outdoor environments.
          </p>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiStreetLight className="mr-3 text-blue-400 animate-pulse" />
            Technical Specifications
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Control System: Automated sensors and manual overrides for user control</li>
            <li>
              Light Sources: LED and smart bulbs capable of dynamic color and brightness adjustments
            </li>
            <li>
              Communication Protocols: Wi-Fi, Zigbee, and Bluetooth for integration with smart home systems
            </li>
            <li>
              Power Efficiency: Consumes up to 60% less energy compared to traditional lighting
            </li>
            <li>
              Compatibility: Works with major smart home platforms like Google Home, Alexa, and Apple HomeKit
            </li>
            <li>
              Sensor Types: Motion, ambient light, and occupancy sensors for adaptive lighting
            </li>
            <li>
              Operating Temperature Range: Effective between -10°C to 45°C
            </li>
            <li>
              Certifications: Often ENERGY STAR certified for efficiency and performance
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiRadarSweep className="mr-3 text-green-400 animate-pulse" />
            Key Features and Functionalities
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Dynamic Adjustment: Automatically changes light intensity and color temperature based on time of day and occupancy
            </li>
            <li>
              Energy Monitoring: Provides real-time energy consumption data for optimal usage
            </li>
            <li>
              Remote Control: Manage lighting via smartphone apps or voice commands
            </li>
            <li>
              Scene Customization: Users can set scenes and schedules to match their preferences and routines
            </li>
            <li>
              Integration: Seamlessly connects with other smart home devices for comprehensive automation
            </li>
            <li>
              Safety Features: Includes emergency lighting and security integration
            </li>
            <li>
              User-Friendly Interface: Intuitive app design for easy configuration and management
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-cyan-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <MdLocalHospital className="mr-3 text-red-500 animate-pulse" />
            Use Cases
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Residential: Enhances ambiance and comfort while reducing energy bills in homes.
            </li>
            <li>
              Commercial: Used in offices and retail spaces to improve productivity and customer experience.
            </li>
            <li>
              Street Lighting: Provides efficient and safe lighting for pedestrians and vehicles.
            </li>
            <li>
              Healthcare: Used in hospitals to create soothing environments and optimize patient recovery.
            </li>
            <li>
              Educational Institutions: Used in schools and universities to create conducive learning environments.
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-orange-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiImpactPoint className="mr-3 text-purple-600 animate-pulse" />
            Impact and Importance
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Energy Conservation: Reduces energy consumption and carbon footprint.
            </li>
            <li>
              Enhanced Comfort: Improves user comfort by providing optimal lighting conditions.
            </li>
            <li>
              Safety: Enhances safety by providing adequate lighting in critical areas.
            </li>
            <li>
              Productivity: Boosts productivity in work environments by providing suitable lighting.
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <MdRateReview className="mr-3 text-yellow-600 animate-pulse" />
            User Review and Ratings
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Average Rating: Typically rated around 4.6/5 based on user reviews.
            </li>

            <h4 className="text-xl font-semibold">User Feedback</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Positive: Users praise the convenience, energy savings, and improved ambiance.
              </li>
              <li>
                Negative: Some users report issues with connectivity and compatibility.
              </li>
            </ul>

            <li>
              Top-Rated Models: Examples include [Brand A Model X] known for its smart features, and [Brand B Model Y] praised for its ease of use and reliability.
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <MdOutlineHistory className="mr-3 text-indigo-600 animate-pulse" />
            Historical Context and Evolution
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Initial Development: Early systems were basic and manually operated.
            </li>
            <li>
              Technological Advancements: Integration of smart sensors and IoT technology.
            </li>
            <li>
              Current Trends: Increased focus on sustainability and user customization.
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-cyan-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <LiaIndustrySolid className="mr-3 text-red-600 animate-pulse" />
            Industry Insights and Market Trends
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Market Growth: The global adaptive lighting market is expected to grow significantly, driven by demand for energy-efficient solutions.
            </li>
            <li>
              Key Players: Major companies include [Company X] and [Company Y].
            </li>
            <li>
              Future Developments: Trends towards increased automation and integration with smart cities.
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-yellow-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GrInstall className="mr-3 text-teal-600 animate-pulse" />
            Installation and Maintenance
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Installation Process: Typically requires professional installation, especially for larger systems.
            </li>
            <li>
              Maintenance: Regular software updates and occasional hardware checks.
            </li>
            <li>
              Warranty: Most systems come with a 2-year warranty.
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-purple-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GrShieldSecurity className="mr-3 text-pink-600 animate-pulse" />
            Security and Safety Considerations
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Security Measures: Includes encryption and secure communication protocols to prevent unauthorized access.
            </li>
            <li>
              Safety Features: Emergency lighting and surge protection.
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-cyan-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <BsGraphUpArrow className="mr-3 text-orange-600 animate-pulse" />
            Environmental Impact and Sustainability
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Energy Efficiency: Significantly reduces energy consumption and greenhouse gas emissions.
            </li>
            <li>
              Sustainable Materials: Many systems use eco-friendly materials and recyclable components.
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <AiOutlineSafetyCertificate className="mr-3 text-blue-600 animate-pulse" />
            Compliance and Certifications
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Compliance: Systems must comply with local and international lighting standards.
            </li>
            <li>
              Certifications: Common certifications include ENERGY STAR, UL, and CE.
            </li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <AiFillEnvironment className="mr-3 text-yellow-600 animate-pulse" />
            Future Prospects and Innovations
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Emerging Technologies: Includes AI integration for predictive lighting adjustments.
            </li>
            <li>
              Potential Developments: Greater integration with smart city infrastructure.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdaptiveLightingInfo;
