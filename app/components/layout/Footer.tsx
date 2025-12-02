"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlausible } from "next-plausible";

export default function Footer() {
  const plausible = usePlausible();

  return (
    <footer className="bg-[#C5DFFD] border-t border-[#0176CE]/20 pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-10">
      <div className="container-custom">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {/* Column 1 */}
          <div>
            <Link
              href="#why"
              onClick={() =>
                plausible("Footer Navigation", {
                  props: { section: "why-storacha" },
                })
              }
              className="block text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline mb-4"
            >
              Why Storacha
            </Link>
          </div>

          {/* Column 2 */}
          <div>
            <Link
              href="#use-cases"
              onClick={() =>
                plausible("Footer Navigation", {
                  props: { section: "use-cases" },
                })
              }
              className="block text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline mb-4"
            >
              Use Cases
            </Link>
          </div>

          {/* Column 3 */}
          <div>
            <Link
              href="#stories"
              onClick={() =>
                plausible("Footer Navigation", {
                  props: { section: "success-stories" },
                })
              }
              className="block text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline mb-4"
            >
              Success Stories
            </Link>
          </div>

          {/* Column 4 */}
          <div>
            <Link
              href="#pricing"
              onClick={() =>
                plausible("Footer Navigation", {
                  props: { section: "pricing" },
                })
              }
              className="block text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline mb-4"
            >
              Pricing
            </Link>
          </div>

          {/* Column 5 */}
          <div>
            <Link
              href="#comparison"
              onClick={() =>
                plausible("Footer Navigation", {
                  props: { section: "cost-comparison" },
                })
              }
              className="block text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline mb-4"
            >
              Cost Comparison
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#0176CE]/20 mb-6 md:mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/forge/logos/storacha-logo-blue.svg"
              alt="Storacha"
              onClick={() =>
                plausible("Logo Click", { props: { location: "footer" } })
              }
              width={140}
              height={50}
              className="h-8 md:h-10 lg:h-12 w-auto cursor-pointer"
            />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              href="https://docs.storacha.network/privacy-policy/"
              onClick={() =>
                plausible("External Link", {
                  props: { destination: "privacy-policy", source: "footer" },
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.linkedin.com/company/storacha"
              onClick={() =>
                plausible("Social Click", {
                  props: { platform: "linkedin", source: "footer" },
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline"
            >
              Linkedin
            </Link>
          </div>

          {/* Copyright */}
          <span className="text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold">
            @2025 Storacha
          </span>
        </div>
      </div>
    </footer>
  );
}
