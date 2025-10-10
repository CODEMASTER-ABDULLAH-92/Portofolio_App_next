import { FaLaptopCode, FaHotel, FaChartLine, FaUserGraduate, FaGlobe, FaProjectDiagram } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const services = [
  { 
    icon: <FaLaptopCode />, 
    title: "Full-Stack Applications", 
    desc: "End-to-end development with modern technologies for seamless user experiences.",
    color: "text-blue-400"
  },
  { 
    icon: <MdWeb />, 
    title: "Custom Web Pages", 
    desc: "Tailor-made web solutions designed to reflect your unique brand identity.",
    color: "text-purple-400"
  },
  { 
    icon: <FaGlobe />, 
    title: "Static & Dynamic Websites", 
    desc: "Blazing-fast, responsive websites that scale with your business needs.",
    color: "text-green-400"
  },
  { 
    icon: <FaHotel />, 
    title: "Hotel Management Systems", 
    desc: "Comprehensive solutions to streamline all aspects of hotel operations.",
    color: "text-red-400"
  },
  { 
    icon: <FaChartLine />, 
    title: "Dashboards & Analytics", 
    desc: "Interactive data visualization tools to drive informed decisions.",
    color: "text-yellow-400"
  },
  { 
    icon: <FaProjectDiagram />, 
    title: "Portfolio & Travel Websites", 
    desc: "Beautiful showcases for your work or personalized travel experiences.",
    color: "text-pink-400"
  },
];

export default function ServicesPage() {
  return (
    <section 
      id="services"
      className={`
        py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-purple-500">
            Our Services
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed 
            ${theme ? "text-gray-300" : "text-gray-600"}`}>
            We craft exceptional digital experiences tailored to your unique needs, 
            combining innovative technology with stunning design.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl p-8 transition-all duration-500 
                ${theme ? "bg-[--dark-card-bg] border-gray-700" : "bg-white border-gray-200"} 
                border hover:border-transparent shadow-lg hover:shadow-xl group`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 rounded-xl 
                ${index % 2 === 0 ? "from-blue-500 to-purple-600" : "from-amber-500 to-pink-500"}`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon with animated background */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center 
                  ${service.color} ${theme ? "bg-gray-800" : "bg-gray-100"} 
                  text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300 
                  ${theme ? "text-white" : "text-gray-800"}`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm md:text-base mb-6 group-hover:text-gray-200 transition-colors duration-300 
                  ${theme ? "text-gray-400" : "text-gray-600"}`}>
                  {service.desc}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-auto">
                  <span className={`text-sm font-medium ${service.color} flex items-center 
                    group-hover:translate-x-2 transition-transform duration-300`}>
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}