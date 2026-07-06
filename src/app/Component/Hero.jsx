"use client";
import { useRef } from "react";
import abdullah from "../../../public/abdullah.png";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiVercel,
  SiFramer,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  const skillRef = useRef(null);

  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      color: "from-yellow-400/20 to-yellow-500/10",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400" />,
      color: "from-cyan-400/20 to-cyan-500/10",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      color: "from-gray-300/20 to-gray-400/10",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-emerald-400" />,
      color: "from-emerald-400/20 to-emerald-500/10",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300" />,
      color: "from-gray-400/20 to-gray-500/10",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      color: "from-green-400/20 to-green-500/10",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
      color: "from-sky-400/20 to-sky-500/10",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400" />,
      color: "from-blue-400/20 to-blue-500/10",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-400" />,
      color: "from-orange-400/20 to-orange-500/10",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-400" />,
      color: "from-blue-400/20 to-blue-500/10",
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-indigo-400" />,
      color: "from-indigo-400/20 to-indigo-500/10",
    },
    {
      name: "Git",
      icon: <SiGit className="text-orange-500" />,
      color: "from-orange-500/20 to-orange-600/10",
    },
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion className="text-pink-400" />,
      color: "from-pink-400/20 to-pink-500/10",
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-white" />,
      color: "from-gray-300/20 to-gray-400/10",
    },
  ];

  const techBadges = skills.slice(0, 8);

  useGSAP(() => {
    if (skillRef.current) {
      gsap.to(skillRef.current, {
        y: () => -skillRef.current.scrollHeight / 2,
        duration: 14,
        repeat: -1,
        ease: "none",
        delay: 0.3,
      });
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-[#050810] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[150px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-24 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── LEFT SECTION ── */}
        <section className="flex-1 flex flex-col items-start max-w-2xl">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              Available for Work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-4">
            <p className="text-sm tracking-[0.25em] uppercase text-indigo-400 font-medium mb-2">
              Full-Stack Developer
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-white">
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                  Abdullah
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 rounded-full" />
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg leading-relaxed mb-6 max-w-lg"
          >
            A passionate developer specializing in{" "}
            <span className="text-white font-semibold">MERN & Next.js</span>. I
            build modern, scalable apps with clean UI and solid backend
            architecture — turning ideas into polished digital experiences.
          </motion.p>

          {/* Animated Skill Ticker */}
          <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3">
            <span className="text-gray-500 text-sm font-medium whitespace-nowrap">
              Expert in
            </span>
            <div className="inline-flex overflow-hidden h-8 items-center rounded-lg border border-white/10 bg-white/5 px-3">
              <div ref={skillRef} className="flex flex-col gap-1">
                {[...skills, ...skills].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 h-8 text-sm font-semibold text-white whitespace-nowrap"
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Badges Grid */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mb-8"
          >
            {techBadges.map((skill, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 hover:border-white/25 hover:bg-white/10 transition-all duration-200 cursor-default"
                whileHover={{ scale: 1.05, y: -1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.04 }}
              >
                <span className="text-sm">{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
            <motion.div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <HiSparkles className="text-indigo-400" />
              +6 more
            </motion.div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6 text-gray-500 text-sm"
          >
            <span className="text-base">📍</span>
            <span>Faisalabad, Pakistan</span>
          </motion.div>

          {/* CTA Buttons + Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="mailto:abdullahdev@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaCode className="text-white/80" />
              Hire Me
            </motion.a>

            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>

            <div className="flex items-center gap-3 ml-2">
              <motion.a
                href="https://github.com/CODEMASTER-ABDULLAH-92"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.93 }}
              >
                <FaGithub className="text-lg" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-abdullah-ab33683b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-blue-500/30 bg-blue-600/10 flex items-center justify-center text-blue-400 hover:text-blue-300 hover:bg-blue-600/20 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.93 }}
              >
                <FaLinkedin className="text-lg" />
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* ── RIGHT SECTION – Profile Card ── */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center"
          variants={itemVariants}
        >
          {/* Outer glow ring */}
          <div className="relative">
            {/* Rotating gradient ring */}
            {/* <motion.div
              className="absolute -inset-3 rounded-3xl opacity-40"
              style={{
                background:
                  "conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #6366f1)",
                filter: "blur(8px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            /> */}

            {/* Card */}
            <div className="relative w-[280px] sm:w-[340px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-2xl shadow-black/50">
              {/* Image */}
              <div className="w-full h-[360px] overflow-hidden">
                <Image
                  src={abdullah}
                  alt="Abdullah Profile Picture"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Footer */}
              <div className="px-5 py-4 bg-gradient-to-br from-[#0d1120]/90 to-[#070b16]/90 backdrop-blur-sm">
                <p className="text-white font-bold text-lg leading-tight">
                  Muhammad Abdullah
                </p>
                <p className="text-indigo-400 text-xs font-medium tracking-wide mt-0.5">
                  Full-Stack Developer · MERN & Next.js
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <SiNextdotjs className="text-white text-xs" />
                  <FaReact className="text-cyan-400 text-xs" />
                  <FaNodeJs className="text-emerald-400 text-xs" />
                  <SiMongodb className="text-green-400 text-xs" />
                  <SiTailwindcss className="text-sky-400 text-xs" />
                </div>
              </div>
            </div>

            {/* Floating badge – top right */}
            <motion.div
              className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/30"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-white"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Open to Work
            </motion.div>

            {/* Floating badge – bottom left */}
            <motion.div
              className="absolute -bottom-3 -left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d1120] border border-white/15 text-white text-xs font-semibold shadow-lg"
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <SiVercel className="text-white" />
              Deploying Awesomeness
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="flex gap-6 mt-10">
            {[
              { label: "Projects", value: "15+" },
              { label: "Tech Stack", value: "14+" },
              { label: "Coffee ☕", value: "∞" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <span className="text-2xl font-black text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 mt-0.5">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;