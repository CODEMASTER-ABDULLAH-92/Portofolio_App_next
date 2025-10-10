import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah | Full-Stack & Front-End Developer",
  description:
    "I'm Muhammad Abdullah — a passionate Full-Stack Developer skilled in MERN stack, JavaScript, TypeScript, and C++. I love creating modern, responsive web apps and continuously improving my knowledge in Data Structures and Algorithms.",
  icons: {
    icon: "/abd2.jpeg", // ✅ Correct path (file must be inside the public folder)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="outfit bg-[#181818] text-gray-200 antialiased">
        {children}
      </body>
    </html>
  );
}
