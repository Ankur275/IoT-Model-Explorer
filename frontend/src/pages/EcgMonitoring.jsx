import React from "react";
import { FaHeartbeat, FaRunning, FaQuestion } from "react-icons/fa";
import { GiHeartBeats, GiTennisRacket, GiAbstract046, GiImpactPoint } from "react-icons/gi";
import { MdLocalHospital, MdRateReview, MdOutlineHistory } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineSafetyCertificate } from "react-icons/ai";

const ECGMonitorInfo = () => {
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

      <h1 className="text-6xl  font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
        ECG Monitor Information
      </h1>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaHeartbeat className="mr-3 text-red-400 animate-pulse" />
            Device Overview
          </h2>
          <p className="leading-relaxed">
            An ECG (Electrocardiogram) monitor is a medical device that measures the electrical activity of the heart. It records the heart's rhythm and activity on a graph, helping to detect various heart conditions. These monitors can be used in clinical settings or as portable devices for personal health monitoring.
          </p>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiHeartBeats className="mr-3 text-red-600 animate-pulse" />
            Key Features and Benefits
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Accurate Measurements:</strong> Provides precise data on heart rhythms and detects irregularities.
            </li>
            <li>
              <strong>Real-time Monitoring:</strong> Offers continuous monitoring to track heart health over time.
            </li>
            <li>
              <strong>Portable:</strong> Modern ECG monitors are compact and easy to carry, enabling on-the-go monitoring.
            </li>
            <li>
              <strong>User-friendly:</strong> Designed for ease of use, with clear instructions and interfaces.
            </li>
            <li>
              <strong>Data Storage:</strong> Stores historical data for comparison and trend analysis.
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-cyan-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <MdLocalHospital className="mr-3 text-cyan-600 animate-pulse" />
            Clinical Applications
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Diagnosis:</strong> Helps in diagnosing heart conditions such as arrhythmias, myocardial infarction, and other cardiac abnormalities.
            </li>
            <li>
              <strong>Monitoring:</strong> Used for ongoing monitoring of patients with chronic heart conditions.
            </li>
            <li>
              <strong>Prevention:</strong> Assists in preventive healthcare by early detection of potential heart issues.
            </li>
            <li>
              <strong>Research:</strong> Valuable in clinical research for studying heart health and developing treatments.
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-orange-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GiImpactPoint className="mr-3 text-orange-500 animate-pulse" />
            Importance in Fitness and Athletics
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Performance Tracking:</strong> Monitors the heart's response to physical activity, helping athletes optimize their training.
            </li>
            <li>
              <strong>Safety:</strong> Detects abnormal heart activity during workouts, preventing potential cardiac events.
            </li>
            <li>
              <strong>Recovery:</strong> Tracks recovery rates post-exercise to ensure adequate rest and recovery.
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-cyan-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <AiOutlineSafetyCertificate className="mr-3 text-blue-600 animate-pulse" />
            Safety Considerations
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Regular Calibration: Ensure the device is regularly calibrated for accurate readings.
            </li>
            <li>
              Skin Irritation: Monitor for any skin irritation from electrode contact.
            </li>
            <li>
              Data Privacy: Ensure that data is secure and used in compliance with privacy standards.
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-yellow-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <LiaIndustrySolid className="mr-3 text-green-600 animate-pulse" />
            Major Manufacturers
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Philips Healthcare</li>
            <li>GE Healthcare</li>
            <li>Medtronic</li>
            <li>AliveCor</li>
            <li>iRhythm Technologies</li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-purple-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <BsGraphUpArrow className="mr-3 text-pink-600 animate-pulse" />
            Market Trends and Future Directions
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Growing Demand: Increasing awareness of heart health is driving demand for ECG monitors.
            </li>
            <li>
              Technological Advancements: Integration with smartphones and wearable devices for enhanced usability.
            </li>
            <li>
              AI Integration: Use of AI to improve accuracy and provide predictive insights.
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaQuestion className="mr-3 text-yellow-500 animate-pulse" />
            FAQs
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <h4 className="text-xl font-semibold">How accurate are ECG monitors?</h4>
              <p>ECG monitors are highly accurate when used correctly and regularly calibrated. They are designed to detect even minor irregularities in heart rhythms.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Can ECG monitors be used at home?</h4>
              <p>Yes, many portable ECG monitors are designed for home use and are user-friendly.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Do ECG monitors require a prescription?</h4>
              <p>Some ECG monitors require a prescription, especially those intended for clinical use. However, many portable models for personal use do not.</p>
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <MdOutlineHistory className="mr-3 text-blue-600 animate-pulse" />
            History and Evolution
          </h2>
          <p className="leading-relaxed">
            The development of ECG technology dates back to the early 20th century. Over the years, ECG monitors have evolved from bulky, stationary machines to compact, portable devices that can be easily used at home. Advances in technology have improved the accuracy, usability, and accessibility of ECG monitoring.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ECGMonitorInfo;
