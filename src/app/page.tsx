"use client";
import { TextEffect } from '@/components/core/text-effect';

import SchoolMessageSection from "@/components/ui/school-message-section";

import { ScrollVelocityDemo } from "@/components/ui/scroll-velocity-demo";

import CssImageStacking from "@/components/ui/css-image-stacking";

import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import { Footer } from "@/components/ui/footer-section";
import React from "react";
import { AnnouncementBar, SpatialHeader, LogoStripCard, SpatialFeatureSection } from "@/components/ui/themed-spatial-hero";
import SocialCards from "@/components/ui/card-fan-carousel";
import AcademicStructure from "@/components/ui/academic-structure";
import TestimonialsSection from "@/components/ui/community-testimonial";
import ConnectSection from "@/components/ui/connect-section";
import { MaskTextReveal } from "@/components/ui/mask-text-reveal";
import FAQs from "@/components/ui/text-reveal-faqs";
import MovingGradientButton from "@/components/ui/moving-gradient-button";
import HowItWorksDeck from "@/components/ui/how-it-works-deck";

export default function Home() {
  const communityTestimonialsData = {
  "title": "Parent & Community Reviews",
  "subtitle": "Testimonials from families at Sri Guru Akkasamy Velammal School, Bhadragiri Avadi",
  "rows": [
    {
      "id": "row1",
      "speed": "45s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t1",
          "quote": "Sri Guru Akkasamy Velammal School grounds students in rich cultural values while delivering modern academic rigor.",
          "authorName": "V. Sundaram",
          "authorTitle": "Parent of Class 8 Student"
        },
        {
          "id": "t2",
          "quote": "The teachers show immense patience. My daughter developed great public speaking confidence through annual day events.",
          "authorName": "Mary Stella",
          "authorTitle": "Primary School Parent"
        },
        {
          "id": "t3",
          "quote": "Quiet, steady progress is what defines this school in Bhadragiri. My foundation here helped me succeed in engineering.",
          "authorName": "K. Vignesh",
          "authorTitle": "Alumnus (Batch 2021)"
        }
      ]
    },
    {
      "id": "row2",
      "speed": "35s",
      "direction": "right",
      "testimonials": [
        {
          "id": "t4",
          "quote": "Disciplined classroom environment combined with moral values. It is a pride to have our children studying here.",
          "authorName": "Syed Ahmed",
          "authorTitle": "Parent Association Member"
        },
        {
          "id": "t5",
          "quote": "Teachers give equal attention to every child. The State Board curriculum is covered thoroughly with regular tests.",
          "authorName": "P. Padmavathi",
          "authorTitle": "High School Parent"
        },
        {
          "id": "t6",
          "quote": "Clean, well-maintained classrooms and green campus surroundings in Avadi. Kids feel happy to attend school every day.",
          "authorName": "R. Krishnakumar",
          "authorTitle": "Parent of Class 4 Student"
        }
      ]
    },
    {
      "id": "row3",
      "speed": "50s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t7",
          "quote": "The school instills humility, respect, and academic ambition in equal measure. Truly a great place of learning.",
          "authorName": "Jennifer S.",
          "authorTitle": "Alumna"
        },
        {
          "id": "t8",
          "quote": "Open communication with coordinators and prompt responses to parent queries make managing education smooth.",
          "authorName": "S. Rajeswari",
          "authorTitle": "Parent Representative"
        },
        {
          "id": "t9",
          "quote": "Co-curricular activities like yoga, sports, and science exhibitions make learning holistic and fun.",
          "authorName": "G. Sankar",
          "authorTitle": "Parent of Class 6 Student"
        }
      ]
    }
  ]
};

  return (
    <main className="min-h-screen bg-[#f9fbf2] text-[#5f5c6e] antialiased selection:bg-[#ffe228] selection:text-white font-body">
      {/* Spatial Header */}
      <SpatialHeader />

      {/* Upper-Middle Hero Velocity Ribbon */}
      
      {/* School Specific Animated Hero Section with Campus Background Image */}
      <section className="relative bg-[#f9fbf2] pt-20 pb-16 px-6 text-center overflow-hidden">
        {/* Subtle School Campus Background Image in Website's Light Theme */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.14]">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80"
            alt="Sri Guru Akkasamy Velammal School Campus"
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f9fbf2]/50 to-[#f9fbf2]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4 mb-8 font-heading">
          <span className="inline-block px-4 py-1.5 rounded-[1440px] bg-[#e5ebd8] text-[#130e30] text-xs font-semibold uppercase tracking-wider font-body shadow-sm">
            📍 Bhadragiri, Chikmangalore, Avadi • Rating 4.7★
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181c31] leading-[1.18] font-heading">Nurturing Mind, Character & Ambition</h1>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-lg text-[#5f5c6e] max-w-2xl mx-auto font-body font-normal">
            Combining cultural roots with modern academic excellence to prepare young minds for a bright and purposeful future.
          </TextEffect>
          <div className="pt-4 flex justify-center gap-4 font-body">
            <MovingGradientButton
              label="Apply Now"
              link="#connect"
              colors={{ fill: "#ffe228", textColor: "#130e30", hoverFill: "#ebd115", hoverTextColor: "#130e30" }}
              stroke={{ color: "#eab308", headColor: "#130e30", count: 2, speed: 30, movement: "step" }}
            />
          </div>
        </div>
        <div className="relative z-10">
          <SocialCards cards={[
            { imgUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80", alt: "Classroom Learning" },
            { imgUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80", alt: "Cultural Celebrations" },
            { imgUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80", alt: "Sports & Athletics" },
            { imgUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80", alt: "Science Laboratory" },
            { imgUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80", alt: "Library & Research" },
          ]} />
        </div>
      </section>

      {/* Student Achievement Strip Card */}
                              
      <LogoStripCard />
      

      {/* Alternating Feature Block */}
      <SpatialFeatureSection />

      {/* Clean Frameless Middle Image Velocity Strip */}
      <ScrollVelocityDemo />

      {/* How it Works Deck Section */}
      <HowItWorksDeck
        title="How Admissions Work"
        subtitle="Peel back one step to reveal the next."
      />
      <InfiniteRibbon duration={35} className="bg-white text-[#130e30] border-y border-[#d8dec9] py-4 text-sm sm:text-base font-semibold tracking-wide font-body shadow-sm">
        <span className="text-[#d97706]">✦</span> Academic Excellence
        <span className="text-[#d97706]">✦</span> State Board Rigor
        <span className="text-[#d97706]">✦</span> Dedicated Faculty
        <span className="text-[#d97706]">✦</span> Holistic Student Development
        <span className="text-[#d97706]">✦</span> Safe & Caring Campus
        <span className="text-[#d97706]">✦</span> Admissions Open
      </InfiniteRibbon>
      

      {/* Academic Structure Section */}
      <AcademicStructure
        secondaryColor="#eab308"
        title="Academic Journey"
        subtitle="From Early Learning to Higher Secondary"
        description="A well-structured learning journey designed to support students at every stage of their academic and personal development."
        cards={[
          {
            tag: "LKG & UKG",
            title: "Kindergarten & Early Years",
            description: "A gentle, play-integrated foundational curriculum focusing on language, numbers, sensory development, and social confidence.",
            buttonText: "Explore Early Years",
          },
          {
            tag: "Classes 1 to 5",
            title: "Primary Foundation Stage",
            description: "Building fundamental skills in Mathematics, Science, Languages, and Environmental Studies through engaging, activity-based lessons.",
            buttonText: "View Curriculum",
          },
          {
            tag: "Classes 6 to 8",
            title: "Middle School Exploration",
            description: "Strengthening analytical thinking, practical lab work, digital literacy, and collaborative problem-solving across core subjects.",
            buttonText: "Middle School Details",
          },
          {
            tag: "Classes 9 & 10",
            title: "High School Board Preparation",
            description: "Comprehensive State Board exam preparation supported by expert faculty, mock tests, personalized feedback, and concept clarity.",
            buttonText: "Board Preparation",
          },
          {
            tag: "Classes 11 & 12",
            title: "Higher Secondary Streams",
            description: "Specialized Science, Computer Science, and Commerce streams preparing students for entrance exams, degree admissions, and future careers.",
            buttonText: "Explore Hr. Sec. Streams",
            isHighlighted: true,
          },
        ]}
      />

      {/* Testimonials Section */}
      {/* CSS Image Stacking Gallery Showcase */}
      <CssImageStacking />

      <section id="testimonials" className="py-16 bg-[#f9fbf2] border-t border-[#d8dec9]">
        <TestimonialsSection data={communityTestimonialsData} />
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQs />

      {/* Connect & Admission Inquiry Form */}
      <ConnectSection />

      {/* Light Clean Footer */}
      {/* Leadership Message to Parents & Students */}
      <SchoolMessageSection />

      <Footer />
      </main>
  );
}