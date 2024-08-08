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

const SmartPillInfo = () => {
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

      <h1 className="text-6xl pl-72 font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
        Smart Pill Information
      </h1>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaHeartbeat className="mr-3 text-red-400 animate-pulse" />
            Device Overview
          </h2>
          <p className="leading-relaxed">
            A smart pill is an ingestible sensor that monitors various parameters of the digestive system and transmits the data to an external device. It is used in medical diagnostics to track and monitor gastrointestinal activity, medication adherence, and internal health metrics.
          </p>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiHeartBeats className="mr-3 text-blue-400 animate-pulse" />
            Technical Specifications
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Sensors: Includes pH, pressure, temperature, and sometimes biometric sensors</li>
            <li>Power Source: Micro-batteries or biocompatible power sources</li>
            <li>Data Transmission: Wireless transmission via Bluetooth or RF technology</li>
            <li>Size: Small and biocompatible, usually around the size of a vitamin pill</li>
            <li>Operating Time: Typically designed to function for several hours to days</li>
            <li>Certifications: FDA approved for medical use</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiAbstract046 className="mr-3 text-green-400 animate-pulse" />
            Key Features and Functionalities
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Real-Time Monitoring: Provides real-time data on gastrointestinal health and medication adherence</li>
            <li>Data Management: Secure data transfer to health monitoring apps for detailed analysis</li>
            <li>Non-Invasive: Non-invasive way to monitor internal health metrics</li>
            <li>Durability: Designed to withstand the digestive process</li>
            <li>Alerts: Provides alerts for abnormalities detected in the digestive tract</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-cyan-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <MdLocalHospital className="mr-3 text-red-500 animate-pulse" />
            Use Cases
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Medical Diagnostics: Used for diagnosing gastrointestinal conditions</li>
            <li>Medication Adherence: Ensures patients are taking their medication as prescribed</li>
            <li>Research: Provides valuable data for medical research</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-orange-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiImpactPoint className="mr-3 text-purple-600 animate-pulse" />
            Impact and Importance
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Improved Diagnostics: Enhances the accuracy of diagnosing gastrointestinal conditions</li>
            <li>Better Medication Adherence: Helps in ensuring patients adhere to their medication schedules</li>
            <li>Research Advancements: Contributes to advancements in medical research</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <MdRateReview className="mr-3 text-yellow-600 animate-pulse" />
            User Review and Ratings
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Average Rating: Typically rated around 4.3/5 based on user reviews</li>
            <h4 className="text-xl font-semibold">User Feedback</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Positive: Users appreciate the innovative approach to health monitoring</li>
              <li>Negative: Some users report discomfort during ingestion</li>
            </ul>
            <li>Top-Rated Models: Examples include [Brand C Model X] known for its accuracy and [Brand D Model Y] praised for its comprehensive data analysis features</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <MdOutlineHistory className="mr-3 text-green-600 animate-pulse" />
            History of Smart Pills
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Invention: First introduced in the early 2000s</li>
            <li>Evolution: Initially used for basic diagnostics, now integrated with advanced sensors for comprehensive monitoring</li>
            <li>Future: Predicted to become a standard tool in medical diagnostics and patient monitoring</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiArchiveResearch className="mr-3 text-orange-600 animate-pulse" />
            Research and Development
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Ongoing Research: Focused on enhancing sensor accuracy and data transmission efficiency</li>
            <li>Funding: Supported by government grants and private sector investments</li>
            <li>Future Developments: Potential integration with other wearable health devices</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-yellow-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <LiaIndustrySolid className="mr-3 text-blue-600 animate-pulse" />
            Market Presence
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Leading Manufacturers: Companies like Proteus Digital Health, Medtronic, and CapsoVision</li>
            <li>Market Size: Estimated to be worth $1.5 billion by 2025</li>
            <li>Global Reach: Widely used in the US, Europe, and expanding in Asia-Pacific regions</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-purple-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <BsGraphUpArrow className="mr-3 text-pink-600 animate-pulse" />
            Growth Projections
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Annual Growth: Predicted to grow at a CAGR of 12% over the next decade</li>
            <li>Future Trends: Increasing integration with AI and machine learning for predictive analytics</li>
            <li>Adoption Rate: Rising due to increased awareness and advancements in technology</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <AiFillEnvironment className="mr-3 text-green-600 animate-pulse" />
            Environmental Impact
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Biodegradable: Designed to be environmentally friendly with biodegradable materials</li>
            <li>Recycling Programs: Some manufacturers offer recycling programs for the electronic components</li>
            <li>Sustainable Practices: Emphasis on sustainable manufacturing practices</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <AiOutlineSafetyCertificate className="mr-3 text-blue-600 animate-pulse" />
            Safety Considerations
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Regulatory Approvals: FDA approved and CE marked for safety and efficacy</li>
            <li>Biocompatibility: Made from biocompatible materials to ensure patient safety</li>
            <li>Potential Side Effects: Minimal, with rare cases of mild discomfort or allergic reactions</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaQuestion className="mr-3 text-yellow-600 animate-pulse" />
            Frequently Asked Questions
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Is the smart pill safe to ingest? Yes, it is designed with biocompatible materials and approved by regulatory bodies.</li>
            <li>How long does the smart pill take to provide results? It varies but generally within a few hours to a couple of days.</li>
            <li>Can it be used for children? Usage for children should be under strict medical supervision.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SmartPillInfo;
