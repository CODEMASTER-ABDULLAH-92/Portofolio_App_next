// import Image from "next/image";

// const testimonials = [
//   {
//     id: 15,
//     name: "Khadija Siddiqui",
//     message:
//       "I use it daily and have never faced any issues. It's super stable, which is crucial for my workflow. Highly recommended!",
//     img: "https://i.pravatar.cc/150?img=15",
//   },
//   {
//     id: 16,
//     name: "Danish Mehmood",
//     message:
//       "The onboarding process was quick and easy. Within minutes I was all set and now it's a part of my day-to-day work life.",
//     img: "https://i.pravatar.cc/150?img=16",
//   },
//   {
//     id: 17,
//     name: "Noor Fatima",
//     message:
//       "This platform actually makes work enjoyable. It's clean, responsive, and I've become a fan of how user-friendly it is.",
//     img: "https://i.pravatar.cc/150?img=17",
//   },
//   {
//     id: 18,
//     name: "Ali Hassan",
//     message:
//       "The customer support is exceptional. They're always quick to respond and incredibly helpful with any issues.",
//     img: "https://i.pravatar.cc/150?img=18",
//   },
//   {
//     id: 19,
//     name: "Fatima Khan",
//     message:
//       "The features are exactly what my team needed to collaborate effectively. It has improved our productivity significantly.",
//     img: "https://i.pravatar.cc/150?img=19",
//   },
// ];
// const testimonials1 = [
//   {
//     id: 8,
//     name: "Bilal Sheikh",
//     message:
//       "I appreciate how much thought has gone into this platform. It looks great, performs well, and has improved how I work every single day.",
//     img: "https://i.pravatar.cc/150?img=8",
//   },
//   {
//     id: 9,
//     name: "Mariam Javed",
//     message:
//       "The features are exactly what I needed. Everything just works, and it feels like it was built specifically for me and my workflow.",
//     img: "https://i.pravatar.cc/150?img=9",
//   },
//   {
//     id: 10,
//     name: "Omar Farooq",
//     message:
//       "Super easy to use and very reliable. I’ve recommended it to several friends already and they all love it too. Excellent job by the developers!",
//     img: "https://i.pravatar.cc/150?img=10",
//   },
//   {
//     id: 11,
//     name: "Hira Malik",
//     message:
//       "The support team is amazing and the product keeps evolving with new features. I feel heard as a user, which is rare these days.",
//     img: "https://i.pravatar.cc/150?img=11",
//   },
//   {
//     id: 12,
//     name: "Zain Raza",
//     message:
//       "From design to performance, everything about this platform feels premium. It has definitely raised the bar for similar products in the market.",
//     img: "https://i.pravatar.cc/150?img=12",
//   },
//   {
//     id: 13,
//     name: "Laiba Khan",
//     message:
//       "This platform helped me manage my work without stress. I genuinely look forward to using it every day. It keeps me focused and productive.",
//     img: "https://i.pravatar.cc/150?img=13",
//   },
//   {
//     id: 14,
//     name: "Ahmed Rauf",
//     message:
//       "The entire experience is smooth and straightforward. No unnecessary complexity, just what you need in the best way possible.",
//     img: "https://i.pravatar.cc/150?img=14",
//   },
//   {
//     id: 20,
//     name: "Hassan Qureshi",
//     message:
//       "I wish I had found this earlier. It’s intuitive, fast, and makes my workflow far less stressful. Definitely worth trying out.",
//     img: "https://i.pravatar.cc/150?img=20",
//   },
// ];
// const test3 = [
//   {
//     id: 1,
//     name: "Abdullah",
//     message:
//       "Working with this platform has been a game changer for my business. The UI is clean, fast, and really easy to use. I can now focus on what really matters rather than wasting time on small tasks.",
//     img: "https://i.pravatar.cc/150?img=1",
//   },
//   {
//     id: 2,
//     name: "Ali Khan",
//     message:
//       "I never thought managing my work could be this simple. The team has done an amazing job creating something so powerful yet so simple to navigate and use daily.",
//     img: "https://i.pravatar.cc/150?img=2",
//   },
//   {
//     id: 3,
//     name: "Sara Ahmed",
//     message:
//       "Everything works so smoothly! I was able to onboard my team within minutes. The whole experience feels seamless and thoughtfully designed.",
//     img: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     id: 4,
//     name: "Hamza Tariq",
//     message:
//       "Honestly, I was surprised at how intuitive the whole platform felt. It saved me hours of repetitive work and improved our team's productivity.",
//     img: "https://i.pravatar.cc/150?img=4",
//   },
//   {
//     id: 5,
//     name: "Ayesha Noor",
//     message:
//       "I’ve tried many tools before, but this one stands out for its simplicity and power. It's reliable, beautiful, and helps me stay organized effortlessly.",
//     img: "https://i.pravatar.cc/150?img=5",
//   },
//   {
//     id: 6,
//     name: "Fatima Zahra",
//     message:
//       "This solution has helped me stay consistent and on track. The clean design and responsiveness make it an enjoyable part of my daily routine.",
//     img: "https://i.pravatar.cc/150?img=6",
//   },
//   {
//     id: 7,
//     name: "Usman Ali",
//     message:
//       "Finally, a tool that actually understands what users need! The experience is smooth, fast, and keeps improving with every update.",
//     img: "https://i.pravatar.cc/150?img=7",
//   },
// ]

