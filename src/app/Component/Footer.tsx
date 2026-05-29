"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope, FaPhone, FaGithub, FaLinkedin,
  FaRegCopy, FaCheck, FaCode,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";
import { TbMapPin } from "react-icons/tb";
import { MdRocketLaunch } from "react-icons/md";

// ─── Data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "About",        href: "#hero"         },
  { label: "Skills",       href: "#skill"         },
  { label: "Projects",     href: "#project"       },
  { label: "Certificates", href: "#certificates"  },
  { label: "Testimonials", href: "#testimonials"  },
  { label: "Contact",      href: "#contact"       },
];

const builtWith = [
  { icon: <SiNextdotjs />,    label: "Next.js"      },
  { icon: <SiReact />,        label: "React"        },
  { icon: <SiTailwindcss />,  label: "Tailwind CSS" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/CODEMASTER-ABDULLAH-92",
    label: "GitHub",
    color: "#e2e8f0",
    glow: "rgba(226,232,240,0.12)",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/muhammad-abdullah-ab33683b2/",
    label: "LinkedIn",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.18)",
  },
];

// ─── Copy row ─────────────────────────────────────────────────────────────────

const CopyItem = ({
  icon, label, value, accent, glow,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  type: string;
  accent: string;
  glow: string;
}) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 cursor-pointer transition-all duration-300 hover:border-white/20"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
      }}
      whileHover={{ scale: 1.01 }}
      onClick={copy}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 24px 0 ${glow}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 border transition-transform duration-300 group-hover:scale-110"
        style={{ color: accent, background: `${glow}`, borderColor: `${accent}30` }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 text-left min-w-0">
        <p className="text-white/35 text-xs uppercase tracking-widest font-semibold">{label}</p>
        <p className="text-white/80 text-sm font-medium truncate group-hover:text-white transition-colors">
          {value}
        </p>
      </div>

      {/* Copy indicator */}
      <div className="relative flex-shrink-0">
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaCheck className="text-emerald-400 text-sm" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaRegCopy className="text-white/30 group-hover:text-white/60 text-sm transition-colors" />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {copied && (
            <motion.span
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-emerald-500 text-white px-2 py-1 rounded-lg font-semibold whitespace-nowrap"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
            >
              Copied!
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bg-[#050810] overflow-hidden border-t border-white/6"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-indigo-600/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[250px] bg-pink-600/5 rounded-full blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">

          {/* Col 1 — Brand */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <FaCode className="text-white text-sm" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                Abdullah<span className="text-indigo-400">.</span>dev
              </span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer specializing in MERN & Next.js. Building fast,
              scalable, and beautiful digital products.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-white/35 text-sm">
              <TbMapPin className="text-emerald-400" />
              Faisalabad, Pakistan
            </div>

            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 w-fit">
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <span className="text-emerald-400 text-xs font-semibold">
                Open to opportunities
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-base transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                  style={{ color: s.color }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 16px ${s.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — Nav links */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-white/25 text-xs uppercase tracking-widest font-bold">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  whileHover={{ x: 3 }}
                >
                  <span
                    className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 3 — Contact info */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/25 text-xs uppercase tracking-widest font-bold">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <CopyItem
                icon={<FaEnvelope />}
                label="Email"
                value="infoabdullahdev92@gmail.com"
                type="email"
                accent="#f472b6"
                glow="rgba(244,114,182,0.18)"
              />
              <CopyItem
                icon={<FaPhone />}
                label="Phone"
                value="+92 323 3381938"
                type="phone"
                accent="#34d399"
                glow="rgba(52,211,153,0.18)"
              />
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="mt-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white w-fit"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <MdRocketLaunch />
              Let`s Work Together
            </motion.a>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* ── Bottom bar ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white/50 font-semibold">Abdullah</span>. All rights reserved.
          </p>

          {/* Built with */}
          <div className="flex items-center gap-2">
            <span>Built with</span>
            {builtWith.map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/8 bg-white/5 text-white/40"
              >
                {t.icon}
                <span className="hidden sm:inline">{t.label}</span>
              </span>
            ))}
            <span className="flex items-center gap-1">
              & <span className="text-red-400 text-sm">❤</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <HiSparkles className="text-indigo-400" />
            <span>Faisalabad, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;