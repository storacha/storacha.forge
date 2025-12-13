"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlausible } from "next-plausible";

export default function Footer() {
  const plausible = usePlausible();

  return (
    <footer
      className="bg-[#C5DFFD] border-t border-[#0176CE]/20 
      py-4 px-3
      xs:py-5 xs:px-4
      sm:py-6 sm:px-6
      md:py-8 md:px-10
      lg:py-10 lg:px-14
      xl:py-[60px] xl:px-[70px]
      2xl:py-[60px] 2xl:px-[70px]"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Navigation Links - Always single row */}
        <div
          className="flex justify-between items-center
          mb-3
          xs:mb-4
          sm:mb-5
          md:mb-6
          lg:mb-8
          xl:mb-10
          2xl:mb-10"
        >
          <Link
            href="#why"
            onClick={() =>
              plausible("Footer Navigation", {
                props: { section: "why-storacha" },
              })
            }
            className="text-[#0176CE] font-dm-sans 
              text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl
              font-semibold hover:underline whitespace-nowrap"
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
            className="text-[#0176CE] font-dm-sans 
              text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl
              font-semibold hover:underline whitespace-nowrap"
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
            className="text-[#0176CE] font-dm-sans 
              text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl
              font-semibold hover:underline whitespace-nowrap"
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
            className="text-[#0176CE] font-dm-sans 
              text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl
              font-semibold hover:underline whitespace-nowrap"
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
            className="text-[#0176CE] font-dm-sans 
              text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl
              font-semibold hover:underline whitespace-nowrap"
          >
            Cost Comparison
          </Link>
        </div>

        {/* Divider */}
        <div
          className="h-px bg-[#0176CE]/20 
          mb-3
          xs:mb-4
          sm:mb-5
          md:mb-6
          lg:mb-8
          xl:mb-10
          2xl:mb-10"
        ></div>

        {/* Bottom Row - Always horizontal: Logo left, Links right */}
        <div className="flex flex-row items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/forge/logos/storacha-logo-blue.svg"
              alt="Storacha"
              onClick={() =>
                plausible("Logo Click", { props: { location: "footer" } })
              }
              width={140}
              height={50}
              className="h-4 xs:h-5 sm:h-6 md:h-8 lg:h-10 xl:h-11 2xl:h-12 w-auto cursor-pointer"
            />
          </Link>

          {/* Links - Right aligned, always horizontal */}
          <div
            className="flex items-center flex-shrink-0
            gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-14"
          >
            <Link
              href="https://docs.storacha.network/privacy-policy/"
              onClick={() =>
                plausible("External Link", {
                  props: { destination: "privacy-policy", source: "footer" },
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0176CE] font-dm-sans 
                text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl
                font-semibold hover:underline whitespace-nowrap"
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
              className="text-[#0176CE] font-dm-sans 
                text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl
                font-semibold hover:underline whitespace-nowrap"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