// const Testimonials = () => {

//   return (
//      <section
//       className={`transition-colors duration-300 py-24 px-6 md:px-16`}
//     >

//     <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
//         <div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
//             What Our Users <span className="text-[#ea8b61]">Say</span>
//           </h2>
//           <p className="text-[#909090] mt-3 text-sm md:text-base max-w-xl">
//             Discover why thousands of professionals trust our platform daily
//           </p>
//         </div>

//         {/* Stylish Divider - Only show on larger screens */}
//         <hr className="hidden lg:block flex-1 max-w-xs mt-3 mb-4 ml-6 border-t border-[#ea8b61] opacity-70" />
        
//         {/* Decorative elements */}
//         <div className="hidden md:flex items-center gap-2">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <svg
//             key={star}
//             className="w-5 h-5 text-[#ea8b61]"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//           ))}
//           <span className="text-white text-sm ml-2">4.9/5</span>
//         </div>
//       </div>

//       {/* Testimonials Container */}
//       <div className="relative border border-[#2e2e2e] rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-[#121212] to-[#0a0a0a] shadow-2xl shadow-[#ea8b61]/10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[500px] gap-6">
//           {/* First Column */}
//           <div className="flex flex-col gap-6 animate-marquee py-4">
//             {[...testimonials, ...testimonials].map((item, index) => (
//               <div
//               key={`col1-${index}`}
//               className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-5 rounded-2xl w-full max-w-[300px] mx-auto transition-all duration-300 hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5"
//               >
//                 <div className="flex items-start mb-4">
//                   <div className="text-[#ea8b61] text-2xl mr-2">&ldquo;</div>
//                   <p className="text-white text-sm leading-relaxed">
//                     {item.message}
//                   </p>
//                 </div>
//                 <div className="mt-5 flex justify-start items-center gap-3">
//                   <div className="relative">
//                     <Image
//                       width={44}
//                       height={44}
//                       alt={item.name}
//                       className="h-11 w-11 grayscale rounded-full object-cover border border-[#2e2e2e]"
//                       src={item.img}
//                       />
//                     <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#ea8b61] border-2 border-[#161616]"></div>
//                   </div>
//                   <div>
//                     <span className="text-white font-medium block">{item.name}</span>
//                     <span className="text-[#909090] text-xs">Verified User</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Second Column - reversed animation */}
//           <div className="hidden md:flex flex-col gap-6 animate-marquee-reverse py-4">
//             {[...testimonials1, ...testimonials1].map((item, index) => (
//               <div
//               key={`col2-${index}`}
//               className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-5 rounded-2xl w-full max-w-[300px] mx-auto transition-all duration-300 hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5"
//               >
//                 <div className="flex items-start mb-4">
//                   <div className="text-[#ea8b61] text-2xl mr-2">&rdquo;</div>
//                   <p className="text-white text-sm leading-relaxed">
//                     {item.message}
//                   </p>
//                 </div>
//                 <div className="mt-5 flex justify-start items-center gap-3">
//                   <div className="relative">
//                     <Image
//                       width={44}
//                       height={44}
//                       alt={item.name}
//                       className="h-11 w-11 grayscale rounded-full object-cover border border-[#2e2e2e]"
//                       src={item.img}
//                       />
//                     <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#ea8b61] border-2 border-[#161616]"></div>
//                   </div>
//                   <div>
//                     <span className="text-white font-medium block">{item.name}</span>
//                     <span className="text-[#909090] text-xs">Verified User</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Third Column - hidden on smaller screens */}
//           <div className="hidden lg:flex flex-col gap-6 animate-marquee py-4">
//             {[...test3, ...test3].map((item, index) => (
//               <div
//               key={`col3-${index}`}
//               className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-5 rounded-2xl w-full max-w-[300px] mx-auto transition-all duration-300 hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5"
//               >
//                 <div className="flex items-start mb-4">
//                   <div className="text-[#ea8b61] text-2xl mr-2">&ldquo;</div>
//                   <p className="text-white text-sm leading-relaxed">
//                     {item.message}
//                   </p>
//                 </div>
//                 <div className="mt-5 flex justify-start items-center gap-3">
//                   <div className="relative">
//                     <Image
//                       width={44}
//                       height={44}
//                       alt={item.name}
//                       className="h-11 w-11 grayscale rounded-full object-cover border border-[#2e2e2e]"
//                       src={item.img}
//                       />
//                     <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#ea8b61] border-2 border-[#161616]"></div>
//                   </div>
//                   <div>
//                     <span className="text-white font-medium block">{item.name}</span>
//                     <span className="text-[#909090] text-xs">Verified User</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Gradient overlays for smoother transitions */}
//         <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
//           <div className="h-24 bg-gradient-to-b from-[#121212] to-transparent"></div>
//           <div className="h-24 bg-gradient-to-t from-[#121212] to-transparent"></div>
//         </div>

