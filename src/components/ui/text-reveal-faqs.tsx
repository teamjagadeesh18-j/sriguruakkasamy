"use client";

import { TextEffect } from '@/components/core/text-effect';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What is the educational philosophy at Sri Guru Akkasamy Velammal School?',
      answer: 'We blend traditional ethical values and disciplined study routines with modern STEM learning and activity-based pedagogy to cultivate confident young leaders.',
    },
    {
      id: 'item-2',
      question: 'Which grades are taught at Sri Guru Akkasamy Velammal School?',
      answer: 'We offer classes from Nursery and KG through Primary, Middle, and Secondary levels with comprehensive Tamil Nadu State Board curriculum.',
    },
    {
      id: 'item-3',
      question: 'What digital and science facilities are available?',
      answer: 'Students benefit from modern computer labs, hands-on science experiment kits, interactive smart boards, and digital learning portals.',
    },
    {
      id: 'item-4',
      question: 'How does the school ensure moral and ethical growth?',
      answer: 'Daily assemblies, value education classes, storytelling, and teacher mentorship programs instill respect, integrity, and social responsibility.',
    },
    {
      id: 'item-5',
      question: 'When do admissions open for the new academic session?',
      answer: 'Admissions are currently open for all classes. Parents can apply through our online portal or visit the school campus for personal consultation.',
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#ffffff] border-t border-[#d8dec9] font-body">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block px-3.5 py-1 rounded-[24px] bg-[#fef9c3] text-[#130e30] border border-[#d8dec9] text-xs font-semibold tracking-wide uppercase font-body mb-3">
              HELP & ADMISSIONS
            </span>
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#130e30] text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#5f5c6e] mt-4 text-balance text-base md:text-lg">
              Everything you need to know about Sri Guru Akkasamy Velammal School.
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#5f5c6e] mt-6 hidden md:block text-sm">
              Can’t find what you’re looking for? Reach out to our{' '}
              <Link
                href="#connect"
                className="text-[#d97706] font-semibold hover:underline"
              >
                admissions support team
              </Link>{' '}
              for guidance.
            </TextEffect>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#d8dec9]">
                  <AccordionTrigger className="cursor-pointer text-left text-base font-semibold text-[#130e30] hover:text-[#d97706] hover:no-underline font-heading">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f5c6e]">
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#5f5c6e] mt-6 md:hidden text-sm">
            Can't find what you're looking for? Contact our{' '}
            <Link
              href="#connect"
              className="text-[#d97706] font-semibold hover:underline">
              admissions team
            </Link>
          </TextEffect>
        </div>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <div className="w-full pt-1">
      <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm md:text-base text-[#5f5c6e] leading-relaxed break-words whitespace-normal font-body"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </TextEffect>
    </div>
  );
};
