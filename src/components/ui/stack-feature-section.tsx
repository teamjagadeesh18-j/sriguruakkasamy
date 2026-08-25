"use client";
import { TextEffect } from '@/components/core/text-effect';

import { Button } from "@/components/ui/button";
import {
  FaBook, FaFlask, FaGlobeAmericas, FaTrophy, FaLaptopCode,
  FaPaintBrush, FaMusic, FaFutbol, FaMicroscope, FaChalkboardTeacher,
  FaGraduationCap, FaCalculator
} from "react-icons/fa";

const iconConfigs = [
  { Icon: FaBook, color: "#0B2545" },
  { Icon: FaFlask, color: "#265C42" },
  { Icon: FaGlobeAmericas, color: "#1B6EC2" },
  { Icon: FaTrophy, color: "#C9A24B" },
  { Icon: FaLaptopCode, color: "#0B2545" },
  { Icon: FaPaintBrush, color: "#6B1E2B" },
  { Icon: FaMusic, color: "#8B5E3C" },
  { Icon: FaFutbol, color: "#265C42" },
  { Icon: FaMicroscope, color: "#0B2545" },
  { Icon: FaChalkboardTeacher, color: "#6B1E2B" },
  { Icon: FaGraduationCap, color: "#C9A24B" },
  { Icon: FaCalculator, color: "#1B6EC2" },
];

export default function FeatureSection({
  title = "Where Every Subject Comes Alive",
  description = "Rooted in Community, Committed to Every Child's Quiet, Steady Growth.",
  badge = "Bhadragiri, Avadi",
  ctaText = "Enquire Now"
}: {
  title?: string;
  description?: string;
  badge?: string;
  ctaText?: string;
}) {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-12 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between min-h-[32rem] border border-gray-800 bg-[#070C16] overflow-hidden rounded-3xl shadow-2xl">
      <div className="w-full md:w-1/2 z-10 py-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
          {badge}
        </span>
        <TextEffect as="h1" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#ffe228]xl sm:text-5xl font-bold mb-4 text-white leading-tight">
          {title}
        </TextEffect>
        <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
          {description}
        </TextEffect>
        <div className="flex items-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30">
            {ctaText}
          </a>
          <a href="#about" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 text-gray-300 font-medium text-sm transition-all">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-[26rem] flex items-center justify-center overflow-hidden">
        <div className="relative w-[40rem] h-[40rem] flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-900 border border-blue-500/30 shadow-2xl flex items-center justify-center z-10">
            <FaGraduationCap className="w-12 h-12 text-blue-400" />
          </div>
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${10 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;
            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-gray-700"
                style={{ width: size, height: size, animation: `spin ${12 + orbitIdx * 6}s linear infinite` }}
              >
                {iconConfigs.slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit).map((cfg, iconIdx) => {
                  const angle = iconIdx * angleStep;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);
                  return (
                    <div key={iconIdx} className="absolute bg-gray-900 border border-gray-800 rounded-full p-2 shadow-md" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}>
                      <cfg.Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: cfg.color }} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
