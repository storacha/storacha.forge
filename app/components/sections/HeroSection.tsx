"use client";

import { MEETING_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="bg-[#C5DFFD] relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: "url(/forge/hero/earth-bg.png)",
          backgroundSize: "50%",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
        }}
      />

      <header className="container-custom relative z-10 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/forge/logos/forge-header.svg"
              alt="Storacha"
              width={191}
              height={68}
              className="h-[68px] w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center gap-2 border-2 border-[#0176CE] rounded-full p-2">
            <Link
              href="#why"
              className="bg-white text-[#0176CE] px-6 py-3 rounded-full font-medium text-xl"
            >
              PRODUCT
            </Link>
            <Link
              href="#pricing"
              className="bg-white text-[#0176CE] px-6 py-3 rounded-full font-medium text-xl"
            >
              PRICING
            </Link>
            <Link
              href={MEETING_URL}
              className="bg-[#0176CE] text-white px-6 py-3 rounded-full text-xl hover:bg-[#0089F0] transition-colors"
            >
              GET STARTED
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-[#0176CE]"></span>
              <span className="block w-8 h-0.5 bg-[#0176CE]"></span>
              <span className="block w-8 h-0.5 bg-[#0176CE]"></span>
            </div>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 space-y-4">
            <Link
              href="#why"
              className="block py-2 text-[#0176CE] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PRODUCT
            </Link>
            <Link
              href="#pricing"
              className="block py-2 text-[#0176CE] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PRICING
            </Link>
            <Link
              href={MEETING_URL}
              className="block py-2 text-[#0176CE] font-medium"
            >
              GET STARTED
            </Link>
          </div>
        )}
      </header>

      <div className="container-custom relative z-10 pt-20 pb-32">
        <div className="flex flex-col gap-10 max-w-4xl">
          <h1 className="font-epilogue font-medium text-4xl lg:text-[56px] leading-[1.15] text-[#0176CE] tracking-[-1px]">
            Cut Cloud Backup Costs by{" "}
            <span className="text-[#E91315]">80%.</span>
            <br />
            Keep Full Control of Your Data.
          </h1>

          <p className="font-dm-sans text-lg lg:text-[20px] text-[#0176CE] leading-relaxed max-w-2xl">
            Decentralized backup & archival for enterprises, secure, verifiable,<br />
            zero lock-in. Your data, governed by protocol, not corporations.
          </p>

          <Link 
            href={MEETING_URL}
            className="btn-primary w-fit"
          >
            <Image
              src="/forge/hero/cta-arrow-icon.svg"
              alt=""
              width={24}
              height={24}
            />
            <span>Book a call with an expert</span>
          </Link>
        </div>
      </div>
    </section>
  );
}