import React from "react";
import { FaHeartbeat, FaRunning, FaQuestion } from "react-icons/fa";
import { GiHeartBeats, GiTennisRacket, GiAbstract046, GiImpactPoint } from "react-icons/gi";
import { MdLocalHospital, MdRateReview, MdOutlineHistory } from "react-icons/md";
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

const FitnessTrackerInfo = () => {
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
        Fitness Tracker Information
      </h1>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-500">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaRunning className="mr-3 text-red-400 animate-pulse" />
            Device Overview
          </h2>
          <p className="leading-relaxed">
            A fitness tracker is a wearable device that monitors and records physical activities, health metrics, and fitness-related data. These devices often track steps, heart rate, sleep patterns, and calories burned. They are commonly used to motivate and guide users towards achieving their fitness goals by providing real-time data and insights.
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
            <li>Display Type: LCD, LED, or OLED</li>
            <li>
              Sensors: Accelerometer, Heart Rate Monitor, GPS, Gyroscope
            </li>
            <li>
              Connectivity: Bluetooth, NFC, Wi-Fi
            </li>
            <li>
              Battery Life: Varies from 1 day to several weeks depending on usage and model
            </li>
            <li>
              Water Resistance: Often rated IP67 or higher
            </li>
            <li>
              Compatibility: Syncs with smartphones and computers via dedicated apps
            </li>
            <li>
              Size and Weight: Lightweight and compact, typically weighing between 20 to 50 grams
            </li>
            <li>
              Certifications: Often CE and FCC certified
            </li>
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
            <li>
              Activity Tracking: Monitors steps, distance, calories burned, and active minutes
            </li>
            <li>
              Heart Rate Monitoring: Continuous or spot-check heart rate monitoring
            </li>
            <li>
              Sleep Tracking: Analyzes sleep patterns and quality
            </li>
            <li>
              GPS Tracking: Provides accurate tracking of outdoor activities
            </li>
            <li>
              Notifications: Displays smartphone notifications such as calls, texts, and emails
            </li>
            <li>
              Data Syncing: Syncs with apps for detailed data analysis and goal setting
            </li>
            <li>
              Customizable Goals: Allows users to set and track personalized fitness goals
            </li>
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
            <li>
              Personal Fitness: Helps users track daily activities and improve fitness levels.
            </li>
            <li>
              Health Monitoring: Monitors vital signs and provides health insights.
            </li>
            <li>
              Sports Training: Used by athletes to track performance and optimize training.
            </li>
            <li>
              Weight Management: Assists in tracking calories burned and managing diet plans.
            </li>
            <li>
              Sleep Improvement: Helps users analyze and improve sleep patterns.
            </li>
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
            <li>
              Health Awareness: Increases awareness of daily activity levels and health metrics.
            </li>
            <li>
              Motivation: Encourages users to stay active and achieve fitness goals.
            </li>
            <li>
              Preventive Healthcare: Helps in early detection of potential health issues.
            </li>
            <li>
              Personalized Insights: Provides tailored insights based on user data.
            </li>
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
            <li>
              Average Rating: Typically rated around 4.3/5 based on user reviews.
            </li>

            <h4 className="text-xl font-semibold">User Feedback</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Positive: Users appreciate the comprehensive tracking, ease of use, and motivational aspects.
              </li>
              <li>
                Negative: Some users report issues with accuracy, battery life, and app connectivity.
              </li>
            </ul>

            <li>
              Top-Rated Models: Examples include [Brand C Model Z] known for its extensive features and accuracy, and [Brand D Model W] praised for its stylish design and user-friendly interface.
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
              Wear Time: Avoid wearing the device too tightly to prevent skin irritation.
            </li>
            <li>
              Data Privacy: Ensure that your data is secure and the device complies with privacy standards.
            </li>
            <li>
              Regular Charging: Charge the device as recommended to maintain battery health.
            </li>
            <li>
              Accurate Data: Use the device as directed to ensure accurate data collection.
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
            <li>Fitbit</li>
            <li>Garmin</li>
            <li>Apple</li>
            <li>Samsung</li>
            <li>Huawei</li>
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
              Growing Popularity: Increasing adoption of wearable technology for fitness and health monitoring.
            </li>
            <li>
              Integration with Healthcare: Enhanced integration with healthcare systems for better health management.
            </li>
            <li>
              Advanced Features: Development of advanced features such as ECG monitoring, blood oxygen level measurement, and stress tracking.
            </li>
            <li>
              AI and Machine Learning: Utilization of AI and ML to provide personalized insights and recommendations.
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-4xl">
        <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-red-700">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <AiFillEnvironment className="mr-3 text-orange-600 animate-pulse" />
            Environmental Considerations
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Recycling: Ensure proper recycling of devices to minimize e-waste.
            </li>
            <li>
              Sustainable Materials: Use of sustainable and eco-friendly materials in manufacturing.
            </li>
            <li>
              Energy Efficiency: Design devices to be energy-efficient and promote long battery life.
            </li>
            <li>
              Packaging: Opt for minimalistic and eco-friendly packaging solutions.
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
              <h4 className="text-xl font-semibold">How accurate are fitness trackers?</h4>
              <p>Fitness trackers provide reasonably accurate data for steps, heart rate, and other metrics, but they may have some margin of error.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Can fitness trackers be worn in water?</h4>
              <p>Many fitness trackers are water-resistant and can be worn while swimming or showering, but it's important to check the specific model's rating.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Do fitness trackers work without a smartphone?</h4>
              <p>Fitness trackers can record data independently, but syncing with a smartphone enhances functionality and provides detailed analysis.</p>
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
            Fitness trackers have evolved significantly from simple pedometers to advanced wearable devices that provide comprehensive health and fitness insights. The first modern fitness trackers emerged in the early 2000s, and since then, they have continually incorporated new technologies and features to better serve users' needs.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FitnessTrackerInfo;
