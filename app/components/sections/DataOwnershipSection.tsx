"use client";

import Image from "next/image";
import Link from "next/link";
import { MEETING_URL } from "@/lib/constants";
import { usePlausible } from "next-plausible";

export default function DataOwnershipSection() {
  const plausible = usePlausible();

  return (
    <section
      id="data-ownership"
      className="bg-[#0176CE] relative overflow-hidden py-10 md:py-16 lg:py-20"
    >
      <div className="container-custom">
        {/* Heading - Full Width */}
        <div className="text-white mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] leading-[1.2] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
            You Own the Data.
            <br />
            You Control the Access.
          </h2>
        </div>

        {/* Content Grid - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <Image
              src="/forge/data-ownership/data-center.svg"
              alt="Globe"
              width={500}
              height={400}
              className="rounded-[20px] w-full h-auto"
            />
          </div>

          {/* Right Column - Text + CTA */}
          <div className="text-white space-y-4 md:space-y-6 lg:space-y-8">
            <div className="space-y-3 md:space-y-4 lg:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px]">
                Your data. Your keys. Your control.
              </p>

              <p>
                Storacha Forge encrypts and replicates every file across
                independent nodes with cryptographic proof of ownership.
              </p>

              <p>
                Share directly without APIs or centralized servers. Enterprise
                security, decentralized freedom, permanent control.
              </p>
            </div>

            <Link
              href={MEETING_URL}
              onClick={() => plausible('CTA Click', { props: { location: 'data-ownership' } })}
              className="bg-[#E91315] text-white px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-3.5 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2 md:gap-2.5 hover:bg-red-700 transition-colors w-fit"
            >
              <Image
                src="/forge/hero/cta-arrow-icon.svg"
                alt=""
                width={20}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5"
              />
              <span>Talk to your expert</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
