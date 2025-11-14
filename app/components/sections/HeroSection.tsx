"use client";

import { MEETING_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../layout/MobileMenu";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="bg-[#C5DFFD] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: "url(/forge/hero/earth-bg.png)",
          backgroundSize: "min(650px, 50vw)",
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <header className="container-custom relative z-10 py-3 md:py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/forge/logos/forge-header.svg"
              alt="Storacha"
              width={191}
              height={68}
              className="h-10 sm:h-12 md:h-[68px] w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center gap-2 border-2 border-[#0176CE] rounded-full p-2">
            <Link
              href="#why"
              className="bg-white text-[#0176CE] px-6 py-3 rounded-full font-medium text-l"
            >
              FEATURES
            </Link>
            <Link
              href="#pricing"
              className="bg-white text-[#0176CE] px-6 py-3 rounded-full font-medium text-l"
            >
              PRICING
            </Link>
            <Link
              href="#use-cases"
              className="bg-white text-[#0176CE] px-6 py-3 rounded-full font-medium text-l"
            >
              USE CASES
            </Link>
            <Link
              href={MEETING_URL}
              className="bg-[#0176CE] text-white px-6 py-3 rounded-full text-l hover:bg-[#0089F0] transition-colors"
            >
              GET STARTED
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
        className={`container-custom relative z-10 pt-6 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-32 ${
          isMobileMenuOpen ? "hidden lg:block" : ""
        }`}
      >
        <div className="flex flex-col gap-6 md:gap-10 max-w-4xl">
          <h1 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[56px] leading-[1.15] text-[#0176CE] tracking-[-1px]">
            Cut Cloud Backup Costs by{" "}
            <span className="text-[#E91315]">80%.</span>
            <br />
            Gain Full Control of Your Data.
          </h1>

          <p className="font-dm-sans text-sm sm:text-base md:text-lg lg:text-[20px] text-[#0176CE] leading-relaxed max-w-2xl">
            Decentralized backup & archival for enterprises, secure, verifiable,
            <br className="hidden md:block" />
            zero lock-in. Your data, governed by protocol, not corporations.
          </p>

          <Link
            href={MEETING_URL}
            className="bg-[#E91315] text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-full font-semibold text-sm sm:text-base md:text-xl flex items-center gap-2 md:gap-2.5 hover:bg-red-700 transition-colors w-fit"
          >
            <Image
              src="/forge/hero/cta-arrow-icon.svg"
              alt=""
              width={24}
              height={24}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <span>Book a call with an expert</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
