"use client";
import { useRef } from "react";
import abdullah from "../../../public/abd2.jpeg";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaCube,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  const skillRef = useRef(null);

  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-800 dark:text-gray-300" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "OOP", icon: <FaCube className="text-purple-600" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
  ];

  useGSAP(() => {
    if (skillRef.current) {
      gsap.to(skillRef.current, {
        y: () => -skillRef.current.scrollHeight + 30,
        duration: 10,
        repeat: -1,
        ease: "none",
        yoyo: true,
        delay: 0.2,
        stagger: 0.2,
      });
    }
  });

  return (
    <div className="flex relative flex-col">
      <div className="py-20 relative flex flex-col-reverse justify-center sm:justify-between sm:flex-row px-[4vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-gray-200">
        {/* Left Section */}
        <section className="sm:w-2/3 w-full relative flex flex-col justify-start items-start">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl group font-extrabold mb-2 leading-tight text-black dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I`m Abdullah
            <div className="h-1 rounded mt-1 bg-current transition-all duration-500 origin-right scale-x-0 group-hover:scale-x-100"></div>
          </motion.h1>

          {/* About */}
          <div className="mb-3 text-lg leading-relaxed w-full">
            A passionate{" "}
            <strong className="text-green-600 dark:text-green-400">
              Full-Stack Developer
            </strong>{" "}
            specializing in <strong>MERN & Next.js</strong>. I love building
            modern, scalable, and user-friendly applications with clean UI and
            solid backend architectures.
            <br /> <br />
            My expertise includes:
            <strong className="text-green-600 dark:text-green-400 inline-flex overflow-hidden h-[30px] ml-1">
              <div ref={skillRef} className="flex flex-col">
                {skills.map((skill, index) => (
                  <span key={index}>
                    <div className="flex text-2xl items-center gap-1">
                      {skill.icon}
                      {skill.name}
                    </div>
                  </span>
                ))}
              </div>
            </strong>
          </div>

          {/* Location & Availability */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">📍</span>
              </div>
              <p className="text-lg">Faisalabad, Pakistan</p>
            </div>
            <div className="flex items-center">
              <motion.div
                className="w-2 h-2 bg-green-600 dark:bg-green-400 ml-2 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.9 }}
              />
              <p className="ml-4 text-lg">
                Open to freelance & collaborations 🚀
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-5">
            <motion.a
              href="https://github.com/CODEMASTER-ABDULLAH-92"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center"
            >
              <SiGit className="text-white text-xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-abdullah-4881b2384/"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
            >
              <FaLinkedin className="text-white text-xl" />
            </motion.a>
          </div>
        </section>

        {/* Right Section - Image */}
        <div className="flex flex-col justify-center items-center mb-8 sm:mb-0">
          <motion.div
            className="w-[280px] h-[300px] border-b-4 border-l-4 p-2 border-gray-600 dark:border-gray-400 rounded-lg shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
<div className="w-full h-full bg-[#0D0D0D] dark:bg-[#121212] rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-gray-700/30">
  <Image
    src={abdullah}
    alt="Abdullah Profile Picture"
    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
  />
</div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
