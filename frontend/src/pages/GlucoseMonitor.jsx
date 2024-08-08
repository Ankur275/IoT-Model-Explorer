import React from "react";
import { FaHeartbeat, FaQuestion } from "react-icons/fa";
import { GiHeartBeats, GiArchiveResearch } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineSafetyCertificate } from "react-icons/ai";

const renderContent = () => {
  switch (activePage) {
    case "oximeter":
      return <OximeterInfo />;
    case "fitnessTracker":
      return <FitnessTrackerInfo />;
    case "ecgMonitor":
      return <ECGMonitorInfo />;
    case "smartPill":
      return <SmartPillInfo />;
    case "glucoseMonitor":
      return <GlucoseMonitorInfo />;
    case "smartInhaler":
      return <SmartInhalerInfo />;
    default:
      return <OximeterInfo />;
  }
};

const GlucoseMonitorInfo = () => {
  return (
    <div className="mx-auto p-6 bg-gray-900 text-white font-sans">
      <h1 className="text-6xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
        Glucose Monitor Information
      </h1>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaHeartbeat className="mr-3 text-red-400 animate-pulse" />
            Device Overview
          </h2>
          <p className="leading-relaxed">
            A glucose monitor is a medical device used to measure the concentration of glucose in the blood. It is a key element in managing diabetes, allowing patients to monitor their blood sugar levels and adjust their diet, exercise, and medication accordingly.
          </p>
        </section>

        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiHeartBeats className="mr-3 text-blue-400 animate-pulse" />
            Technical Specifications
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Sensors: Glucose oxidase enzyme sensor</li>
            <li>Power Source: Battery operated</li>
            <li>Data Transmission: Wireless or wired data transfer to mobile apps</li>
            <li>Display: LCD or digital display showing glucose levels</li>
            <li>Memory: Stores up to 500 readings</li>
            <li>Certifications: FDA approved for medical use</li>
          </ul>
        </section>

        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiArchiveResearch className="mr-3 text-orange-400 animate-pulse" />
            Research and Development
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Current Focus: Improving accuracy and ease of use</li>
            <li>Innovations: Continuous glucose monitoring systems with real-time updates</li>
            <li>Clinical Trials: Ongoing trials to test new models and features</li>
          </ul>
        </section>

        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-yellow-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <LiaIndustrySolid className="mr-3 text-blue-400 animate-pulse" />
            Market Presence
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Leading Brands: Abbott, Dexcom, Medtronic</li>
            <li>Global Market: Valued at over $12 billion</li>
            <li>Adoption Rate: Increasing with the rise in diabetes prevalence</li>
          </ul>
        </section>

        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-purple-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <BsGraphUpArrow className="mr-3 text-pink-400 animate-pulse" />
            Growth Projections
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Market Growth: Expected to grow at a CAGR of 7% over the next decade</li>
            <li>Technological Advances: Incorporation of AI and machine learning for predictive analytics</li>
            <li>Adoption Trends: Rising due to increasing awareness and technological advancements</li>
          </ul>
        </section>

        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <AiFillEnvironment className="mr-3 text-green-400 animate-pulse" />
            Environmental Impact
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Recyclable Components: Efforts to use recyclable materials for device components</li>
            <li>Waste Management: Programs to manage and recycle medical waste from used test strips</li>
            <li>Sustainable Practices: Emphasis on sustainable manufacturing processes</li>
          </ul>
        </section>

        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <AiOutlineSafetyCertificate className="mr-3 text-blue-400 animate-pulse" />
            Safety Considerations
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Regulatory Compliance: Approved by FDA and other regulatory bodies</li>
            <li>Accuracy: High accuracy with regular calibration</li>
            <li>User Safety: Designed to be safe for all age groups</li>
          </ul>
        </section>

        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaQuestion className="mr-3 text-yellow-400 animate-pulse" />
            Frequently Asked Questions
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>How often should I check my blood glucose levels? It depends on your doctor's advice, but generally 1-4 times a day.</li>
            <li>Can it be used with insulin pumps? Yes, many modern glucose monitors are compatible with insulin pumps.</li>
            <li>Is it painful to use? Most modern glucose monitors use a small, painless prick to obtain a blood sample.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GlucoseMonitorInfo;
