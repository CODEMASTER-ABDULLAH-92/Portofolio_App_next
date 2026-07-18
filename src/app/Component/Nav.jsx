// "use client";
// import React, { useRef, useState } from "react";
// import { asset } from "../assets/asset";
// import { Menu, X } from "lucide-react";

// const Nav = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   // Navigation items data
//   const navItems = [
//     { id: "skill", label: "Skills" },
//     { id: "project", label: "Projects" },
//     { id: "contact", label: "Contact" }
//   ];

//   const navRef = useRef();
  
//   return (
//     <header className="bg-[--light-hero-bg] shadow-md sticky top-0 z-50 py-4 backdrop-blur-md transition-colors duration-300">
//       <div className="container mx-auto max-w-8xl px-4">
//         <div className="bg-[--light-hero-bg] flex items-center justify-between rounded-xl border border-opacity-20 p-4 backdrop-blur-sm border-gray-700">
//           {/* Logo */}
//           <a
//             href="/"
//             className="text-2xl font-bold  hover:opacity-80 transition-opacity duration-400 to-blue-600 from-red-400 bg-gradient-to-r bg-clip-text text-transparent"
//           >
//             Abdullah-dev.
//           </a>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             <ul className="flex space-x-6">
//               {navItems.map((item) => (
//                 <li key={item.id}>
//                   <a
//                     href={`#${item.id}`}
//                     className="text-[--light-text] font-medium hover:text-opacity-80 transition-colors"
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             <div className="flex items-center space-x-4 ml-4">
//               <a
//                 href="/abdullahDev.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[--dark-hero-bg] text-[--dark-text] px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Download CV
//               </a>
//             </div>
//           </nav>

//           {/* Mobile menu button */}
// <button
//   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//   className={`md:hidden relative p-2 rounded-xl backdrop-blur-md border transition-all duration-300 ease-out
//     hover:scale-110 active:scale-90
//     ${mobileMenuOpen 
//       ? "bg-white/20 border-white/30 shadow-lg shadow-white/10" 
//       : "bg-white/10 border-white/20 hover:bg-white/20"}`}
//   aria-label="Toggle menu"
// >
//   {/* Glow pulse on toggle */}
//   <span
//     className={`absolute inset-0 rounded-xl bg-white/20 transition-all duration-500 ease-out
//       ${mobileMenuOpen ? "scale-100 opacity-0" : "scale-50 opacity-0"}`}
//     style={{
//       animation: mobileMenuOpen ? "ping-once 0.5s ease-out" : "none",
//     }}
//   />

//   {/* Icon container — cross-fade + rotate + scale */}
//   <div className="relative w-6 h-6">
//     <Menu
//       size={24}
//       className={`absolute inset-0 text-white transition-all duration-300 ease-out
//         ${mobileMenuOpen
//           ? "opacity-0 rotate-90 scale-50"
//           : "opacity-100 rotate-0 scale-100"}`}
//     />
//     <X
//       size={24}
//       className={`absolute inset-0 text-white transition-all duration-300 ease-out
//         ${mobileMenuOpen
//           ? "opacity-100 rotate-0 scale-100"
//           : "opacity-0 -rotate-90 scale-50"}`}
//     />
//   </div>
// </button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-4 rounded-xl p-6 bg-[--light-hero-bg] min-h-screen shadow-lg">
//             <ul className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <li key={item.id}>
//                   <a
//                     href={`#${item.id}`}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="block py-2 text-[--light-text] font-medium hover:opacity-80 transition-opacity"
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             <div className="flex items-center justify-between mt-6 pt-6 border-t border-opacity-20">
//               <a
//                 href="/abdullahDev.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[--dark-hero-bg] text-[--dark-text] px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Nav;


"use client";
import React, { useRef, useState } from "react";
import { Menu, X, Star, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Navigation items data
  const navItems = [
    { id: "skill", label: "Skills", icon: "⚡" },
    { id: "project", label: "Projects", icon: "🚀" },
    { id: "reviews", label: "Reviews", icon: "⭐", href: "/reviews" },
    { id: "contact", label: "Contact", icon: "📬" }
  ];

  const navRef = useRef(null);
  
  // Check if link is active
  const isActive = (href) => {
    if (href === "/reviews" && pathname === "/reviews") return true;
    return false;
  };

  return (
    <header className="bg-[#050810] shadow-md sticky top-0 z-50 py-4 backdrop-blur-md transition-colors duration-300 border-b border-white/5">
      <div className="container mx-auto max-w-8xl px-4">
        <div className="bg-[#0d1120]/80 flex items-center justify-between rounded-2xl border border-white/10 p-4 backdrop-blur-sm shadow-xl shadow-black/30">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold hover:opacity-80 transition-opacity duration-400 bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
          >
            Abdullah-dev.
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 items-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 font-medium transition-all duration-300 px-3 py-2 rounded-xl
                        ${isActive(item.href) 
                          ? 'text-white bg-white/10 border border-white/20' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      className="flex items-center gap-1.5 text-gray-400 font-medium hover:text-white transition-all duration-300 px-3 py-2 rounded-xl hover:bg-white/5"
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 ml-4">
              <a
                href="/abdullahDev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative p-2 rounded-xl backdrop-blur-md border transition-all duration-300 ease-out
              hover:scale-110 active:scale-90
              ${mobileMenuOpen 
                ? "bg-white/20 border-white/30 shadow-lg shadow-white/10" 
                : "bg-white/10 border-white/20 hover:bg-white/20"}`}
            aria-label="Toggle menu"
          >
            {/* Glow pulse on toggle */}
            <span
              className={`absolute inset-0 rounded-xl bg-white/20 transition-all duration-500 ease-out
                ${mobileMenuOpen ? "scale-100 opacity-0" : "scale-50 opacity-0"}`}
              style={{
                animation: mobileMenuOpen ? "ping-once 0.5s ease-out" : "none",
              }}
            />

            {/* Icon container — cross-fade + rotate + scale */}
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 text-white transition-all duration-300 ease-out
                  ${mobileMenuOpen
                    ? "opacity-0 rotate-90 scale-50"
                    : "opacity-100 rotate-0 scale-100"}`}
              />
              <X
                size={24}
                className={`absolute inset-0 text-white transition-all duration-300 ease-out
                  ${mobileMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-50"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-2xl p-6 bg-[#0d1120]/95 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50 min-h-[60vh]">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                        ${isActive(item.href)
                          ? 'bg-white/10 border border-white/20 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <span className="text-xl w-8 text-center">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                      {isActive(item.href) && (
                        <span className="ml-auto text-xs bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent font-semibold">
                          Active
                        </span>
                      )}
                    </Link>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                    >
                      <span className="text-xl w-8 text-center">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Reviews CTA in Mobile */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-xl p-4 border border-indigo-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-current" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Share Your Experience</h4>
                    <p className="text-gray-400 text-xs">Review about Abdullah</p>
                  </div>
                </div>
                <Link
                  href="/reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Write a Review
                </Link>
              </div>
            </div>

            {/* Download CV in Mobile */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <a
                href="/abdullahDev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                <span>📄</span>
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Add keyframe animation for ping effect */}
      <style jsx>{`
        @keyframes ping-once {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Nav;