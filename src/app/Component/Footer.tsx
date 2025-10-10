"use client";
import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";

const Footer = () => {
  const [copied, setCopied] = useState({ email: false, phone: false });
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copyTextToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [type]: true }));

    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = setTimeout(() => {
      setCopied((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="text-lg" />,
      label: "Email me at",
      value: "infoabdullahdev92@gmail.com",
      type: "email" as const,
    },
    {
      icon: <FaPhone className="text-lg" />,
      label: "Call me at",
      value: "+92 323 3381938",
      type: "phone" as const,
    },
  ];

  return (
    <footer
      id="contact"
      className="transition-colors duration-300 py-24 px-6 border-t border-gray-700/30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="relative inline-block">
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Get in Touch
            </span>
          </span>
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-16">
          I’m open to collaborations and opportunities.{" "}
          <span className="font-medium text-blue-500 dark:text-blue-400">
            Let’s create something awesome together!
          </span>
        </p>

        {/* Contact Info Cards */}
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 mb-12">
          {contactItems.map(({ icon, label, value, type }) => (
            <div
              key={type}
              className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-700 hover:border-blue-500/50 hover:shadow-xl shadow-blue-400/10 dark:shadow-blue-900/20"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
                {icon}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm opacity-70 dark:text-gray-300">{label}</p>
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm sm:text-lg font-medium cursor-pointer hover:text-blue-500 transition-colors dark:hover:text-blue-400"
                    onClick={() => copyTextToClipboard(value, type)}
                  >
                    {value}
                  </span>
                  <div className="relative">
                    <div
                      className="cursor-pointer text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
                      onClick={() => copyTextToClipboard(value, type)}
                    >
                      {copied[type] ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaRegCopy />
                      )}
                    </div>
                    {copied[type] && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <p className="text-center mt-8 opacity-80 text-sm">
          Find me on
        </p>

        <div className="flex justify-center gap-6 text-2xl mt-4">
          <a
            href="https://github.com/CODEMASTER-ABDULLAH-92"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform hover:scale-110 dark:hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-abdullah-4881b2384/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform hover:scale-110 dark:hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-xs opacity-60 text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()} | Built with{" "}
          <span className="text-red-500">❤</span> by{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-200">
            Abdullah
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