//         {/* Decorative corner elements */}
//         <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#ea8b61] rounded-tl-2xl opacity-30"></div>
//         <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#ea8b61] rounded-br-2xl opacity-30"></div>
// { 
//         <style>{`
//           @keyframes marquee {
//             0% {
//               transform: translateY(0);
//               }
//               100% {
//                 transform: translateY(-50%);
//                 }
//                 }
                
//                 @keyframes marquee-reverse {
//                   0% {
//                     transform: translateY(-50%);
//                     }
//                     100% {
//                       transform: translateY(0);
//                       }
//                       }
                      
//                       .animate-marquee {
//                         animation: marquee 25s linear infinite;
//                         }
                        
//                         .animate-marquee-reverse {
//                           animation: marquee-reverse 25s linear infinite;
//                           }
                          
//                           .animate-marquee:hover,
//                           .animate-marquee-reverse:hover {
//                             animation-play-state: paused;
//                             }
//                             `}</style> }
//       </div>

//       {/* Call to action */}
//       <div className="flex justify-center mt-10">
//         <button className="px-6 py-3 bg-gradient-to-r from-[#ea8b61] to-[#d87a52] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#ea8b61]/20 transition-all duration-300">
//           Read More Stories
//         </button>
//       </div>
//     </div>
//                             </section>
//   );
// };

// export default Testimonials;


"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";

// ─── Data ───────────────────────────────────────────────────────────────────

