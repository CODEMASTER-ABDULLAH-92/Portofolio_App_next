// "use client";
// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import c1 from "../assets/c1.jpeg"
// import c2 from "../assets/c2.jpeg"
// import c3 from "../assets/c3.jpeg"
// import c4 from "../assets/c4.jpeg"
// import b1 from "../assets/b1.png"
// import Image from "next/image";
// const Certificates = () => {
//   const marqueeRef = useRef(null);
//   const marqueeWrapperRef = useRef(null);

//   const certificates = [
//     { img: c1, title: "Agile Project Management by HP Life" },
//     { img: c2, title: "UX Design by Google" },
//     { img: c3, title: "Project Management by Google" },
//     { img: c4, title: "Agile Essentials by Google" },
//     { img: b1, title: "Agile Essentials Badge by Google" },
//   ];

//   useEffect(() => {
//     const marquee = marqueeRef.current;
//     const wrapper = marqueeWrapperRef.current;
    
//     if (!marquee || !wrapper) return;
    
//     const items = marquee.querySelectorAll(".marquee-item");
//     const gap = 32;
//     let totalWidth = 0;
    
//     items.forEach(item => {
//       totalWidth += item.offsetWidth + gap;
//     });
    
//     wrapper.style.width = `${totalWidth / 2}px`;
    
//     const tl = gsap.timeline({ repeat: -1 });
    
//     tl.fromTo(
//       marquee,
//       { x: 0 },
//       {
//         x: `-=${totalWidth / 2}`,
//         duration: 20,
//         ease: "none",
//       }
//     );
    
//     return () => {
//       tl.kill();
//     };
//   }, []);

//   return (
//     <div
//       id="certificates"
//       className="  transition-colors duration-300 py-16 px-6 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="relative inline-block">
//               <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-75"></span>
//               <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
//                 Certificates
//               </span>
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl opacity-90">
//             Recognitions &{" "}
//             <span className="font-medium text-green-500 dark:text-green-400">achievements</span>
//           </p>
//         </div>

//         {/* Marquee Wrapper */}
//         <div className="overflow-hidden" ref={marqueeWrapperRef}>
//           <div
//             ref={marqueeRef}
//             className="flex gap-8 w-max"
//           >
//             {[...certificates, ...certificates].map((cert, index) => (
//               <div
//                 key={index}
//                 className="marquee-item flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-green-400/20 dark:hover:shadow-green-900/30"
//                 style={{
//                   boxShadow: "0 10px 25px -10px rgba(0,0,0,0.15)",
//                 }}
//               >
//                 <Image 
//                   src={cert.img}
//                   alt={cert.title}
//                   className="h-32 w-32 object-contain rounded-lg transition-all duration-500"
//                 />
//                 <p className="text-sm font-medium text-center">{cert.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certificates;


"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { PiMedalFill } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";
import c4 from "../assets/c4.jpeg";
import b1 from "../assets/b1.png";
import Image from "next/image";

