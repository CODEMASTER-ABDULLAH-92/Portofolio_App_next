// "use client";
// // FontAwesome
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaCube } from "react-icons/fa";

// // SimpleIcons
// import {
//   SiJavascript,
//   SiNextdotjs,
//   SiExpress,
//   SiMongodb,
//   SiTailwindcss,
//   SiCplusplus,
//   SiGit,
//   SiRedux,
//   SiTypescript,
//   SiEslint,
//   SiGreensock, // GSAP
// } from "react-icons/si";

// const ContextIcon = () => (
//   <FaReact className="text-pink-500 rotate-90" title="Context API" />
// );

// const Tech = () => {

//   const skills = [
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//     { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
//     { name: "React.js", icon: <FaReact className="text-blue-500" /> },
//     { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
//     { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
//     { name: "Context API", icon: <ContextIcon /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
//     { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-300" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
//     { name: "Git", icon: <SiGit className="text-orange-600" /> },
//     { name: "GSAP", icon: <SiGreensock className="text-green-700" /> },
//   ];

//   return (
//     <div
//       id="skill"
//       className={`
//       } transition-colors duration-300 py-24 px-6`}
//     >
//       <div className="max-w-5xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="relative inline-block">
//               <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
//               <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//                 Skills & Tools
//               </span>
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
//             The <span className="font-medium text-blue-500">technologies</span> and{" "}
//             <span className="font-medium text-purple-500">tools</span> I excel at
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className={`group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${

//                    "bg-gray-800/90 backdrop-blur-sm hover:shadow-blue-900/30"
//               }`}
//               style={{
//                 boxShadow: `0 10px 25px -10px rgba(0,0,0,0.15)`,
//               }}
//             >
//               <div className="text-5xl transform transition-transform duration-500 group-hover:scale-125">
//                 {skill.icon}
//               </div>
//               <p className="text-lg font-semibold">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tech;




"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiGit,
  SiRedux,
  SiTypescript,
  SiGreensock,
  SiVercel,
  SiFramer,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";
import { MdOutlineHub } from "react-icons/md";

const ContextIcon = () => (
  <FaReact className="text-pink-400 rotate-90" title="Context API" />
);

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#facc15",
    glow: "rgba(250,204,21,0.18)",
    category: "Language",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.18)",
    category: "Language",
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
    color: "#818cf8",
    glow: "rgba(129,140,248,0.18)",
    category: "Language",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.18)",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#e2e8f0",
    glow: "rgba(226,232,240,0.12)",
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.18)",
    category: "Frontend",
  },
  {
    name: "Context API",
    icon: <ContextIcon />,
    color: "#f472b6",
    glow: "rgba(244,114,182,0.18)",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#fb923c",
    glow: "rgba(251,146,60,0.18)",
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.18)",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#4ade80",
    glow: "rgba(74,222,128,0.18)",
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "#cbd5e1",
    glow: "rgba(203,213,225,0.12)",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#34d399",
    glow: "rgba(52,211,153,0.18)",
    category: "Backend",
  },
  {
    name: "Git",
    icon: <SiGit />,
    color: "#f97316",
    glow: "rgba(249,115,22,0.18)",
    category: "Tools",
  },
  {
    name: "GSAP",
    icon: <SiGreensock />,
    color: "#86efac",
    glow: "rgba(134,239,172,0.18)",
    category: "Tools",
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion />,
    color: "#e879f9",
    glow: "rgba(232,121,249,0.18)",
    category: "Tools",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    color: "#f1f5f9",
    glow: "rgba(241,245,249,0.10)",
    category: "Tools",
  },
];

const categories = ["Language", "Frontend", "Backend", "Tools"];

const categoryMeta = {
  Language: { accent: "#818cf8", label: "Languages" },
  Frontend: { accent: "#22d3ee", label: "Frontend" },
  Backend: { accent: "#4ade80", label: "Backend" },
  Tools: { accent: "#f97316", label: "Tools & Libraries" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Tech = () => {
  return (
    <div
      id="skill"
      className="relative bg-[#050810] py-28 px-6 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/6 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-5">
            <HiSparkles />
            Stack
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Skills &{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Tools
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 rounded-full" />
            </span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Technologies I work with daily to craft{" "}
            <span className="text-white/75 font-medium">fast, scalable</span>{" "}
            products
          </p>
        </motion.div>

        {/* Category Sections */}
        {categories.map((cat, ci) => {
          const meta = categoryMeta[cat];
          const catSkills = skills.filter((s) => s.category === cat);
          return (
            <motion.div
              key={cat}
              className="mb-14 last:mb-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
                  style={{
                    color: meta.accent,
                    borderColor: `${meta.accent}35`,
                    background: `${meta.accent}12`,
                  }}
                >
                  {meta.label}
                </span>
                <div
                  className="flex-1 h-px rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${meta.accent}40, transparent)`,
                  }}
                />
              </div>

              {/* Cards */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {catSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.04 }}
                    className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl cursor-pointer overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transition: "box-shadow 0.35s ease, border-color 0.35s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 28px 0 ${skill.glow}, 0 8px 32px rgba(0,0,0,0.3)`;
                      e.currentTarget.style.borderColor = `${skill.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    {/* Hover glow bg */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{
                        background: `radial-gradient(circle at 50% 30%, ${skill.glow}, transparent 65%)`,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="relative z-10 text-4xl transition-transform duration-400 group-hover:scale-115"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>

                    {/* Name */}
                    <p className="relative z-10 text-xs font-semibold text-white/60 group-hover:text-white/90 text-center leading-tight transition-colors duration-300">
                      {skill.name}
                    </p>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-10 rounded-full transition-all duration-500"
                      style={{ background: skill.color }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Bottom tagline */}
        <motion.p
          className="text-center text-white/25 text-sm mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Always exploring · Always shipping{" "}
          <span className="text-cyan-500">✦</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Tech;