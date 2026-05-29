
// import React from "react";

// const Projects = () => {
  
//   const projects = [
//     {
//       title: "Hire Mate",
//       description:
//         "A full-stack job portal where recruiters can post jobs and candidates can apply. Features include role-based dashboards, filters, and scalable backend. Built with modern technologies and responsive UI.",
//       demoUrl: "https://hiremateapp92.netlify.app/",
//       codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/HireMate",
//       technologies: [
//         "Node.js",
//         "MongoDB",
//         "Tailwind CSS",
//         "Express",
//         "JWT Auth",
//         "Vite",
//         "GSAP",
//         "React.js",
//         "Figma",
//       ],
//       accentColor: "#10B981",
//       icon: "💼",
//       type: "Full-Stack",
//     },
//     {
//       title: "TrooSolar",
//       description:
//         "A solar panel dashboard application where users can explore, purchase, and monitor electronic devices. Designed for both desktop and mobile, with a clean interface and intuitive features.",
//       demoUrl: "https://troo-solar-1mif.vercel.app/",
//       codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/TrooSolar",
//       technologies: [
//         "React.js",
//         "Next.js",
//         "Tailwind CSS",
//         "Node.js",
//         "MongoDB",
//         "Express",
//         "Chart.js",
//         "Figma",
//       ],
//       accentColor: "#F59E0B",
//       icon: "☀️",
//       type: "Frontend",
//     },
//     {
//       title: "My Blog App",
//       description:
//         "A blogging platform where users can create, post, and manage blogs with ease. Built with Next.js, offering a responsive design, dynamic routing, and smooth developer experience.",
//       demoUrl: "https://myblognextapp92.netlify.app/",
//       codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/Full-Stack-Blog-App",
//       technologies: [
//         "Next.js",
//         "React.js",
//         "Tailwind CSS",
//         "Node.js",
//         "MongoDB",
//         "Express",
//         "Markdown",
//         "Figma",
//       ],
//       accentColor: "#EF4444",
//       icon: "📝",
//       type: "Full-Stack",
//     },
//     {
//       title: "CodeCraft Portfolio",
//       description:
//         "A modern developer portfolio showcasing my skills, projects, and professional journey. Built with performance and aesthetics in mind, featuring smooth animations and responsive design.",
//       demoUrl: "https://waseemva.netlify.app/",
//       codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/client_portfolio",
//       technologies: [
//         "React.js",
//         "GSAP",
//         "Tailwind CSS",
//         "Node.js",
//         "MongoDB",
//         "Express",
//         "Figma",
//         "Vite",
//       ],
//       accentColor: "#8B5CF6",
//       icon: "🎨",
//       type: "Frontend",
//     },
//     {
//       title: "Code365",
//       description:
//         "An aesthetic learning platform for mastering Data Structures, Algorithms, and core programming languages using interactive 3D models and modern UI.",
//       demoUrl: "https://hire-mate-87dg.vercel.app/hireMate-academy-code365",
//       codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/mesh-dev",
//       technologies: [
//         "React",
//         "Node.js",
//         "MongoDB",
//         "Tailwind CSS",
//         "Express",
//         "GSAP",
//         "Vite",
//         "JavaScript",
//       ],
//       accentColor: "#10B981",
//       icon: "📚",
//       type: "Frontend",
//     },
//   ];
//   return (
//     <div
//       id="project"
//       className=" transition-colors duration-300 py-24 px-6 md:px-16"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="relative inline-block">
//               <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
//               <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//                 My Projects
//               </span>
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
//             Showcase of my technical prowess through{" "}
//             <span className="font-medium text-blue-500 dark:text-blue-400">innovative solutions</span>{" "}
//             and{" "}
//             <span className="font-medium text-purple-500 dark:text-purple-400">beautiful designs</span>
//           </p>
//         </div>

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="relative group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-400/20 dark:hover:shadow-blue-900/30"
//               style={{
//                 boxShadow: `0 10px 30px -10px ${project.accentColor}40`,
//               }}
//             >
//               <div
//                 className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition duration-500"
//                 style={{
//                   background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor}80 100%)`,
//                 }}
//               ></div>

//               <div className="relative h-full rounded-2xl p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
//                 {/* Icon + Title */}
//                 <div className="flex items-center mb-6">
//                   <div
//                     className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mr-4"
//                     style={{
//                       background: `${project.accentColor}20`,
//                       color: project.accentColor,
//                     }}
//                   >
//                     {project.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
//                       <a
//                         href={project.demoUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:underline"
//                         style={{
//                           textDecorationColor: project.accentColor,
//                         }}
//                       >
//                         {project.title} | {project.type}
//                       </a>
//                     </h3>
//                     <span className="px-2 py-1 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
//                       On Development Mode
//                     </span>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="mb-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {project.technologies.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600/50 hover:scale-105 transition-all"
//                       style={{
//                         ...(i === 0 && {
//                           background: `${project.accentColor}20`,
//                           color: project.accentColor,
//                           borderColor: `${project.accentColor}30`,
//                         }),
//                       }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4">
//                   <a
//                     href={project.demoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 text-center text-white shadow-lg hover:shadow-blue-400/30"
//                     style={{
//                       background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor}80 100%)`,
//                     }}
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.codeUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 text-center bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-600/50 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
//                   >
//                     View Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer GitHub CTA */}
//         <div className="text-center mt-20">
//           <p className="text-lg opacity-80 mb-6">Want to see more of my work?</p>
//           <a
//             href="https://github.com/CODEMASTER-ABDULLAH-92"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl"
//           >
//             <svg
//               className="w-5 h-5 mr-2"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Explore My GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;