const col1 = [
  { id: 15, name: "Khadija Siddiqui", role: "Product Designer", message: "I use it daily and have never faced any issues. It's super stable, which is crucial for my workflow. Highly recommended!", img: "https://i.pravatar.cc/150?img=15" },
  { id: 16, name: "Danish Mehmood", role: "Startup Founder", message: "The onboarding process was quick and easy. Within minutes I was all set and now it's a part of my day-to-day work life.", img: "https://i.pravatar.cc/150?img=16" },
  { id: 17, name: "Noor Fatima", role: "Freelance Dev", message: "This platform actually makes work enjoyable. It's clean, responsive, and I've become a fan of how user-friendly it is.", img: "https://i.pravatar.cc/150?img=17" },
  { id: 18, name: "Ali Hassan", role: "Team Lead", message: "The customer support is exceptional. They're always quick to respond and incredibly helpful with any issues.", img: "https://i.pravatar.cc/150?img=18" },
  { id: 19, name: "Fatima Khan", role: "Project Manager", message: "The features are exactly what my team needed to collaborate effectively. It has improved our productivity significantly.", img: "https://i.pravatar.cc/150?img=19" },
];

const col2 = [
  { id: 8,  name: "Bilal Sheikh",  role: "Full-Stack Dev",    message: "I appreciate how much thought has gone into this platform. It looks great, performs well, and has improved how I work every single day.", img: "https://i.pravatar.cc/150?img=8"  },
  { id: 9,  name: "Mariam Javed",  role: "UX Researcher",     message: "The features are exactly what I needed. Everything just works, and it feels like it was built specifically for me and my workflow.", img: "https://i.pravatar.cc/150?img=9"  },
  { id: 10, name: "Omar Farooq",   role: "Software Engineer", message: "Super easy to use and very reliable. I've recommended it to several friends already and they all love it too. Excellent job!", img: "https://i.pravatar.cc/150?img=10" },
  { id: 11, name: "Hira Malik",    role: "Content Creator",   message: "The support team is amazing and the product keeps evolving with new features. I feel heard as a user, which is rare these days.", img: "https://i.pravatar.cc/150?img=11" },
  { id: 12, name: "Zain Raza",     role: "Tech Entrepreneur", message: "From design to performance, everything about this platform feels premium. It has raised the bar for similar products.", img: "https://i.pravatar.cc/150?img=12" },
  { id: 13, name: "Laiba Khan",    role: "Digital Marketer",  message: "This platform helped me manage my work without stress. I genuinely look forward to using it every day. It keeps me focused.", img: "https://i.pravatar.cc/150?img=13" },
];

const col3 = [
  { id: 1, name: "Abdullah",      role: "Business Owner",    message: "Working with this platform has been a game changer for my business. The UI is clean, fast, and really easy to use.", img: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Ali Khan",      role: "Operations Lead",   message: "I never thought managing my work could be this simple. The team has done an amazing job creating something so powerful.", img: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Sara Ahmed",    role: "Scrum Master",      message: "Everything works so smoothly! I was able to onboard my team within minutes. The whole experience feels seamless.", img: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Hamza Tariq",   role: "Backend Developer", message: "Honestly, I was surprised at how intuitive the whole platform felt. It saved me hours of repetitive work.", img: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Ayesha Noor",   role: "UI Designer",       message: "I've tried many tools before, but this one stands out for its simplicity and power. Reliable, beautiful, and efficient.", img: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Fatima Zahra",  role: "Product Manager",   message: "This solution has helped me stay consistent and on track. The clean design makes it an enjoyable part of my daily routine.", img: "https://i.pravatar.cc/150?img=6" },
];

// ─── Star Rating ─────────────────────────────────────────────────────────────

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// ─── Single Card ─────────────────────────────────────────────────────────────

const TestiCard = ({ item }) => (
  <div className="group relative flex flex-col gap-4 p-5 rounded-2xl border border-white/8 bg-gradient-to-br from-white/6 to-white/2 hover:border-white/18 hover:from-white/8 hover:to-white/4 transition-all duration-400 cursor-default"
    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.25)" }}
  >
    {/* Hover top accent */}
    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

    {/* Quote icon */}
    <RiDoubleQuotesL className="text-indigo-400/50 text-2xl flex-shrink-0" />

    {/* Stars */}
    <Stars />

    {/* Message */}
    <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">
      {item.message}
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-2 border-t border-white/6">
      <div className="relative flex-shrink-0">
        <Image
          width={40}
          height={40}
          src={item.img}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
        />
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#050810]" />
      </div>
      <div>
        <p className="text-white text-sm font-semibold leading-tight">{item.name}</p>
        <p className="text-white/35 text-xs">{item.role}</p>
      </div>
      <span className="ml-auto text-xs px-2 py-0.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 font-medium">
        Verified
      </span>
    </div>
  </div>
);

