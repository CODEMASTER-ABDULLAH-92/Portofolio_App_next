"use client";
import { FaBullseye, FaRegComments, FaClock } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: FaBullseye,
      title: "Quality Focus",
      description:
        "Delivering high-quality results with attention to every detail. Ensuring pixel-perfect precision and robust functionality in every project.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: FaRegComments,
      title: "Reliable Communication",
      description:
        "Providing transparency at every step with progress updates, quick responses, and clear documentation throughout the development process.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: FaClock,
      title: "Timely Delivery",
      description:
        "Meeting deadlines without compromising quality. Agile workflows and efficient management ensure products are always delivered on schedule.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section
      id="about"
      className=" transition-colors duration-300 py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                About Me 
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            These values guide every project I undertake, ensuring{" "}
            <span className="font-medium text-blue-500">exceptional results</span>{" "}
            and <span className="font-medium text-purple-500">satisfied clients</span>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-blue-400/20"
              style={{
                boxShadow: `0 10px 30px -10px rgba(0,0,0,0.15)`,
              }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`${feature.iconBg} w-14 h-14 rounded-full flex items-center justify-center mr-4`}
                  >
                    <feature.icon className={`${feature.iconColor} text-2xl`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;