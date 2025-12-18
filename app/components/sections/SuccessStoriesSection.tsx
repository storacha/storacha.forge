/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef } from "react";

export default function SuccessStoriesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote:
        "Storacha Forge has enabled us to upload PiBs of data with ZERO FRICTION backed up on Filecoin. No approval chains. No corporate gatekeepers. Our data can't be censored or held hostage.",
      author: "Clara Tsao",
      role: "Founding Officer",
      company: "Filecoin Foundation",
    },
    {
      quote:
        "Storacha Forge lets us store auditable transactional data and network analytics with guaranteed data integrity. We get compliance-grade verifiability, no vendor lock-in, no surprise fees, just low-cost archival storage that stays accessible when regulators or auditors need it.",
      author: "Sylvan Z.",
      role: "Co-Founder",
      company: "Parasail",
    },
    {
      quote:
        "Storacha Forge lets us back up Solana's full network state with full integrity and instant accessibility. Node operators can retrieve any block by byte range, reducing storage costs dramatically, no slow restores, no cold storage limits, no compromise on verifiability.",
      author: "Miles S.",
      role: "Senior Engineer",
      company: "Triton",
    },
    {
      quote:
        "Storacha Forge backs up our historical blockchain state on verifiable storage at a fraction of cloud costs. During network upgrades, state data is accessible immediately not locked in cold storage. Cryptographic proofs give our backups the same integrity guarantees as the chains themselves.",
      author: "Josh D.",
      role: "Head of Infrastructure",
      company: "Chainsafe",
    },
  ];

  // Group testimonials into pages of 2
  const pages = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    pages.push(testimonials.slice(i, i + 2));
  }

  const totalPages = pages.length;

  // Auto-carousel effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  // Resume after 10 seconds of inactivity
  useEffect(() => {
    if (!isPaused) return;

    const resumeTimer = setTimeout(() => {
      setIsPaused(false);
    }, 10000);

    return () => clearTimeout(resumeTimer);
  }, [isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const toggleExpand = (index: number) => {
    setIsPaused(true);
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  // Show "Show More" only if quote is long enough
  const needsShowMore = (quote: string) => quote.length > 180;

  return (
    <section
      id="success-stories"
      className="bg-[#C5DFFD] py-10 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="container-custom">
        <div className="space-y-6 md:space-y-10 lg:space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Success Stories
            </h2>
            <p className="font-dm-sans text-base sm:text-lg md:text-xl lg:text-2xl text-[#0176CE]">
              Hear from leaders building on Storacha Forge
            </p>
          </div>

          {/* Carousel Container */}
          <div
            className="relative flex items-center gap-2 md:gap-4"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Left Arrow - smaller on mobile */}
            <div className="flex-shrink-0 w-6 sm:w-10 md:w-12">
              {!isFirstPage && (
                <button
                  onClick={handlePrev}
                  className={`bg-[#0176CE] text-white w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${
                    isHovering ? "sm:scale-125" : "scale-100"
                  }`}
                  aria-label="Previous testimonials"
                >
                  <svg
                    className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
              )}
            </div>

            {/* Cards Wrapper */}
            <div className="overflow-hidden flex-1 min-w-0" ref={carouselRef}>
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {pages.map((page, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="w-full flex-shrink-0 px-2 sm:px-4 md:px-6 lg:px-8"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 md:gap-6 lg:gap-8">
                      {page.map((testimonial, cardIndex) => {
                        const globalIndex = pageIndex * 2 + cardIndex;
                        const isExpanded = expandedCards.includes(globalIndex);
                        const showMore = needsShowMore(testimonial.quote);

                        return (
                          <div
                            key={globalIndex}
                            className="w-full sm:w-1/2 flex-shrink-0 bg-white rounded-2xl md:rounded-3xl p-5 sm:p-4 md:p-6 lg:p-8 shadow-sm flex flex-col"
                          >
                            {/* Avatar */}
                            <div className="w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-400 rounded-full flex items-center justify-center mb-4 sm:mb-4 md:mb-6">
                              <svg
                                className="w-6 h-6 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-200"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                              </svg>
                            </div>

                            {/* Quote */}
                            <div className="flex-1">
                              <p
                                className={`font-dm-sans text-sm sm:text-sm md:text-base lg:text-xl text-[#0176CE] italic leading-relaxed ${
                                  !isExpanded && showMore ? "line-clamp-3" : ""
                                }`}
                              >
                                "{testimonial.quote}"
                              </p>

                              {/* Show More / Show Less */}
                              {showMore && (
                                <button
                                  onClick={() => toggleExpand(globalIndex)}
                                  className="mt-2 sm:mt-2 font-dm-sans text-xs sm:text-xs md:text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 transition-colors"
                                >
                                  {isExpanded ? "Show Less" : "Show More"}
                                  <svg
                                    className={`w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 transition-transform ${
                                      isExpanded ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </button>
                              )}
                            </div>

                            {/* Author Info */}
                            <div className="flex flex-col gap-3 mt-4 sm:mt-4 md:mt-6 pt-4 sm:pt-4 border-t border-gray-100">
                              <div className="min-w-0">
                                <p className="font-dm-sans font-bold text-base sm:text-sm md:text-base lg:text-lg text-[#0176CE]">
                                  {testimonial.author}
                                </p>
                                <p className="font-dm-sans text-sm sm:text-xs md:text-sm lg:text-base text-[#0176CE]/70">
                                  {testimonial.role}
                                </p>
                              </div>
                              <button className="bg-[#E53935] hover:bg-[#C62828] text-white font-dm-sans font-medium text-sm sm:text-xs md:text-sm lg:text-base px-4 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full transition-colors whitespace-nowrap w-fit">
                                {testimonial.company}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow - smaller on mobile */}
            <div className="flex-shrink-0 w-6 sm:w-10 md:w-12">
              {!isLastPage && (
                <button
                  onClick={handleNext}
                  className={`bg-[#0176CE] text-white w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${
                    isHovering ? "sm:scale-125" : "scale-100"
                  }`}
                  aria-label="Next testimonials"
                >
                  <svg
                    className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  setCurrentPage(index);
                }}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "bg-[#0176CE] w-6 md:w-8"
                    : "bg-[#0176CE]/30 w-2 md:w-3 hover:bg-[#0176CE]/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
