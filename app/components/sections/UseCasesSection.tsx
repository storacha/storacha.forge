/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function UseCasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrappingCard, setWrappingCard] = useState<{
    index: number;
    phase: "out-start" | "out-animate" | "in-start" | "in-animate";
    exitOffset: number;
  } | null>(null);
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

  const findWrappingCard = (prevIdx: number, newIdx: number) => {
    const totalCards = useCases.length;
    for (let i = 0; i < totalCards; i++) {
      let prevOffset = i - prevIdx;
      if (prevOffset > totalCards / 2) prevOffset -= totalCards;
      if (prevOffset < -totalCards / 2) prevOffset += totalCards;

      let newOffset = i - newIdx;
      if (newOffset > totalCards / 2) newOffset -= totalCards;
      if (newOffset < -totalCards / 2) newOffset += totalCards;

      if (
        (prevOffset === -1 && newOffset === 1) ||
        (prevOffset === 1 && newOffset === -1)
      ) {
        return { index: i, exitOffset: prevOffset };
      }
    }
    return null;
  };

  const TRANSITION_DURATION = 200;

  const runWrappingAnimation = (wrapping: {
    index: number;
    exitOffset: number;
  }) => {
    // Phase 1: out-start (set position, no transition)
    setWrappingCard({
      index: wrapping.index,
      phase: "out-start",
      exitOffset: wrapping.exitOffset,
    });

    // Phase 2: out-animate (slide out)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setWrappingCard({
          index: wrapping.index,
          phase: "out-animate",
          exitOffset: wrapping.exitOffset,
        });

        // Phase 3: in-start (jump to other side, no transition)
        setTimeout(() => {
          setWrappingCard({
            index: wrapping.index,
            phase: "in-start",
            exitOffset: wrapping.exitOffset,
          });

          // Phase 4: in-animate (slide in) - small delay to ensure jump is hidden
          setTimeout(() => {
            setWrappingCard({
              index: wrapping.index,
              phase: "in-animate",
              exitOffset: wrapping.exitOffset,
            });

            setTimeout(() => setWrappingCard(null), TRANSITION_DURATION);
          }, 50);
        }, TRANSITION_DURATION);
      });
    });
  };

  const changeSlide = useCallback(
    (newIndex: number) => {
      const wrapping = findWrappingCard(currentIndex, newIndex);
      if (wrapping !== null) {
        runWrappingAnimation(wrapping);
      }
      setCurrentIndex(newIndex);
    },
    [currentIndex, useCases.length]
  );

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIdx = (prev + 1) % useCases.length;
        const wrapping = findWrappingCard(prev, newIdx);
        if (wrapping !== null) {
          runWrappingAnimation(wrapping);
        }
        return newIdx;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, useCases.length]);

  useEffect(() => {
    if (isAutoPlaying) return;

    const resumeTimer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);

    return () => clearTimeout(resumeTimer);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    changeSlide((currentIndex - 1 + useCases.length) % useCases.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    changeSlide((currentIndex + 1) % useCases.length);
  };

  const getCardStyle = (cardIndex: number) => {
    const totalCards = useCases.length;
    let offset = cardIndex - currentIndex;

    if (offset > totalCards / 2) offset -= totalCards;
    if (offset < -totalCards / 2) offset += totalCards;

    const isCenter = offset === 0;
    const isVisible = Math.abs(offset) <= 1;

    const isThisCard = wrappingCard?.index === cardIndex;
    const isOutStart = isThisCard && wrappingCard?.phase === "out-start";
    const isOutAnimate = isThisCard && wrappingCard?.phase === "out-animate";
    const isInStart = isThisCard && wrappingCard?.phase === "in-start";
    const isInAnimate = isThisCard && wrappingCard?.phase === "in-animate";
    const isWrapping = isOutStart || isOutAnimate || isInStart || isInAnimate;

    return {
      offset,
      isCenter,
      isVisible,
      isOutStart,
      isOutAnimate,
      isInStart,
      isInAnimate,
      isWrapping,
    };
  };

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

          <div className="relative">
            <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] px-12 md:px-16 lg:px-20">
              {useCases.map((useCase, index) => {
                const {
                  offset,
                  isCenter,
                  isVisible,
                  isOutStart,
                  isOutAnimate,
                  isInStart,
                  isInAnimate,
                  isWrapping,
                } = getCardStyle(index);

                // Calculate translateX based on phase
                let translateX: number;
                if (isOutStart) {
                  translateX = wrappingCard!.exitOffset * 110; // Current position
                } else if (isOutAnimate) {
                  translateX = wrappingCard!.exitOffset * 180; // Slide out
                } else if (isInStart) {
                  translateX = offset * 180; // Jump to far side
                } else if (isInAnimate) {
                  translateX = offset * 110; // Slide in
                } else {
                  translateX = offset * 110;
                }

                const scale = isCenter && !isWrapping ? 1 : 0.75;
                const zIndex = isCenter ? 20 : 10 - Math.abs(offset);

                // Opacity: hide during jump (in-start), visible otherwise
                const opacity = isInStart
                  ? 0
                  : isWrapping
                  ? 0.4
                  : isCenter
                  ? 1
                  : isVisible
                  ? 0.4
                  : 0;

                // Transition: none for start phases, animate for others
                const transitionStyle =
                  isOutStart || isInStart
                    ? "none"
                    : isOutAnimate || isInAnimate
                    ? `transform ${TRANSITION_DURATION}ms ease-out`
                    : "all 700ms ease-out";

                return (
                  <div
                    key={index}
                    className={`absolute w-full max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-lg ${
                      !isVisible && !isWrapping ? "pointer-events-none" : ""
                    }`}
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      opacity,
                      zIndex,
                      transition: transitionStyle,
                    }}
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

            <button
              onClick={handlePrev}
              className="absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#0176CE] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#0089F0] transition-colors shadow-lg z-30"
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
              className="absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#0176CE] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#0089F0] transition-colors shadow-lg z-30"
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
          </div>
        </div>
      </div>
    </section>
  );
}
