import React from "react";
import { FaHeartbeat, FaQuestion } from "react-icons/fa";
import {
  GiHeartBeats,
  GiAbstract046,
  GiImpactPoint,
  GiArchiveResearch,
} from "react-icons/gi";
import {
  MdLocalHospital,
  MdRateReview,
  MdOutlineHistory,
} from "react-icons/md";
import { GrInstall, GrShieldSecurity } from "react-icons/gr";
import { LiaIndustrySolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineSafetyCertificate } from "react-icons/ai";

const OximeterInfo = () => {
  return (
    <div className="mx-auto p-6 bg-gray-900 text-white font-sans">
      <nav className="w-72 bg-gray-800 p-6 fixed h-full shadow-lg">
        <ul>
          
        </ul>
      </nav>

      <h1 className="text-6xl pl-72 font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
        Oximeter Information
      </h1>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-500">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <FaHeartbeat className="mr-3 text-red-400 animate-pulse" />
          Device Overview
        </h2>
        <p className="leading-relaxed">
          An oximeter, also known as a pulse oximeter, is a non-invasive device
          that measures the oxygen saturation level (SpO2) of the blood and the
          pulse rate. It is commonly used in medical settings, home health care,
          sports medicine, and aviation. By using light absorption through a
          patient’s fingertip, the oximeter provides an immediate reading of
          oxygen levels, which is crucial for diagnosing and monitoring
          respiratory conditions.
        </p>
      </section>
      </div>
      

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-500">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <GiHeartBeats className="mr-3 text-blue-400 animate-pulse" />
          Technical Specifications
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Display Type: LED or OLED</li>
          <li>
            SpO2 Measurement Range: 0-100%, with an accuracy of ±2% in the range
            of 70-100%
          </li>
          <li>
            Pulse Rate Measurement Range: 30-250 beats per minute (BPM), with an
            accuracy of ±1 BPM
          </li>
          <li>
            Power Source: Typically powered by AAA batteries or a built-in
            rechargeable battery, with some models offering USB charging
          </li>
          <li>
            Size and Weight: Portable and lightweight, usually between 50 to 100
            grams, making it easy to carry and use
          </li>
          <li>
            Data Storage and Connectivity: Many advanced models come with
            built-in memory for storing readings and Bluetooth connectivity for
            syncing with smartphones or computers
          </li>
          <li>
            Operating Temperature Range: Designed to operate efficiently between
            5°C to 40°C
          </li>
          <li>
            Certifications: Often CE and FDA approved, ensuring the device meets
            medical standards for accuracy and safety
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-500">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <GiAbstract046 className="mr-3 text-green-400 animate-pulse" />
          Key Features and Functionalities
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Real-Time Monitoring: Provides continuous real-time monitoring of
            SpO2 and pulse rate, with results displayed within seconds
          </li>
          <li>
            Alarm Function: Configurable alarms for low oxygen levels and
            irregular pulse rates to alert users promptly
          </li>
          <li>
            Automatic Power Off: Device automatically shuts off after a period
            of inactivity to conserve battery life
          </li>
          <li>
            Multi-Directional Display: Adjustable display orientation to
            facilitate easy reading from different angles
          </li>
          <li>
            Data Management: Advanced models offer Bluetooth connectivity for
            easy transfer of data to health monitoring apps, allowing for
            detailed analysis and long-term tracking
          </li>
          <li>
            Ease of Use: Simple, one-button operation for quick and easy use by
            anyone
          </li>
          <li>
            Durability: Constructed with durable materials to withstand regular
            use and minor impacts
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
            Medical Facilities: Used extensively in hospitals and clinics for
            monitoring patients during surgeries, in intensive care, and in
            emergency rooms.
          </li>
          <li>
            Home Care: Essential for patients with chronic respiratory or
            cardiovascular conditions to monitor their health at home.
          </li>
          <li>
            Sports and Fitness: Athletes use pulse oximeters to monitor their
            oxygen levels during high-intensity training and ensure optimal
            performance.
          </li>
          <li>
            Aviation: Pilots and passengers in unpressurized aircraft use
            oximeters to monitor oxygen levels at high altitudes.
          </li>
          <li>
            COVID-19 Management: Vital tool for monitoring oxygen levels in
            COVID-19 patients, helping to detect early signs of hypoxia.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-orange-700 ">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <GiImpactPoint className="mr-3 text-purple-600 animate-pulse" />
          Impact and Importance
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Healthcare Monitoring: Enables early detection of hypoxia, allowing
            for timely medical intervention and reducing the risk of
            complications.
          </li>
          <li>
            Chronic Disease Management: Helps in managing conditions like COPD,
            asthma, and heart failure by providing regular updates on oxygen
            saturation levels.
          </li>
          <li>
            Pandemic Response: Played a crucial role during the COVID-19
            pandemic in monitoring patients' oxygen levels and managing at-home
            care.
          </li>
          <li>
            Fitness Optimization: Assists athletes in optimizing their training
            by providing real-time feedback on their oxygen levels.
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
            Average Rating: Typically rated around 4.5/5 based on user reviews.
          </li>

          <h4 className="text-xl font-semibold">User Feedback</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Positive: Users appreciate the accuracy, ease of use, portability,
              and reliability of the device.
            </li>
            <li>
              Negative: Some users report issues with battery life,
              connectivity, and durability.
            </li>
          </ul>

          <li>
            Top-Rated Models: Examples include [Brand A Model X] known for its
            accuracy and durability, and [Brand B Model Y] praised for its
            user-friendly interface and advanced features.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-blue-700">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <MdOutlineHistory className="mr-3 text-green-600 animate-pulse" />
          History of Oximeters
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Invention: The first oximeter was developed in the 1940s by Japanese
            bioengineer Takuo Aoyagi. It was a bulky device primarily used in
            medical research.
          </li>
          <li>
            Evolution: Over the years, oximeters became more compact, portable,
            and user-friendly, with significant advancements in sensor
            technology and data processing.
          </li>
          <li>
            Modern Era: Today, oximeters are widely used in medical facilities,
            homes, and even in fitness monitoring, offering a range of features
            like Bluetooth connectivity and data storage.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-purple-700">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <LiaIndustrySolid className="mr-3 text-pink-600 animate-pulse" />
          Industrial Adaptation
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Healthcare: Widely adopted in hospitals and clinics for monitoring
            patients.
          </li>
          <li>
            Home Healthcare: Increasingly used in home healthcare settings for
            managing chronic conditions.
          </li>
          <li>
            Sports Medicine: Used by athletes and trainers to monitor oxygen
            levels during training.
          </li>
          <li>
            Aviation: Used by pilots and passengers in unpressurized aircraft.
          </li>
          <li>
            Pandemic Response: Critical tool during the COVID-19 pandemic.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-yellow-700">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <GrInstall className="mr-3 text-yellow-600 animate-pulse" />
          Installation and Maintenance
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Installation: Simple installation process involving attaching the
            device to the fingertip or earlobe.
          </li>
          <li>
            Maintenance: Regular calibration and cleaning are essential for
            accurate readings.
          </li>
          <li>
            Battery Replacement: Timely replacement of batteries or recharging
            is crucial.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-indigo-700">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <GrShieldSecurity className="mr-3 text-red-600 animate-pulse" />
          Security and Privacy
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Data Encryption: Ensuring data is encrypted during transmission.
          </li>
          <li>
            User Authentication: Implementing robust user authentication
            methods.
          </li>
          <li>
            Compliance: Adhering to data protection regulations like GDPR and
            HIPAA.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-700">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <GiArchiveResearch className="mr-3 text-blue-600 animate-pulse" />
          Research and Development
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            New Technologies: Exploring advanced sensor technologies for
            improved accuracy.
          </li>
          <li>
            Integration: Developing integration capabilities with other health
            monitoring devices.
          </li>
          <li>
            AI and ML: Utilizing artificial intelligence and machine learning
            for better data analysis.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-yellow-700">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <AiOutlineSafetyCertificate className="mr-3 text-green-600 animate-pulse" />
          Safety and Regulations
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Certifications: Ensuring the device meets medical standards (CE,
            FDA).
          </li>
          <li>Compliance: Adhering to international safety regulations.</li>
          <li>
            User Training: Providing adequate training for users to ensure
            proper use.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-cyan-700">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <AiFillEnvironment className="mr-3 text-green-600 animate-pulse" />
          Environmental Impact
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Eco-Friendly Materials: Encouraging the use of recyclable materials
            in manufacturing.
          </li>
          <li>
            Energy Efficiency: Promoting energy-efficient designs to reduce
            power consumption.
          </li>
          <li>
            Disposal: Implementing proper disposal methods for batteries and
            electronic components.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-orange-700">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <BsGraphUpArrow className="mr-3 text-yellow-600 animate-pulse" />
          Future Trends
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Wearable Technology: Development of oximeter functionalities in
            smartwatches and fitness bands.
          </li>
          <li>
            Telehealth: Integration with telehealth platforms for remote patient
            monitoring.
          </li>
          <li>
            Enhanced Data Analytics: Leveraging big data and AI for improved
            health insights.
          </li>
        </ul>
      </section>
      </div>

      <div className="pl-80">
      <section className="mb-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-pink-700">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <FaQuestion className="mr-3 text-red-600 animate-pulse" />
          Frequently Asked Questions (FAQs)
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            How does an oximeter work?
            <p>
              An oximeter works by passing light through a part of the body,
              usually the fingertip or earlobe, and measuring the amount of
              light absorbed by oxygenated and deoxygenated blood.
            </p>
          </li>
          <li>
            Is it safe to use an oximeter at home?
            <p>
              Yes, it is safe to use an oximeter at home. However, it is
              important to follow the manufacturer's instructions and consult a
              healthcare provider if you have any concerns.
            </p>
          </li>
          <li>
            How accurate are oximeter readings?
            <p>
              Oximeter readings are generally accurate within ±2% for SpO2
              levels between 70-100%. Accuracy may vary with factors like
              movement, poor circulation, and nail polish.
            </p>
          </li>
        </ul>
      </section>
      </div>
    </div>
  );
};

export default OximeterInfo;