"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiNetlify, SiVercel } from "react-icons/si";
import { TbStack2 } from "react-icons/tb";
import { MdRocketLaunch } from "react-icons/md";

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "Hire Mate",
    description:
      "A full-stack job portal where recruiters can post jobs and candidates can apply. Features role-based dashboards, smart filters, JWT auth, and a scalable MERN backend.",
    demoUrl: "https://hiremateapp92.netlify.app/",
    codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/HireMate",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "JWT Auth", "Tailwind CSS", "GSAP", "Vite"],
    accent: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    icon: "💼",
    type: "Full-Stack",
    deploy: "netlify",
  },
  {
    title: "TrooSolar",
    description:
      "A solar panel dashboard where users explore, purchase, and monitor devices. Designed for desktop & mobile with real-time charts and an intuitive interface.",
    demoUrl: "https://troo-solar-1mif.vercel.app/",
    codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/TrooSolar",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Chart.js"],
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    icon: "☀️",
    type: "Frontend",
    deploy: "vercel",
  },
  {
    title: "My Blog App",
    description:
      "A full-stack blogging platform where users create, post, and manage blogs. Built with Next.js, dynamic routing, Markdown support, and a clean reading experience.",
    demoUrl: "https://myblognextapp92.netlify.app/",
    codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/Full-Stack-Blog-App",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Markdown"],
    accent: "#EF4444",
    glow: "rgba(239,68,68,0.18)",
    icon: "📝",
    type: "Full-Stack",
    deploy: "netlify",
  },
  {
    title: "CodeCraft Portfolio",
    description:
      "A modern developer portfolio showcasing skills, projects, and journey. Built with performance in mind, featuring smooth GSAP animations and pixel-perfect responsiveness.",
    demoUrl: "https://waseemva.netlify.app/",
    codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/client_portfolio",
    technologies: ["React.js", "GSAP", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Vite"],
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.18)",
    icon: "🎨",
    type: "Frontend",
    deploy: "netlify",
  },
  {
    title: "Code365",
    description:
      "An aesthetic learning platform for mastering DSA and core programming languages using interactive 3D models, animated UI, and structured learning paths.",
    demoUrl: "https://hire-mate-87dg.vercel.app/hireMate-academy-code365",
    codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/mesh-dev",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express", "GSAP", "JavaScript"],
    accent: "#06B6D4",
    glow: "rgba(6,182,212,0.18)",
    icon: "📚",
    type: "Frontend",
    deploy: "vercel",
  },
];

const typeColors = {
  "Full-Stack": { color: "#4ade80", bg: "rgba(74,222,128,0.10)", border: "rgba(74,222,128,0.25)" },
  "Frontend":   { color: "#60a5fa", bg: "rgba(96,165,250,0.10)", border: "rgba(96,165,250,0.25)" },
  "Backend":    { color: "#f472b6", bg: "rgba(244,114,182,0.10)", border: "rgba(244,114,182,0.25)" },
};

// ─── Card ─────────────────────────────────────────────────────────────────────

const ProjectCard = ({ project, index }) => {
  const type = typeColors[project.type] || typeColors["Frontend"];
  const DeployIcon = project.deploy === "vercel" ? SiVercel : SiNetlify;
  const deployColor = project.deploy === "vercel" ? "#e2e8f0" : "#00C7B7";

  return (
    <motion.div
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/8 h-full"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 40px 0 ${project.glow}, 0 8px 40px rgba(0,0,0,0.4)`;
        e.currentTarget.style.borderColor = `${project.accent}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      {/* Inner glow bg */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.glow}, transparent 60%)` }}
      />

      {/* Card body */}
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Icon bubble */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border"
              style={{
                background: `${project.accent}15`,
                borderColor: `${project.accent}30`,
              }}
            >
              {project.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-base leading-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
              {/* Type badge */}
              <span
                className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ color: type.color, background: type.bg, border: `1px solid ${type.border}` }}
              >
                {project.type}
              </span>
            </div>
          </div>

          {/* Deploy badge */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium flex-shrink-0"
            style={{ color: deployColor }}
          >
            <DeployIcon className="text-xs" />
            <span className="capitalize">{project.deploy}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1 group-hover:text-white/65 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200"
              style={
                i === 0
                  ? { color: project.accent, background: `${project.accent}15`, border: `1px solid ${project.accent}30` }
                  : { color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }
              }
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${project.accent} 0%, ${project.accent}90 100%)`,
              boxShadow: `0 4px 16px ${project.glow}`,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <MdRocketLaunch className="text-base" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white/70 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaCode className="text-sm" />
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Full-Stack", "Frontend"];

  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <div
      id="project"
      className="relative bg-[#050810] py-28 px-6 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-5">
            <HiSparkles />
            Work
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            My{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 rounded-full" />
            </span>
          </h2>

          <p className="text-white/45 text-lg max-w-xl mx-auto mb-10">
            Showcase of{" "}
            <span className="text-white/75 font-medium">real-world solutions</span>{" "}
            built with clean code & thoughtful design
          </p>

          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                style={
                  filter === f
                    ? {
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        color: "#fff",
                        boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.45)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {f}
              </motion.button>
            ))}
            <span className="text-white/25 text-sm ml-2">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          className="flex flex-col items-center gap-4 mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/35 text-base">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/CODEMASTER-ABDULLAH-92"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/15 bg-white/6 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub className="text-lg" />
            Explore My GitHub
          </motion.a>
          <p className="text-white/20 text-sm">
            All repos public · actively maintained{" "}
            <span className="text-violet-500">✦</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;