import React from "react";
import { FaHeartbeat, FaQuestion } from "react-icons/fa";
import { GiHeartBeats, GiAbstract046, GiImpactPoint, GiArchiveResearch } from "react-icons/gi";
import { MdLocalHospital, MdRateReview, MdOutlineHistory } from "react-icons/md";
import { GrInstall, GrShieldSecurity } from "react-icons/gr";
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
const SmartInhalerInfo = () => {
    return (
      <div className="mx-auto p-6 bg-gray-900 text-white font-sans">
        {/* <nav className="w-72 bg-gray-800 p-6 fixed h-full shadow-lg">
          <ul>
            <li onClick={() => setActivePage("oximeter")} className="cursor-pointer mb-4">Oximeter</li>
            <li onClick={() => setActivePage("fitnessTracker")} className="cursor-pointer mb-4">Fitness Tracker</li>
            <li onClick={() => setActivePage("ecgMonitor")} className="cursor-pointer mb-4">ECG Monitor</li>
            <li onClick={() => setActivePage("smartPill")} className="cursor-pointer mb-4">Smart Pill</li>
            <li onClick={() => setActivePage("glucoseMonitor")} className="cursor-pointer mb-4">Glucose Monitor</li>
            <li onClick={() => setActivePage("smartInhaler")} className="cursor-pointer mb-4">Smart Inhaler</li>
          </ul>
        </nav> */}
  
        <h1 className="text-6xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
          Smart Inhaler Information
        </h1>
  
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-400">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <FaHeartbeat className="mr-3 text-red-600 animate-pulse" />
              Device Overview
            </h2>
            <p className="leading-relaxed">
              A smart inhaler is a device used to deliver medication to people with respiratory conditions such as asthma or COPD. These devices are equipped with sensors and connectivity features to monitor usage and provide reminders and feedback to the user.
            </p>
          </section>
        </div>
  
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-400">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <GiHeartBeats className="mr-3 text-blue-600 animate-pulse" />
              Technical Specifications
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Sensors: Measures inhaler usage and technique</li>
              <li>Power Source: Battery operated with long battery life</li>
              <li>Data Transmission: Bluetooth connectivity to mobile apps</li>
              <li>Alerts: Provides reminders for medication use</li>
              <li>Data Storage: Stores usage data for several months</li>
              <li>Certifications: FDA approved for medical use</li>
            </ul>
          </section>
        </div>
  
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-400">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <GiArchiveResearch className="mr-3 text-orange-600 animate-pulse" />
              Research and Development
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Current Focus: Enhancing connectivity and user feedback</li>
              <li>Innovations: Integration with AI for personalized medication plans</li>
              <li>Clinical Trials: Conducting trials to test new features and effectiveness</li>
            </ul>
          </section>
        </div>
  
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-yellow-400">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <LiaIndustrySolid className="mr-3 text-blue-600 animate-pulse" />
              Market Presence
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Leading Brands: Propeller Health, Teva Pharmaceuticals</li>
              <li>Global Market: Expected to reach $2 billion by 2025</li>
              <li>Adoption Rate: Growing due to the increasing prevalence of respiratory diseases</li>
            </ul>
          </section>
        </div>
  
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-purple-400">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <BsGraphUpArrow className="mr-3 text-pink-600 animate-pulse" />
              Growth Projections
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Market Growth: Projected to grow at a CAGR of 10% over the next decade</li>
              <li>Technological Advances: Use of advanced sensors and machine learning for improved outcomes</li>
              <li>Adoption Trends: Increased acceptance due to proven benefits in managing respiratory conditions</li>
            </ul>
          </section>
        </div>
  
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-400">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <AiFillEnvironment className="mr-3 text-green-600 animate-pulse" />
              Environmental Impact
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Recyclable Components: Efforts to use recyclable materials in inhalers</li>
              <li>Waste Management: Programs to collect and recycle used inhalers</li>
              <li>Sustainable Practices: Focus on reducing environmental footprint in production</li>
            </ul>
          </section>
        </div>
  
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-400">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <AiOutlineSafetyCertificate className="mr-3 text-blue-600 animate-pulse" />
              Safety Considerations
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Regulatory Compliance: Approved by FDA and other regulatory bodies</li>
              <li>Accuracy: Ensures accurate dosage and usage monitoring</li>
              <li>User Safety: Designed to be safe and easy to use for all age groups</li>
            </ul>
          </section>
        </div>
  
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-400">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <FaQuestion className="mr-3 text-yellow-600 animate-pulse" />
              Frequently Asked Questions
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>How does a smart inhaler work? It tracks your inhaler usage and provides feedback through a connected app.</li>
              <li>Can it help improve my asthma management? Yes, it helps ensure proper usage and provides reminders and feedback.</li>
              <li>Is it compatible with all types of inhalers? Compatibility varies, so check with the manufacturer for specific models.</li>
            </ul>
          </section>
        </div>
      </div>
    );
  };

  export default SmartInhalerInfo;