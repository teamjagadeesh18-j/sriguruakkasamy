"use client";
import { TextEffect } from '@/components/core/text-effect';
import React from "react";

export default function CssImageStacking() {
  const row1 = [
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop", title: "Classroom Foundation", category: "Academics" },
    { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&auto=format&fit=crop", title: "Athletic Field Meets", category: "Sports" },
    { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop", title: "Cultural Celebrations", category: "Heritage" },
  ];
  const row2 = [
    { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&auto=format&fit=crop", title: "Science & Computer Labs", category: "Practicals" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop", title: "Campus Library Center", category: "Knowledge" },
    { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop", title: "Green Outdoor Grounds", category: "Campus" },
  ];

  return (
    <section className="w-full bg-[#f9fbf2] py-24 border-t border-[#d8dec9] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e5ebd8] text-[#130e30] border border-[#130e30]/20 font-body">
          HERITAGE PARALLAX REEL
        </span>
        <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl sm:text-5xl font-extrabold text-[#130e30] mt-4 font-heading leading-tight">
          Campus Life at Sri Guru Akkasamy Velammal
        </TextEffect>
        <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#5f5c6e] text-base sm:text-lg mt-3 font-body">
          A continuous visual stream of daily learning, culture, and athletic growth in Bhadragiri.
        </TextEffect>
      </div>

      <div className="space-y-8">
        {/* Row 1 */}
        <div className="w-full overflow-hidden mask-fade">
          <div className="flex gap-6 animate-scroll-horizontal w-max">
            {[...row1, ...row1, ...row1].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 sm:w-[380px] group">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 sm:h-72 object-cover rounded-3xl shadow-[0_15px_35px_rgba(19,14,48,0.1)] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="mt-3 px-2 text-center">
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest font-body">{img.category}</span>
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base font-bold text-[#130e30] font-heading">{img.title}</TextEffect>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full overflow-hidden mask-fade">
          <div className="flex gap-6 animate-scroll-horizontal-reverse w-max">
            {[...row2, ...row2, ...row2].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 sm:w-[380px] group">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 sm:h-72 object-cover rounded-3xl shadow-[0_15px_35px_rgba(19,14,48,0.1)] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="mt-3 px-2 text-center">
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest font-body">{img.category}</span>
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base font-bold text-[#130e30] font-heading">{img.title}</TextEffect>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
