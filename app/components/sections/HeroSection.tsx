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
          backgroundSize: "min(900px, 60vw)",
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Navbar - fixed height, reduced 2xl sizes */}
      <header className="relative z-10 py-3 md:py-4 lg:py-5 px-6 md:px-12 lg:px-[70px] 2xl:px-20 flex-shrink-0">
        <nav className="flex items-center justify-between max-w-[1920px] mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/forge/logos/storacha-logo-blue.svg"
              alt="Storacha"
              width={191}
              height={68}
              className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-[68px] w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2 border-2 border-[#0176CE] rounded-full p-1.5 xl:p-2">
            <Link
              href="#why"
              onClick={() =>
                plausible("Navigation Click", {
                  props: { section: "features" },
                })
              }
              className="bg-white text-[#0176CE] px-4 xl:px-6 py-2 xl:py-3 rounded-full font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap"
            >
              FEATURES
            </Link>
            <Link
              href="#pricing"
              onClick={() =>
                plausible("Navigation Click", { props: { section: "pricing" } })
              }
              className="bg-white text-[#0176CE] px-4 xl:px-6 py-2 xl:py-3 rounded-full font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap"
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
              className="bg-white text-[#0176CE] px-4 xl:px-6 py-2 xl:py-3 rounded-full font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap"
            >
              USE CASES
            </Link>
            <Link
              href={MEETING_URL}
              onClick={() =>
                plausible("CTA Click", { props: { location: "header-nav" } })
              }
              className="bg-[#0176CE] text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap"
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

      {/* Main Content */}
      <div
        className={`container-custom relative z-10 py-6 md:py-8 lg:py-10 flex-1 flex flex-col justify-start pt-6 md:pt-10 lg:justify-center lg:pt-0 ${
          isMobileMenuOpen ? "hidden lg:flex" : ""
        }`}
      >
        <div className="flex flex-col gap-[2vh] xs:gap-[3vh] md:gap-[3.5vh] lg:gap-[4vh] max-w-4xl">
          <h1 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[clamp(48px,4.5vw,72px)] leading-[1.15] text-[#0176CE] tracking-[-1px]">
            Cut Cloud Backup Costs by{" "}
            <span className="text-[#E91315]">80%.</span>
            <br />
            Gain Full Control of Your Data.
          </h1>

          <p className="font-dm-sans text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[clamp(18px,1.5vw,24px)] text-[#0176CE] leading-relaxed max-w-2xl">
            Decentralized backup & archival for enterprises, secure, verifiable,
            zero
            <br className="hidden md:block" />
            lock-in. Your data, governed by protocols, not corporations.
          </p>

          {/* Feature Checkmarks */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-2xl">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4"
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
                <span className="font-dm-sans text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[clamp(16px,1.2vw,22px)] text-[#0176CE] font-medium">
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
            className="bg-[#E91315] text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-full font-semibold text-sm sm:text-base md:text-xl flex items-center gap-2 md:gap-2.5 hover:bg-red-700 transition-colors w-fit"
          >
            <Image
              src="/forge/hero/cta-arrow-icon.svg"
              alt=""
              width={24}
              height={24}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5"
            />
            <span>Book a call with an expert</span>
          </Link>
        </div>
      </div>

      {/* Trusted By Section - fixed at bottom */}
      <div
        className={`relative z-10 pb-4 xs:pb-6 md:pb-8 lg:pb-10 w-full flex-shrink-0 ${
          isMobileMenuOpen ? "hidden lg:block" : ""
        }`}
      >
        <div className="flex items-center gap-6 md:gap-8 w-full px-6 md:px-12 lg:px-[70px]">
          {/* Left divider line */}
          <div className="flex-1 h-[1px] bg-[#0176CE]/30"></div>

          {/* Trusted by text */}
          <p className="font-dm-sans font-medium text-[#0176CE] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-center whitespace-nowrap">
            Trusted by
          </p>

          {/* Right divider line */}
          <div className="flex-1 h-[1px] bg-[#0176CE]/30"></div>
        </div>

        {/* Full width logo animation */}
        <div className="relative overflow-hidden w-full mt-4 md:mt-6">
          <div ref={scrollRef} className="flex animate-logo-loop">
            {allPartners.map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0 px-8 md:px-12 lg:px-16"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={150}
                  height={36}
                  className="h-6 md:h-8 lg:h-10 w-auto opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
