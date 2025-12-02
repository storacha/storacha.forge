"use client";

import { useState, useEffect } from "react";

export default function SuccessStoriesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote:
        "Storacha Forge has enabled us to upload PiBs of data with ZERO FRICTION backed up on Filecoin. No approval chains. No corporate gatekeepers. Our data can't be censored or held hostage.",
      author: "Clara Tsao",
      role: "Co-Founder/Founding Officer",
      company: "Filecoin Foundation",
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
        "Storacha Forge lets us store auditable transactional data and network analytics with guaranteed data integrity. We get compliance-grade verifiability, no vendor lock-in, no surprise fees, just low-cost archival storage that stays accessible when regulators or auditors need it.",
      author: "Sylvan Z.",
      role: "Co-Founder",
      company: "Parasail",
    },
    {
      quote:
        "Storacha Forge backs up our historical blockchain state on verifiable storage at a fraction of cloud costs. During network upgrades, state data is accessible immediately not locked in cold storage. Cryptographic proofs give our backups the same integrity guarantees as the chains themselves.",
      author: "Josh D.",
      role: "Head of Infrastructure",
      company: "Chainsafe",
    },
  ];

  const cardsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const getCurrentCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return testimonials.slice(startIndex, startIndex + cardsPerPage);
  };

  const handleDotClick = (pageIndex: number) => {
    setIsAutoPlaying(false);
    setCurrentPage(pageIndex);
  };

  return (
    <section id="stories" className="bg-[#C5DFFD] py-10 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="space-y-6 md:space-y-10 lg:space-y-12">
          <div className="text-center space-y-3 md:space-y-4 lg:space-y-6">
            <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Success Stories
            </h2>
            <p className="font-dm-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#0176CE] tracking-normal md:tracking-[-0.5px] lg:tracking-[-1.12px]">
              Hear from leaders building on Storacha Forge
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {getCurrentCards().map((testimonial, index) => (
                <div
                  key={currentPage * cardsPerPage + index}
                  className="bg-white rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border-2 border-[#0176CE]/10 shadow-[0_4px_20px_rgba(1,118,206,0.1)] p-5 md:p-6 lg:p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(1,118,206,0.15)]"
                >
                  <div className="flex flex-col h-full space-y-4 md:space-y-5 lg:space-y-6">
                    {/* Avatar */}
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>

                    {/* Quote */}
                    <p className="font-dm-sans italic text-sm sm:text-base md:text-lg text-[#0176CE] leading-relaxed flex-1">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    {/* Author Info */}
                    <div className="space-y-2">
                      <p className="font-epilogue font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#0176CE]">
                        {testimonial.author}
                      </p>
                      <p className="font-dm-sans text-xs sm:text-sm md:text-base text-[#0176CE]/80">
                        {testimonial.role}
                      </p>
                      <span className="inline-block bg-[#E91315] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full font-dm-sans font-semibold text-xs sm:text-sm md:text-base">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-[#0176CE] w-8 md:w-10 h-3 md:h-4"
                      : "bg-[#0176CE]/30 w-3 md:w-4 h-3 md:h-4 hover:bg-[#0176CE]/50"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
