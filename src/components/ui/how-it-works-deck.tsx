"use client";
import { TextEffect } from '@/components/core/text-effect';

import React, { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";

const Pin = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

export interface DeckStep {
  title: string;
  description: string;
  color?: string;
}

export interface HowItWorksDeckProps {
  steps?: DeckStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_STEPS: DeckStep[] = [
  { title: "Submit Online Application", description: "Fill in student information online or visit our admissions office.", color: "#f97316" },
  { title: "Campus Interaction & Tour", description: "Friendly meeting with school leadership and tour of campus facilities.", color: "#3b82f6" },
  { title: "Document Submission", description: "Provide birth certificate, transfer certificate (TC), and mark sheets.", color: "#a855f7" },
  { title: "Enrollment Confirmation", description: "Receive official seat allocation confirmation and welcome kit.", color: "#f97316" },
  { title: "Welcome & Academic Start", description: "Attend orientation, collect books & uniform, and start learning!", color: "#3b82f6" },
];

function DeckCard({ step, index, total }: { step: DeckStep; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const color = step.color || "#3b82f6";
  const fanAngle = (index % 2 === 0 ? -1 : 1) * (5 + index * 2);

  return (
    <div ref={ref} className="relative h-[150px] flex items-center justify-center">
      <m.div
        initial={{ rotateY: 0, rotate: 0, y: 0, opacity: 1 }}
        animate={isInView ? { rotateY: -110, rotate: fanAngle, y: 18, opacity: 0.35 } : {}}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left center" }}
        className="absolute w-[260px] md:w-[320px]"
      >
        <div className="rounded-[16px] p-4 bg-neutral-200 dark:bg-neutral-800 h-[110px]" />
      </m.div>

      <m.div
        initial={{ scale: 0.92, y: 14, opacity: 0 }}
        animate={isInView ? { scale: 1, y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
        className="relative w-[260px] md:w-[320px] z-10"
      >
        <div className="rounded-[16px] p-4 shadow-[0_16px_32px_-10px_rgba(0,0,0,0.15)] bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
          <div className="flex items-center justify-between mb-2">
            <Pin className="w-4 h-4" style={{ color }} />
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}1a`, color }}>
              Step 0{index + 1} / 0{total}
            </span>
          </div>
          <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1 leading-snug">{step.title}</TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed font-normal">{step.description}</TextEffect>
        </div>
      </m.div>
    </div>
  );
}

export default function HowItWorksDeck({
  steps,
  title = "How Admissions Work",
  subtitle = "Peel back one step to reveal the next.",
  className
}: HowItWorksDeckProps) {
  const data = steps && steps.length > 0 ? steps : DEFAULT_STEPS;
  return (
    <LazyMotion features={domAnimation}>
      <section className={`bg-white dark:bg-black py-12 px-6 ${className || ""}`}>
        <div className="max-w-xl mx-auto text-center mb-6">
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{title}</TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-neutral-600 dark:text-neutral-400 mt-1.5 text-sm">{subtitle}</TextEffect>
        </div>
        <div className="max-w-md mx-auto" style={{ perspective: "1200px" }}>
          {data.map((step, i) => (
            <DeckCard key={step.title} step={step} index={i} total={data.length} />
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}
