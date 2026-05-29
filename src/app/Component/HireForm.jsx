// "use client";
// import React, { useState } from "react";
// import { FaPaperPlane, FaUser, FaEnvelope, FaEdit } from "react-icons/fa";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const res = await fetch("/api/auth/sendMessage", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setSubmitMessage("✅ Your message has been sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         throw new Error(data.error || "Failed to send message");
//       }
//     } catch (err) {
//       console.error("Error submitting form:", err);
//       setSubmitMessage("❌ Failed to send message. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setSubmitMessage(""), 6000);
//     }
//   };

//   return (
//     <div id="contact" className="transition-colors duration-300 py-24 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="relative inline-block">
//               <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
//               <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//                 Get In Touch
//               </span>
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
//             Have a project in mind or want to collaborate?{" "}
//             <span className="font-medium text-blue-500 dark:text-blue-400">
//               Drop me a message
//             </span>{" "}
//             and I'll get back to you soon.
//           </p>
//         </div>

//         {/* Contact Form */}
//         <div className="max-w-2xl mx-auto p-8 rounded-3xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl shadow-blue-400/10 dark:shadow-blue-900/20">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name Field */}
//             <div className="space-y-2">
//               <label
//                 htmlFor="name"
//                 className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300"
//               >
//                 <FaUser className="text-blue-500" />
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 bg-white dark:bg-gray-700/50 dark:text-white"
//                 placeholder="John Doe"
//               />
//             </div>

//             {/* Email Field */}
//             <div className="space-y-2">
//               <label
//                 htmlFor="email"
//                 className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300"
//               >
//                 <FaEnvelope className="text-purple-500" />
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 bg-white dark:bg-gray-700/50 dark:text-white"
//                 placeholder="john@example.com"
//               />
//             </div>

//             {/* Message Field */}
//             <div className="space-y-2">
//               <label
//                 htmlFor="message"
//                 className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300"
//               >
//                 <FaEdit className="text-indigo-500" />
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="6"
//                 className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all duration-300 bg-white dark:bg-gray-700/50 dark:text-white"
//                 placeholder="Tell me about your project..."
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white shadow-lg shadow-blue-400/20 hover:shadow-blue-400/40 dark:shadow-blue-900/20 ${
//                 isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:-translate-y-1"
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <svg
//                     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     ></path>
//                   </svg>
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <FaPaperPlane className="text-white" />
//                   Send Message
//                 </>
//               )}
//             </button>

//             {/* Submission Message */}
//             {submitMessage && (
//               <div className="mt-4 p-4 rounded-xl text-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
//                 {submitMessage}
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaGithub, FaLinkedin, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { MdMessage } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { TbMapPin } from "react-icons/tb";

const contactInfo = [
  {
    icon: <SiGmail />,
    label: "Email",
    value: "abdullahdev@gmail.com",
    href: "mailto:abdullahdev@gmail.com",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.18)",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "CODEMASTER-ABDULLAH-92",
    href: "https://github.com/CODEMASTER-ABDULLAH-92",
    color: "#e2e8f0",
    glow: "rgba(226,232,240,0.12)",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "muhammad-abdullah",
    href: "https://www.linkedin.com/in/muhammad-abdullah-4881b2384/",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.18)",
  },
  {
    icon: <TbMapPin />,
    label: "Location",
    value: "Faisalabad, Pakistan",
    href: null,
    color: "#34d399",
    glow: "rgba(52,211,153,0.18)",
  },
];

const inputBase =
  "w-full px-4 py-3.5 rounded-xl text-sm font-medium text-white placeholder-white/25 outline-none transition-all duration-300 resize-none";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error"
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/auth/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Failed");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const fieldStyle = (field) => ({
    background:
      focused === field
        ? "rgba(255,255,255,0.07)"
        : "rgba(255,255,255,0.04)",
    border: `1px solid ${focused === field ? "rgba(99,102,241,0.6)" : "rgba(255,255,255,0.08)"}`,
    boxShadow: focused === field ? "0 0 0 3px rgba(99,102,241,0.12)" : "none",
  });

  return (
    <div
      id="contact"
      className="relative bg-[#050810] py-28 px-6 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/6 rounded-full blur-[120px]" />
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-5">
            <HiSparkles />
            Contact
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Get In{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Touch
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 rounded-full" />
            </span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate?{" "}
            <span className="text-white/75 font-medium">Drop me a message</span>{" "}
            and I'll get back to you soon.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* LEFT — Contact Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-6 rounded-2xl border border-white/8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              <p className="text-white font-bold text-lg mb-1">
                Let's build something great
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                I'm always open to freelance projects, collaborations, or just a
                friendly chat about tech. Reach out through any channel below.
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 transition-all duration-300 hover:border-white/20 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 24px 0 ${info.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        color: info.color,
                        background: `${info.glow}`,
                        border: `1px solid ${info.color}30`,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">
                        {info.label}
                      </p>
                      <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors truncate max-w-[180px]">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/8"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        color: info.color,
                        background: `${info.glow}`,
                        border: `1px solid ${info.color}30`,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">
                        {info.label}
                      </p>
                      <p className="text-white/80 text-sm font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <p className="text-emerald-400 text-sm font-semibold">
                Open to freelance & collaborations 🚀
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="p-8 rounded-3xl border border-white/8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-widest">
                    <FaUser className="text-indigo-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="John Doe"
                    className={inputBase}
                    style={fieldStyle("name")}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-widest">
                    <FaEnvelope className="text-violet-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="john@example.com"
                    className={inputBase}
                    style={fieldStyle("email")}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-widest">
                    <MdMessage className="text-pink-400" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={6}
                    placeholder="Tell me about your project or idea..."
                    className={inputBase}
                    style={fieldStyle("message")}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-white overflow-hidden disabled:cursor-not-allowed"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
                    boxShadow: "0 8px 32px rgba(99,102,241,0.3)",
                  }}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
                    }}
                  />
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-white/90" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className={`flex items-center gap-3 p-4 rounded-xl border text-sm font-medium ${
                        submitStatus === "success"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-red-500/30 bg-red-500/10 text-red-400"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <FaCheckCircle className="text-lg flex-shrink-0" />
                      ) : (
                        <FaTimesCircle className="text-lg flex-shrink-0" />
                      )}
                      {submitStatus === "success"
                        ? "Message sent successfully! I'll get back to you soon."
                        : "Failed to send message. Please try again later."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center text-white/25 text-sm mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Typically responds within 24 hours{" "}
          <span className="text-pink-500">✦</span>
        </motion.p>
      </div>
    </div>
  );
};

export default ContactForm;