"use client";
import { TextEffect } from '@/components/core/text-effect';

import React from "react";

export interface AcademicCard {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  isHighlighted?: boolean;
}

export interface AcademicStructureProps {
  title: string;
  subtitle: string;
  description: string;
  cards: AcademicCard[];
  secondaryColor?: string;
}

export default function AcademicStructure({
  title,
  subtitle,
  description,
  cards,
}: AcademicStructureProps) {
  return (
    <section id="academics" className="py-20 md:py-24 px-4 sm:px-6 bg-[#f9fbf2] border-t border-[#d8dec9] font-body">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block px-3.5 py-1 rounded-[24px] bg-[#fef9c3] text-[#130e30] border border-[#d8dec9] text-xs font-semibold tracking-wider uppercase font-body">
            ACADEMIC STRUCTURE
          </span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-14">
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#130e30] tracking-tight leading-[1.3] font-heading mb-3">
            {title}
          </TextEffect>
          {subtitle && (
            <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-lg md:text-xl font-semibold text-[#130e30] font-body mb-3">
              {subtitle}
            </TextEffect>
          )}
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#5f5c6e] text-base md:text-lg leading-[1.56] font-body max-w-3xl mx-auto">
            {description}
          </TextEffect>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {cards.map((card, index) => {
            const isHighlightedCard = card.isHighlighted || index === 4;

            if (isHighlightedCard) {
              return (
                <div
                  key={index}
                  className="rounded-[24px] p-6 flex flex-col justify-between text-white shadow-xl bg-[#d97706] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase mb-3 block text-white/90">
                      {card.tag}
                    </span>
                    <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xl font-bold text-white font-heading mb-3 leading-snug">
                      {card.title}
                    </TextEffect>
                    <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-white/90 text-xs md:text-sm leading-relaxed mb-6 font-body">
                      {card.description}
                    </TextEffect>
                  </div>
                  <a
                    href="#connect"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold transition-all duration-200 font-body mt-auto px-4 py-2.5 rounded-[1440px] bg-white text-[#d97706] shadow-sm hover:bg-slate-50"
                  >
                    <span>{card.buttonText}</span>
                    <span className="text-sm transition-transform duration-200">
                      &gt;
                    </span>
                  </a>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-[#eff2e5] border border-[#d8dec9] rounded-[24px] p-6 flex flex-col justify-between text-[#130e30] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <span className="inline-block text-[11px] md:text-xs font-semibold tracking-wider uppercase mb-3 px-2.5 py-0.5 rounded-[24px] bg-[#fef9c3] text-[#130e30]">
                    {card.tag}
                  </span>
                  <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xl font-bold text-[#130e30] font-heading mb-3 leading-snug">
                    {card.title}
                  </TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#5f5c6e] text-xs md:text-sm leading-relaxed mb-6 font-body">
                    {card.description}
                  </TextEffect>
                </div>
                <a
                  href="#connect"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d97706] hover:opacity-80 transition-colors font-body mt-auto"
                >
                  <span>{card.buttonText}</span>
                  <span className="text-sm transition-transform duration-200">
                    &gt;
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}