"use client";
import React, { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaEdit } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        setSubmitMessage("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitMessage("❌ Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 6000);
    }
  };

  return (
    <div id="contact" className="transition-colors duration-300 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Get In Touch
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Have a project in mind or want to collaborate?{" "}
            <span className="font-medium text-blue-500 dark:text-blue-400">
              Drop me a message
            </span>{" "}
            and I'll get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl shadow-blue-400/10 dark:shadow-blue-900/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                <FaUser className="text-blue-500" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 bg-white dark:bg-gray-700/50 dark:text-white"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                <FaEnvelope className="text-purple-500" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 bg-white dark:bg-gray-700/50 dark:text-white"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                <FaEdit className="text-indigo-500" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all duration-300 bg-white dark:bg-gray-700/50 dark:text-white"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white shadow-lg shadow-blue-400/20 hover:shadow-blue-400/40 dark:shadow-blue-900/20 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:-translate-y-1"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-white" />
                  Send Message
                </>
              )}
            </button>

            {/* Submission Message */}
            {submitMessage && (
              <div className="mt-4 p-4 rounded-xl text-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
