import React from "react";
import IoT from "../Images/IoT.png";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { Search2Icon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Bg1 from "../Images/bg1.jpg";
import Card1 from "../Images/card1.jpg";
import Card2 from "../Images/ultimate Quantum Microchip Tech.jpg";
import Card3 from "../Images/2024 guide for using besi AI writing assistant.jpg";
import Card4 from "../Images/chip.jpg";
import { useNavigate } from "react-router-dom";
import { Device } from "../../../backend/Models/device";

const isAuthenticated = false;

function Home() {
  const navigate = useNavigate();

  const handleProtectedAction = () => {
    if (!isAuthenticated) {
      navigate("/signup");
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const handleBlog1Click= () => {
    navigate("/exa");
  };
  const handleBlog2Click= () => {
    navigate("/exb");
  };
  const handleBlog3Click= () => {
    navigate("/exc");
  };
  const handleBlog4Click= () => { 
    navigate("/exd");
    };
  const handleAboutUsClick = () => {
    navigate("/aboutus");
  };
  const handleSignInClick = () => {
    navigate("/login");
  };
  const handleDevicesClick = (device) => {
    switch (device) {
      case "Oximeter":
        navigate("/oximeter");
        break;
        case "Smart Pill":
          navigate("/smartpill");
          break;
        case "Glucose Monitor":
          navigate("/glucosemonitor");
          break;
        case "Fitness Tracker":
          navigate("/FitnessTracker");
          break;
          case "ECG Monitor":
          navigate("/ecg");
          break;
          case "Smart Inhaler":
            navigate("/smartinhaler");
            break;
      default:
        break;
    }
  };
  const handleSectorClick = (sector) => {
    switch (sector) {
      case "Healthcare":
        navigate("/healthcare");
        break;
      case "Agriculture":
        navigate("/agriculture");
        break;
      case "Smart Cities":
        navigate("/smartcities");
        break;
      case "Smart Homes":
        navigate("/smarthomes");
        break;
      default:
        break;
    }
  };
const handleBlogClick = () =>{
  navigate("/Blog")
}
  return (
    <div className="relative w-full h-screen font-sans">
      <img
        src={Bg1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      
      <header className="sticky top-0 z-50 bg-cyan-600 shadow-md">
        <nav className="bg-transparent flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={IoT} alt="IoT Logo" className="h-32" />
            <ul className="flex text-white">
              <li className="relative pr-14 font-semibold transition duration-300 ease-in-out after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">
                Home
              </li>
              <li className="relative pl-6 pr-14 font-semibold transition duration-300 ease-in-out after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Sectors
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleSectorClick("Healthcare")}>Healthcare</MenuItem>
                    <MenuItem onClick={() => handleSectorClick("Agriculture")}>Agriculture</MenuItem>
                    <MenuItem onClick={() => handleSectorClick("Smart Cities")}>Smart Cities</MenuItem>
                    <MenuItem onClick={() => handleSectorClick("Smart Homes")}>Smart Homes</MenuItem>
                    <MenuItem onClick={() => handleSectorClick("Others")}>Others</MenuItem>
                  </MenuList>
                </Menu>
              </li>
              <li className="relative pl-6 pr-14 font-semibold transition duration-300 ease-in-out after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Devices
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleDevicesClick("Oximeter")}>Oximeter</MenuItem>
                    <MenuItem onClick={() => handleDevicesClick("Smart Pill")}>Smart Pill</MenuItem>
                    <MenuItem onClick={() => handleDevicesClick("Glucose Monitor")}>Glucose Monitor</MenuItem>
                    <MenuItem onClick={() => handleDevicesClick("Fitness Tracker")}>Fitness Tracker</MenuItem>
                    <MenuItem onClick={() => handleDevicesClick("ECG Monitor")}>ECG Monitor</MenuItem>
                    <MenuItem onClick={() => handleDevicesClick("Smart Inhaler")}>Smart Inhaler</MenuItem>
                  </MenuList>
                </Menu>
              </li>
              <li className="relative pl-6 pr-14 font-semibold transition duration-300 ease-in-out after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100" onClick={handleBlogClick}>
                Blog
              </li>
              <li className="relative pl-6 pr-14 font-semibold transition duration-300 ease-in-out after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"  onClick={handleAboutUsClick}>
                About Us
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <InputGroup className="mr-6 pr-44">
              {/* <InputLeftElement pointerEvents="none" className="pt-2 pl-1 h-9">
                <Search2Icon
                  boxSize={18}
                  className="rounded-l-lg flex flexbox m-56 mt-52"
                />
              </InputLeftElement> */}
              {/* <Input
                className="flex flexbox m-auto rounded-lg p-1 text-black pr-6 pl-6"
                type="text"
                placeholder="Search..."
                bg="gray.800"
                color="gray.300"
                _placeholder={{ color: "gray.500" }}
                _focus={{ bg: "gray.700", borderColor: "blue.500" }}
                rounded="full"
              /> */}
            </InputGroup>
            <Button
              className="ml-6 bg-white p-2 pr-8 pl-8 rounded-xl font-bold shadow-md overflow-hidden transition duration-300 ease-in-out before:absolute before:inset-0 before:border-2 before:border-indigo-500 before:scale-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-100 hover:bg-transparent hover:text-indigo-500"
              colorScheme="teal"
              color={"black"}
              variant="solid"
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
            <Button
              className="ml-6 bg-white p-2 pr-8 pl-8 mr-6 rounded-xl font-bold shadow-md overflow-hidden transition duration-300 ease-in-out before:absolute before:inset-0 before:border-2 before:border-indigo-500 before:scale-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-100 hover:bg-transparent hover:text-indigo-500"
              colorScheme="teal"
              color={"black"}
              variant="solid"
              onClick={handleSignInClick}
            >
              Login
            </Button>
            <AvatarGroup spacing="1rem" className="pr-8">
              <Avatar bg="teal.500" className="h-8 rounded-full" />
            </AvatarGroup>
          </div>
        </nav>
      </header>


      <section>
        <p className="relative font-sans text-4xl font-extrabold m-36 text-center text-head">
          "Discover the magic behind everyday objects with{" "}
          <span className="text-teal-600">IoT sensors</span>. Learn how they
          transform our world, one smart device at a time."
        </p>
      </section>

      <div className="pt-56 font-sans">
        <section className="py-20 bg-gray-100 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-8">
              About IoT Model Explorer
            </h2>
            <p className="text-lg mb-8 text-black">
              The IoT Model Explorer is a comprehensive platform that provides
              in-depth information about various IoT devices used across
              different sectors such as healthcare, agriculture, smart cities,
              and smart homes. Our goal is to help you understand how IoT
              technology is transforming industries and enhancing everyday life.
            </p>
          </div>
        </section>
      </div>

      <div className="bg-teal-500 font-sans">
        <section className="text-center pt-10 pb-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Features</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                  <h3 className="text-2xl text-black font-bold mb-4">
                    In-Depth Information
                  </h3>
                  <p className="text-gray-700">
                    Detailed descriptions, uses, and benefits of various IoT
                    devices.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                  <h3 className="text-2xl text-black font-bold mb-4">Real-Time Updates</h3>
                  <p className="text-gray-700">
                    Stay informed with the latest trends and developments in IoT
                    technology.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                  <h3 className="text-2xl text-black font-bold mb-4">
                    User-Friendly Interface
                  </h3>
                  <p className="text-gray-700">
                    Easily navigate and explore IoT devices with our intuitive
                    interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="pb-20 font-sans">
        <section className="flex pt-20 pl-52">
          <div className="flex space-x-6">
            <div className="w-64 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
              <img
                src={Card1}
                alt="IoT Trends"
                className="pb-6 w-full h-48 object-cover rounded-lg"
              />
              <p className="font-bold text-black text-lg">Top 5 IoT trends of 2024</p>
              <p className="text-gray-700 mt-2">
                The Internet of Things (IoT) continues to revolutionize various
                industries by connecting devices and enabling smarter,
                data-driven decisions.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 mt-4 block" onClick={handleBlog1Click}
              >
                Learn More
              </a>
            </div>

            <div className="w-64 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
              <img
                src={Card2}
                alt="AI"
                className="pb-6 w-full h-48 object-cover rounded-lg"
              />
              <p className="font-bold text-black text-lg">
                AI for more sustainable Cities
              </p>
              <p className="text-gray-700 mt-2">
                As urban populations continue to grow, cities around the world
                face increasing pressure to become more sustainable.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 mt-4 block"  onClick={handleBlog3Click}
              >
                Learn More  
              </a>
            </div>

            <div className="w-64 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
              <img
                src={Card3}
                alt="AI"
                className="pb-6 w-full h-48 object-cover rounded-lg"
              />
              <p className="font-bold text-black text-lg">
              2024 guide for using best AI writing assistant
              </p>
              <p className="text-gray-700 mt-2">
              Transform Your Writing Workflow: A Comprehensive 2024 Guide to Leveraging the Best AI Writing Assistants for Unmatched Efficiency and Quality
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 mt-4 block"  onClick={handleBlog2Click}
              >
                Learn More
              </a>
            </div>

            <div className="w-64 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
              <img
                src={Card4}
                alt="AI"
                className="pb-6 w-full h-48 object-cover rounded-lg"
              />
              <p className="font-bold text-black text-lg">
                The revolution of Microchips
              </p>
              <p className="text-gray-700 mt-2">
              Exploring the Future: How Microchip Innovations Are Shaping a Smarter World in 2024
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 mt-4 block"  onClick={handleBlog4Click}
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="py-20 bg-gray-100 font-sans text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-black">How It Works</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <h3 className="text-2xl font-bold mb-4 text-black">1. Explore</h3>
                <p className="text-gray-700">
                  Browse through our extensive library of IoT devices.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <h3 className="text-2xl font-bold text-black mb-4">2. Learn</h3>
                <p className="text-gray-700">
                  Read detailed information and use cases for each device.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <h3 className="text-2xl font-bold text-black mb-4">3. Implement</h3>
                <p className="text-gray-700">
                  Utilize the knowledge gained to implement IoT solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-500 font-sans text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Join Us Today</h2>
          <p className="text-xl mb-8">
            Sign up now to start exploring the world of IoT and stay ahead with
            the latest trends and technologies.
          </p>
          <Button
            colorScheme="teal"
            size="lg"
            className=" w-32 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 text-black font-semibold"
            onClick={handleSignUpClick}
          >
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
