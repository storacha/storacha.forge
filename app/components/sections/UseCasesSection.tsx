"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function UseCasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const useCases = [
    {
      category: "Financial, Healthcare, Legal",
      icon: "/forge/use-cases/compliance-archives.svg",
      title: "Compliance & Archives",
      description:
        "Retain data for years with cryptographic proof of integrity. Instant access for audits. After 18 months, drop to $1/TiB cold storage, compliant and cost-effective.",
    },
    {
      category: "DevOps, Infrastructure",
      icon: "/forge/use-cases/disaster-recovery.svg",
      title: "Multi-Cloud Disaster Recovery",
      description:
        "Store once, retrieve to any cloud in seconds. No proprietary APIs. No vendor can lock you in when you need to failover.",
    },
    {
      category: "Satellite, Drone, GIS",
      icon: "/forge/use-cases/geospatial.png",
      title: "Geospatial Data at Scale",
      description:
        "Cryptographic verification on every image, critical for legal evidence, compliance and verifiable AI training.",
      isImage: true,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, useCases.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % useCases.length);
  };

  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + useCases.length) % useCases.length;
    const next = (currentIndex + 1) % useCases.length;
    return [prev, currentIndex, next];
  };

  const visibleIndices = getVisibleCards();

  return (
    <section
      id="use-cases"
      className="bg-white py-10 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center space-y-6 md:space-y-10 lg:space-y-12">
          <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
            Use Cases
          </h2>

          {/* Carousel */}
          <div className="relative">
            <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6 px-4 md:px-8">
              {visibleIndices.map((index, position) => {
                const useCase = useCases[index];
                const isCenter = position === 1;

                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      isCenter
                        ? "scale-100 opacity-100 z-10 w-full max-w-md lg:max-w-lg"
                        : "scale-75 opacity-40 w-full max-w-xs lg:max-w-md hidden md:block"
                    }`}
                  >
                    <div className="border border-[#0176CE] rounded-[20px] overflow-hidden bg-white shadow-lg">
                      <div className="bg-[#0176CE] px-4 py-3 sm:px-6 sm:py-4 md:px-9 md:py-5">
                        <p className="font-dm-sans font-medium text-xs sm:text-sm md:text-base lg:text-[18px] text-white leading-tight">
                          {useCase.category}
                        </p>
                      </div>

                      <div className="p-4 sm:p-6 md:p-9 space-y-4 md:space-y-6 lg:space-y-10">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] bg-[#C5DFFD] rounded-full flex items-center justify-center mx-auto">
                          <Image
                            src={useCase.icon}
                            alt={useCase.title}
                            width={40}
                            height={40}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                          />
                        </div>

                        <h3 className="font-epilogue font-medium text-lg sm:text-xl md:text-2xl lg:text-[30px] leading-none text-[#0176CE] tracking-[-1.6px]">
                          {useCase.title}
                        </h3>

                        <p className="font-dm-sans text-sm sm:text-base md:text-lg lg:text-xl text-[#0176CE] leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0176CE] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#0089F0] transition-colors shadow-lg z-20"
              aria-label="Previous use case"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0176CE] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#0089F0] transition-colors shadow-lg z-20"
              aria-label="Next use case"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#0176CE] w-6 md:w-8"
                      : "bg-[#0176CE]/30"
                  }`}
                  aria-label={`Go to use case ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
