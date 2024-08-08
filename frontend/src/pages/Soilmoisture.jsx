import React from "react";
import { FaTint } from "react-icons/fa";
import { GiWaterDrop, GiSoilLayers, GiThermometerHot } from "react-icons/gi";

const SoilMoistureSensorInfo = () => {
  return (
    <div className="mx-auto p-6 bg-gray-900 text-white font-sans">
      <nav className="w-72 bg-gray-800 p-6 fixed h-full shadow-lg">
        <ul>
          <li onClick={() => setActivePage("soilMoistureSensor")} className="cursor-pointer mb-4">Soil Moisture Sensor</li>
          <li onClick={() => setActivePage("sprayingDrones")} className="cursor-pointer mb-4">Spraying Drones</li>
          <li onClick={() => setActivePage("variableRateTechnology")} className="cursor-pointer mb-4">Variable Rate Technology</li>
          <li onClick={() => setActivePage("cropHealthSensor")} className="cursor-pointer mb-4">Crop Health Sensor</li>
          <li onClick={() => setActivePage("yieldMonitors")} className="cursor-pointer mb-4">Yield Monitors</li>
        </ul>
      </nav>

      <h1 className="text-6xl pl-72 font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-pulse">
        Soil Moisture Sensor Information
      </h1>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaTint className="mr-3 text-blue-400 animate-pulse" />
            Device Overview
          </h2>
          <p className="leading-relaxed">
            A soil moisture sensor measures the water content in the soil. It is a critical tool for irrigation management, ensuring that crops receive the optimal amount of water. These sensors help farmers avoid overwatering or underwatering their crops, leading to better yield and resource efficiency.
          </p>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiWaterDrop className="mr-3 text-blue-400 animate-pulse" />
            Technical Specifications
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Measurement Range: 0% to 100% volumetric water content</li>
            <li>Sensors: Capacitance, Resistance, or Time Domain Reflectometry (TDR)</li>
            <li>Connectivity: Bluetooth, Zigbee, Wi-Fi</li>
            <li>Power Source: Battery-operated or solar-powered</li>
            <li>Compatibility: Works with various soil types</li>
            <li>Accuracy: ±2% to ±5%</li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiSoilLayers className="mr-3 text-green-400 animate-pulse" />
            Key Features and Functionalities
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Real-time moisture data</li>
            <li>Temperature sensing</li>
            <li>Wireless data transmission</li>
            <li>Weatherproof and durable design</li>
            <li>Integration with irrigation systems</li>
          </ul>
        </section>
      </div>

      <div className="pl-80">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-cyan-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiThermometerHot className="mr-3 text-red-500 animate-pulse" />
            Use Cases
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Precision agriculture</li>
            <li>Smart irrigation systems</li>
            <li>Greenhouse management</li>
            <li>Research and education</li>
            <li>Residential gardening</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SoilMoistureSensorInfo;