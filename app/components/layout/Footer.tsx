"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlausible } from 'next-plausible'


export default function Footer() {
  const plausible = usePlausible()
  return (
    <footer className="bg-white border-t border-gray-200 pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6 lg:pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
          {/* Column 1 */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <Link
              href="#why"
              className="block text-[#0176CE] font-dm-sans text-sm sm:text-base md:text-[18px] font-semibold leading-6 hover:underline"
            >
              Why Storacha
            </Link>
            <Link
              href="#use-cases"
              className="block text-[#0176CE] font-dm-sans text-sm sm:text-base md:text-[18px] font-semibold leading-6 hover:underline"
            >
              Use Cases
            </Link>
            <Link
              href="#stories"
              className="block text-[#0176CE] font-dm-sans text-sm sm:text-base md:text-[18px] font-semibold leading-6 hover:underline"
            >
              Success Stories
            </Link>
          </div>

          {/* Column 2 */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <Link
              href="#pricing"
              className="block text-[#0176CE] font-dm-sans text-sm sm:text-base md:text-[18px] font-semibold leading-6 hover:underline"
            >
              Pricing
            </Link>
            <Link
              href="#comparison"
              className="block text-[#0176CE] font-dm-sans text-sm sm:text-base md:text-[18px] font-semibold leading-6 hover:underline"
            >
              Cost Comparison
            </Link>
          </div>

          {/* Column 3 - Empty for layout */}
          <div></div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6 pt-4 md:pt-6 lg:pt-8 border-t border-gray-200">
          <Image
            src="/forge/logos/storacha-logo-blue.svg"
            alt="Storacha"
            width={140}
            height={50}
            className="h-8 sm:h-10 md:h-[50px] w-auto"
          />

          <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
            <Link
              href="https://docs.storacha.network/terms/"
              onClick={() => plausible('External Link', { props: { destination: 'terms' } })}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0176CE] font-dm-sans text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold leading-6 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="https://docs.storacha.network/privacy-policy/"
              onClick={() => plausible('External Link', { props: { destination: 'privacy' } })}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0176CE] font-dm-sans text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold leading-6 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.linkedin.com/company/storacha"
              onClick={() => plausible('External Link', { props: { destination: 'linkedin' } })}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0176CE] font-dm-sans text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold leading-6 hover:underline"
            >
              Linkedin
            </Link>
          </div>

          <span className="hidden sm:inline text-[#0176CE] font-dm-sans text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold leading-6">
            @2025 Storacha
          </span>
        </div>
      </div>
    </footer>
  );
}
