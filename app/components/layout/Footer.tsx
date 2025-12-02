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
        <div className="flex flex-wrap justify-between gap-8 md:gap-4 mb-12 md:mb-16 lg:mb-20">
          <Link
            href="#why"
            onClick={() =>
              plausible("Footer Navigation", {
                props: { section: "why-storacha" },
              })
            }
            className="text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline"
          >
            Why Storacha
          </Link>

          <Link
            href="#use-cases"
            onClick={() =>
              plausible("Footer Navigation", {
                props: { section: "use-cases" },
              })
            }
            className="text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline"
          >
            Use Cases
          </Link>

          <Link
            href="#stories"
            onClick={() =>
              plausible("Footer Navigation", {
                props: { section: "success-stories" },
              })
            }
            className="text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline"
          >
            Success Stories
          </Link>

          <Link
            href="#pricing"
            onClick={() =>
              plausible("Footer Navigation", {
                props: { section: "pricing" },
              })
            }
            className="text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline"
          >
            Pricing
          </Link>

          <Link
            href="#comparison"
            onClick={() =>
              plausible("Footer Navigation", {
                props: { section: "cost-comparison" },
              })
            }
            className="text-[#0176CE] font-dm-sans text-sm md:text-base lg:text-lg font-semibold hover:underline"
          >
            Cost Comparison
          </Link>
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
