"use client";

import Image from "next/image";
import Link from "next/link";
import { MEETING_URL } from "@/lib/constants";
import { usePlausible } from "next-plausible";

export default function CTASection() {
  const plausible = usePlausible();
  const steps = [
    { number: "1", text: "Submit the form" },
    { number: "2", text: "Connect with a solutions expert" },
    { number: "3", text: "Start backing up for 80% less" },
  ];

  return (
    <section className="bg-[#0176CE] relative overflow-hidden py-10 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6 md:gap-10 lg:gap-12">
          <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-white text-center leading-tight">
            Ready to Pay 80% Less for Backup?
          </h2>

          <div className="space-y-2 md:space-y-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="bg-[#E91315] border-2 border-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-epilogue font-medium text-white text-sm sm:text-base md:text-lg">
                    {step.number}
                  </span>
                </div>
                <p className="font-dm-sans font-medium text-sm sm:text-base md:text-lg lg:text-xl text-white">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={MEETING_URL}
            onClick={() =>
              plausible("CTA Click", { props: { location: "cta-section" } })
            }
            className="bg-[#E91315] text-white px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-full font-semibold text-base sm:text-lg md:text-xl lg:text-2xl flex items-center gap-2 md:gap-2.5 hover:bg-red-700 transition-colors w-fit"
          >
            <Image
              src="/forge/hero/cta-arrow-icon.svg"
              alt=""
              width={24}
              height={24}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <span>Talk to your expert</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