const Certificates = () => {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const tl1 = useRef(null);
  const tl2 = useRef(null);

  const certificates = [
    {
      img: c1,
      title: "Agile Project Management",
      issuer: "HP Life",
      color: "from-violet-500/20 to-indigo-500/20",
      accent: "#8b5cf6",
      icon: <PiMedalFill className="text-violet-400" />,
    },
    {
      img: c2,
      title: "UX Design",
      issuer: "Google",
      color: "from-sky-500/20 to-cyan-500/20",
      accent: "#38bdf8",
      icon: <TbCertificate className="text-sky-400" />,
    },
    {
      img: c3,
      title: "Project Management",
      issuer: "Google",
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "#34d399",
      icon: <PiMedalFill className="text-emerald-400" />,
    },
    {
      img: c4,
      title: "Agile Essentials",
      issuer: "Google",
      color: "from-amber-500/20 to-orange-500/20",
      accent: "#fbbf24",
      icon: <TbCertificate className="text-amber-400" />,
    },
    {
      img: b1,
      title: "Agile Essentials Badge",
      issuer: "Google",
      color: "from-pink-500/20 to-rose-500/20",
      accent: "#f472b6",
      icon: <PiMedalFill className="text-pink-400" />,
    },
  ];

  useEffect(() => {
    const marquee1 = marqueeRef1.current;
    const marquee2 = marqueeRef2.current;
    if (!marquee1 || !marquee2) return;

    const setup = (el, direction) => {
      const items = el.querySelectorAll(".marquee-item");
      const gap = 24;
      let totalWidth = 0;
      items.forEach((item) => {
        totalWidth += item.offsetWidth + gap;
      });
      const halfWidth = totalWidth / 2;
      const tl = gsap.timeline({ repeat: -1 });
      if (direction === "ltr") {
        gsap.set(el, { x: -halfWidth });
        tl.to(el, { x: 0, duration: 22, ease: "none" });
      } else {
        tl.to(el, { x: -halfWidth, duration: 22, ease: "none" });
      }
      return tl;
    };

    tl1.current = setup(marquee1, "rtl");
    tl2.current = setup(marquee2, "ltr");

    return () => {
      tl1.current?.kill();
      tl2.current?.kill();
    };
  }, []);

  const CertCard = ({ cert, index }) => (
    <div
      className="marquee-item group relative flex-shrink-0 w-[240px] rounded-2xl overflow-hidden cursor-pointer"
      style={{ margin: "0 12px" }}
    >
      {/* Card glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${cert.accent}30, transparent 70%)`,
          boxShadow: `0 0 0 1px ${cert.accent}40`,
        }}
      />

      <div
        className={`relative flex flex-col gap-4 p-5 rounded-2xl border border-white/8 bg-gradient-to-b from-white/6 to-white/3 backdrop-blur-sm group-hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2`}
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)`,
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)` }}
        />

        {/* Issuer chip */}
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: `${cert.accent}18`,
              color: cert.accent,
              border: `1px solid ${cert.accent}30`,
            }}
          >
            {cert.icon}
            {cert.issuer}
          </span>
          <span className="text-white/20 text-xs font-mono">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Image */}
        <div className="relative w-full h-36 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
          <Image
            src={cert.img}
            alt={cert.title}
            className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-105"
          />
          {/* shimmer on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
            }}
          />
        </div>

        {/* Title */}
        <div>
          <p className="text-white font-semibold text-sm leading-snug group-hover:text-white transition-colors">
            {cert.title}
          </p>
          <p className="text-white/40 text-xs mt-0.5">Certificate of Completion</p>
        </div>
      </div>
    </div>
  );

  const doubled = [...certificates, ...certificates];

  return (
    <div
      id="certificates"
      className="relative bg-[#050810] py-24 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-600/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-600/8 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-5">
            <HiSparkles />
            Credentials
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            My{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Certificates
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 rounded-full" />
            </span>
          </h2>

          <p className="text-white/50 text-lg max-w-md mx-auto">
            Recognitions & achievements earned through{" "}
            <span className="text-white/80 font-medium">dedicated learning</span>
          </p>

          {/* Count chips */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {[
              { label: "Certificates", value: "5", color: "#8b5cf6" },
              { label: "Issuers", value: "2", color: "#38bdf8" },
              { label: "Domains", value: "3", color: "#34d399" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center px-4 py-2 rounded-xl border border-white/10 bg-white/5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="text-xl font-black" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="text-white/40 text-xs">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee Row 1 — right to left */}
      <div className="relative mb-6 overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #050810, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #050810, transparent)" }} />

        <div ref={marqueeRef1} className="flex w-max py-3">
          {doubled.map((cert, i) => (
            <CertCard key={`row1-${i}`} cert={cert} index={i % certificates.length} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — left to right (reversed) */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #050810, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #050810, transparent)" }} />

        <div ref={marqueeRef2} className="flex w-max py-3">
          {[...doubled].reverse().map((cert, i) => (
            <CertCard key={`row2-${i}`} cert={cert} index={i % certificates.length} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="relative z-10 text-center mt-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-white/30 text-sm">
          Always learning · Always growing{" "}
          <span className="text-violet-400">✦</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Certificates;