// ─── Scrolling Column ────────────────────────────────────────────────────────

const ScrollCol = ({ items, direction = "down", speed = 28 }) => {
  const doubled = [...items, ...items];
  const animClass = direction === "down" ? "animate-scroll-down" : "animate-scroll-up";
  return (
    <div className={`flex flex-col gap-5 ${animClass} hover:[animation-play-state:paused]`}
      style={{ "--speed": `${speed}s` } as React.CSSProperties}
    >
      {doubled.map((item, i) => (
        <TestiCard key={`${item.id}-${i}`} item={item} />
      ))}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-[#050810] py-28 px-6 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Heading ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-5">
            <HiSparkles />
            Testimonials
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            What Clients{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Say
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 rounded-full" />
            </span>
          </h2>

          <p className="text-white/45 text-lg max-w-xl mx-auto mb-8">
            Real feedback from real people who trusted my{" "}
            <span className="text-white/75 font-medium">work & craft</span>
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {[
              { value: "20+", label: "Happy Clients" },
              { value: "4.9", label: "Avg. Rating" },
              { value: "100%", label: "Satisfaction" },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center px-5 py-2.5 rounded-xl border border-white/10 bg-white/5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="text-2xl font-black text-white">{s.value}</span>
                <span className="text-white/40 text-xs mt-0.5">{s.label}</span>
              </motion.div>
            ))}
            <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-amber-500/20 bg-amber-500/8">
              <Stars />
              <span className="text-amber-400 text-sm font-bold ml-1">4.9 / 5</span>
            </div>
          </div>
        </motion.div>

        {/* ── Scrolling grid ── */}
        <motion.div
          className="relative rounded-3xl overflow-hidden border border-white/8 p-6"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            height: "540px",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pink-500/30 rounded-br-3xl pointer-events-none" />

          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full overflow-hidden">
            <ScrollCol items={col1} direction="down" speed={30} />
            <div className="hidden md:block">
              <ScrollCol items={col2} direction="up" speed={26} />
            </div>
            <div className="hidden lg:block">
              <ScrollCol items={col3} direction="down" speed={34} />
            </div>
          </div>

          {/* Top + bottom edge fades */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050810] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050810] to-transparent" />

          {/* Keyframe styles */}
          <style>{`
            @keyframes scrollDown {
              from { transform: translateY(0); }
              to   { transform: translateY(-50%); }
            }
            @keyframes scrollUp {
              from { transform: translateY(-50%); }
              to   { transform: translateY(0); }
            }
            .animate-scroll-down {
              animation: scrollDown var(--speed, 30s) linear infinite;
            }
            .animate-scroll-up {
              animation: scrollUp var(--speed, 30s) linear infinite;
            }
            .animate-scroll-down:hover,
            .animate-scroll-up:hover {
              animation-play-state: paused;
            }
          `}</style>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="flex flex-col items-center gap-4 mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ec4899 100%)",
              boxShadow: "0 8px 32px rgba(245,158,11,0.25)",
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <HiSparkles />
            Read More Stories
          </motion.button>
          <p className="text-white/25 text-sm">
            Trusted by developers & businesses alike{" "}
            <span className="text-amber-500">✦</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;