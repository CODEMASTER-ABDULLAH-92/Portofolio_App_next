"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import c1 from "../assets/c1.jpeg"
import c2 from "../assets/c2.jpeg"
import c3 from "../assets/c3.jpeg"
import c4 from "../assets/c4.jpeg"
import b1 from "../assets/b1.png"
import Image from "next/image";
const Certificates = () => {
  const marqueeRef = useRef(null);
  const marqueeWrapperRef = useRef(null);

  const certificates = [
    { img: c1, title: "Agile Project Management by HP Life" },
    { img: c2, title: "UX Design by Google" },
    { img: c3, title: "Project Management by Google" },
    { img: c4, title: "Agile Essentials by Google" },
    { img: b1, title: "Agile Essentials Badge by Google" },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    const wrapper = marqueeWrapperRef.current;
    
    if (!marquee || !wrapper) return;
    
    const items = marquee.querySelectorAll(".marquee-item");
    const gap = 32;
    let totalWidth = 0;
    
    items.forEach(item => {
      totalWidth += item.offsetWidth + gap;
    });
    
    wrapper.style.width = `${totalWidth / 2}px`;
    
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.fromTo(
      marquee,
      { x: 0 },
      {
        x: `-=${totalWidth / 2}`,
        duration: 20,
        ease: "none",
      }
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      id="certificates"
      className="  transition-colors duration-300 py-16 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-75"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Certificates
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Recognitions &{" "}
            <span className="font-medium text-green-500 dark:text-green-400">achievements</span>
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="overflow-hidden" ref={marqueeWrapperRef}>
          <div
            ref={marqueeRef}
            className="flex gap-8 w-max"
          >
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className="marquee-item flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-green-400/20 dark:hover:shadow-green-900/30"
                style={{
                  boxShadow: "0 10px 25px -10px rgba(0,0,0,0.15)",
                }}
              >
                <Image 
                  src={cert.img}
                  alt={cert.title}
                  className="h-32 w-32 object-contain rounded-lg transition-all duration-500"
                />
                <p className="text-sm font-medium text-center">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;