"use client";
import { MEETING_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "../layout/MobileMenu";
import { usePlausible } from "next-plausible";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const plausible = usePlausible();

  const partners = [
    { name: "Harvard", logo: "/forge/partners/harvard.png" },
    { name: "Filecoin", logo: "/forge/partners/filecoin.png" },
    { name: "Solana", logo: "/forge/partners/solana.png" },
    { name: "Infura", logo: "/forge/partners/infura.png" },
    { name: "Parasail", logo: "/forge/partners/parasail.png" },
  ];

  // Repeat 4 times for smooth infinite scroll
  const allPartners = [...partners, ...partners, ...partners, ...partners];

  const scrollRef = useRef<HTMLDivElement>(null);

  const setupScroll = (ref: React.RefObject<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const half = el.scrollWidth / 2;

    el.style.setProperty("--scroll-width", `-${half}px`);
    el.style.setProperty("--duration", `${half / 40}s`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setupScroll(scrollRef);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    { text: "Cryptographic Verification" },
    { text: "Zero Vendor Lock-in" },
    { text: "GDPR Compliant" },
    { text: "10-Second Recovery (RTO)" },
  ];

  return (
    <section className="bg-[#C5DFFD] relative overflow-hidden min-h-screen flex flex-col">
      <div
        className="absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: "url(/forge/hero/earth-bg.png)",
          backgroundSize: "min(1200px, 90vw)",
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <header className="relative z-10 py-3 md:py-6 px-6 md:px-12 lg:px-[70px] 2xl:px-20">
        <nav className="flex items-center justify-between max-w-[1920px] mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/forge/logos/storacha-logo-blue.svg"
              alt="Storacha"
              width={191}
              height={68}
              className="h-10 sm:h-12 md:h-[68px] 2xl:h-[96px] w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center gap-2 2xl:gap-6 border-2 2xl:border-[3px] border-[#0176CE] rounded-full p-2 2xl:p-4">
            <Link
              href="#why"
              onClick={() =>
                plausible("Navigation Click", {
                  props: { section: "features" },
                })
              }
              className="bg-white text-[#0176CE] px-6 py-3 2xl:px-16 2xl:py-6 rounded-full font-medium text-l 2xl:text-3xl whitespace-nowrap"
            >
              FEATURES
            </Link>
            <Link
              href="#pricing"
              onClick={() =>
                plausible("Navigation Click", { props: { section: "pricing" } })
              }
              className="bg-white text-[#0176CE] px-6 py-3 2xl:px-16 2xl:py-6 rounded-full font-medium text-l 2xl:text-3xl whitespace-nowrap"
            >
              PRICING
            </Link>
            <Link
              href="#use-cases"
              onClick={() =>
                plausible("Navigation Click", {
                  props: { section: "use-cases" },
                })
              }
              className="bg-white text-[#0176CE] px-6 py-3 2xl:px-16 2xl:py-6 rounded-full font-medium text-l 2xl:text-3xl whitespace-nowrap"
            >
              USE CASES
            </Link>
            <Link
              href={MEETING_URL}
              onClick={() =>
                plausible("CTA Click", { props: { location: "header-nav" } })
              }
              className="bg-[#0176CE] text-white px-6 py-3 2xl:px-16 2xl:py-6 rounded-full text-l 2xl:text-3xl hover:bg-[#0089F0] transition-colors whitespace-nowrap"
            >
              GET STARTED
            </Link>
          </div>

          <button
            onClick={() => {
              plausible("Mobile Menu Toggle", {
                props: { action: isMobileMenuOpen ? "close" : "open" },
              });
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="lg:hidden p-2 relative z-[60]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  d="M24 8L8 24M8 8L24 24"
                  stroke="#0176CE"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <div className="space-y-1.5 md:space-y-2">
                <span className="block w-6 md:w-8 h-0.5 bg-[#0176CE]"></span>
                <span className="block w-6 md:w-8 h-0.5 bg-[#0176CE]"></span>
                <span className="block w-6 md:w-8 h-0.5 bg-[#0176CE]"></span>
              </div>
            )}
          </button>
        </nav>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </header>

      <div
        className={`container-custom relative z-10 pt-6 pb-8 md:pt-12 md:pb-12 lg:pt-16 lg:pb-16 xl:pt-20 xl:pb-20 flex-1 flex flex-col justify-center ${
          isMobileMenuOpen ? "hidden lg:flex" : ""
        }`}
      >
        <div className="flex flex-col gap-6 md:gap-8 xl:gap-10 2xl:gap-12 max-w-4xl 2xl:max-w-6xl">
          <h1 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[120px] leading-[1.15] text-[#0176CE] tracking-[-1px]">
            Cut Cloud Backup Costs by{" "}
            <span className="text-[#E91315]">80%.</span>
            <br />
            Gain Full Control of Your Data.
          </h1>

          <p className="font-dm-sans text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[24px] 2xl:text-[36px] text-[#0176CE] leading-relaxed max-w-2xl 2xl:max-w-5xl">
            Decentralized backup & archival for enterprises, secure, verifiable,
            zero
            <br className="hidden md:block" />
            lock-in. Your data, governed by protocols, not corporations.
          </p>

          {/* Feature Checkmarks */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 xl:gap-6 2xl:gap-8 max-w-2xl 2xl:max-w-6xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 md:gap-3 xl:gap-4 2xl:gap-6"
              >
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 xl:w-8 xl:h-8 2xl:w-14 2xl:h-14 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4 2xl:w-7 2xl:h-7"
                  >
                    <path
                      d="M1 5.5L5 9.5L13 1.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-dm-sans text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[22px] 2xl:text-[32px] text-[#0176CE] font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <Link
            href={MEETING_URL}
            onClick={() =>
              plausible("CTA Click", { props: { location: "hero-main" } })
            }
            className="bg-[#E91315] text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 xl:px-9 xl:py-4 2xl:px-14 2xl:py-6 rounded-full font-semibold text-sm sm:text-base md:text-xl xl:text-2xl 2xl:text-4xl flex items-center gap-2 md:gap-2.5 xl:gap-3 2xl:gap-5 hover:bg-red-700 transition-colors w-fit"
          >
            <Image
              src="/forge/hero/cta-arrow-icon.svg"
              alt=""
              width={24}
              height={24}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-10 2xl:h-10"
            />
            <span>Book a call with an expert</span>
          </Link>
        </div>
      </div>

      {/* Trusted By Section - Integrated with divider lines */}
      <div className="relative z-10 pb-8 md:pb-12 lg:pb-16 w-full">
        <div className="flex items-center gap-6 md:gap-8 w-full px-6 md:px-12 lg:px-[70px]">
          {/* Left divider line */}
          <div className="flex-1 h-[1px] bg-[#0176CE]/30"></div>

          {/* Trusted by text */}
          <p className="font-dm-sans font-medium text-[#0176CE] text-base md:text-lg lg:text-xl 2xl:text-4xl text-center whitespace-nowrap">
            Trusted by
          </p>

          {/* Right divider line */}
          <div className="flex-1 h-[1px] bg-[#0176CE]/30"></div>
        </div>

        {/* Full width logo animation */}
        <div className="relative overflow-hidden w-full mt-6 md:mt-8 2xl:mt-12">
          <div ref={scrollRef} className="flex animate-logo-loop">
            {allPartners.map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0 px-8 md:px-12 lg:px-16 2xl:px-24"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={150}
                  height={36}
                  className="h-6 md:h-8 lg:h-10 2xl:h-20 w-auto opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
