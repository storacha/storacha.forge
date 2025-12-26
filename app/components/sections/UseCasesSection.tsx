"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function UseCasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, useCases.length]);

  // Resume auto-rotation after 8 seconds of user inactivity
  useEffect(() => {
    if (isAutoPlaying) return;

    const resumeTimer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);

    return () => clearTimeout(resumeTimer);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % useCases.length);
  };

  // Touch event handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  // Calculate position offset for each card relative to current
  const getCardPosition = (cardIndex: number) => {
    const totalCards = useCases.length;
    let offset = cardIndex - currentIndex;

    // Handle wrapping for circular carousel
    if (offset > totalCards / 2) offset -= totalCards;
    if (offset < -totalCards / 2) offset += totalCards;

    return offset;
  };

  return (
    <section
      id="use-cases"
      className="bg-[#0176CE] py-10 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center space-y-6 md:space-y-10 lg:space-y-12">
          <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-white tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
            Use Cases
          </h2>

          {/* Carousel */}
          <div className="relative">
            {/* Cards Container */}
            <div
              className="relative flex items-center justify-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] px-12 md:px-16 lg:px-20 pb-16 md:pb-20"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {useCases.map((useCase, index) => {
                const position = getCardPosition(index);
                const isCenter = position === 0;
                const isVisible = Math.abs(position) <= 1;

                // Calculate transform values based on position
                // Center: 0, Left: -110%, Right: +110%
                const translateX = position * 110;
                const scale = isCenter ? 1 : 0.75;
                const opacity = isCenter ? 1 : 0.4;
                const zIndex = isCenter ? 20 : 10 - Math.abs(position);

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-700 ease-out w-full max-w-[180px] min-[360px]:max-w-[240px] sm:max-w-[320px] md:max-w-md lg:max-w-lg ${
                      !isVisible ? "pointer-events-none" : ""
                    }`}
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      opacity: isVisible ? opacity : 0,
                      zIndex,
                    }}
                  >
                    <div
                      className={`border-1 border-white rounded-[20px] overflow-hidden bg-white ${
                        isCenter
                          ? "shadow-[0_8px_30px_rgba(255,255,255,0.3)]"
                          : "shadow-lg"
                      }`}
                    >
                      <div className="bg-[#0176CE] px-4 py-3 sm:px-6 sm:py-4 md:px-9 md:py-5">
                        <p className="font-dm-sans font-medium text-xs sm:text-sm md:text-base lg:text-[18px] text-white leading-tight">
                          {useCase.category}
                        </p>
                      </div>

                      <div className="p-4 sm:p-6 md:p-9 space-y-4 md:space-y-6 lg:space-y-10">
                        <div className="w-6 h-6 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] bg-[#C5DFFD] rounded-full flex items-center justify-center mx-auto">
                          <Image
                            src={useCase.icon}
                            alt={useCase.title}
                            width={40}
                            height={40}
                            className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10"
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

            {/* Navigation Arrows - Bottom Center */}
            <div className="flex gap-4 justify-center mt-4 md:mt-6">
              <button
                onClick={handlePrev}
                className="text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:opacity-80 transition-opacity z-30"
                aria-label="Previous use case"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:opacity-80 transition-opacity z-30"
                aria-label="Next use case"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
